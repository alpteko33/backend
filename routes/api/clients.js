const express = require('express');
const router = express.Router();
const clientController = require('../../controllers/clientController');

// GET tüm müşterileri getir
router.get('/', clientController.getAllClients);

// GET tek müşteri detayı getir
router.get('/:id', clientController.getClientById);

// POST yeni müşteri oluştur
router.post('/', clientController.createClient);

// PUT müşteri güncelle
router.put('/:id', clientController.updateClient);

// DELETE müşteri sil
router.delete('/:id', clientController.deleteClient);

// POST müşteriye yeni iletişim bilgisi ekle
router.post('/:id/contacts', clientController.addContact);

// POST müşteriye yeni adres bilgisi ekle
router.post('/:id/addresses', clientController.addAddress);

module.exports = router; 