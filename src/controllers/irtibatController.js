const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Tüm irtibatları getir
exports.getAllContacts = async (req, res) => {
  try {
    const irtibatlar = await prisma.irtibat.findMany({
      include: {
        kullanici: true
      }
    });
    res.json(irtibatlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Yeni irtibat oluştur
exports.createContact = async (req, res) => {
  try {
    const yeniIrtibat = await prisma.irtibat.create({
      data: req.body
    });
    res.status(201).json(yeniIrtibat);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Belirli bir irtibatı getir
exports.getContactById = async (req, res) => {
  try {
    const irtibat = await prisma.irtibat.findUnique({
      where: {
        id: parseInt(req.params.id)
      },
      include: {
        kullanici: true
      }
    });
    
    if (!irtibat) {
      return res.status(404).json({ message: 'İrtibat bulunamadı' });
    }
    
    res.json(irtibat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// İrtibatı güncelle
exports.updateContact = async (req, res) => {
  try {
    const guncellenenIrtibat = await prisma.irtibat.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    });
    res.json(guncellenenIrtibat);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// İrtibatı sil
exports.deleteContact = async (req, res) => {
  try {
    await prisma.irtibat.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.json({ message: 'İrtibat başarıyla silindi' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Kullanıcıya göre irtibatları getir
exports.getContactsByUser = async (req, res) => {
  try {
    const irtibatlar = await prisma.irtibat.findMany({
      where: {
        kullaniciId: parseInt(req.params.kullaniciId)
      }
    });
    res.json(irtibatlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 