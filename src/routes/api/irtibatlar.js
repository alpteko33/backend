const express = require('express');
const router = express.Router();
const irtibatController = require('../../controllers/irtibatController');

// Tüm irtibatları getir
router.get('/', irtibatController.getAllContacts);

// Yeni irtibat oluştur
router.post('/', irtibatController.createContact);

// Belirli bir irtibatı getir
router.get('/:id', irtibatController.getContactById);

// İrtibatı güncelle
router.put('/:id', irtibatController.updateContact);

// İrtibatı sil
router.delete('/:id', irtibatController.deleteContact);

// Kullanıcıya göre irtibatları getir
router.get('/kullanici/:kullaniciId', irtibatController.getContactsByUser);

module.exports = router; 