const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm personel ücret pusulalarını getir
router.get('/', async (req, res) => {
  try {
    const ucretPusulalari = await prisma.personelUcretPusulasi.findMany({
      include: {
        personel: true,
        dosya: true
      }
    });
    res.json(ucretPusulalari);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek personel ücret pusulası detayı
router.get('/:id', async (req, res) => {
  try {
    const ucretPusulasi = await prisma.personelUcretPusulasi.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        personel: true,
        dosya: true
      }
    });
    
    if (!ucretPusulasi) {
      return res.status(404).json({ message: 'Personel ücret pusulası bulunamadı' });
    }
    
    res.json(ucretPusulasi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir personele ait ücret pusulalarını getir
router.get('/personel/:personelId', async (req, res) => {
  try {
    const ucretPusulalari = await prisma.personelUcretPusulasi.findMany({
      where: { personelId: parseInt(req.params.personelId) },
      include: {
        dosya: true
      }
    });
    res.json(ucretPusulalari);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni personel ücret pusulası oluştur
router.post('/', async (req, res) => {
  try {
    const ucretPusulasi = await prisma.personelUcretPusulasi.create({
      data: {
        donem: req.body.donem,
        brutUcret: parseFloat(req.body.brutUcret),
        netUcret: parseFloat(req.body.netUcret),
        personelId: parseInt(req.body.personelId),
        dosyaId: req.body.dosyaId ? parseInt(req.body.dosyaId) : null
      }
    });
    
    res.status(201).json(ucretPusulasi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT personel ücret pusulası güncelle
router.put('/:id', async (req, res) => {
  try {
    const data = {};
    
    if (req.body.donem) {
      data.donem = req.body.donem;
    }
    
    if (req.body.brutUcret) {
      data.brutUcret = parseFloat(req.body.brutUcret);
    }
    
    if (req.body.netUcret) {
      data.netUcret = parseFloat(req.body.netUcret);
    }
    
    if (req.body.dosyaId) {
      data.dosyaId = parseInt(req.body.dosyaId);
    }
    
    const ucretPusulasi = await prisma.personelUcretPusulasi.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    res.json(ucretPusulasi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE personel ücret pusulası sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.personelUcretPusulasi.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 