const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm ceza mahkemelerini getir
router.get('/', async (req, res) => {
  try {
    const cezaMahkemeleri = await prisma.cezaMahkemesi.findMany();
    res.json(cezaMahkemeleri);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek ceza mahkemesi detayı
router.get('/:id', async (req, res) => {
  try {
    const cezaMahkemesi = await prisma.cezaMahkemesi.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    
    if (!cezaMahkemesi) {
      return res.status(404).json({ message: 'Ceza mahkemesi bulunamadı' });
    }
    
    res.json(cezaMahkemesi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni ceza mahkemesi oluştur
router.post('/', async (req, res) => {
  try {
    const cezaMahkemesi = await prisma.cezaMahkemesi.create({
      data: {
        ad: req.body.ad
      }
    });
    
    res.status(201).json(cezaMahkemesi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT ceza mahkemesi güncelle
router.put('/:id', async (req, res) => {
  try {
    const cezaMahkemesi = await prisma.cezaMahkemesi.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ad: req.body.ad
      }
    });
    
    res.json(cezaMahkemesi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE ceza mahkemesi sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.cezaMahkemesi.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 