const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

// GET tüm kullanıcıları getir
router.get('/', userController.getAllUsers);

// GET tek kullanıcı detayı getir
router.get('/:id', userController.getUserById);

// POST yeni kullanıcı oluştur
router.post('/', userController.createUser);

// PUT kullanıcı güncelle
router.put('/:id', userController.updateUser);

// DELETE kullanıcı sil
router.delete('/:id', userController.deleteUser);

// PUT şifre değiştir
router.put('/:id/change-password', userController.changePassword);

module.exports = router; 