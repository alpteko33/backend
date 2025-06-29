const express = require('express');
const router = express.Router();
const dilekceTuruController = require('../../controllers/dilekceTuruController');
const { authMiddleware } = require('../../middleware/auth');

// Tüm dilekçe türlerini getir
router.get('/', authMiddleware, dilekceTuruController.tumDilekceTurleriniGetir);

// Belirli bir dilekçe türünü getir
router.get('/:id', authMiddleware, dilekceTuruController.dilekceTuruGetir);

// Yeni dilekçe türü oluştur
router.post('/', authMiddleware, dilekceTuruController.dilekceTuruOlustur);

// Dilekçe türünü güncelle
router.put('/:id', authMiddleware, dilekceTuruController.dilekceTuruGuncelle);

// Dilekçe türünü sil
router.delete('/:id', authMiddleware, dilekceTuruController.dilekceTuruSil);

module.exports = router; 