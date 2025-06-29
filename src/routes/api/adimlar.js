const express = require('express');
const router = express.Router();
const adimController = require('../../controllers/adimController');
const { authMiddleware } = require('../../middleware/auth');

// GET tüm adımları getir
router.get('/', authMiddleware, adimController.getAllSteps);

// GET tek adım detayı getir
router.get('/:id', authMiddleware, adimController.getStepById);

// GET belirli bir göreve ait adımları getir
router.get('/gorev/:gorevId', authMiddleware, adimController.getStepsByTask);

// POST yeni adım oluştur
router.post('/', authMiddleware, adimController.createStep);

// PUT adım güncelle
router.put('/:id', authMiddleware, adimController.updateStep);

// PUT adımın tamamlanma durumunu güncelle
router.put('/:id/tamamlandi', authMiddleware, adimController.updateStepStatus);

// DELETE adım sil
router.delete('/:id', authMiddleware, adimController.deleteStep);

module.exports = router; 