const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm davaları getir
router.get('/', async (req, res) => {
  try {
    const davalar = await prisma.dava.findMany({
      include: {
        muvekkil: true,
        avukat: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            baroNo: true,
            sifre: false
          }
        },
        gorevler: true,
        notlar: true,
        evraklar: true,
        finansIslemleri: true
      }
    });
    res.json(davalar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek dava detayı getir
router.get('/:id', async (req, res) => {
  try {
    const dava = await prisma.dava.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        muvekkil: true,
        avukat: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            baroNo: true,
            sifre: false
          }
        },
        gorevler: true,
        notlar: true,
        evraklar: true,
        finansIslemleri: true
      }
    });
    
    if (!dava) {
      return res.status(404).json({ message: 'Dava bulunamadı' });
    }
    
    res.json(dava);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni dava oluştur
router.post('/', async (req, res) => {
  try {
    const dava = await prisma.dava.create({
      data: {
        dosyaNumarasi: req.body.dosyaNumarasi,
        dosyaTuru: req.body.dosyaTuru,
        mahkeme: req.body.mahkeme,
        yargiDairesi: req.body.yargiDairesi,
        durum: req.body.durum || 'AKTIF',
        dosyaAcilisTarihi: new Date(req.body.dosyaAcilisTarihi),
        muvekkilId: parseInt(req.body.muvekkilId),
        avukatId: parseInt(req.body.avukatId),
        karsiTaraf: req.body.karsiTaraf,
        karsiTarafAvukati: req.body.karsiTarafAvukati,
        acikKapali: req.body.acikKapali || 'ACIK'
      }
    });
    
    res.status(201).json(dava);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT dava güncelle
router.put('/:id', async (req, res) => {
  try {
    // Tarih değerini işle
    let data = { ...req.body };
    if (data.dosyaAcilisTarihi) {
      data.dosyaAcilisTarihi = new Date(data.dosyaAcilisTarihi);
    }
    
    const dava = await prisma.dava.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    res.json(dava);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE dava sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.dava.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET davaya ait görevleri getir
router.get('/:id/gorevler', async (req, res) => {
  try {
    const gorevler = await prisma.gorev.findMany({
      where: { davaId: parseInt(req.params.id) },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        adimlar: true
      }
    });
    
    res.json(gorevler);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET davaya ait notları getir
router.get('/:id/notlar', async (req, res) => {
  try {
    const notlar = await prisma.not.findMany({
      where: { davaId: parseInt(req.params.id) }
    });
    
    res.json(notlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST davaya yeni not ekle
router.post('/:id/notlar', async (req, res) => {
  try {
    const not = await prisma.not.create({
      data: {
        baslik: req.body.baslik,
        icerik: req.body.icerik,
        notTuru: req.body.notTuru,
        etiketler: req.body.etiketler,
        onemDurumu: req.body.onemDurumu || 'NORMAL',
        hatirlatmaTarihi: req.body.hatirlatmaTarihi ? new Date(req.body.hatirlatmaTarihi) : null,
        meblaga: req.body.meblaga,
        olusturanId: parseInt(req.body.olusturanId),
        davaId: parseInt(req.params.id)
      }
    });
    
    res.status(201).json(not);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 