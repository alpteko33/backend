const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm görüşme tutanağı detaylarını getir
exports.getAllMeetingNoteDetails = async (req, res) => {
  try {
    const gorusmeTutanagiDetaylar = await prismaClient.gorusmeTutanagiDetay.findMany({
      include: {
        evrak: true
      }
    });
    res.json(gorusmeTutanagiDetaylar);
  } catch (error) {
    logger.error(`Görüşme tutanağı detayları getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görüşme tutanağı detayları getirilirken hata oluştu', error: error.message });
  }
};

// Görüşme tutanağı detayını getir
exports.getMeetingNoteDetailById = async (req, res) => {
  try {
    const gorusmeTutanagiDetay = await prismaClient.gorusmeTutanagiDetay.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        evrak: true
      }
    });
    
    if (!gorusmeTutanagiDetay) {
      return res.status(404).json({ message: 'Görüşme tutanağı detayı bulunamadı' });
    }
    
    res.json(gorusmeTutanagiDetay);
  } catch (error) {
    logger.error(`Görüşme tutanağı detayı ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görüşme tutanağı detayı getirilirken hata oluştu', error: error.message });
  }
};

// Belirli bir evraka ait görüşme tutanağı detayını getir
exports.getMeetingNoteDetailByDocument = async (req, res) => {
  try {
    const gorusmeTutanagiDetay = await prismaClient.gorusmeTutanagiDetay.findUnique({
      where: { evrakId: parseInt(req.params.evrakId) }
    });
    
    if (!gorusmeTutanagiDetay) {
      return res.status(404).json({ message: 'Görüşme tutanağı detayı bulunamadı' });
    }
    
    res.json(gorusmeTutanagiDetay);
  } catch (error) {
    logger.error(`Evraka ait görüşme tutanağı detayı getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Evraka ait görüşme tutanağı detayı getirilirken hata oluştu', error: error.message });
  }
};

// Yeni görüşme tutanağı detayı oluştur
exports.createMeetingNoteDetail = async (req, res) => {
  try {
    const gorusmeTutanagiDetay = await prismaClient.gorusmeTutanagiDetay.create({
      data: {
        avukatBeyani: req.body.avukatBeyani,
        muvekkilBeyani: req.body.muvekkilBeyani,
        evrakId: parseInt(req.body.evrakId)
      }
    });
    
    logger.info(`Yeni görüşme tutanağı detayı oluşturuldu: ${gorusmeTutanagiDetay.id}`);
    res.status(201).json(gorusmeTutanagiDetay);
  } catch (error) {
    logger.error(`Görüşme tutanağı detayı oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görüşme tutanağı detayı oluşturulurken hata oluştu', error: error.message });
  }
};

// Görüşme tutanağı detayı güncelle
exports.updateMeetingNoteDetail = async (req, res) => {
  try {
    const gorusmeTutanagiDetay = await prismaClient.gorusmeTutanagiDetay.update({
      where: { id: parseInt(req.params.id) },
      data: {
        avukatBeyani: req.body.avukatBeyani,
        muvekkilBeyani: req.body.muvekkilBeyani
      }
    });
    
    logger.info(`Görüşme tutanağı detayı güncellendi: ${req.params.id}`);
    res.json(gorusmeTutanagiDetay);
  } catch (error) {
    logger.error(`Görüşme tutanağı detayı ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görüşme tutanağı detayı güncellenirken hata oluştu', error: error.message });
  }
};

// Görüşme tutanağı detayı sil
exports.deleteMeetingNoteDetail = async (req, res) => {
  try {
    await prismaClient.gorusmeTutanagiDetay.delete({
      where: { id: parseInt(req.params.id) }
    });
    
    logger.info(`Görüşme tutanağı detayı silindi: ${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Görüşme tutanağı detayı ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görüşme tutanağı detayı silinirken hata oluştu', error: error.message });
  }
}; 