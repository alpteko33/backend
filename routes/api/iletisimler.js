const express = require('express');
const router = express.Router();

// Artık İletişim modeli schema.prisma'da bulunmuyor
router.get('/', async (req, res) => {
  res.status(410).json({ 
    message: 'Bu API endpoint artık kullanımda değil. İletişim bilgileri artık ilgili modellerin doğrudan bir özelliği olarak saklanıyor.',
    durumu: 'KULLANILMIYOR'
  });
});

router.get('/:id', async (req, res) => {
  res.status(410).json({ 
    message: 'Bu API endpoint artık kullanımda değil. İletişim bilgileri artık ilgili modellerin doğrudan bir özelliği olarak saklanıyor.',
    durumu: 'KULLANILMIYOR'
  });
});

router.post('/', async (req, res) => {
  res.status(410).json({ 
    message: 'Bu API endpoint artık kullanımda değil. İletişim bilgileri artık ilgili modellerin doğrudan bir özelliği olarak saklanıyor.',
    durumu: 'KULLANILMIYOR'
  });
});

router.put('/:id', async (req, res) => {
  res.status(410).json({ 
    message: 'Bu API endpoint artık kullanımda değil. İletişim bilgileri artık ilgili modellerin doğrudan bir özelliği olarak saklanıyor.',
    durumu: 'KULLANILMIYOR'
  });
});

router.delete('/:id', async (req, res) => {
  res.status(410).json({ 
    message: 'Bu API endpoint artık kullanımda değil. İletişim bilgileri artık ilgili modellerin doğrudan bir özelliği olarak saklanıyor.',
    durumu: 'KULLANILMIYOR'
  });
});

module.exports = router; 