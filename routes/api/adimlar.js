const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm adımları getir
router.get('/', async (req, res) => {
  try {
    const adimlar = await prisma.adim.findMany({
      include: {
        gorev: true
      }
    });
    res.json(adimlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek adım detayı getir
router.get('/:id', async (req, res) => {
  try {
    const adim = await prisma.adim.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        gorev: true
      }
    });
    
    if (!adim) {
      return res.status(404).json({ message: 'Adım bulunamadı' });
    }
    
    res.json(adim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir göreve ait adımları getir
router.get('/gorev/:gorevId', async (req, res) => {
  try {
    const adimlar = await prisma.adim.findMany({
      where: { gorevId: parseInt(req.params.gorevId) },
      orderBy: { sira: 'asc' }
    });
    
    res.json(adimlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni adım oluştur
router.post('/', async (req, res) => {
  try {
    const adim = await prisma.adim.create({
      data: {
        metin: req.body.metin,
        tamamlandi: req.body.tamamlandi || false,
        sira: req.body.sira,
        gorevId: parseInt(req.body.gorevId)
      }
    });
    
    res.status(201).json(adim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT adım güncelle
router.put('/:id', async (req, res) => {
  try {
    const adim = await prisma.adim.update({
      where: { id: parseInt(req.params.id) },
      data: {
        metin: req.body.metin,
        tamamlandi: req.body.tamamlandi,
        sira: req.body.sira
      }
    });
    
    res.json(adim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT adımın tamamlanma durumunu güncelle
router.put('/:id/tamamlandi', async (req, res) => {
  try {
    const adim = await prisma.adim.update({
      where: { id: parseInt(req.params.id) },
      data: {
        tamamlandi: req.body.tamamlandi
      }
    });
    
    res.json(adim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE adım sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.adim.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 