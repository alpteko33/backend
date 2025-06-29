const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Kullanıcılar arası çalışma ilişkisi kur
exports.createColleagueRelation = async (req, res) => {
  try {
    const { kullaniciId, arkadasId } = req.body;
    
    if (!kullaniciId || !arkadasId) {
      return res.status(400).json({ message: 'Kullanıcı ID ve arkadaş ID gereklidir' });
    }

    // Her iki kullanıcının da var olduğunu kontrol et
    const kullanici = await prismaClient.kullanici.findUnique({ 
      where: { id: parseInt(kullaniciId) } 
    });
    
    const arkadas = await prismaClient.kullanici.findUnique({ 
      where: { id: parseInt(arkadasId) } 
    });
    
    if (!kullanici || !arkadas) {
      return res.status(404).json({ message: 'Kullanıcılardan biri veya her ikisi de bulunamadı' });
    }
    
    // Çalışma arkadaşı ilişkisi kur
    // Kullanıcı 1'in çalışma arkadaşı olarak Kullanıcı 2'yi ekle
    const calismaArkadasi = await prismaClient.calismaArkadasi.create({
      data: {
        ad: arkadas.ad,
        soyad: arkadas.soyad,
        tcKimlikNo: arkadas.tcKimlikNo || null,
        telefonNo: arkadas.telefonNo || null,
        eposta: arkadas.eposta,
        adres: arkadas.adres || null,
        baro: arkadas.baro || null,
        baroNo: arkadas.baroNo || null,
        kullaniciId: parseInt(kullaniciId)
      }
    });
    
    logger.info(`Çalışma arkadaşlığı ilişkisi kuruldu: Kullanıcı ${kullaniciId} -> Arkadaş ${arkadasId}`);
    res.status(201).json({
      message: 'Çalışma arkadaşlığı ilişkisi başarıyla kuruldu',
      calismaArkadasi
    });
  } catch (error) {
    logger.error(`Çalışma arkadaşlığı ilişkisi kurulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Çalışma arkadaşı ilişkisi kurulurken hata oluştu', error: error.toString() });
  }
};

// Tüm çalışma arkadaşlarını getir
exports.getAllColleagues = async (req, res) => {
  try {
    const calismaArkadaslari = await prismaClient.calismaArkadasi.findMany({
      include: {
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
    res.json(calismaArkadaslari);
  } catch (error) {
    logger.error(`Çalışma arkadaşları getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Çalışma arkadaşları getirilirken hata oluştu', error: error.message });
  }
};

// Çalışma arkadaşı detayını getir
exports.getColleagueById = async (req, res) => {
  try {
    const calismaArkadasi = await prismaClient.calismaArkadasi.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
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
    
    if (!calismaArkadasi) {
      return res.status(404).json({ message: 'Çalışma arkadaşı bulunamadı' });
    }
    
    res.json(calismaArkadasi);
  } catch (error) {
    logger.error(`Çalışma arkadaşı ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Çalışma arkadaşı getirilirken hata oluştu', error: error.message });
  }
};

// Belirli bir kullanıcıya ait çalışma arkadaşlarını getir
exports.getColleaguesByUser = async (req, res) => {
  try {
    const calismaArkadaslari = await prismaClient.calismaArkadasi.findMany({
      where: { kullaniciId: parseInt(req.params.kullaniciId) }
    });
    
    res.json(calismaArkadaslari);
  } catch (error) {
    logger.error(`Kullanıcıya ait çalışma arkadaşları getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Kullanıcıya ait çalışma arkadaşları getirilirken hata oluştu', error: error.message });
  }
};

// Yeni çalışma arkadaşı oluştur
exports.createColleague = async (req, res) => {
  try {
    const calismaArkadasi = await prismaClient.calismaArkadasi.create({
      data: {
        ad: req.body.ad,
        soyad: req.body.soyad,
        tcKimlikNo: req.body.tcKimlikNo,
        telefonNo: req.body.telefonNo,
        eposta: req.body.eposta,
        adres: req.body.adres,
        baro: req.body.baro,
        baroNo: req.body.baroNo,
        kullaniciId: parseInt(req.body.kullaniciId)
      }
    });
    
    logger.info(`Yeni çalışma arkadaşı oluşturuldu: ${calismaArkadasi.id}`);
    res.status(201).json(calismaArkadasi);
  } catch (error) {
    logger.error(`Çalışma arkadaşı oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Çalışma arkadaşı oluşturulurken hata oluştu', error: error.message });
  }
};

// Çalışma arkadaşı güncelle
exports.updateColleague = async (req, res) => {
  try {
    const calismaArkadasi = await prismaClient.calismaArkadasi.update({
      where: { id: parseInt(req.params.id) },
      data: {
        ad: req.body.ad,
        soyad: req.body.soyad,
        tcKimlikNo: req.body.tcKimlikNo,
        telefonNo: req.body.telefonNo,
        eposta: req.body.eposta,
        adres: req.body.adres,
        baro: req.body.baro,
        baroNo: req.body.baroNo
      }
    });
    
    logger.info(`Çalışma arkadaşı güncellendi: ${req.params.id}`);
    res.json(calismaArkadasi);
  } catch (error) {
    logger.error(`Çalışma arkadaşı ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Çalışma arkadaşı güncellenirken hata oluştu', error: error.message });
  }
};

// Çalışma arkadaşı sil
exports.deleteColleague = async (req, res) => {
  try {
    await prismaClient.calismaArkadasi.delete({
      where: { id: parseInt(req.params.id) }
    });
    
    logger.info(`Çalışma arkadaşı silindi: ${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Çalışma arkadaşı ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Çalışma arkadaşı silinirken hata oluştu', error: error.message });
  }
}; 