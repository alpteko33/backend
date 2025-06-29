const express = require('express');
const router = express.Router();
const davaController = require('../../controllers/davaController');

// GET tüm davaları getir
router.get('/', davaController.getAllLawsuits);

// GET tek dava detayı getir
router.get('/:id', davaController.getLawsuitById);

// POST yeni dava oluştur
router.post('/', davaController.createLawsuit);

// PUT dava güncelle
router.put('/:id', davaController.updateLawsuit);

// DELETE dava sil
router.delete('/:id', davaController.deleteLawsuit);

// GET davaya ait görevleri getir
router.get('/:id/gorevler', davaController.getLawsuitTasks);

module.exports = router; 