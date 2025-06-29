const prisma = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { successResponse, errorResponse } = require('../utils/response');
const logger = require('../utils/logger');

// JWT için .env'den anahtarları al ve hata kontrolü yap
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

// Eğer JWT secret değerleri tanımlı değilse, uygulamayı başlatma
if (!JWT_SECRET || !JWT_REFRESH_SECRET) {
  logger.error('JWT_SECRET veya JWT_REFRESH_SECRET tanımlanmamış. Uygulama başlatılamıyor.');
  throw new Error('JWT_SECRET ve JWT_REFRESH_SECRET .env dosyasında tanımlanmalıdır.');
}

/**
 * Kullanıcı kaydı
 * @param {object} req - Express request nesnesi
 * @param {object} res - Express response nesnesi
 */
exports.register = async (req, res) => {
  try {
    const { eposta, sifre, ad, soyad, rol = 'AVUKAT' } = req.body;
    
    // E-posta adresinin kullanılıp kullanılmadığını kontrol et
    const existingUser = await prisma.kullanici.findUnique({
      where: { eposta },
    });
    
    if (existingUser) {
      return errorResponse(res, 'Bu e-posta adresi zaten kullanılıyor', 400);
    }
    
    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(sifre, 10);
    
    // Kullanıcıyı oluştur
    const kullanici = await prisma.kullanici.create({
      data: {
        eposta,
        sifre: hashedPassword,
        ad,
        soyad,
        rol,
        durum: 'AKTIF'
      }
    });
    
    // YONETICI ve AVUKAT rolleri dışındaki roller için otomatik olarak Personel kaydı oluştur
    if (rol !== 'YONETICI' && rol !== 'AVUKAT') {
      // Kullanıcı kaydı başarılı şekilde oluşturulduysa ve rol personel tipiyse
      try {
        // Not: Burada personel kaydı oluşturmuyoruz, bunun yerine davet aşamasına bırakıyoruz
        // Personel kaydı, davet kabul edildikten sonra oluşturulacak
        logger.info(`Personel rolünde kullanıcı kaydedildi: ${kullanici.eposta} (ID: ${kullanici.id})`);
      } catch (personelError) {
        logger.error('Personel kaydı sırasında hata oluştu', { error: personelError.message, stack: personelError.stack });
        // Personel kaydı başarısız olsa bile kullanıcı kaydı tamamlandı, hatayı loglayıp devam ediyoruz
      }
    }
    
    // Kullanıcı bilgilerini döndür (şifre hariç)
    const { sifre: _, ...kullaniciData } = kullanici;
    
    logger.info(`Yeni kullanıcı kaydı: ${kullanici.eposta} (ID: ${kullanici.id})`);
    
    // Başarılı yanıt
    return successResponse(res, kullaniciData, 'Kullanıcı başarıyla oluşturuldu');
    
  } catch (error) {
    logger.error('Kullanıcı kaydı sırasında hata oluştu', { error: error.message, stack: error.stack });
    return errorResponse(res, 'Bir hata oluştu', 500, error);
  }
};

/**
 * Kullanıcı girişi
 * @param {object} req - Express request nesnesi
 * @param {object} res - Express response nesnesi
 */
exports.login = async (req, res) => {
  try {
    const { eposta, sifre } = req.body;
    
    // E-posta adresine göre kullanıcıyı bul
    const kullanici = await prisma.kullanici.findUnique({
      where: { eposta },
    });
    
    // Kullanıcı bulunamazsa veya şifre yanlışsa hata dön
    if (!kullanici) {
      logger.warn(`Başarısız giriş denemesi: Kullanıcı bulunamadı (${eposta})`);
      return errorResponse(res, 'Geçersiz e-posta veya şifre', 401);
    }
    
    // Şifre kontrolü
    const isPasswordValid = await bcrypt.compare(sifre, kullanici.sifre);
    
    if (!isPasswordValid) {
      logger.warn(`Başarısız giriş denemesi: Yanlış şifre (${eposta})`);
      return errorResponse(res, 'Geçersiz e-posta veya şifre', 401);
    }
    
    // Kullanıcı aktif değilse giriş yapmasına izin verme
    if (kullanici.durum !== 'AKTIF') {
      logger.warn(`Başarısız giriş denemesi: Pasif hesap (${eposta})`);
      return errorResponse(res, 'Hesabınız aktif değil. Lütfen yönetici ile iletişime geçin.', 403);
    }
    
    // JWT token oluştur
    const token = jwt.sign(
      { id: kullanici.id, rol: kullanici.rol },
      JWT_SECRET,
      { expiresIn: '8h' }
    );
    
    // Refresh token oluştur
    const refreshToken = jwt.sign(
      { id: kullanici.id },
      JWT_REFRESH_SECRET,
      { expiresIn: '7d' }
    );
    
    // Kullanıcı bilgilerini döndür (şifre hariç)
    const { sifre: _, ...kullaniciData } = kullanici;
    
    logger.info(`Başarılı giriş: ${kullanici.eposta} (ID: ${kullanici.id})`);
    
    // Başarılı yanıt
    return successResponse(res, {
      kullanici: kullaniciData,
      token,
      refreshToken
    }, 'Giriş başarılı');
    
  } catch (error) {
    logger.error('Giriş sırasında hata oluştu', { error: error.message, stack: error.stack });
    return errorResponse(res, 'Bir hata oluştu: ' + error.message, 500, error);
  }
};

/**
 * Token yenileme
 * @param {object} req - Express request nesnesi
 * @param {object} res - Express response nesnesi
 */
exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    
    if (!refreshToken) {
      return errorResponse(res, 'Yenileme token\'ı gerekli', 400);
    }
    
    // Token doğrulama
    const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
    
    // Kullanıcıyı kontrol et
    const kullanici = await prisma.kullanici.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        eposta: true,
        rol: true,
        durum: true
      }
    });
    
    // Kullanıcı bulunamazsa veya aktif değilse hata dön
    if (!kullanici || kullanici.durum !== 'AKTIF') {
      logger.warn(`Geçersiz token yenileme denemesi: Kullanıcı bulunamadı veya pasif (ID: ${decoded.id})`);
      return errorResponse(res, 'Geçersiz token', 401);
    }
    
    // Yeni JWT token oluştur
    const newToken = jwt.sign(
      { id: kullanici.id, rol: kullanici.rol },
      JWT_SECRET,
      { expiresIn: '8h' }
    );
    
    logger.info(`Token yenileme başarılı: ${kullanici.eposta} (ID: ${kullanici.id})`);
    
    // Başarılı yanıt
    return successResponse(res, {
      token: newToken
    }, 'Token yenileme başarılı');
    
  } catch (error) {
    // Token geçersizse
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      logger.warn('Geçersiz veya süresi dolmuş token ile yenileme denemesi');
      return errorResponse(res, 'Geçersiz veya süresi dolmuş token', 401);
    }
    
    logger.error('Token yenileme sırasında hata oluştu', { error: error.message, stack: error.stack });
    return errorResponse(res, 'Bir hata oluştu', 500, error);
  }
}; 