const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm finans işlemlerini getir
exports.getAllFinancialTransactions = async (req, res) => {
  try {
    const finansIslemleri = await prismaClient.finansIslemi.findMany({
      include: {
        muvekkil: true,
        dava: true,
        kullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    res.json(finansIslemleri);
  } catch (error) {
    logger.error(`Finans işlemleri getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Finans işlemleri getirilirken hata oluştu', error: error.message });
  }
};

// Finans işlemi detayını getir
exports.getFinancialTransactionById = async (req, res) => {
  try {
    const finansIslemi = await prismaClient.finansIslemi.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        muvekkil: true,
        dava: true,
        kullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    
    if (!finansIslemi) {
      return res.status(404).json({ message: 'Finans işlemi bulunamadı' });
    }
    
    res.json(finansIslemi);
  } catch (error) {
    logger.error(`Finans işlemi ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Finans işlemi getirilirken hata oluştu', error: error.message });
  }
};

// Yeni finans işlemi oluştur
exports.createFinancialTransaction = async (req, res) => {
  try {
    const finansIslemi = await prismaClient.finansIslemi.create({
      data: {
        islemTuru: req.body.islemTuru,
        miktar: parseFloat(req.body.miktar),
        aciklama: req.body.aciklama,
        islemTarihi: new Date(req.body.islemTarihi),
        kullaniciId: parseInt(req.body.kullaniciId),
        muvekkilId: req.body.muvekkilId ? parseInt(req.body.muvekkilId) : null,
        davaId: req.body.davaId ? parseInt(req.body.davaId) : null
      }
    });
    
    logger.info(`Yeni finans işlemi oluşturuldu: ${finansIslemi.id}`);
    res.status(201).json(finansIslemi);
  } catch (error) {
    logger.error(`Finans işlemi oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Finans işlemi oluşturulurken hata oluştu', error: error.message });
  }
};

// Finans işlemi güncelle
exports.updateFinancialTransaction = async (req, res) => {
  try {
    // Tarih ve sayısal değerleri işle
    let data = { ...req.body };
    if (data.islemTarihi) {
      data.islemTarihi = new Date(data.islemTarihi);
    }
    if (data.miktar) {
      data.miktar = parseFloat(data.miktar);
    }
    if (data.muvekkilId) {
      data.muvekkilId = parseInt(data.muvekkilId);
    }
    if (data.davaId) {
      data.davaId = parseInt(data.davaId);
    }
    
    const finansIslemi = await prismaClient.finansIslemi.update({
      where: { id: parseInt(req.params.id) },
      data: data
    });
    
    logger.info(`Finans işlemi güncellendi: ${req.params.id}`);
    res.json(finansIslemi);
  } catch (error) {
    logger.error(`Finans işlemi ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Finans işlemi güncellenirken hata oluştu', error: error.message });
  }
};

// Finans işlemi sil
exports.deleteFinancialTransaction = async (req, res) => {
  try {
    await prismaClient.finansIslemi.delete({
      where: { id: parseInt(req.params.id) }
    });
    
    logger.info(`Finans işlemi silindi: ${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Finans işlemi ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Finans işlemi silinirken hata oluştu', error: error.message });
  }
};

// Finans işlemi durumu güncelle
exports.updateFinancialTransactionStatus = async (req, res) => {
  try {
    const { durum } = req.body;
    
    if (!durum || !['ONAYLANDI', 'ONAYLANMADI', 'BEKLEMEDE'].includes(durum)) {
      return res.status(400).json({ message: 'Geçersiz durum değeri' });
    }
    
    const finansIslemi = await prismaClient.finansIslemi.update({
      where: { id: parseInt(req.params.id) },
      data: { durum }
    });
    
    logger.info(`Finans işlemi durumu güncellendi: ${req.params.id}, durum: ${durum}`);
    res.json(finansIslemi);
  } catch (error) {
    logger.error(`Finans işlemi durumu güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Finans işlemi durumu güncellenirken hata oluştu', error: error.message });
  }
}; 