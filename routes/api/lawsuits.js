const express = require('express');
const router = express.Router();
const lawsuitController = require('../../controllers/lawsuitController');

// GET tüm davaları getir
router.get('/', lawsuitController.getAllLawsuits);

// GET tek dava detayı getir
router.get('/:id', lawsuitController.getLawsuitById);

// POST yeni dava oluştur
router.post('/', lawsuitController.createLawsuit);

// PUT dava güncelle
router.put('/:id', lawsuitController.updateLawsuit);

// DELETE dava sil
router.delete('/:id', lawsuitController.deleteLawsuit);

// GET davaya ait görevleri getir
router.get('/:id/tasks', lawsuitController.getLawsuitTasks);

module.exports = router; 