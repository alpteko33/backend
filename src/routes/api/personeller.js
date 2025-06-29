const express = require('express');
const router = express.Router();
const personelController = require('../../controllers/personelController');
const { authMiddleware } = require('../../middleware/auth');
const { validatePersonel } = require('../../middleware/validation');

// GET tüm personelleri getir
router.get('/', authMiddleware, personelController.getAllPersonnel);

// GET tek personel detayı getir
router.get('/:id', authMiddleware, personelController.getPersonnelById);

// POST yeni personel oluştur
router.post('/', authMiddleware, validatePersonel, personelController.createPersonnel);

// PUT personel güncelle
router.put('/:id', authMiddleware, validatePersonel, personelController.updatePersonnel);

// DELETE personel sil
router.delete('/:id', authMiddleware, personelController.deletePersonnel);

// POST personele yeni adres ekle
router.post('/:id/adresler', authMiddleware, personelController.addAddress);

// POST personele yeni iletişim ekle
router.post('/:id/iletisimler', authMiddleware, personelController.addContact);

module.exports = router; 