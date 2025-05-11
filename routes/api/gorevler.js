const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm görevleri getir
router.get('/', async (req, res) => {
  try {
    const gorevler = await prisma.gorev.findMany({
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        adimlar: true,
        dava: true,
        liste: true,
        dosyalar: true
      }
    });
    res.json(gorevler);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek görev detayı getir
router.get('/:id', async (req, res) => {
  try {
    const gorev = await prisma.gorev.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        adimlar: true,
        dava: true,
        liste: true,
        dosyalar: true
      }
    });
    
    if (!gorev) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    
    res.json(gorev);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni görev oluştur
router.post('/', async (req, res) => {
  try {
    const gorev = await prisma.gorev.create({
      data: {
        baslik: req.body.baslik,
        aciklama: req.body.aciklama,
        sonTarih: req.body.sonTarih ? new Date(req.body.sonTarih) : null,
        oncelik: req.body.oncelik || 'NORMAL',
        durum: req.body.durum || 'BEKLEMEDE',
        kullaniciId: parseInt(req.body.kullaniciId),
        listeId: req.body.listeId ? parseInt(req.body.listeId) : null,
        davaId: req.body.davaId ? parseInt(req.body.davaId) : null,
        gunumGorunumunde: req.body.gunumGorunumunde || false,
        banaAnimsat: req.body.banaAnimsat ? new Date(req.body.banaAnimsat) : null,
        yinelenen: req.body.yinelenen || false
      }
    });
    
    res.status(201).json(gorev);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT görev güncelle
router.put('/:id', async (req, res) => {
  try {
    // Tarih değerlerini işle
    let data = { ...req.body };
    if (data.sonTarih) {
      data.sonTarih = new Date(data.sonTarih);
    }
    if (data.banaAnimsat) {
      data.banaAnimsat = new Date(data.banaAnimsat);
    }
    
    const gorev = await prisma.gorev.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    res.json(gorev);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE görev sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.gorev.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST göreve yeni adım ekle
router.post('/:id/adimlar', async (req, res) => {
  try {
    const adim = await prisma.adim.create({
      data: {
        metin: req.body.metin,
        tamamlandi: req.body.tamamlandi || false,
        sira: req.body.sira,
        gorevId: parseInt(req.params.id)
      }
    });
    
    res.status(201).json(adim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT adım güncelle
router.put('/adimlar/:id', async (req, res) => {
  try {
    const adim = await prisma.adim.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    
    res.json(adim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE adım sil
router.delete('/adimlar/:id', async (req, res) => {
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