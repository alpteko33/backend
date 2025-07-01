const express = require('express');
const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: 'Connected'
  });
});

// Temel endpoint'ler (geçici - adım adım ekleyeceğiz)
try {
  // Kimlik doğrulama işlemleri
  router.use('/auth', require('./api/auth'));
  
  // Kullanıcı işlemleri
  router.use('/kullanicilar', require('./api/kullanicilar'));
  
  // ⭐ SENKRONIZASYON ENDPOINTS - AKTIF EDİLDİ
  router.use('/senkronizasyon', require('./api/senkronizasyon'));
  // Frontend uyumluluğu için /sync alias'ı
  router.use('/sync', require('./api/senkronizasyon'));
  
} catch (error) {
  console.error('❌ Route import hatası:', error.message);
}

// Diğer route'lar geçici olarak kapatıldı
// TODO: Teker teker test edip açılacak

/*
router.use('/muvekkiller', require('./api/muvekkiller'));
router.use('/personeller', require('./api/personeller'));
router.use('/calisma-arkadaslari', require('./api/calisma-arkadaslari'));
router.use('/personel-davetler', require('./api/personel-davetler'));
router.use('/davalar', require('./api/davalar'));
router.use('/gorevler', require('./api/gorevler'));
router.use('/gorev-listeleri', require('./api/gorev-listeleri'));
router.use('/gorev-listesi-kullanicilar', require('./api/gorev-listesi-kullanici'));
router.use('/evraklar', require('./api/evraklar'));
router.use('/dosyalar', require('./api/dosyalar'));
router.use('/personel-ozluk-evraklari', require('./api/personel-ozluk-evraklari'));
router.use('/finans-islemleri', require('./api/finans-islemleri'));
router.use('/personel-izinler', require('./api/personel-izinler'));
router.use('/personel-ucret-pusulalari', require('./api/personel-ucret-pusulalari'));
router.use('/irtibatlar', require('./api/irtibatlar'));
router.use('/adimlar', require('./api/adimlar'));
router.use('/notlar', require('./api/notlar'));
router.use('/sozlesme-detaylar', require('./api/sozlesme-detaylar'));
router.use('/gorusme-tutanagi-detaylar', require('./api/gorusme-tutanagi-detaylar'));
router.use('/yargi-birimleri', require('./api/yargi-birimleri'));
router.use('/dilekceler', require('./api/dilekceler'));
router.use('/dilekce-konulari', require('./api/dilekce-konulari'));
router.use('/dilekce-turleri', require('./api/dilekce-turleri'));
*/

module.exports = router; 