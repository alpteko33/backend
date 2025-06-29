const express = require('express');
const router = express.Router();
const kullaniciController = require('../../controllers/kullaniciController');

// GET tüm kullanıcıları getir
router.get('/', kullaniciController.getAllKullanicilar);

// GET belirli bir kullanıcıyı getir
router.get('/:id', kullaniciController.getKullaniciById);

// POST yeni kullanıcı oluştur
router.post('/', kullaniciController.createKullanici);

// PUT kullanıcıyı güncelle
router.put('/:id', kullaniciController.updateKullanici);

// DELETE kullanıcıyı sil
router.delete('/:id', kullaniciController.deleteKullanici);

// PUT şifre değiştir
router.put('/:id/password', kullaniciController.changePassword);

module.exports = router; 