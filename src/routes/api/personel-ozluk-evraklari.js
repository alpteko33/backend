const express = require('express');
const router = express.Router();
const personelController = require('../../controllers/personelController');

// Tüm özlük evraklarını getir
router.get('/', personelController.getAllOzlukEvraklari);

// Yeni özlük evrakı oluştur
router.post('/', personelController.createOzlukEvraki);

// Belirli bir özlük evrakını getir
router.get('/:id', personelController.getOzlukEvrakiById);

// Özlük evrakını güncelle
router.put('/:id', personelController.updateOzlukEvraki);

// Özlük evrakını sil
router.delete('/:id', personelController.deleteOzlukEvraki);

// Personele göre özlük evraklarını getir
router.get('/personel/:personelId', personelController.getOzlukEvraklariByPersonelId);

// Belirli tür özlük evraklarını getir
router.get('/tur/:evrakTuru', personelController.getOzlukEvraklariByTur);

module.exports = router; 