const express = require('express');
const router = express.Router();
const finansIslemiController = require('../../controllers/finansIslemiController');
const { authMiddleware } = require('../../middleware/auth');

// GET tüm finans işlemlerini getir
router.get('/', authMiddleware, finansIslemiController.getAllFinancialTransactions);

// GET tek finans işlemi detayı getir
router.get('/:id', authMiddleware, finansIslemiController.getFinancialTransactionById);

// POST yeni finans işlemi oluştur
router.post('/', authMiddleware, finansIslemiController.createFinancialTransaction);

// PUT finans işlemi güncelle
router.put('/:id', authMiddleware, finansIslemiController.updateFinancialTransaction);

// DELETE finans işlemi sil
router.delete('/:id', authMiddleware, finansIslemiController.deleteFinancialTransaction);

// PUT finans işlemi durumu güncelle
router.put('/:id/durum', authMiddleware, finansIslemiController.updateFinancialTransactionStatus);

module.exports = router; 