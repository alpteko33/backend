const express = require('express');
const router = express.Router();
const dilekceController = require('../../controllers/dilekceController');
const { authMiddleware } = require('../../middleware/auth');

// Tüm dilekçeleri getir
router.get('/', authMiddleware, dilekceController.tumDilekceleriGetir);

// Belirli bir dilekçeyi getir
router.get('/:id', authMiddleware, dilekceController.dilekceGetir);

// Yeni dilekçe oluştur
router.post('/', authMiddleware, dilekceController.dilekceOlustur);

// Dilekçe güncelle
router.put('/:id', authMiddleware, dilekceController.dilekceGuncelle);

// Dilekçe sil
router.delete('/:id', authMiddleware, dilekceController.dilekceSil);

module.exports = router; 