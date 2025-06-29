const express = require('express');
const cors = require('cors');
const { errorHandler } = require('../middleware/error');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', require('../routes'));

// Root route
app.get('/', (req, res) => {
  res.send('Avukatlık Bürosu Yönetim Sistemi API');
});

// Error handler
app.use(errorHandler);

module.exports = app; 