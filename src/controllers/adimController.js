const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm adımları getir
exports.getAllSteps = async (req, res) => {
  try {
    const adimlar = await prismaClient.adim.findMany({
      include: {
        gorev: true
      }
    });
    res.json(adimlar);
  } catch (error) {
    logger.error(`Adımlar getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Adımlar getirilirken hata oluştu', error: error.message });
  }
};

// Adım detayını getir
exports.getStepById = async (req, res) => {
  try {
    const adim = await prismaClient.adim.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        gorev: true
      }
    });
    
    if (!adim) {
      return res.status(404).json({ message: 'Adım bulunamadı' });
    }
    
    res.json(adim);
  } catch (error) {
    logger.error(`Adım ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Adım getirilirken hata oluştu', error: error.message });
  }
};

// Belirli bir göreve ait adımları getir
exports.getStepsByTask = async (req, res) => {
  try {
    const adimlar = await prismaClient.adim.findMany({
      where: { gorevId: Number(req.params.gorevId) },
      orderBy: { sira: 'asc' }
    });
    
    res.json(adimlar);
  } catch (error) {
    logger.error(`Göreve ait adımlar getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Göreve ait adımlar getirilirken hata oluştu', error: error.message });
  }
};

// Yeni adım oluştur
exports.createStep = async (req, res) => {
  try {
    const adim = await prismaClient.adim.create({
      data: {
        metin: req.body.metin,
        tamamlandi: req.body.tamamlandi || false,
        sira: req.body.sira,
        gorevId: Number(req.body.gorevId)
      }
    });
    
    logger.info(`Yeni adım oluşturuldu: ${adim.id}`);
    res.status(201).json(adim);
  } catch (error) {
    logger.error(`Adım oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Adım oluşturulurken hata oluştu', error: error.message });
  }
};

// Adım güncelle
exports.updateStep = async (req, res) => {
  try {
    const adim = await prismaClient.adim.update({
      where: { id: Number(req.params.id) },
      data: {
        metin: req.body.metin,
        tamamlandi: req.body.tamamlandi,
        sira: req.body.sira
      }
    });
    
    logger.info(`Adım güncellendi: ${req.params.id}`);
    res.json(adim);
  } catch (error) {
    logger.error(`Adım ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Adım güncellenirken hata oluştu', error: error.message });
  }
};

// Adımın tamamlanma durumunu güncelle
exports.updateStepStatus = async (req, res) => {
  try {
    const adim = await prismaClient.adim.update({
      where: { id: Number(req.params.id) },
      data: {
        tamamlandi: req.body.tamamlandi
      }
    });
    
    logger.info(`Adım durumu güncellendi: ${req.params.id}, Tamamlandı: ${req.body.tamamlandi}`);
    res.json(adim);
  } catch (error) {
    logger.error(`Adım durumu güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Adım durumu güncellenirken hata oluştu', error: error.message });
  }
};

// Adım sil
exports.deleteStep = async (req, res) => {
  try {
    await prismaClient.adim.delete({
      where: { id: Number(req.params.id) }
    });
    
    logger.info(`Adım silindi: ${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Adım ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Adım silinirken hata oluştu', error: error.message });
  }
}; 