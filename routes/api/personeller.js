const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm personelleri getir
router.get('/', async (req, res) => {
  try {
    const personeller = await prisma.personel.findMany({
      include: {
        adresler: true,
        iletisimler: true,
        yonetici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    res.json(personeller);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek personel detayı getir
router.get('/:id', async (req, res) => {
  try {
    const personel = await prisma.personel.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        adresler: true,
        iletisimler: true,
        yonetici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    
    if (!personel) {
      return res.status(404).json({ message: 'Personel bulunamadı' });
    }
    
    res.json(personel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni personel oluştur
router.post('/', async (req, res) => {
  try {
    const personel = await prisma.personel.create({
      data: {
        ad: req.body.ad,
        soyad: req.body.soyad,
        tcKimlikNo: req.body.tcKimlikNo,
        telefonNo: req.body.telefonNo,
        eposta: req.body.eposta,
        gorevi: req.body.gorevi,
        maas: req.body.maas ? parseFloat(req.body.maas) : null,
        iseBaslamaTarihi: req.body.iseBaslamaTarihi ? new Date(req.body.iseBaslamaTarihi) : null,
        yoneticiId: parseInt(req.body.yoneticiId)
      }
    });
    
    res.status(201).json(personel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT personel güncelle
router.put('/:id', async (req, res) => {
  try {
    // Tarih ve sayısal değerleri işle
    let data = { ...req.body };
    if (data.iseBaslamaTarihi) {
      data.iseBaslamaTarihi = new Date(data.iseBaslamaTarihi);
    }
    if (data.maas) {
      data.maas = parseFloat(data.maas);
    }
    
    const personel = await prisma.personel.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    res.json(personel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE personel sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.personel.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST personele yeni adres ekle
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
        personelId: parseInt(req.params.id)
      }
    });
    
    res.status(201).json(adres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST personele yeni iletişim ekle
router.post('/:id/iletisimler', async (req, res) => {
  try {
    const iletisim = await prisma.iletisim.create({
      data: {
        tip: req.body.tip,
        deger: req.body.deger,
        aciklama: req.body.aciklama,
        personelId: parseInt(req.params.id)
      }
    });
    
    res.status(201).json(iletisim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 