const express = require('express');
const router = express.Router();
const calismaArkadasiController = require('../../controllers/calismaArkadasiController');
const calismaArkadasiDavetController = require('../../controllers/calismaArkadasiDavetController');
const { authMiddleware, authorize } = require('../../middleware/auth');

// GET tüm çalışma arkadaşlarını getir
router.get('/', authMiddleware, calismaArkadasiController.getAllColleagues);

// GET tek çalışma arkadaşı detayı getir
router.get('/:id', authMiddleware, calismaArkadasiController.getColleagueById);

// GET belirli bir kullanıcıya ait çalışma arkadaşlarını getir
router.get('/kullanici/:kullaniciId', authMiddleware, calismaArkadasiController.getColleaguesByUser);

// POST kullanıcılar arası çalışma arkadaşlığı ilişkisi kur (ESKİ YÖNTEM)
// NOT: Bu endpoint yerine davet sistemi kullanılması önerilir, sadece yöneticiler kullanabilir
router.post('/legacy-relation', authMiddleware, authorize(['YONETICI']), calismaArkadasiController.createColleagueRelation);

// POST yeni çalışma arkadaşı oluştur
router.post('/', authMiddleware, calismaArkadasiController.createColleague);

// PUT çalışma arkadaşı güncelle
router.put('/:id', authMiddleware, calismaArkadasiController.updateColleague);

// DELETE çalışma arkadaşı sil
router.delete('/:id', authMiddleware, calismaArkadasiController.deleteColleague);

// ÇALIŞMA ARKADAŞI DAVET SİSTEMİ ROTALARI
// POST çalışma arkadaşı daveti gönder
router.post('/davet', authMiddleware, calismaArkadasiDavetController.inviteColleague);

// GET gelen davetleri listele
router.get('/davet/gelen', authMiddleware, calismaArkadasiDavetController.getIncomingInvitations);

// GET gönderilen davetleri listele
router.get('/davet/giden', authMiddleware, calismaArkadasiDavetController.getOutgoingInvitations);

// POST davete yanıt ver (kabul et veya reddet)
router.post('/davet/yanit', authMiddleware, calismaArkadasiDavetController.respondToInvitation);

// DELETE daveti iptal et
router.delete('/davet/:id', authMiddleware, calismaArkadasiDavetController.cancelInvitation);

module.exports = router; 