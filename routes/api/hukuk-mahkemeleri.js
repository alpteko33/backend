const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm hukuk mahkemelerini getir
router.get('/', async (req, res) => {
  try {
    const hukukMahkemeleri = await prisma.hukukMahkemesi.findMany();
    res.json(hukukMahkemeleri);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek hukuk mahkemesi detayı
router.get('/:id', async (req, res) => {
  try {
    const hukukMahkemesi = await prisma.hukukMahkemesi.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    
    if (!hukukMahkemesi) {
      return res.status(404).json({ message: 'Hukuk mahkemesi bulunamadı' });
    }
    
    res.json(hukukMahkemesi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni hukuk mahkemesi oluştur
router.post('/', async (req, res) => {
  try {
    const hukukMahkemesi = await prisma.hukukMahkemesi.create({
      data: {
        ad: req.body.ad
      }
    });
    
    res.status(201).json(hukukMahkemesi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT hukuk mahkemesi güncelle
router.put('/:id', async (req, res) => {
  try {
    const hukukMahkemesi = await prisma.hukukMahkemesi.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ad: req.body.ad
      }
    });
    
    res.json(hukukMahkemesi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE hukuk mahkemesi sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.hukukMahkemesi.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 