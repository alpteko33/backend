const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm görüşme tutanağı detaylarını getir
router.get('/', async (req, res) => {
  try {
    const gorusmeTutanagiDetaylar = await prisma.gorusmeTutanagiDetay.findMany({
      include: {
        evrak: true
      }
    });
    res.json(gorusmeTutanagiDetaylar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek görüşme tutanağı detayı
router.get('/:id', async (req, res) => {
  try {
    const gorusmeTutanagiDetay = await prisma.gorusmeTutanagiDetay.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        evrak: true
      }
    });
    
    if (!gorusmeTutanagiDetay) {
      return res.status(404).json({ message: 'Görüşme tutanağı detayı bulunamadı' });
    }
    
    res.json(gorusmeTutanagiDetay);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir evraka ait görüşme tutanağı detayını getir
router.get('/evrak/:evrakId', async (req, res) => {
  try {
    const gorusmeTutanagiDetay = await prisma.gorusmeTutanagiDetay.findUnique({
      where: { evrakId: parseInt(req.params.evrakId) }
    });
    
    if (!gorusmeTutanagiDetay) {
      return res.status(404).json({ message: 'Görüşme tutanağı detayı bulunamadı' });
    }
    
    res.json(gorusmeTutanagiDetay);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni görüşme tutanağı detayı oluştur
router.post('/', async (req, res) => {
  try {
    const gorusmeTutanagiDetay = await prisma.gorusmeTutanagiDetay.create({
      data: {
        avukatBeyani: req.body.avukatBeyani,
        muvekkilBeyani: req.body.muvekkilBeyani,
        evrakId: parseInt(req.body.evrakId)
      }
    });
    
    res.status(201).json(gorusmeTutanagiDetay);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT görüşme tutanağı detayı güncelle
router.put('/:id', async (req, res) => {
  try {
    const gorusmeTutanagiDetay = await prisma.gorusmeTutanagiDetay.update({
      where: { id: parseInt(req.params.id) },
      data: {
        avukatBeyani: req.body.avukatBeyani,
        muvekkilBeyani: req.body.muvekkilBeyani
      }
    });
    
    res.json(gorusmeTutanagiDetay);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE görüşme tutanağı detayı sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.gorusmeTutanagiDetay.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 