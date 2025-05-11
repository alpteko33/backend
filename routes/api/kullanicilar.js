const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET tüm kullanıcıları getir
router.get('/', async (req, res) => {
  try {
    const kullanicilar = await prisma.kullanici.findMany({
      select: {
        id: true,
        eposta: true,
        ad: true,
        soyad: true,
        rol: true,
        durum: true,
        baroNo: true,
        tcKimlikNo: true,
        telefonNo: true,
        adres: true,
        profilResmi: true,
        olusturulmaTarihi: true,
        sifre: false // Şifre verisini gönderme
      }
    });
    res.json(kullanicilar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET tek kullanıcı detayı getir
router.get('/:id', async (req, res) => {
  try {
    const kullanici = await prisma.kullanici.findUnique({
      where: { id: parseInt(req.params.id) },
      select: {
        id: true,
        eposta: true,
        ad: true,
        soyad: true,
        rol: true,
        durum: true,
        baroNo: true,
        tcKimlikNo: true,
        telefonNo: true,
        adres: true,
        profilResmi: true,
        olusturulmaTarihi: true,
        sifre: false // Şifre verisini gönderme
      }
    });
    
    if (!kullanici) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    res.json(kullanici);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST yeni kullanıcı oluştur
router.post('/', async (req, res) => {
  try {
    // Şifre hash'leme işlemi burada yapılabilir (bcrypt ile)
    const kullanici = await prisma.kullanici.create({
      data: {
        eposta: req.body.eposta,
        sifre: req.body.sifre, // Gerçek uygulamada hash'lenmiş şifre kullanılmalı
        ad: req.body.ad,
        soyad: req.body.soyad,
        rol: req.body.rol,
        durum: req.body.durum || 'AKTIF',
        baroNo: req.body.baroNo,
        tcKimlikNo: req.body.tcKimlikNo,
        telefonNo: req.body.telefonNo,
        adres: req.body.adres,
        profilResmi: req.body.profilResmi
      }
    });
    
    // Şifreyi çıkararak dön
    const { sifre, ...kullaniciDondurulen } = kullanici;
    res.status(201).json(kullaniciDondurulen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT kullanıcı güncelle
router.put('/:id', async (req, res) => {
  try {
    const { sifre, ...digerVeriler } = req.body;
    
    const kullanici = await prisma.kullanici.update({
      where: { id: parseInt(req.params.id) },
      data: digerVeriler
    });
    
    // Şifreyi çıkararak dön
    const { sifre: kullaniciSifre, ...kullaniciDondurulen } = kullanici;
    res.json(kullaniciDondurulen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE kullanıcı sil
router.delete('/:id', async (req, res) => {
  try {
    await prisma.kullanici.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT şifre değiştir
router.put('/:id/sifre-degistir', async (req, res) => {
  try {
    const { eskiSifre, yeniSifre } = req.body;
    
    // Kullanıcıyı bul
    const kullanici = await prisma.kullanici.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    
    if (!kullanici) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    // Eski şifreyi kontrol et (gerçek uygulamada bcrypt.compare kullanılmalı)
    if (kullanici.sifre !== eskiSifre) {
      return res.status(400).json({ message: 'Eski şifre yanlış' });
    }
    
    // Şifreyi güncelle
    const guncellenenKullanici = await prisma.kullanici.update({
      where: { id: parseInt(req.params.id) },
      data: { sifre: yeniSifre } // Gerçek uygulamada hash'lenmiş şifre kullanılmalı
    });
    
    res.json({ message: 'Şifre başarıyla değiştirildi' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 