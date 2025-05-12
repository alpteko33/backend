const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm finans işlemlerini getir
router.get('/', async (req, res) => {
  try {
    const finansIslemleri = await prisma.finansIslemi.findMany({
      include: {
        muvekkil: true,
        dava: true,
        kullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    res.json(finansIslemleri);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek finans işlemi detayı getir
router.get('/:id', async (req, res) => {
  try {
    const finansIslemi = await prisma.finansIslemi.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        muvekkil: true,
        dava: true,
        kullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    
    if (!finansIslemi) {
      return res.status(404).json({ message: 'Finans işlemi bulunamadı' });
    }
    
    res.json(finansIslemi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni finans işlemi oluştur
router.post('/', async (req, res) => {
  try {
    const finansIslemi = await prisma.finansIslemi.create({
      data: {
        islemTuru: req.body.islemTuru,
        miktar: parseFloat(req.body.miktar),
        aciklama: req.body.aciklama,
        islemTarihi: new Date(req.body.islemTarihi),
        kullaniciId: parseInt(req.body.kullaniciId),
        muvekkilId: req.body.muvekkilId ? parseInt(req.body.muvekkilId) : null,
        davaId: req.body.davaId ? parseInt(req.body.davaId) : null
      }
    });
    
    res.status(201).json(finansIslemi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT finans işlemi güncelle
router.put('/:id', async (req, res) => {
  try {
    // Tarih ve sayısal değerleri işle
    let data = { ...req.body };
    if (data.islemTarihi) {
      data.islemTarihi = new Date(data.islemTarihi);
    }
    if (data.miktar) {
      data.miktar = parseFloat(data.miktar);
    }
    if (data.muvekkilId) {
      data.muvekkilId = parseInt(data.muvekkilId);
    }
    if (data.davaId) {
      data.davaId = parseInt(data.davaId);
    }
    
    const finansIslemi = await prisma.finansIslemi.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    res.json(finansIslemi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE finans işlemi sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.finansIslemi.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT finans işlemi durumu güncelle
router.put('/:id/durum', async (req, res) => {
  try {
    const { durum } = req.body;
    
    if (!durum || !['ONAYLANDI', 'ONAYLANMADI', 'BEKLEMEDE'].includes(durum)) {
      return res.status(400).json({ message: 'Geçersiz durum değeri' });
    }
    
    const finansIslemi = await prisma.finansIslemi.update({
      where: { id: parseInt(req.params.id) },
      data: { durum }
    });
    
    res.json(finansIslemi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 