const express = require('express');
const router = express.Router();
const taskController = require('../../controllers/taskController');

// GET tüm görevleri getir
router.get('/', taskController.getAllTasks);

// GET tek görev detayı getir
router.get('/:id', taskController.getTaskById);

// POST yeni görev oluştur
router.post('/', taskController.createTask);

// PUT görev güncelle
router.put('/:id', taskController.updateTask);

// DELETE görev sil
router.delete('/:id', taskController.deleteTask);

// GET kullanıcıya ait görevleri getir
router.get('/user/:userId', taskController.getTasksByUser);

module.exports = router;