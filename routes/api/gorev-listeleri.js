const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm görev listelerini getir
router.get('/', async (req, res) => {
  try {
    const gorevListeleri = await prisma.gorevListesi.findMany({
      include: {
        olusturan: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        gorevler: true,
        kullanicilar: {
          include: {
            kullanici: {
              select: {
                id: true,
                ad: true,
                soyad: true,
                sifre: false
              }
            }
          }
        }
      }
    });
    res.json(gorevListeleri);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek görev listesi detayı getir
router.get('/:id', async (req, res) => {
  try {
    const gorevListesi = await prisma.gorevListesi.findUnique({
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
        gorevler: true,
        kullanicilar: {
          include: {
            kullanici: {
              select: {
                id: true,
                ad: true,
                soyad: true,
                sifre: false
              }
            }
          }
        }
      }
    });
    
    if (!gorevListesi) {
      return res.status(404).json({ message: 'Görev listesi bulunamadı' });
    }
    
    res.json(gorevListesi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni görev listesi oluştur
router.post('/', async (req, res) => {
  try {
    const gorevListesi = await prisma.gorevListesi.create({
      data: {
        ad: req.body.ad,
        aciklama: req.body.aciklama,
        olusturanId: parseInt(req.body.olusturanId)
      }
    });
    
    res.status(201).json(gorevListesi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT görev listesi güncelle
router.put('/:id', async (req, res) => {
  try {
    const gorevListesi = await prisma.gorevListesi.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ad: req.body.ad,
        aciklama: req.body.aciklama
      }
    });
    
    res.json(gorevListesi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE görev listesi sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.gorevListesi.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST görev listesine kullanıcı ekle
router.post('/:id/kullanicilar', async (req, res) => {
  try {
    const { kullaniciId } = req.body;
    
    const gorevListesiKullanici = await prisma.gorevListesiKullanici.create({
      data: {
        gorevListesiId: parseInt(req.params.id),
        kullaniciId: parseInt(kullaniciId),
        durumu: 'AKTIF'
      }
    });
    
    res.status(201).json(gorevListesiKullanici);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE görev listesinden kullanıcı çıkar
router.delete('/:id/kullanicilar/:kullaniciId', async (req, res) => {
  try {
    await prisma.gorevListesiKullanici.deleteMany({
      where: {
        gorevListesiId: parseInt(req.params.id),
        kullaniciId: parseInt(req.params.kullaniciId)
      }
    });
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 