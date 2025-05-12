const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm görev listesi kullanıcıları
router.get('/', async (req, res) => {
  try {
    const listelerKullanicilar = await prisma.gorevListesiKullanici.findMany({
      include: {
        gorevListesi: true,
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
    res.json(listelerKullanicilar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek görev listesi kullanıcı detayı
router.get('/:id', async (req, res) => {
  try {
    const listeKullanici = await prisma.gorevListesiKullanici.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        gorevListesi: true,
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
    
    if (!listeKullanici) {
      return res.status(404).json({ message: 'Görev listesi kullanıcısı bulunamadı' });
    }
    
    res.json(listeKullanici);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir görev listesindeki kullanıcıları getir
router.get('/liste/:listeId', async (req, res) => {
  try {
    const listelerKullanicilar = await prisma.gorevListesiKullanici.findMany({
      where: { gorevListesiId: parseInt(req.params.listeId) },
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
    });
    res.json(listelerKullanicilar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir kullanıcının davetli olduğu görev listeleri
router.get('/kullanici/:kullaniciId', async (req, res) => {
  try {
    const listelerKullanicilar = await prisma.gorevListesiKullanici.findMany({
      where: { kullaniciId: parseInt(req.params.kullaniciId) },
      include: {
        gorevListesi: true
      }
    });
    res.json(listelerKullanicilar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni görev listesi kullanıcı ilişkisi oluştur
router.post('/', async (req, res) => {
  try {
    const listeKullanici = await prisma.gorevListesiKullanici.create({
      data: {
        gorevListesiId: parseInt(req.body.gorevListesiId),
        kullaniciId: parseInt(req.body.kullaniciId),
        durumu: req.body.durumu || 'AKTIF'
      }
    });
    
    res.status(201).json(listeKullanici);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT görev listesi kullanıcı durumunu güncelle
router.put('/:id', async (req, res) => {
  try {
    const listeKullanici = await prisma.gorevListesiKullanici.update({
      where: { id: parseInt(req.params.id) },
      data: {
        durumu: req.body.durumu
      }
    });
    
    res.json(listeKullanici);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE görev listesi kullanıcı ilişkisi sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.gorevListesiKullanici.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 