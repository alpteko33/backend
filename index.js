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
