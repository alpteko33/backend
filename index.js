require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Routes
const kullanicilarRoutes = require('./routes/api/kullanicilar');
const muvekkilRoutes = require('./routes/api/muvekkiller');
const davaRoutes = require('./routes/api/davalar');
const gorevRoutes = require('./routes/api/gorevler');
const personelRoutes = require('./routes/api/personeller');
const evrakRoutes = require('./routes/api/evraklar');
const finansIslemleriRoutes = require('./routes/api/finans-islemleri');
const gorevListeleriRoutes = require('./routes/api/gorev-listeleri');
const irtibatRoutes = require('./routes/api/irtibatlar');
const iletisimRoutes = require('./routes/api/iletisimler');
const adresRoutes = require('./routes/api/adresler');
const adimRoutes = require('./routes/api/adimlar');
const dosyaRoutes = require('./routes/api/dosyalar');
const notRoutes = require('./routes/api/notlar');
const calismaArkadasiRoutes = require('./routes/api/calisma-arkadaslari');

// Yeni route'lar
const gorevListesiKullaniciRoutes = require('./routes/api/gorev-listesi-kullanici');
const personelOzlukEvraklariRoutes = require('./routes/api/personel-ozluk-evraklari');
const personelIzinlerRoutes = require('./routes/api/personel-izinler');
const personelUcretPusulalariRoutes = require('./routes/api/personel-ucret-pusulalari');
const sozlesmeDetaylarRoutes = require('./routes/api/sozlesme-detaylar');
const gorusmeTutanagiDetaylarRoutes = require('./routes/api/gorusme-tutanagi-detaylar');
const yargiBirimleriRoutes = require('./routes/api/yargi-birimleri');
const cezaMahkemeleriRoutes = require('./routes/api/ceza-mahkemeleri');
const hukukMahkemeleriRoutes = require('./routes/api/hukuk-mahkemeleri');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/kullanicilar', kullanicilarRoutes);
app.use('/api/muvekkiller', muvekkilRoutes);
app.use('/api/davalar', davaRoutes);
app.use('/api/gorevler', gorevRoutes);
app.use('/api/personeller', personelRoutes);
app.use('/api/evraklar', evrakRoutes);
app.use('/api/finans-islemleri', finansIslemleriRoutes);
app.use('/api/gorev-listeleri', gorevListeleriRoutes);
app.use('/api/irtibatlar', irtibatRoutes);
app.use('/api/iletisimler', iletisimRoutes);
app.use('/api/adresler', adresRoutes);
app.use('/api/adimlar', adimRoutes);
app.use('/api/dosyalar', dosyaRoutes);
app.use('/api/notlar', notRoutes);
app.use('/api/calisma-arkadaslari', calismaArkadasiRoutes);

// Yeni API Routes
app.use('/api/gorev-listesi-kullanicilar', gorevListesiKullaniciRoutes);
app.use('/api/personel-ozluk-evraklari', personelOzlukEvraklariRoutes);
app.use('/api/personel-izinler', personelIzinlerRoutes);
app.use('/api/personel-ucret-pusulalari', personelUcretPusulalariRoutes);
app.use('/api/sozlesme-detaylar', sozlesmeDetaylarRoutes);
app.use('/api/gorusme-tutanagi-detaylar', gorusmeTutanagiDetaylarRoutes);
app.use('/api/yargi-birimleri', yargiBirimleriRoutes);
app.use('/api/ceza-mahkemeleri', cezaMahkemeleriRoutes);
app.use('/api/hukuk-mahkemeleri', hukukMahkemeleriRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Avukatlık Bürosu Yönetim Sistemi API');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Bir hata oluştu',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Start server
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
