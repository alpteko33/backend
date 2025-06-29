const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm yargı birimlerini getir
exports.getAllJudicialUnits = async (req, res) => {
  try {
    const yargiBirimleri = await prismaClient.yargiBirimi.findMany();
    res.json(yargiBirimleri);
  } catch (error) {
    logger.error(`Yargı birimleri getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Yargı birimleri getirilirken hata oluştu', error: error.message });
  }
};

// Yargı birimi detayını getir
exports.getJudicialUnitById = async (req, res) => {
  try {
    const yargiBirimi = await prismaClient.yargiBirimi.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    
    if (!yargiBirimi) {
      return res.status(404).json({ message: 'Yargı birimi bulunamadı' });
    }
    
    res.json(yargiBirimi);
  } catch (error) {
    logger.error(`Yargı birimi ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Yargı birimi getirilirken hata oluştu', error: error.message });
  }
};

// Belirli bir yargı türüne ait birimleri getir
exports.getJudicialUnitsByType = async (req, res) => {
  try {
    const yargiBirimleri = await prismaClient.yargiBirimi.findMany({
      where: { yargiTuru: req.params.yargiTuru }
    });
    res.json(yargiBirimleri);
  } catch (error) {
    logger.error(`Yargı türüne ait birimler getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Yargı türüne ait birimler getirilirken hata oluştu', error: error.message });
  }
};

// Yeni yargı birimi oluştur
exports.createJudicialUnit = async (req, res) => {
  try {
    const yargiBirimi = await prismaClient.yargiBirimi.create({
      data: {
        ad: req.body.ad,
        yargiTuru: req.body.yargiTuru,
        birimTuru: req.body.birimTuru
      }
    });
    
    logger.info(`Yeni yargı birimi oluşturuldu: ${yargiBirimi.id}`);
    res.status(201).json(yargiBirimi);
  } catch (error) {
    logger.error(`Yargı birimi oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Yargı birimi oluşturulurken hata oluştu', error: error.message });
  }
};

// Yargı birimi güncelle
exports.updateJudicialUnit = async (req, res) => {
  try {
    const yargiBirimi = await prismaClient.yargiBirimi.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ad: req.body.ad,
        yargiTuru: req.body.yargiTuru,
        birimTuru: req.body.birimTuru
      }
    });
    
    logger.info(`Yargı birimi güncellendi: ${req.params.id}`);
    res.json(yargiBirimi);
  } catch (error) {
    logger.error(`Yargı birimi ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Yargı birimi güncellenirken hata oluştu', error: error.message });
  }
};

// Yargı birimi sil
exports.deleteJudicialUnit = async (req, res) => {
  try {
    await prismaClient.yargiBirimi.delete({
      where: { id: parseInt(req.params.id) }
    });
    
    logger.info(`Yargı birimi silindi: ${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Yargı birimi ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Yargı birimi silinirken hata oluştu', error: error.message });
  }
}; 