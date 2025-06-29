const express = require('express');
const router = express.Router();
const gorevController = require('../../controllers/gorevController');
const { authMiddleware, authorize } = require('../../middleware/auth');
const { canAssignTask } = require('../../middleware/colleagueCheck');

// GET tüm görevleri getir - sadece yönetici tüm görevleri görebilir
router.get('/', authMiddleware, authorize(['YONETICI']), gorevController.getAllTasks);

// GET tek görev detayı getir - yetki kontrolü görev kontrolcüsünde yapılmaktadır
router.get('/:id', authMiddleware, gorevController.getTaskById);

// POST yeni görev oluştur - görev atama yetkisi kontrol edilir
router.post('/', authMiddleware, canAssignTask, gorevController.createTask);

// PUT görev güncelle - yetki kontrolü görev kontrolcüsünde yapılmaktadır
router.put('/:id', authMiddleware, gorevController.updateTask);

// DELETE görev sil - yetki kontrolü görev kontrolcüsünde yapılmaktadır
router.delete('/:id', authMiddleware, gorevController.deleteTask);

module.exports = router; 