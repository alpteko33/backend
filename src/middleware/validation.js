const logger = require('../utils/logger');

/**
 * Kullanıcı girişi için doğrulama
 */
exports.validateLogin = (req, res, next) => {
  const { eposta, sifre } = req.body;
  
  if (!eposta || !sifre) {
    return res.status(400).json({ 
      message: 'E-posta ve şifre gerekli alanlar' 
    });
  }
  
  // E-posta formatı kontrolü
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(eposta)) {
    return res.status(400).json({ 
      message: 'Geçerli bir e-posta adresi giriniz' 
    });
  }
  
  next();
};

/**
 * Kullanıcı kayıt işlemi için doğrulama
 */
exports.validateUser = (req, res, next) => {
  const { ad, soyad, eposta, sifre, rol } = req.body;
  
  if (!ad || !soyad || !eposta || !sifre) {
    return res.status(400).json({ 
      message: 'Ad, soyad, e-posta ve şifre gerekli alanlar' 
    });
  }
  
  // E-posta formatı kontrolü
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(eposta)) {
    return res.status(400).json({ 
      message: 'Geçerli bir e-posta adresi giriniz' 
    });
  }
  
  // Şifre uzunluğu kontrolü (minimum 6 karakter)
  if (sifre.length < 6) {
    return res.status(400).json({ 
      message: 'Şifre en az 6 karakter uzunluğunda olmalıdır' 
    });
  }
  
  // Rol kontrolü
  const gecerliRoller = ['ADMIN', 'AVUKAT', 'SEKRETER'];
  if (rol && !gecerliRoller.includes(rol)) {
    return res.status(400).json({ 
      message: 'Geçerli bir rol belirtin (ADMIN, AVUKAT, SEKRETER)' 
    });
  }
  
  next();
};

/**
 * Dava verilerinin doğrulaması
 */
exports.validateDava = (req, res, next) => {
  const { davaNumarasi, davaTipi, muvekkilId } = req.body;
  
  if (!davaNumarasi || !davaTipi || !muvekkilId) {
    return res.status(400).json({ 
      message: 'Dava numarası, dava tipi ve müvekkil ID gerekli alanlar' 
    });
  }
  
  next();
};

/**
 * Müvekkil verilerinin doğrulaması
 */
exports.validateMuvekkil = (req, res, next) => {
  const { ad, soyad, muvekkilTipi } = req.body;
  
  if (!ad || !soyad) {
    return res.status(400).json({ 
      message: 'Ad ve soyad gerekli alanlar' 
    });
  }
  
  // Müvekkil tipi kontrolü
  const gecerliTipler = ['BIREYSEL', 'KURUMSAL'];
  if (muvekkilTipi && !gecerliTipler.includes(muvekkilTipi)) {
    return res.status(400).json({ 
      message: 'Geçerli bir müvekkil tipi belirtin (BIREYSEL, KURUMSAL)' 
    });
  }
  
  next();
};

/**
 * Görev verilerinin doğrulaması
 */
exports.validateGorev = (req, res, next) => {
  const { baslik, kullaniciId } = req.body;
  
  if (!baslik) {
    return res.status(400).json({ 
      message: 'Görev başlığı gerekli bir alan' 
    });
  }
  
  if (!kullaniciId) {
    return res.status(400).json({ 
      message: 'Görev atanacak kullanıcı ID gerekli bir alan' 
    });
  }
  
  next();
};

/**
 * Personel verilerinin doğrulaması
 */
exports.validatePersonel = (req, res, next) => {
  const { ad, soyad, telefonNo, eposta } = req.body;
  
  if (!ad || !soyad) {
    return res.status(400).json({ 
      message: 'Ad ve soyad gerekli alanlar' 
    });
  }
  
  // E-posta formatı kontrolü (eğer varsa)
  if (eposta) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(eposta)) {
      return res.status(400).json({ 
        message: 'Geçerli bir e-posta adresi giriniz' 
      });
    }
  }
  
  // Telefon numarası kontrolü (eğer varsa)
  if (telefonNo) {
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(telefonNo.replace(/[^0-9]/g, ''))) {
      return res.status(400).json({ 
        message: 'Geçerli bir telefon numarası giriniz' 
      });
    }
  }
  
  next();
};

/**
 * Evrak verilerinin doğrulaması
 */
exports.validateEvrak = (req, res, next) => {
  const { ad, evrakTuru, olusturanId } = req.body;
  
  if (!ad || !evrakTuru) {
    return res.status(400).json({ 
      message: 'Evrak adı ve türü gerekli alanlar' 
    });
  }
  
  if (!olusturanId) {
    return res.status(400).json({ 
      message: 'Oluşturan kullanıcı ID gerekli bir alan' 
    });
  }
  
  next();
}; 