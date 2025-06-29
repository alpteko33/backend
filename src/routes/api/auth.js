const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');

// POST kullanıcı kaydı
router.post('/register', authController.register);

// POST kullanıcı girişi
router.post('/login', authController.login);

// POST token yenileme
router.post('/refresh-token', authController.refreshToken);

module.exports = router; 