const express = require('express');
const router = express.Router();
const dilekceKonusuController = require('../../controllers/dilekceKonusuController');
const { authMiddleware } = require('../../middleware/auth');

// Tüm dilekçe konularını getir
router.get('/', authMiddleware, dilekceKonusuController.tumDilekceKonulariniGetir);

// Belirli bir dilekçe konusunu getir
router.get('/:id', authMiddleware, dilekceKonusuController.dilekceKonusuGetir);

// Yeni dilekçe konusu oluştur
router.post('/', authMiddleware, dilekceKonusuController.dilekceKonusuOlustur);

// Dilekçe konusunu güncelle
router.put('/:id', authMiddleware, dilekceKonusuController.dilekceKonusuGuncelle);

// Dilekçe konusunu sil
router.delete('/:id', authMiddleware, dilekceKonusuController.dilekceKonusuSil);

module.exports = router; 