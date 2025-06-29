const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm personel ücret pusulalarını getir
exports.getAllPayslips = async (req, res) => {
  try {
    const ucretPusulalari = await prismaClient.personelUcretPusulasi.findMany({
      include: {
        personel: true,
        dosya: true
      }
    });
    res.json(ucretPusulalari);
  } catch (error) {
    logger.error(`Personel ücret pusulaları getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel ücret pusulaları getirilirken hata oluştu', error: error.message });
  }
};

// Personel ücret pusulası detayını getir
exports.getPayslipById = async (req, res) => {
  try {
    const ucretPusulasi = await prismaClient.personelUcretPusulasi.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        personel: true,
        dosya: true
      }
    });
    
    if (!ucretPusulasi) {
      return res.status(404).json({ message: 'Personel ücret pusulası bulunamadı' });
    }
    
    res.json(ucretPusulasi);
  } catch (error) {
    logger.error(`Personel ücret pusulası ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel ücret pusulası getirilirken hata oluştu', error: error.message });
  }
};

// Belirli bir personele ait ücret pusulalarını getir
exports.getPayslipsByPersonnel = async (req, res) => {
  try {
    const ucretPusulalari = await prismaClient.personelUcretPusulasi.findMany({
      where: { personelId: parseInt(req.params.personelId) },
      include: {
        dosya: true
      }
    });
    res.json(ucretPusulalari);
  } catch (error) {
    logger.error(`Personele ait ücret pusulaları getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personele ait ücret pusulaları getirilirken hata oluştu', error: error.message });
  }
};

// Yeni personel ücret pusulası oluştur
exports.createPayslip = async (req, res) => {
  try {
    const ucretPusulasi = await prismaClient.personelUcretPusulasi.create({
      data: {
        donem: req.body.donem,
        brutUcret: parseFloat(req.body.brutUcret),
        netUcret: parseFloat(req.body.netUcret),
        personelId: parseInt(req.body.personelId),
        dosyaId: req.body.dosyaId ? parseInt(req.body.dosyaId) : null
      }
    });
    
    logger.info(`Yeni personel ücret pusulası oluşturuldu: ${ucretPusulasi.id}`);
    res.status(201).json(ucretPusulasi);
  } catch (error) {
    logger.error(`Personel ücret pusulası oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel ücret pusulası oluşturulurken hata oluştu', error: error.message });
  }
};

// Personel ücret pusulası güncelle
exports.updatePayslip = async (req, res) => {
  try {
    const data = {};
    
    if (req.body.donem) {
      data.donem = req.body.donem;
    }
    
    if (req.body.brutUcret) {
      data.brutUcret = parseFloat(req.body.brutUcret);
    }
    
    if (req.body.netUcret) {
      data.netUcret = parseFloat(req.body.netUcret);
    }
    
    if (req.body.dosyaId) {
      data.dosyaId = parseInt(req.body.dosyaId);
    }
    
    const ucretPusulasi = await prismaClient.personelUcretPusulasi.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    logger.info(`Personel ücret pusulası güncellendi: ${req.params.id}`);
    res.json(ucretPusulasi);
  } catch (error) {
    logger.error(`Personel ücret pusulası ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel ücret pusulası güncellenirken hata oluştu', error: error.message });
  }
};

// Personel ücret pusulası sil
exports.deletePayslip = async (req, res) => {
  try {
    await prismaClient.personelUcretPusulasi.delete({
      where: { id: parseInt(req.params.id) }
    });
    
    logger.info(`Personel ücret pusulası silindi: ${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Personel ücret pusulası ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel ücret pusulası silinirken hata oluştu', error: error.message });
  }
}; 