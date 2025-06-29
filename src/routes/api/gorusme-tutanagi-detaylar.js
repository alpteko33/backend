const express = require('express');
const router = express.Router();
const gorusmeTutanagiDetayController = require('../../controllers/gorusmeTutanagiDetayController');
const { authMiddleware } = require('../../middleware/auth');

// GET tüm görüşme tutanağı detaylarını getir
router.get('/', authMiddleware, gorusmeTutanagiDetayController.getAllMeetingNoteDetails);

// GET tek görüşme tutanağı detayı
router.get('/:id', authMiddleware, gorusmeTutanagiDetayController.getMeetingNoteDetailById);

// GET belirli bir evraka ait görüşme tutanağı detayını getir
router.get('/evrak/:evrakId', authMiddleware, gorusmeTutanagiDetayController.getMeetingNoteDetailByDocument);

// POST yeni görüşme tutanağı detayı oluştur
router.post('/', authMiddleware, gorusmeTutanagiDetayController.createMeetingNoteDetail);

// PUT görüşme tutanağı detayı güncelle
router.put('/:id', authMiddleware, gorusmeTutanagiDetayController.updateMeetingNoteDetail);

// DELETE görüşme tutanağı detayı sil
router.delete('/:id', authMiddleware, gorusmeTutanagiDetayController.deleteMeetingNoteDetail);

module.exports = router; 