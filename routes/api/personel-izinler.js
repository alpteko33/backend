const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm personel izinlerini getir
router.get('/', async (req, res) => {
  try {
    const izinler = await prisma.personelIzin.findMany({
      include: {
        personel: true,
        dosya: true
      }
    });
    res.json(izinler);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek personel izin detayı
router.get('/:id', async (req, res) => {
  try {
    const izin = await prisma.personelIzin.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        personel: true,
        dosya: true
      }
    });
    
    if (!izin) {
      return res.status(404).json({ message: 'Personel izni bulunamadı' });
    }
    
    res.json(izin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir personele ait izinleri getir
router.get('/personel/:personelId', async (req, res) => {
  try {
    const izinler = await prisma.personelIzin.findMany({
      where: { personelId: parseInt(req.params.personelId) },
      include: {
        dosya: true
      }
    });
    res.json(izinler);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni personel izni oluştur
router.post('/', async (req, res) => {
  try {
    const izin = await prisma.personelIzin.create({
      data: {
        izinTuru: req.body.izinTuru,
        baslangicTarihi: new Date(req.body.baslangicTarihi),
        bitisTarihi: new Date(req.body.bitisTarihi),
        personelId: parseInt(req.body.personelId),
        dosyaId: req.body.dosyaId ? parseInt(req.body.dosyaId) : null
      }
    });
    
    res.status(201).json(izin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT personel izni güncelle
router.put('/:id', async (req, res) => {
  try {
    const data = {};
    
    if (req.body.izinTuru) {
      data.izinTuru = req.body.izinTuru;
    }
    
    if (req.body.baslangicTarihi) {
      data.baslangicTarihi = new Date(req.body.baslangicTarihi);
    }
    
    if (req.body.bitisTarihi) {
      data.bitisTarihi = new Date(req.body.bitisTarihi);
    }
    
    if (req.body.dosyaId) {
      data.dosyaId = parseInt(req.body.dosyaId);
    }
    
    const izin = await prisma.personelIzin.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    res.json(izin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE personel izni sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.personelIzin.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 