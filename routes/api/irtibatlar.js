const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm irtibatları getir
router.get('/', async (req, res) => {
  try {
    const irtibatlar = await prisma.irtibat.findMany({
      include: {
        kullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        adresler: true,
        iletisimler: true
      }
    });
    res.json(irtibatlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek irtibat detayı getir
router.get('/:id', async (req, res) => {
  try {
    const irtibat = await prisma.irtibat.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        kullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        adresler: true,
        iletisimler: true
      }
    });
    
    if (!irtibat) {
      return res.status(404).json({ message: 'İrtibat bulunamadı' });
    }
    
    res.json(irtibat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni irtibat oluştur
router.post('/', async (req, res) => {
  try {
    const irtibat = await prisma.irtibat.create({
      data: {
        ad: req.body.ad,
        soyad: req.body.soyad,
        tcKimlikNo: req.body.tcKimlikNo,
        telefonNo: req.body.telefonNo,
        eposta: req.body.eposta,
        baroNo: req.body.baroNo,
        irtibatTuru: req.body.irtibatTuru,
        konusu: req.body.konusu,
        planlananTarih: req.body.planlananTarih ? new Date(req.body.planlananTarih) : null,
        kullaniciId: parseInt(req.body.kullaniciId)
      }
    });
    
    res.status(201).json(irtibat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT irtibat güncelle
router.put('/:id', async (req, res) => {
  try {
    const irtibat = await prisma.irtibat.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ad: req.body.ad,
        soyad: req.body.soyad,
        tcKimlikNo: req.body.tcKimlikNo,
        telefonNo: req.body.telefonNo,
        eposta: req.body.eposta,
        baroNo: req.body.baroNo,
        irtibatTuru: req.body.irtibatTuru,
        konusu: req.body.konusu,
        planlananTarih: req.body.planlananTarih ? new Date(req.body.planlananTarih) : null
      }
    });
    
    res.json(irtibat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE irtibat sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.irtibat.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST irtibata adres ekle
router.post('/:id/adresler', async (req, res) => {
  try {
    const adres = await prisma.adres.create({
      data: {
        adresSatiri: req.body.adresSatiri,
        sehir: req.body.sehir,
        ilce: req.body.ilce,
        postaKodu: req.body.postaKodu,
        ulke: req.body.ulke || 'Türkiye',
        adresTipi: req.body.adresTipi || 'EV',
        irtibatId: parseInt(req.params.id)
      }
    });
    
    res.status(201).json(adres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST irtibata iletişim bilgisi ekle
router.post('/:id/iletisimler', async (req, res) => {
  try {
    const iletisim = await prisma.iletisim.create({
      data: {
        tip: req.body.tip,
        deger: req.body.deger,
        aciklama: req.body.aciklama,
        irtibatId: parseInt(req.params.id)
      }
    });
    
    res.status(201).json(iletisim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 