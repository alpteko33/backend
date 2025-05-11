const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm iletişim bilgilerini getir
router.get('/', async (req, res) => {
  try {
    const iletisimler = await prisma.iletisim.findMany({
      include: {
        muvekkil: true,
        irtibat: true,
        personel: true,
        calismaArkadasi: true
      }
    });
    res.json(iletisimler);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek iletişim bilgisi detayı getir
router.get('/:id', async (req, res) => {
  try {
    const iletisim = await prisma.iletisim.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        muvekkil: true,
        irtibat: true,
        personel: true,
        calismaArkadasi: true
      }
    });
    
    if (!iletisim) {
      return res.status(404).json({ message: 'İletişim bilgisi bulunamadı' });
    }
    
    res.json(iletisim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni iletişim bilgisi oluştur
router.post('/', async (req, res) => {
  try {
    const data = {
      tip: req.body.tip,
      deger: req.body.deger,
      aciklama: req.body.aciklama
    };
    
    // İlişkili model için ID değerini ekleyelim
    if (req.body.muvekkilId) {
      data.muvekkilId = parseInt(req.body.muvekkilId);
    } else if (req.body.irtibatId) {
      data.irtibatId = parseInt(req.body.irtibatId);
    } else if (req.body.personelId) {
      data.personelId = parseInt(req.body.personelId);
    } else if (req.body.calismaArkadasiId) {
      data.calismaArkadasiId = parseInt(req.body.calismaArkadasiId);
    }
    
    const iletisim = await prisma.iletisim.create({
      data: data
    });
    
    res.status(201).json(iletisim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT iletişim bilgisi güncelle
router.put('/:id', async (req, res) => {
  try {
    const data = {
      tip: req.body.tip,
      deger: req.body.deger,
      aciklama: req.body.aciklama
    };
    
    const iletisim = await prisma.iletisim.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    res.json(iletisim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE iletişim bilgisi sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.iletisim.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 