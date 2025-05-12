const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm personel özlük evraklarını getir
router.get('/', async (req, res) => {
  try {
    const ozlukEvraklari = await prisma.personelOzlukEvraki.findMany({
      include: {
        personel: true,
        dosya: true
      }
    });
    res.json(ozlukEvraklari);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek personel özlük evrakı detayı
router.get('/:id', async (req, res) => {
  try {
    const ozlukEvraki = await prisma.personelOzlukEvraki.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        personel: true,
        dosya: true
      }
    });
    
    if (!ozlukEvraki) {
      return res.status(404).json({ message: 'Personel özlük evrakı bulunamadı' });
    }
    
    res.json(ozlukEvraki);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir personele ait özlük evraklarını getir
router.get('/personel/:personelId', async (req, res) => {
  try {
    const ozlukEvraklari = await prisma.personelOzlukEvraki.findMany({
      where: { personelId: parseInt(req.params.personelId) },
      include: {
        dosya: true
      }
    });
    res.json(ozlukEvraklari);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni personel özlük evrakı oluştur
router.post('/', async (req, res) => {
  try {
    const ozlukEvraki = await prisma.personelOzlukEvraki.create({
      data: {
        evrakTuru: req.body.evrakTuru,
        personelId: parseInt(req.body.personelId),
        dosyaId: req.body.dosyaId ? parseInt(req.body.dosyaId) : null
      }
    });
    
    res.status(201).json(ozlukEvraki);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT personel özlük evrakı güncelle
router.put('/:id', async (req, res) => {
  try {
    const data = {};
    
    if (req.body.evrakTuru) {
      data.evrakTuru = req.body.evrakTuru;
    }
    
    if (req.body.dosyaId) {
      data.dosyaId = parseInt(req.body.dosyaId);
    }
    
    const ozlukEvraki = await prisma.personelOzlukEvraki.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    res.json(ozlukEvraki);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE personel özlük evrakı sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.personelOzlukEvraki.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 