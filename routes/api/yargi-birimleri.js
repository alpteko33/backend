const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm yargı birimlerini getir
router.get('/', async (req, res) => {
  try {
    const yargiBirimleri = await prisma.yargiBirimi.findMany();
    res.json(yargiBirimleri);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek yargı birimi detayı
router.get('/:id', async (req, res) => {
  try {
    const yargiBirimi = await prisma.yargiBirimi.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    
    if (!yargiBirimi) {
      return res.status(404).json({ message: 'Yargı birimi bulunamadı' });
    }
    
    res.json(yargiBirimi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir yargı türüne ait birimleri getir
router.get('/yargi-turu/:yargiTuru', async (req, res) => {
  try {
    const yargiBirimleri = await prisma.yargiBirimi.findMany({
      where: { yargiTuru: req.params.yargiTuru }
    });
    res.json(yargiBirimleri);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni yargı birimi oluştur
router.post('/', async (req, res) => {
  try {
    const yargiBirimi = await prisma.yargiBirimi.create({
      data: {
        ad: req.body.ad,
        yargiTuru: req.body.yargiTuru,
        birimTuru: req.body.birimTuru
      }
    });
    
    res.status(201).json(yargiBirimi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT yargı birimi güncelle
router.put('/:id', async (req, res) => {
  try {
    const yargiBirimi = await prisma.yargiBirimi.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ad: req.body.ad,
        yargiTuru: req.body.yargiTuru,
        birimTuru: req.body.birimTuru
      }
    });
    
    res.json(yargiBirimi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE yargı birimi sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.yargiBirimi.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 