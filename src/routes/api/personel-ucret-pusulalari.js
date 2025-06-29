const express = require('express');
const router = express.Router();
const personelUcretPusulalariController = require('../../controllers/personelUcretPusulasiController');
const { authMiddleware } = require('../../middleware/auth');

// GET tüm personel ücret pusulalarını getir
router.get('/', authMiddleware, personelUcretPusulalariController.getAllPayslips);

// GET tek personel ücret pusulası detayı
router.get('/:id', authMiddleware, personelUcretPusulalariController.getPayslipById);

// GET belirli bir personele ait ücret pusulalarını getir
router.get('/personel/:personelId', authMiddleware, personelUcretPusulalariController.getPayslipsByPersonnel);

// POST yeni personel ücret pusulası oluştur
router.post('/', authMiddleware, personelUcretPusulalariController.createPayslip);

// PUT personel ücret pusulası güncelle
router.put('/:id', authMiddleware, personelUcretPusulalariController.updatePayslip);

// DELETE personel ücret pusulası sil
router.delete('/:id', authMiddleware, personelUcretPusulalariController.deletePayslip);

module.exports = router; 