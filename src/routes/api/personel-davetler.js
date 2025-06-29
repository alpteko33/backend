const express = require('express');
const router = express.Router();
const personelDavetController = require('../../controllers/personelDavetController');
const { authMiddleware, authorize } = require('../../middleware/auth');

// POST personel daveti gönder (sadece YONETICI ve AVUKAT gönderebilir)
router.post('/', authMiddleware, authorize(['YONETICI', 'AVUKAT']), personelDavetController.invitePersonnel);

// GET gelen personel davetlerini listele
router.get('/gelen', authMiddleware, personelDavetController.getIncomingInvitations);

// GET gönderilen personel davetlerini listele
router.get('/giden', authMiddleware, authorize(['YONETICI', 'AVUKAT']), personelDavetController.getOutgoingInvitations);

// POST davete yanıt ver (kabul et veya reddet)
router.post('/yanit', authMiddleware, personelDavetController.respondToInvitation);

// DELETE daveti iptal et
router.delete('/:id', authMiddleware, authorize(['YONETICI', 'AVUKAT']), personelDavetController.cancelInvitation);

module.exports = router; 