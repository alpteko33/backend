const express = require('express');
const router = express.Router();
const yargiBirimiController = require('../../controllers/yargiBirimiController');
const { authMiddleware } = require('../../middleware/auth');

// GET tüm yargı birimlerini getir
router.get('/', authMiddleware, yargiBirimiController.getAllJudicialUnits);

// GET tek yargı birimi detayı
router.get('/:id', authMiddleware, yargiBirimiController.getJudicialUnitById);

// GET belirli bir yargı türüne ait birimleri getir
router.get('/yargi-turu/:yargiTuru', authMiddleware, yargiBirimiController.getJudicialUnitsByType);

// POST yeni yargı birimi oluştur
router.post('/', authMiddleware, yargiBirimiController.createJudicialUnit);

// PUT yargı birimi güncelle
router.put('/:id', authMiddleware, yargiBirimiController.updateJudicialUnit);

// DELETE yargı birimi sil
router.delete('/:id', authMiddleware, yargiBirimiController.deleteJudicialUnit);

module.exports = router; 