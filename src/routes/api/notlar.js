const express = require('express');
const router = express.Router();
const notController = require('../../controllers/notController');

// Tüm notları getir
router.get('/', notController.getAllNotes);

// Yeni not oluştur
router.post('/', notController.createNote);

// Belirli bir notu getir
router.get('/:id', notController.getNoteById);

// Notu güncelle
router.put('/:id', notController.updateNote);

// Notu sil
router.delete('/:id', notController.deleteNote);

// Kullanıcıya göre notları getir
router.get('/kullanici/:kullaniciId', notController.getNotesByUser);

// Müvekkile göre notları getir
router.get('/muvekkil/:muvekkilId', notController.getNotesByClient);

// Davaya göre notları getir
router.get('/dava/:davaId', notController.getNotesByLawsuit);

// Not türüne göre notları getir
router.get('/tur/:notTuru', notController.getNotesByType);

module.exports = router; 