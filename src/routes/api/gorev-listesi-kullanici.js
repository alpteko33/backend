const express = require('express');
const router = express.Router();
const gorevListesiKullaniciController = require('../../controllers/gorevListesiKullaniciController');
const { authMiddleware, authorize } = require('../../middleware/auth');
const { canManageGorevListesi } = require('../../middleware/colleagueCheck');

// Kullanıcının görev listelerini getir
router.get('/kullanici/:kullaniciId', authMiddleware, gorevListesiKullaniciController.getGorevListeleriByKullaniciId);

// Görev listesine kullanıcı davet et - yetki kontrolü yapılır
router.post('/davet', authMiddleware, gorevListesiKullaniciController.inviteUserToGorevListesi);

// Görev listesi kullanıcı davetini güncelle - sadece kendisine gelen daveti güncelleyebilir
router.put('/davet/:id', authMiddleware, gorevListesiKullaniciController.updateGorevListesiDavet);

// Görev listesi kullanıcı davetini sil - yetki kontrolü davet eden veya davet edilen için yapılır
router.delete('/davet/:id', authMiddleware, gorevListesiKullaniciController.removeUserFromGorevListesi);

// Görev listesindeki kullanıcıları getir - yetki kontrolü görev listesi sahibi için yapılır
router.get('/liste/:listeId/kullanicilar', authMiddleware, canManageGorevListesi, gorevListesiKullaniciController.getUsersByGorevListeId);

module.exports = router; 