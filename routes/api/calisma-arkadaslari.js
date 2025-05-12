const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm çalışma arkadaşlarını getir
router.get('/', async (req, res) => {
  try {
    const calismaArkadaslari = await prisma.calismaArkadasi.findMany({
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
    res.json(calismaArkadaslari);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek çalışma arkadaşı detayı getir
router.get('/:id', async (req, res) => {
  try {
    const calismaArkadasi = await prisma.calismaArkadasi.findUnique({
      where: { id: parseInt(req.params.id) },
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
    
    if (!calismaArkadasi) {
      return res.status(404).json({ message: 'Çalışma arkadaşı bulunamadı' });
    }
    
    res.json(calismaArkadasi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET belirli bir kullanıcıya ait çalışma arkadaşlarını getir
router.get('/kullanici/:kullaniciId', async (req, res) => {
  try {
    const calismaArkadaslari = await prisma.calismaArkadasi.findMany({
      where: { kullaniciId: parseInt(req.params.kullaniciId) }
    });
    
    res.json(calismaArkadaslari);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni çalışma arkadaşı oluştur
router.post('/', async (req, res) => {
  try {
    const calismaArkadasi = await prisma.calismaArkadasi.create({
      data: {
        ad: req.body.ad,
        soyad: req.body.soyad,
        tcKimlikNo: req.body.tcKimlikNo,
        telefonNo: req.body.telefonNo,
        eposta: req.body.eposta,
        adres: req.body.adres,
        baro: req.body.baro,
        baroNo: req.body.baroNo,
        kullaniciId: parseInt(req.body.kullaniciId)
      }
    });
    
    res.status(201).json(calismaArkadasi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT çalışma arkadaşı güncelle
router.put('/:id', async (req, res) => {
  try {
    const calismaArkadasi = await prisma.calismaArkadasi.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ad: req.body.ad,
        soyad: req.body.soyad,
        tcKimlikNo: req.body.tcKimlikNo,
        telefonNo: req.body.telefonNo,
        eposta: req.body.eposta,
        adres: req.body.adres,
        baro: req.body.baro,
        baroNo: req.body.baroNo
      }
    });
    
    res.json(calismaArkadasi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE çalışma arkadaşı sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.calismaArkadasi.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 