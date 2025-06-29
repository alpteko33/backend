const express = require('express');
const router = express.Router();
const evrakController = require('../../controllers/evrakController');
const { authMiddleware } = require('../../middleware/auth');
const { validateEvrak } = require('../../middleware/validation');

// GET tüm evrakları getir
router.get('/', authMiddleware, evrakController.getAllDocuments);

// GET tek evrak detayı getir
router.get('/:id', authMiddleware, evrakController.getDocumentById);

// POST yeni evrak oluştur
router.post('/', authMiddleware, validateEvrak, evrakController.createDocument);

// PUT evrak güncelle
router.put('/:id', authMiddleware, validateEvrak, evrakController.updateDocument);

// DELETE evrak sil
router.delete('/:id', authMiddleware, evrakController.deleteDocument);

// POST evraka yeni dosya ekle
router.post('/:id/dosyalar', authMiddleware, evrakController.addFile);

module.exports = router; 