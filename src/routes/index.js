const express = require('express');
const router = express.Router();

// Kimlik doğrulama işlemleri
router.use('/auth', require('./api/auth'));

// Kullanıcı işlemleri
router.use('/kullanicilar', require('./api/kullanicilar'));
router.use('/muvekkiller', require('./api/muvekkiller'));
router.use('/personeller', require('./api/personeller'));
router.use('/calisma-arkadaslari', require('./api/calisma-arkadaslari'));
router.use('/personel-davetler', require('./api/personel-davetler'));

// UYAP senkronizasyon işlemleri
router.use('/senkronizasyon', require('./api/senkronizasyon'));

// Dava ve görev işlemleri
router.use('/davalar', require('./api/davalar'));
router.use('/gorevler', require('./api/gorevler'));
router.use('/gorev-listeleri', require('./api/gorev-listeleri'));
router.use('/gorev-listesi-kullanicilar', require('./api/gorev-listesi-kullanici'));

// Evrak ve dosya işlemleri
router.use('/evraklar', require('./api/evraklar'));
router.use('/dosyalar', require('./api/dosyalar'));
router.use('/personel-ozluk-evraklari', require('./api/personel-ozluk-evraklari'));

// Finans ve izin işlemleri
router.use('/finans-islemleri', require('./api/finans-islemleri'));
router.use('/personel-izinler', require('./api/personel-izinler'));
router.use('/personel-ucret-pusulalari', require('./api/personel-ucret-pusulalari'));

// İrtibat işlemleri
router.use('/irtibatlar', require('./api/irtibatlar'));

// Dava detay işlemleri
router.use('/adimlar', require('./api/adimlar'));
router.use('/notlar', require('./api/notlar'));
router.use('/sozlesme-detaylar', require('./api/sozlesme-detaylar'));
router.use('/gorusme-tutanagi-detaylar', require('./api/gorusme-tutanagi-detaylar'));

// Mahkeme işlemleri
router.use('/yargi-birimleri', require('./api/yargi-birimleri'));

// Dilekçe işlemleri
router.use('/dilekceler', require('./api/dilekceler'));
router.use('/dilekce-konulari', require('./api/dilekce-konulari'));
router.use('/dilekce-turleri', require('./api/dilekce-turleri'));

module.exports = router; 