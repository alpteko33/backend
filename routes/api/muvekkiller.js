const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm müvekkilleri getir
router.get('/', async (req, res) => {
  try {
    const muvekiller = await prisma.muvekkil.findMany({
      include: {
        iletisimler: true,
        adresler: true
      }
    });
    res.json(muvekiller);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek müvekkil detayı getir
router.get('/:id', async (req, res) => {
  try {
    const muvekkil = await prisma.muvekkil.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        iletisimler: true,
        adresler: true
      }
    });
    if (!muvekkil) {
      return res.status(404).json({ message: 'Müvekkil bulunamadı' });
    }
    res.json(muvekkil);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni müvekkil oluştur
router.post('/', async (req, res) => {
  try {
    const muvekkil = await prisma.muvekkil.create({
      data: {
        ad: req.body.ad,
        soyad: req.body.soyad,
        muvekkilTipi: req.body.muvekkilTipi,
        tcKimlikNo: req.body.tcKimlikNo,
        telefonNo: req.body.telefonNo,
        eposta: req.body.eposta,
        tarafSifati: req.body.tarafSifati,
        olusturanKullaniciId: req.body.olusturanKullaniciId
      }
    });
    res.status(201).json(muvekkil);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT müvekkil güncelle
router.put('/:id', async (req, res) => {
  try {
    const muvekkil = await prisma.muvekkil.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(muvekkil);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE müvekkil sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.muvekkil.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 