const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm sözleşme detaylarını getir
exports.getAllContractDetails = async (req, res) => {
  try {
    const sozlesmeDetaylar = await prismaClient.sozlesmeDetay.findMany({
      include: {
        evrak: true
      }
    });
    res.json(sozlesmeDetaylar);
  } catch (error) {
    logger.error(`Sözleşme detayları getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Sözleşme detayları getirilirken hata oluştu', error: error.message });
  }
};

// Sözleşme detayını getir
exports.getContractDetailById = async (req, res) => {
  try {
    const sozlesmeDetay = await prismaClient.sozlesmeDetay.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        evrak: true
      }
    });
    
    if (!sozlesmeDetay) {
      return res.status(404).json({ message: 'Sözleşme detayı bulunamadı' });
    }
    
    res.json(sozlesmeDetay);
  } catch (error) {
    logger.error(`Sözleşme detayı ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Sözleşme detayı getirilirken hata oluştu', error: error.message });
  }
};

// Belirli bir evraka ait sözleşme detayını getir
exports.getContractDetailByDocument = async (req, res) => {
  try {
    const sozlesmeDetay = await prismaClient.sozlesmeDetay.findUnique({
      where: { evrakId: parseInt(req.params.evrakId) }
    });
    
    if (!sozlesmeDetay) {
      return res.status(404).json({ message: 'Sözleşme detayı bulunamadı' });
    }
    
    res.json(sozlesmeDetay);
  } catch (error) {
    logger.error(`Evraka ait sözleşme detayı getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Evraka ait sözleşme detayı getirilirken hata oluştu', error: error.message });
  }
};

// Yeni sözleşme detayı oluştur
exports.createContractDetail = async (req, res) => {
  try {
    const sozlesmeDetay = await prismaClient.sozlesmeDetay.create({
      data: {
        yargiTuru: req.body.yargiTuru,
        gorevliYargiBirimi: req.body.gorevliYargiBirimi,
        yetkiliYargiBirimi: req.body.yetkiliYargiBirimi,
        davaTuru: req.body.davaTuru,
        tevdiEdilenIs: req.body.tevdiEdilenIs,
        teslimEdilenBelgeler: req.body.teslimEdilenBelgeler,
        odemeTipi: req.body.odemeTipi,
        avukatlikUcreti: parseFloat(req.body.avukatlikUcreti),
        yargilamaGideri: parseFloat(req.body.yargilamaGideri),
        pesinMi: req.body.pesinMi !== undefined ? req.body.pesinMi : true,
        taksitBilgisi: req.body.taksitBilgisi,
        kdvOrani: parseFloat(req.body.kdvOrani),
        evrakId: parseInt(req.body.evrakId)
      }
    });
    
    logger.info(`Yeni sözleşme detayı oluşturuldu: ${sozlesmeDetay.id}`);
    res.status(201).json(sozlesmeDetay);
  } catch (error) {
    logger.error(`Sözleşme detayı oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Sözleşme detayı oluşturulurken hata oluştu', error: error.message });
  }
};

// Sözleşme detayı güncelle
exports.updateContractDetail = async (req, res) => {
  try {
    // Sayısal değerleri düzgün formata çevirelim
    let data = { ...req.body };
    if (data.avukatlikUcreti) {
      data.avukatlikUcreti = parseFloat(data.avukatlikUcreti);
    }
    if (data.yargilamaGideri) {
      data.yargilamaGideri = parseFloat(data.yargilamaGideri);
    }
    if (data.kdvOrani) {
      data.kdvOrani = parseFloat(data.kdvOrani);
    }
    if (data.pesinMi !== undefined) {
      data.pesinMi = Boolean(data.pesinMi);
    }
    
    const sozlesmeDetay = await prismaClient.sozlesmeDetay.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    logger.info(`Sözleşme detayı güncellendi: ${req.params.id}`);
    res.json(sozlesmeDetay);
  } catch (error) {
    logger.error(`Sözleşme detayı ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Sözleşme detayı güncellenirken hata oluştu', error: error.message });
  }
};

// Sözleşme detayı sil
exports.deleteContractDetail = async (req, res) => {
  try {
    await prismaClient.sozlesmeDetay.delete({
      where: { id: parseInt(req.params.id) }
    });
    
    logger.info(`Sözleşme detayı silindi: ${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Sözleşme detayı ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Sözleşme detayı silinirken hata oluştu', error: error.message });
  }
}; 