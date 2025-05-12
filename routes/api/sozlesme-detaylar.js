const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm sözleşme detaylarını getir
router.get('/', async (req, res) => {
  try {
    const sozlesmeDetaylar = await prisma.sozlesmeDetay.findMany({
      include: {
        evrak: true
      }
    });
    res.json(sozlesmeDetaylar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek sözleşme detayı
router.get('/:id', async (req, res) => {
  try {
    const sozlesmeDetay = await prisma.sozlesmeDetay.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        evrak: true
      }
    });
    
    if (!sozlesmeDetay) {
      return res.status(404).json({ message: 'Sözleşme detayı bulunamadı' });
    }
    
    res.json(sozlesmeDetay);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir evraka ait sözleşme detayını getir
router.get('/evrak/:evrakId', async (req, res) => {
  try {
    const sozlesmeDetay = await prisma.sozlesmeDetay.findUnique({
      where: { evrakId: parseInt(req.params.evrakId) }
    });
    
    if (!sozlesmeDetay) {
      return res.status(404).json({ message: 'Sözleşme detayı bulunamadı' });
    }
    
    res.json(sozlesmeDetay);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni sözleşme detayı oluştur
router.post('/', async (req, res) => {
  try {
    const sozlesmeDetay = await prisma.sozlesmeDetay.create({
      data: {
        yargiTuru: req.body.yargiTuru,
        gorevliYargiBirimi: req.body.gorevliYargiBirimi,
        yetkiliYargiBirimi: req.body.yetkiliYargiBirimi,
        davaTuru: req.body.davaTuru,
        tevdiEdilenIs: req.body.tevdiEdilenIs,
        teslimEdilenBelgeler: req.body.teslimEdilenBelgeler,
        odemeTipi: req.body.odemeTipi,
        avukatlikUcreti: parseFloat(req.body.avukatlikUcreti),
        yargilamaGideri: parseFloat(req.body.yargilamaGideri),
        pesinMi: req.body.pesinMi !== undefined ? req.body.pesinMi : true,
        taksitBilgisi: req.body.taksitBilgisi,
        kdvOrani: parseFloat(req.body.kdvOrani),
        evrakId: parseInt(req.body.evrakId)
      }
    });
    
    res.status(201).json(sozlesmeDetay);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT sözleşme detayı güncelle
router.put('/:id', async (req, res) => {
  try {
    // Sayısal değerleri düzgün formata çevirelim
    let data = { ...req.body };
    if (data.avukatlikUcreti) {
      data.avukatlikUcreti = parseFloat(data.avukatlikUcreti);
    }
    if (data.yargilamaGideri) {
      data.yargilamaGideri = parseFloat(data.yargilamaGideri);
    }
    if (data.kdvOrani) {
      data.kdvOrani = parseFloat(data.kdvOrani);
    }
    if (data.pesinMi !== undefined) {
      data.pesinMi = Boolean(data.pesinMi);
    }
    
    const sozlesmeDetay = await prisma.sozlesmeDetay.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    res.json(sozlesmeDetay);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE sözleşme detayı sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.sozlesmeDetay.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 