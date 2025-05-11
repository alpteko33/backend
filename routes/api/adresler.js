const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm adresleri getir
router.get('/', async (req, res) => {
  try {
    const adresler = await prisma.adres.findMany({
      include: {
        muvekkil: true,
        irtibat: true,
        personel: true,
        calismaArkadasi: true
      }
    });
    res.json(adresler);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek adres detayı getir
router.get('/:id', async (req, res) => {
  try {
    const adres = await prisma.adres.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        muvekkil: true,
        irtibat: true,
        personel: true,
        calismaArkadasi: true
      }
    });
    
    if (!adres) {
      return res.status(404).json({ message: 'Adres bulunamadı' });
    }
    
    res.json(adres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni adres oluştur
router.post('/', async (req, res) => {
  try {
    const data = {
      adresSatiri: req.body.adresSatiri,
      sehir: req.body.sehir,
      ilce: req.body.ilce,
      postaKodu: req.body.postaKodu,
      ulke: req.body.ulke || 'Türkiye',
      adresTipi: req.body.adresTipi || 'EV'
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
    
    const adres = await prisma.adres.create({
      data: data
    });
    
    res.status(201).json(adres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT adres güncelle
router.put('/:id', async (req, res) => {
  try {
    const adres = await prisma.adres.update({
      where: { id: parseInt(req.params.id) },
      data: {
        adresSatiri: req.body.adresSatiri,
        sehir: req.body.sehir,
        ilce: req.body.ilce,
        postaKodu: req.body.postaKodu,
        ulke: req.body.ulke,
        adresTipi: req.body.adresTipi
      }
    });
    
    res.json(adres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE adres sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.adres.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;