const express = require('express');
const router = express.Router();
const sozlesmeDetayController = require('../../controllers/sozlesmeDetayController');
const { authMiddleware } = require('../../middleware/auth');

// GET tüm sözleşme detaylarını getir
router.get('/', authMiddleware, sozlesmeDetayController.getAllContractDetails);

// GET tek sözleşme detayı
router.get('/:id', authMiddleware, sozlesmeDetayController.getContractDetailById);

// GET belirli bir evraka ait sözleşme detayını getir
router.get('/evrak/:evrakId', authMiddleware, sozlesmeDetayController.getContractDetailByDocument);

// POST yeni sözleşme detayı oluştur
router.post('/', authMiddleware, sozlesmeDetayController.createContractDetail);

// PUT sözleşme detayı güncelle
router.put('/:id', authMiddleware, sozlesmeDetayController.updateContractDetail);

// DELETE sözleşme detayı sil
router.delete('/:id', authMiddleware, sozlesmeDetayController.deleteContractDetail);

module.exports = router; 