const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm dosyaları getir
router.get('/', async (req, res) => {
  try {
    const dosyalar = await prisma.dosya.findMany({
      include: {
        gorev: true,
        yukleyen: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        evrak: true
      }
    });
    res.json(dosyalar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek dosya detayı getir
router.get('/:id', async (req, res) => {
  try {
    const dosya = await prisma.dosya.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        gorev: true,
        yukleyen: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        evrak: true
      }
    });
    
    if (!dosya) {
      return res.status(404).json({ message: 'Dosya bulunamadı' });
    }
    
    res.json(dosya);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir göreve ait dosyaları getir
router.get('/gorev/:gorevId', async (req, res) => {
  try {
    const dosyalar = await prisma.dosya.findMany({
      where: { gorevId: parseInt(req.params.gorevId) }
    });
    
    res.json(dosyalar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir evraka ait dosyaları getir
router.get('/evrak/:evrakId', async (req, res) => {
  try {
    const dosyalar = await prisma.dosya.findMany({
      where: { evrakId: parseInt(req.params.evrakId) }
    });
    
    res.json(dosyalar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni dosya oluştur
router.post('/', async (req, res) => {
  try {
    const data = {
      dosyaAdi: req.body.dosyaAdi,
      dosyaYolu: req.body.dosyaYolu,
      dosyaTipi: req.body.dosyaTipi,
      boyut: req.body.boyut ? parseFloat(req.body.boyut) : null,
      kullaniciId: parseInt(req.body.kullaniciId)
    };
    
    // İlişkili model için ID değerini ekleyelim
    if (req.body.gorevId) {
      data.gorevId = parseInt(req.body.gorevId);
    }
    
    if (req.body.evrakId) {
      data.evrakId = parseInt(req.body.evrakId);
    }
    
    const dosya = await prisma.dosya.create({
      data: data
    });
    
    res.status(201).json(dosya);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT dosya güncelle
router.put('/:id', async (req, res) => {
  try {
    const dosya = await prisma.dosya.update({
      where: { id: parseInt(req.params.id) },
      data: {
        dosyaAdi: req.body.dosyaAdi,
        dosyaTipi: req.body.dosyaTipi
      }
    });
    
    res.json(dosya);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE dosya sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.dosya.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 