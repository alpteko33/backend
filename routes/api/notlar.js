const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm notları getir
router.get('/', async (req, res) => {
  try {
    const notlar = await prisma.not.findMany({
      include: {
        olusturan: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        ilgiliMuvekkil: true,
        ilgiliDava: true
      }
    });
    res.json(notlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek not detayı getir
router.get('/:id', async (req, res) => {
  try {
    const not = await prisma.not.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        olusturan: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        ilgiliMuvekkil: true,
        ilgiliDava: true
      }
    });
    
    if (!not) {
      return res.status(404).json({ message: 'Not bulunamadı' });
    }
    
    res.json(not);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir müvekkile ait notları getir
router.get('/muvekkil/:muvekkilId', async (req, res) => {
  try {
    const notlar = await prisma.not.findMany({
      where: { muvekkilId: parseInt(req.params.muvekkilId) }
    });
    
    res.json(notlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir davaya ait notları getir
router.get('/dava/:davaId', async (req, res) => {
  try {
    const notlar = await prisma.not.findMany({
      where: { davaId: parseInt(req.params.davaId) }
    });
    
    res.json(notlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni not oluştur
router.post('/', async (req, res) => {
  try {
    const data = {
      baslik: req.body.baslik,
      icerik: req.body.icerik,
      notTuru: req.body.notTuru,
      etiketler: req.body.etiketler,
      onemDurumu: req.body.onemDurumu || 'NORMAL',
      hatirlatmaTarihi: req.body.hatirlatmaTarihi ? new Date(req.body.hatirlatmaTarihi) : null,
      meblaga: req.body.meblaga ? parseFloat(req.body.meblaga) : null,
      olusturanId: parseInt(req.body.olusturanId)
    };
    
    // İlişkili model için ID değerini ekleyelim
    if (req.body.muvekkilId) {
      data.muvekkilId = parseInt(req.body.muvekkilId);
    }
    
    if (req.body.davaId) {
      data.davaId = parseInt(req.body.davaId);
    }
    
    const not = await prisma.not.create({
      data: data
    });
    
    res.status(201).json(not);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT not güncelle
router.put('/:id', async (req, res) => {
  try {
    const data = {
      baslik: req.body.baslik,
      icerik: req.body.icerik,
      notTuru: req.body.notTuru,
      etiketler: req.body.etiketler,
      onemDurumu: req.body.onemDurumu,
      hatirlatmaTarihi: req.body.hatirlatmaTarihi ? new Date(req.body.hatirlatmaTarihi) : null,
      meblaga: req.body.meblaga ? parseFloat(req.body.meblaga) : null
    };
    
    const not = await prisma.not.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    res.json(not);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE not sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.not.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 