const express = require('express');
const router = express.Router();
const personelController = require('../../controllers/personelController');

// Tüm personel izinlerini getir
router.get('/', personelController.getAllIzinler);

// Yeni personel izni oluştur
router.post('/', personelController.createIzin);

// Belirli bir personel iznini getir
router.get('/:id', personelController.getIzinById);

// Personel iznini güncelle
router.put('/:id', personelController.updateIzin);

// Personel iznini sil
router.delete('/:id', personelController.deleteIzin);

// Personele göre izinleri getir
router.get('/personel/:personelId', personelController.getIzinlerByPersonelId);

// Belirli türdeki izinleri getir
router.get('/tur/:izinTuru', personelController.getIzinlerByTur);

// Tarih aralığına göre izinleri getir
router.get('/tarih/:baslangic/:bitis', personelController.getIzinlerByTarihAraligi);

module.exports = router; 