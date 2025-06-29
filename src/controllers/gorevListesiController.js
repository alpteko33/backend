const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const logger = require('../utils/logger');

// Tüm görev listelerini getir
exports.getAllGorevListeleri = async (req, res) => {
  try {
    const gorevListeleri = await prisma.gorevListesi.findMany({
      include: {
        olusturan: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
        gorevler: true,
        kullanicilar: {
          include: {
            kullanici: true
          }
        }
      },
    });
    res.json(gorevListeleri);
  } catch (error) {
    logger.error(`Görev listeleri getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev listeleri getirilirken hata oluştu', error: error.message });
  }
};

// Görev listesi detayını getir
exports.getGorevListesiById = async (req, res) => {
  try {
    const { id } = req.params;
    const gorevListesi = await prisma.gorevListesi.findUnique({
      where: { id: Number(id) },
      include: {
        olusturan: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
        gorevler: {
          include: {
            atananKullanici: {
              select: {
                id: true,
                ad: true,
                soyad: true,
              }
            }
          }
        },
        kullanicilar: {
          include: {
            kullanici: {
              select: {
                id: true,
                ad: true,
                soyad: true,
                eposta: true,
              }
            }
          }
        }
      },
    });
    if (!gorevListesi) {
      return res.status(404).json({ message: 'Görev listesi bulunamadı' });
    }
    res.json(gorevListesi);
  } catch (error) {
    logger.error(`Görev listesi ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev listesi getirilirken hata oluştu', error: error.message });
  }
};

// Yeni görev listesi oluştur
exports.createGorevListesi = async (req, res) => {
  try {
    const { baslik, olusturanKullaniciId } = req.body;
    
    if (!baslik || !olusturanKullaniciId) {
      return res.status(400).json({ message: 'Başlık ve oluşturan kullanıcı ID gereklidir' });
    }
    
    // Kullanıcının varlığını kontrol et
    const kullanici = await prisma.kullanici.findUnique({
      where: { id: parseInt(olusturanKullaniciId) },
    });
    
    if (!kullanici) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    // Transaction kullanarak görev listesi oluştur ve aynı zamanda kullanıcıyı listeye ekle
    const result = await prisma.$transaction(async (prismaClient) => {
      // 1. Görev listesi oluştur
      const yeniGorevListesi = await prismaClient.gorevListesi.create({
      data: {
          ad: baslik,
          olusturanId: parseInt(olusturanKullaniciId),
      },
      include: {
        olusturan: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
      },
    });
      
      // 2. Listeyi oluşturan kullanıcıyı otomatik olarak liste kullanıcılarına ekle
      await prismaClient.gorevListesiKullanici.create({
        data: {
          gorevListesiId: yeniGorevListesi.id,
          kullaniciId: parseInt(olusturanKullaniciId),
          davetTarihi: new Date(),
          durumu: 'AKTIF'
        }
      });
      
      return yeniGorevListesi;
    });
    
    logger.info(`Yeni görev listesi oluşturuldu: ${result.id}, oluşturan: ${result.olusturanId}`);
    res.status(201).json(result);
  } catch (error) {
    logger.error(`Görev listesi oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev listesi oluşturulurken hata oluştu', error: error.message });
  }
};

// Görev listesini güncelle
exports.updateGorevListesi = async (req, res) => {
  try {
    const { id } = req.params;
    const { ad } = req.body;
    const mevcutGorevListesi = await prisma.gorevListesi.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutGorevListesi) {
      return res.status(404).json({ message: 'Görev listesi bulunamadı' });
    }
    const guncellenenGorevListesi = await prisma.gorevListesi.update({
      where: { id: Number(id) },
      data: { ad },
      include: {
        olusturan: {
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
    logger.info(`Görev listesi güncellendi: ${guncellenenGorevListesi.id}`);
    res.json(guncellenenGorevListesi);
  } catch (error) {
    logger.error(`Görev listesi ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev listesi güncellenirken hata oluştu', error: error.message });
  }
};

// Görev listesini sil
exports.deleteGorevListesi = async (req, res) => {
  try {
    const { id } = req.params;
    const mevcutGorevListesi = await prisma.gorevListesi.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutGorevListesi) {
      return res.status(404).json({ message: 'Görev listesi bulunamadı' });
    }
    
    // Önce liste kullanıcılarını sil
    await prisma.gorevListesiKullanici.deleteMany({
      where: { gorevListesiId: Number(id) },
    });
    
    // Sonra listedeki görevlerin liste referansını güncelle
    await prisma.gorev.updateMany({
      where: { listeId: Number(id) },
      data: { listeId: null },
    });
    
    // En son listeyi sil
    await prisma.gorevListesi.delete({
      where: { id: Number(id) },
    });
    
    logger.info(`Görev listesi silindi: ${id}`);
    res.json({ message: 'Görev listesi başarıyla silindi' });
  } catch (error) {
    logger.error(`Görev listesi ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev listesi silinirken hata oluştu', error: error.message });
  }
};

// Görev listesindeki görevleri getir
exports.getGorevlerByListeId = async (req, res) => {
  try {
    const { id } = req.params;
    const gorevler = await prisma.gorev.findMany({
      where: { listeId: Number(id) },
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
      },
    });
    res.json(gorevler);
  } catch (error) {
    logger.error(`Görev listesindeki görevler getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev listesindeki görevler getirilirken hata oluştu', error: error.message });
  }
};

// Görev listesine görev ekle
exports.addGorevToListe = async (req, res) => {
  try {
    const { id } = req.params;
    const { gorevId } = req.body;
    
    const liste = await prisma.gorevListesi.findUnique({
      where: { id: Number(id) },
    });
    if (!liste) {
      return res.status(404).json({ message: 'Görev listesi bulunamadı' });
    }
    
    const gorev = await prisma.gorev.findUnique({
      where: { id: Number(gorevId) },
    });
    if (!gorev) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    
    const guncellenenGorev = await prisma.gorev.update({
      where: { id: Number(gorevId) },
      data: { listeId: Number(id) },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
        liste: true,
      },
    });
    
    logger.info(`Görev (${gorevId}) listeye (${id}) eklendi`);
    res.json(guncellenenGorev);
  } catch (error) {
    logger.error(`Görev listeye eklenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev listeye eklenirken hata oluştu', error: error.message });
  }
}; 