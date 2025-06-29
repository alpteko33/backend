const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../../middleware/auth');
const senkronizasyonController = require('../../controllers/senkronizasyonController');

/**
 * UYAP Senkronizasyon Rotaları
 */

// Avukat bilgilerini senkronize et
router.post('/avukat-bilgileri', authMiddleware, senkronizasyonController.avukatBilgileriSenkronize);

// Dava bilgilerini senkronize et (ileride geliştirilecek)
router.post('/dava-bilgileri', authMiddleware, senkronizasyonController.davaBilgileriSenkronize);

// Müvekkil bilgilerini senkronize et
router.post('/muvekkil-bilgileri', authMiddleware, senkronizasyonController.muvekkilBilgileriSenkronize);

// BATCH SYNC ENDPOINTS - YENİ
router.post('/start-batch', authMiddleware, senkronizasyonController.startBatchSync);
router.post('/process-batch', authMiddleware, senkronizasyonController.processBatch);
router.post('/complete-batch', authMiddleware, senkronizasyonController.completeBatchSync);
router.post('/cancel-batch', authMiddleware, senkronizasyonController.cancelBatchSync);
router.get('/status/:sessionId', authMiddleware, senkronizasyonController.getBatchStatus);

module.exports = router; 