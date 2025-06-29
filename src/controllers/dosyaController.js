const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm dosyaları getir
exports.getAllFiles = async (req, res) => {
  try {
    const dosyalar = await prismaClient.dosya.findMany({
      include: {
        gorev: true,
        yukleyen: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        evrak: true
      }
    });
    res.json(dosyalar);
  } catch (error) {
    logger.error(`Dosyalar getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Dosyalar getirilirken hata oluştu', error: error.message });
  }
};

// Dosya detayını getir
exports.getFileById = async (req, res) => {
  try {
    const dosya = await prismaClient.dosya.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        gorev: true,
        yukleyen: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        },
        evrak: true
      }
    });
    
    if (!dosya) {
      return res.status(404).json({ message: 'Dosya bulunamadı' });
    }
    
    res.json(dosya);
  } catch (error) {
    logger.error(`Dosya ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Dosya getirilirken hata oluştu', error: error.message });
  }
};

// Belirli bir göreve ait dosyaları getir
exports.getFilesByTask = async (req, res) => {
  try {
    const dosyalar = await prismaClient.dosya.findMany({
      where: { gorevId: Number(req.params.gorevId) }
    });
    
    res.json(dosyalar);
  } catch (error) {
    logger.error(`Göreve ait dosyalar getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Göreve ait dosyalar getirilirken hata oluştu', error: error.message });
  }
};

// Belirli bir evraka ait dosyaları getir
exports.getFilesByDocument = async (req, res) => {
  try {
    const dosyalar = await prismaClient.dosya.findMany({
      where: { evrakId: Number(req.params.evrakId) }
    });
    
    res.json(dosyalar);
  } catch (error) {
    logger.error(`Evraka ait dosyalar getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Evraka ait dosyalar getirilirken hata oluştu', error: error.message });
  }
};

// Yeni dosya oluştur
exports.createFile = async (req, res) => {
  try {
    const data = {
      dosyaAdi: req.body.dosyaAdi,
      dosyaYolu: req.body.dosyaYolu,
      dosyaTipi: req.body.dosyaTipi,
      boyut: req.body.boyut ? parseFloat(req.body.boyut) : null,
      kullaniciId: Number(req.body.kullaniciId)
    };
    
    // İlişkili model için ID değerini ekleyelim
    if (req.body.gorevId) {
      data.gorevId = Number(req.body.gorevId);
    }
    
    if (req.body.evrakId) {
      data.evrakId = Number(req.body.evrakId);
    }
    
    const dosya = await prismaClient.dosya.create({
      data: data
    });
    
    logger.info(`Yeni dosya oluşturuldu: ${dosya.id}`);
    res.status(201).json(dosya);
  } catch (error) {
    logger.error(`Dosya oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Dosya oluşturulurken hata oluştu', error: error.message });
  }
};

// Dosya güncelle
exports.updateFile = async (req, res) => {
  try {
    const dosya = await prismaClient.dosya.update({
      where: { id: Number(req.params.id) },
      data: {
        dosyaAdi: req.body.dosyaAdi,
        dosyaTipi: req.body.dosyaTipi
      }
    });
    
    logger.info(`Dosya güncellendi: ${req.params.id}`);
    res.json(dosya);
  } catch (error) {
    logger.error(`Dosya ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Dosya güncellenirken hata oluştu', error: error.message });
  }
};

// Dosya sil
exports.deleteFile = async (req, res) => {
  try {
    await prismaClient.dosya.delete({
      where: { id: Number(req.params.id) }
    });
    
    logger.info(`Dosya silindi: ${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Dosya ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Dosya silinirken hata oluştu', error: error.message });
  }
}; 