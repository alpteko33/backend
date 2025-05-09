require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Routes
const userRoutes = require('./routes/api/users');
const clientRoutes = require('./routes/api/clients');
const lawsuitRoutes = require('./routes/api/lawsuits');
const taskRoutes = require('./routes/api/tasks');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/lawsuits', lawsuitRoutes);
app.use('/api/tasks', taskRoutes);

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
