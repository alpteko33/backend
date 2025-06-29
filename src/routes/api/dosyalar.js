const express = require('express');
const router = express.Router();
const dosyaController = require('../../controllers/dosyaController');
const { authMiddleware } = require('../../middleware/auth');

// GET tüm dosyaları getir
router.get('/', authMiddleware, dosyaController.getAllFiles);

// GET tek dosya detayı getir
router.get('/:id', authMiddleware, dosyaController.getFileById);

// GET belirli bir göreve ait dosyaları getir
router.get('/gorev/:gorevId', authMiddleware, dosyaController.getFilesByTask);

// GET belirli bir evraka ait dosyaları getir
router.get('/evrak/:evrakId', authMiddleware, dosyaController.getFilesByDocument);

// POST yeni dosya oluştur
router.post('/', authMiddleware, dosyaController.createFile);

// PUT dosya güncelle
router.put('/:id', authMiddleware, dosyaController.updateFile);

// DELETE dosya sil
router.delete('/:id', authMiddleware, dosyaController.deleteFile);

module.exports = router; 