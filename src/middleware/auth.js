const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

// JWT_SECRET kontrol et
if (!JWT_SECRET) {
  logger.error('JWT_SECRET tanımlanmamış. Middleware başlatılamıyor.');
  throw new Error('JWT_SECRET .env dosyasında tanımlanmalıdır.');
}

/**
 * JWT kimlik doğrulama middleware'i
 */
exports.authMiddleware = async (req, res, next) => {
  try {
    // Token'ı al
    const token = req.headers.authorization?.split(' ')[1] || req.cookies?.token;
    
    if (!token) {
      return res.status(401).json({ message: 'Kimlik doğrulama başarısız. Token bulunamadı.' });
    }
    
    // Token'ı doğrula
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Kullanıcıyı bul
    const kullanici = await prisma.kullanici.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        ad: true,
        soyad: true,
        eposta: true,
        rol: true
      }
    });
    
    if (!kullanici) {
      return res.status(401).json({ message: 'Kimlik doğrulama başarısız. Kullanıcı bulunamadı.' });
    }
    
    // Kullanıcıyı request nesnesine ekle
    req.user = kullanici;
    
    next();
  } catch (error) {
    logger.error(`Kimlik doğrulama hatası: ${error.message}`);
    
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Kimlik doğrulama başarısız. Geçersiz veya süresi dolmuş token.' });
    }
    
    res.status(500).json({ message: 'Sunucu hatası' });
  }
};

/**
 * Rol tabanlı yetkilendirme middleware'i
 * @param {String|Array} roles - İzin verilen roller
 */
exports.authorize = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Kimlik doğrulama gerekli' });
    }
    
    const izinVerilenRoller = Array.isArray(roles) ? roles : [roles];
    
    if (izinVerilenRoller.includes(req.user.rol)) {
      next();
    } else {
      logger.warn(`Yetkisiz erişim: Kullanıcı ${req.user.id} (${req.user.rol}) rol kısıtlı kaynağa erişmeye çalıştı.`);
      res.status(403).json({ message: 'Bu işlem için yetkiniz bulunmuyor.' });
    }
  };
};

/**
 * Token oluştur
 * @param {Object} kullanici - Kullanıcı verisi
 * @param {String} expiresIn - Token geçerlilik süresi
 * @returns {String} JWT token
 */
exports.generateToken = (kullanici, expiresIn = '24h') => {
  return jwt.sign(
    {
      id: kullanici.id,
      eposta: kullanici.eposta,
      rol: kullanici.rol
    },
    JWT_SECRET,
    { expiresIn }
  );
}; 