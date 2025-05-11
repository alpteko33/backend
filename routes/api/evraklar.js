const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm evrakları getir
router.get('/', async (req, res) => {
  try {
    const evraklar = await prisma.evrak.findMany({
      include: {
        dosyalar: true,
        ilgiliMuvekkil: true,
        ilgiliDava: true,
        olusturan: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    res.json(evraklar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek evrak detayı getir
router.get('/:id', async (req, res) => {
  try {
    const evrak = await prisma.evrak.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        dosyalar: true,
        ilgiliMuvekkil: true,
        ilgiliDava: true,
        olusturan: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    
    if (!evrak) {
      return res.status(404).json({ message: 'Evrak bulunamadı' });
    }
    
    res.json(evrak);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni evrak oluştur
router.post('/', async (req, res) => {
  try {
    const evrak = await prisma.evrak.create({
      data: {
        ad: req.body.ad,
        evrakTuru: req.body.evrakTuru,
        dosyaNo: req.body.dosyaNo,
        aciklama: req.body.aciklama,
        muvekkilId: req.body.muvekkilId ? parseInt(req.body.muvekkilId) : null,
        davaId: req.body.davaId ? parseInt(req.body.davaId) : null,
        olusturanId: parseInt(req.body.olusturanId),
      }
    });
    
    res.status(201).json(evrak);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT evrak güncelle
router.put('/:id', async (req, res) => {
  try {
    const evrak = await prisma.evrak.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    
    res.json(evrak);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE evrak sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.evrak.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST evraka yeni dosya ekle
router.post('/:id/dosyalar', async (req, res) => {
  try {
    const dosya = await prisma.dosya.create({
      data: {
        dosyaAdi: req.body.dosyaAdi,
        dosyaYolu: req.body.dosyaYolu,
        dosyaTipi: req.body.dosyaTipi,
        boyut: req.body.boyut ? parseFloat(req.body.boyut) : null,
        kullaniciId: parseInt(req.body.kullaniciId),
        evrakId: parseInt(req.params.id)
      }
    });
    
    res.status(201).json(dosya);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 