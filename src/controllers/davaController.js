const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm davaları getir
exports.getAllLawsuits = async (req, res) => {
  try {
    const davalar = await prismaClient.dava.findMany({
      include: {
        muvekkil: true,
        avukat: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
      },
    });
    res.json(davalar);
  } catch (error) {
    logger.error(`Davalar getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Davalar getirilirken hata oluştu', error: error.message });
  }
};

// Dava detayını getir
exports.getLawsuitById = async (req, res) => {
  try {
    const { id } = req.params;
    const dava = await prismaClient.dava.findUnique({
      where: { id: Number(id) },
      include: {
        muvekkil: {
          include: {
            iletisimler: true,
            adresler: true,
          }
        },
        avukat: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
        gorevler: true,
      },
    });
    if (!dava) {
      return res.status(404).json({ message: 'Dava bulunamadı' });
    }
    res.json(dava);
  } catch (error) {
    logger.error(`Dava ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Dava getirilirken hata oluştu', error: error.message });
  }
};

// Yeni dava oluştur
exports.createLawsuit = async (req, res) => {
  try {
    const { davaNumarasi, davaTipi, mahkeme, aciklama, baslangicTarihi, muvekkilId, karsiTaraf, durum } = req.body;
    const muvekkil = await prismaClient.muvekkil.findUnique({
      where: { id: Number(muvekkilId) },
    });
    if (!muvekkil) {
      return res.status(404).json({ message: 'Müvekkil bulunamadı' });
    }
    const avukatId = req.user?.id || 1;
    const yeniDava = await prismaClient.dava.create({
      data: {
        davaNumarasi,
        davaTipi,
        mahkeme,
        aciklama,
        baslangicTarihi: new Date(baslangicTarihi),
        muvekkilId: Number(muvekkilId),
        avukatId,
        karsiTaraf,
        durum: durum || 'AKTIF',
      },
      include: {
        muvekkil: true,
        avukat: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
      },
    });
    logger.info(`Yeni dava oluşturuldu: ${yeniDava.id}`);
    res.status(201).json(yeniDava);
  } catch (error) {
    logger.error(`Dava oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Dava oluşturulurken hata oluştu', error: error.message });
  }
};

// Dava güncelle
exports.updateLawsuit = async (req, res) => {
  try {
    const { id } = req.params;
    const { davaNumarasi, davaTipi, mahkeme, aciklama, baslangicTarihi, bitisTarihi, muvekkilId, karsiTaraf, durum } = req.body;
    const mevcutDava = await prismaClient.dava.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutDava) {
      return res.status(404).json({ message: 'Dava bulunamadı' });
    }
    if (muvekkilId && muvekkilId !== mevcutDava.muvekkilId) {
      const muvekkil = await prismaClient.muvekkil.findUnique({
        where: { id: Number(muvekkilId) },
      });
      if (!muvekkil) {
        return res.status(404).json({ message: 'Müvekkil bulunamadı' });
      }
    }
    const guncellenenDava = await prismaClient.dava.update({
      where: { id: Number(id) },
      data: {
        davaNumarasi: davaNumarasi || undefined,
        davaTipi: davaTipi || undefined,
        mahkeme: mahkeme || undefined,
        aciklama: aciklama || undefined,
        baslangicTarihi: baslangicTarihi ? new Date(baslangicTarihi) : undefined,
        bitisTarihi: bitisTarihi ? new Date(bitisTarihi) : undefined,
        muvekkilId: muvekkilId ? Number(muvekkilId) : undefined,
        karsiTaraf: karsiTaraf || undefined,
        durum: durum || undefined,
      },
      include: {
        muvekkil: true,
        avukat: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
      },
    });
    logger.info(`Dava güncellendi: ${id}`);
    res.json(guncellenenDava);
  } catch (error) {
    logger.error(`Dava ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Dava güncellenirken hata oluştu', error: error.message });
  }
};

// Dava sil
exports.deleteLawsuit = async (req, res) => {
  try {
    const { id } = req.params;
    const mevcutDava = await prismaClient.dava.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutDava) {
      return res.status(404).json({ message: 'Dava bulunamadı' });
    }
    await prismaClient.gorev.updateMany({
      where: { davaId: Number(id) },
      data: { davaId: null },
    });
    await prismaClient.dava.delete({
      where: { id: Number(id) },
    });
    logger.info(`Dava silindi: ${id}`);
    res.json({ message: 'Dava başarıyla silindi' });
  } catch (error) {
    logger.error(`Dava ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Dava silinirken hata oluştu', error: error.message });
  }
};

// Davaya göre görevleri getir
exports.getLawsuitTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const mevcutDava = await prismaClient.dava.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutDava) {
      return res.status(404).json({ message: 'Dava bulunamadı' });
    }
    const gorevler = await prismaClient.gorev.findMany({
      where: { davaId: Number(id) },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
        adimlar: true,
        dosyalar: true,
        liste: true,
      },
    });
    res.json(gorevler);
  } catch (error) {
    logger.error(`Davaya ait görevler getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görevler getirilirken hata oluştu', error: error.message });
  }
}; 