const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm müvekkilleri getir
exports.getAllClients = async (req, res) => {
  try {
    const muvekkiller = await prismaClient.muvekkil.findMany({
      include: {
        davalar: true,
        notlar: true,
        evraklar: true,
        finansIslemleri: true,
        dosyalar: true,
        olusturanKullanici: true
      },
    });
    res.json(muvekkiller);
  } catch (error) {
    logger.error(`Müvekkiller getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Müvekkiller getirilirken hata oluştu', error: error.message });
  }
};

// Müvekkil detayını getir
exports.getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const muvekkil = await prismaClient.muvekkil.findUnique({
      where: { id: Number(id) },
      include: {
        davalar: true,
        notlar: true,
        evraklar: true,
        finansIslemleri: true,
        dosyalar: true,
        olusturanKullanici: true
      },
    });
    if (!muvekkil) {
      return res.status(404).json({ message: 'Müvekkil bulunamadı' });
    }
    res.json(muvekkil);
  } catch (error) {
    logger.error(`Müvekkil ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Müvekkil getirilirken hata oluştu', error: error.message });
  }
};

// Yeni müvekkil oluştur
exports.createClient = async (req, res) => {
  try {
    const { ad, soyad, muvekkilTipi, vergiNumarasi, firmaAdi, tcKimlikNo, telefonNo, eposta, adres } = req.body;
    const olusturanKullaniciId = req.user?.id || 1;
    const yeniMuvekkil = await prismaClient.muvekkil.create({
      data: {
        ad,
        soyad,
        muvekkilTipi: muvekkilTipi || 'GERCEK_KISI',
        vergiNumarasi,
        tcKimlikNo,
        eposta,
        telefonNo,
        adres,
        kurumAdi: firmaAdi,
        olusturanKullaniciId,
      },
      include: {
        davalar: true,
        notlar: true,
        evraklar: true,
        finansIslemleri: true,
        dosyalar: true,
        olusturanKullanici: true
      },
    });
    logger.info(`Yeni müvekkil oluşturuldu: ${yeniMuvekkil.id}`);
    res.status(201).json(yeniMuvekkil);
  } catch (error) {
    logger.error(`Müvekkil oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Müvekkil oluşturulurken hata oluştu', error: error.message });
  }
};

// Müvekkil güncelle
exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { ad, soyad, muvekkilTipi, vergiNumarasi, tcKimlikNo, kurumAdi, eposta, telefonNo, adres, tarafSifati } = req.body;
    const mevcutMuvekkil = await prismaClient.muvekkil.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutMuvekkil) {
      return res.status(404).json({ message: 'Müvekkil bulunamadı' });
    }
    const guncellenenMuvekkil = await prismaClient.muvekkil.update({
      where: { id: Number(id) },
      data: {
        ad: ad || undefined,
        soyad: soyad || undefined,
        muvekkilTipi: muvekkilTipi || undefined,
        vergiNumarasi: vergiNumarasi || undefined,
        tcKimlikNo: tcKimlikNo || undefined,
        kurumAdi: kurumAdi || undefined,
        eposta: eposta || undefined,
        telefonNo: telefonNo || undefined,
        adres: adres || undefined,
        tarafSifati: tarafSifati || undefined,
      },
      include: {
        davalar: true,
        notlar: true,
        evraklar: true,
        finansIslemleri: true,
        dosyalar: true,
        olusturanKullanici: true
      },
    });
    logger.info(`Müvekkil güncellendi: ${id}`);
    res.json(guncellenenMuvekkil);
  } catch (error) {
    logger.error(`Müvekkil ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Müvekkil güncellenirken hata oluştu', error: error.message });
  }
};

// Müvekkil sil
exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const mevcutMuvekkil = await prismaClient.muvekkil.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutMuvekkil) {
      return res.status(404).json({ message: 'Müvekkil bulunamadı' });
    }
    // İlişkili verileri sil
    await prismaClient.not.deleteMany({
      where: { muvekkilId: Number(id) },
    });
    await prismaClient.evrak.deleteMany({
      where: { muvekkilId: Number(id) },
    });
    await prismaClient.finansIslemi.deleteMany({
      where: { muvekkilId: Number(id) },
    });
    await prismaClient.dosya.deleteMany({
      where: { muvekkilId: Number(id) },
    });
    await prismaClient.dava.deleteMany({
      where: { muvekkilId: Number(id) },
    });
    // Müvekkili sil
    await prismaClient.muvekkil.delete({
      where: { id: Number(id) },
    });
    logger.info(`Müvekkil silindi: ${id}`);
    res.json({ message: 'Müvekkil başarıyla silindi' });
  } catch (error) {
    logger.error(`Müvekkil ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Müvekkil silinirken hata oluştu', error: error.message });
  }
}; 