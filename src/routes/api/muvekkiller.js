const express = require('express');
const router = express.Router();
const muvekkilController = require('../../controllers/muvekkilController');

// GET tüm müvekkilleri getir
router.get('/', muvekkilController.getAllClients);

// GET tek müvekkil detayı getir
router.get('/:id', muvekkilController.getClientById);

// POST yeni müvekkil oluştur
router.post('/', muvekkilController.createClient);

// PUT müvekkil güncelle
router.put('/:id', muvekkilController.updateClient);

// DELETE müvekkil sil
router.delete('/:id', muvekkilController.deleteClient);

module.exports = router; 