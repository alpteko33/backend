const express = require('express');
const router = express.Router();
const gorevListesiController = require('../../controllers/gorevListesiController');
const { authMiddleware, authorize } = require('../../middleware/auth');
const { canManageGorevListesi } = require('../../middleware/colleagueCheck');

// Tüm görev listelerini getir - sadece yöneticiler tüm listeleri görebilir
router.get('/', authMiddleware, authorize(['YONETICI']), gorevListesiController.getAllGorevListeleri);

// Yeni görev listesi oluştur - avukat ve yöneticiler oluşturabilir
router.post('/', authMiddleware, authorize(['AVUKAT', 'YONETICI']), gorevListesiController.createGorevListesi);

// Belirli bir görev listesini getir - yetki kontrolü yapılır
router.get('/:id', authMiddleware, canManageGorevListesi, gorevListesiController.getGorevListesiById);

// Görev listesini güncelle - yetki kontrolü yapılır
router.put('/:id', authMiddleware, canManageGorevListesi, gorevListesiController.updateGorevListesi);

// Görev listesini sil - yetki kontrolü yapılır
router.delete('/:id', authMiddleware, canManageGorevListesi, gorevListesiController.deleteGorevListesi);

// Görev listesindeki görevleri getir - yetki kontrolü yapılır
router.get('/:id/gorevler', authMiddleware, canManageGorevListesi, gorevListesiController.getGorevlerByListeId);

// Görev listesine görev ekle - yetki kontrolü yapılır
router.post('/:id/gorevler', authMiddleware, canManageGorevListesi, gorevListesiController.addGorevToListe);

module.exports = router; 