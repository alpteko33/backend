const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm evrakları getir
exports.getAllDocuments = async (req, res) => {
  try {
    const evraklar = await prismaClient.evrak.findMany({
      include: {
        dosyalar: true,
        ilgiliMuvekkil: true,
        ilgiliDava: true,
        olusturan: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    res.json(evraklar);
  } catch (error) {
    logger.error(`Evraklar getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Evraklar getirilirken hata oluştu', error: error.message });
  }
};

// Evrak detayını getir
exports.getDocumentById = async (req, res) => {
  try {
    const { id } = req.params;
    const evrak = await prismaClient.evrak.findUnique({
      where: { id: Number(id) },
      include: {
        dosyalar: true,
        ilgiliMuvekkil: true,
        ilgiliDava: true,
        olusturan: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    
    if (!evrak) {
      return res.status(404).json({ message: 'Evrak bulunamadı' });
    }
    
    res.json(evrak);
  } catch (error) {
    logger.error(`Evrak ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Evrak getirilirken hata oluştu', error: error.message });
  }
};

// Yeni evrak oluştur
exports.createDocument = async (req, res) => {
  try {
    const { ad, evrakTuru, dosyaNo, aciklama, muvekkilId, davaId, olusturanId } = req.body;
    
    const evrak = await prismaClient.evrak.create({
      data: {
        ad,
        evrakTuru,
        dosyaNo,
        aciklama,
        muvekkilId: muvekkilId ? Number(muvekkilId) : null,
        davaId: davaId ? Number(davaId) : null,
        olusturanId: Number(olusturanId),
      }
    });
    
    logger.info(`Yeni evrak oluşturuldu: ${evrak.id}`);
    res.status(201).json(evrak);
  } catch (error) {
    logger.error(`Evrak oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Evrak oluşturulurken hata oluştu', error: error.message });
  }
};

// Evrak güncelle
exports.updateDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const { ad, evrakTuru, dosyaNo, aciklama, muvekkilId, davaId } = req.body;
    
    const mevcutEvrak = await prismaClient.evrak.findUnique({
      where: { id: Number(id) }
    });
    
    if (!mevcutEvrak) {
      return res.status(404).json({ message: 'Evrak bulunamadı' });
    }
    
    const evrak = await prismaClient.evrak.update({
      where: { id: Number(id) },
      data: {
        ad: ad || undefined,
        evrakTuru: evrakTuru || undefined,
        dosyaNo: dosyaNo || undefined,
        aciklama: aciklama || undefined,
        muvekkilId: muvekkilId ? Number(muvekkilId) : undefined,
        davaId: davaId ? Number(davaId) : undefined
      }
    });
    
    logger.info(`Evrak güncellendi: ${id}`);
    res.json(evrak);
  } catch (error) {
    logger.error(`Evrak ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Evrak güncellenirken hata oluştu', error: error.message });
  }
};

// Evrak sil
exports.deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;
    
    const mevcutEvrak = await prismaClient.evrak.findUnique({
      where: { id: Number(id) }
    });
    
    if (!mevcutEvrak) {
      return res.status(404).json({ message: 'Evrak bulunamadı' });
    }
    
    // İlişkili dosyaları sil (ya da null yap)
    await prismaClient.dosya.updateMany({
      where: { evrakId: Number(id) },
      data: { evrakId: null }
    });
    
    await prismaClient.evrak.delete({
      where: { id: Number(id) }
    });
    
    logger.info(`Evrak silindi: ${id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Evrak ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Evrak silinirken hata oluştu', error: error.message });
  }
};

// Evraka dosya ekle
exports.addFile = async (req, res) => {
  try {
    const { id } = req.params;
    const { dosyaAdi, dosyaYolu, dosyaTipi, boyut, kullaniciId } = req.body;
    
    const mevcutEvrak = await prismaClient.evrak.findUnique({
      where: { id: Number(id) }
    });
    
    if (!mevcutEvrak) {
      return res.status(404).json({ message: 'Evrak bulunamadı' });
    }
    
    const dosya = await prismaClient.dosya.create({
      data: {
        dosyaAdi,
        dosyaYolu,
        dosyaTipi,
        boyut: boyut ? parseFloat(boyut) : null,
        kullaniciId: Number(kullaniciId),
        evrakId: Number(id)
      }
    });
    
    logger.info(`Evraka dosya eklendi: Evrak ID ${id}, Dosya ID ${dosya.id}`);
    res.status(201).json(dosya);
  } catch (error) {
    logger.error(`Dosya eklenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Dosya eklenirken hata oluştu', error: error.message });
  }
}; 