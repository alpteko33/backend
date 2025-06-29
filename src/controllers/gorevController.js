const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm görevleri getir
exports.getAllTasks = async (req, res) => {
  try {
    const gorevler = await prismaClient.gorev.findMany({
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
        muvekkil: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dava: {
          select: {
            id: true,
            davaNumarasi: true,
            davaTipi: true,
          }
        },
        adimlar: true,
        dosyalar: true,
        liste: true,
      },
    });
    res.json(gorevler);
  } catch (error) {
    logger.error(`Görevler getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görevler getirilirken hata oluştu', error: error.message });
  }
};

// Görev detayını getir
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const gorev = await prismaClient.gorev.findUnique({
      where: { id: Number(id) },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
        muvekkil: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            iletisimler: true,
          }
        },
        dava: {
          select: {
            id: true,
            davaNumarasi: true,
            davaTipi: true,
            mahkeme: true,
          }
        },
        adimlar: true,
        dosyalar: true,
        liste: true,
      },
    });
    if (!gorev) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    res.json(gorev);
  } catch (error) {
    logger.error(`Görev ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev getirilirken hata oluştu', error: error.message });
  }
};

// Yeni görev oluştur
exports.createTask = async (req, res) => {
  try {
    const { aciklama, sonTarih, oncelik, kullaniciId, davaId, listeId, gunumGorunumunde, banaAnimsat, yinelenen } = req.body;
    
    // Atanan kullanıcıyı kontrol et
    const kullanici = await prismaClient.kullanici.findUnique({
      where: { id: Number(kullaniciId) },
    });
    
    if (!kullanici) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    // Görevi atayan kullanıcı, atanan kullanıcıdan farklı ise yetki kontrolü yap
    if (req.user.id !== Number(kullaniciId)) {
      // Yönetici her kullanıcıya görev atayabilir
      if (req.user.rol !== 'YONETICI') {
        // Çalışma arkadaşı kontrolü
        const { isCalismaArkadasi } = require('../middleware/colleagueCheck');
        const isColleague = await isCalismaArkadasi(req.user.id, Number(kullaniciId));
        
        if (!isColleague) {
          return res.status(403).json({ 
            message: 'Bu kullanıcıya görev atama yetkiniz bulunmuyor. Kullanıcı çalışma arkadaşınız değil.' 
          });
        }
      }
    }
    
    // Dava kontrolü
    if (davaId) {
      const dava = await prismaClient.dava.findUnique({
        where: { id: Number(davaId) },
      });
      if (!dava) {
        return res.status(404).json({ message: 'Dava bulunamadı' });
      }
    }
    
    // Liste kontrolü
    if (listeId) {
      const liste = await prismaClient.gorevListesi.findUnique({
        where: { id: Number(listeId) },
      });
      if (!liste) {
        return res.status(404).json({ message: 'Görev listesi bulunamadı' });
      }
      
      // Liste yetki kontrolü
      if (req.user.id !== liste.olusturanId) {
        // Çalışma arkadaşı kontrolü
        const { isCalismaArkadasi } = require('../middleware/colleagueCheck');
        const isColleague = await isCalismaArkadasi(req.user.id, liste.olusturanId);
        
        if (!isColleague) {
          // Liste kullanıcı ile paylaşılmış mı kontrol et
          const listeKullanici = await prismaClient.gorevListesiKullanici.findFirst({
            where: {
              gorevListesiId: Number(listeId),
              kullaniciId: req.user.id,
              durumu: 'AKTIF'
            }
          });
          
          if (!listeKullanici) {
            return res.status(403).json({ 
              message: 'Bu görev listesine görev ekleme yetkiniz bulunmuyor.' 
            });
          }
        }
      }
    }
    
    // Görev oluştur
    const yeniGorev = await prismaClient.gorev.create({
      data: {
        aciklama,
        sonTarih: sonTarih ? new Date(sonTarih) : null,
        oncelik: oncelik || 'NORMAL',
        durum: 'BEKLEMEDE',
        kullaniciId: Number(kullaniciId),
        davaId: davaId ? Number(davaId) : null,
        listeId: listeId ? Number(listeId) : null,
        gunumGorunumunde: gunumGorunumunde || false,
        banaAnimsat: banaAnimsat ? new Date(banaAnimsat) : null,
        yinelenen: yinelenen || false,
      },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
        dava: davaId ? {
          select: {
            id: true,
            dosyaNumarasi: true,
            dosyaTuru: true,
          }
        } : undefined,
        adimlar: true,
        dosyalar: true,
        liste: true,
      },
    });
    
    logger.info(`Yeni görev oluşturuldu: ${yeniGorev.id}, atanan kullanıcı: ${kullaniciId}`);
    res.status(201).json(yeniGorev);
  } catch (error) {
    logger.error(`Görev oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev oluşturulurken hata oluştu', error: error.message });
  }
};

// Görev güncelle
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { baslik, aciklama, sonTarih, oncelik, durum, kullaniciId, muvekkilId, davaId, listeId, gunumGorunumunde, banaAnimsat, yinelenen } = req.body;
    const mevcutGorev = await prismaClient.gorev.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutGorev) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    if (kullaniciId && kullaniciId !== mevcutGorev.kullaniciId) {
      const kullanici = await prismaClient.kullanici.findUnique({
        where: { id: Number(kullaniciId) },
      });
      if (!kullanici) {
        return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
      }
    }
    if (muvekkilId && muvekkilId !== mevcutGorev.muvekkilId) {
      const muvekkil = await prismaClient.muvekkil.findUnique({
        where: { id: Number(muvekkilId) },
      });
      if (!muvekkil) {
        return res.status(404).json({ message: 'Müvekkil bulunamadı' });
      }
    }
    if (davaId && davaId !== mevcutGorev.davaId) {
      const dava = await prismaClient.dava.findUnique({
        where: { id: Number(davaId) },
      });
      if (!dava) {
        return res.status(404).json({ message: 'Dava bulunamadı' });
      }
    }
    const guncellenenGorev = await prismaClient.gorev.update({
      where: { id: Number(id) },
      data: {
        baslik: baslik || undefined,
        aciklama: aciklama || undefined,
        sonTarih: sonTarih ? new Date(sonTarih) : undefined,
        oncelik: oncelik || undefined,
        durum: durum || undefined,
        kullaniciId: kullaniciId ? Number(kullaniciId) : undefined,
        muvekkilId: muvekkilId ? Number(muvekkilId) : undefined,
        davaId: davaId ? Number(davaId) : undefined,
        listeId: listeId ? Number(listeId) : undefined,
        gunumGorunumunde: gunumGorunumunde || undefined,
        banaAnimsat: banaAnimsat ? new Date(banaAnimsat) : undefined,
        yinelenen: yinelenen || undefined,
      },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
          }
        },
        muvekkil: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dava: {
          select: {
            id: true,
            davaNumarasi: true,
            davaTipi: true,
          }
        },
        adimlar: true,
        dosyalar: true,
        liste: true,
      },
    });
    logger.info(`Görev güncellendi: ${id}`);
    res.json(guncellenenGorev);
  } catch (error) {
    logger.error(`Görev ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev güncellenirken hata oluştu', error: error.message });
  }
};

// Görev sil
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const mevcutGorev = await prismaClient.gorev.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutGorev) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    await prismaClient.adim.deleteMany({
      where: { gorevId: Number(id) },
    });
    await prismaClient.dosya.deleteMany({
      where: { gorevId: Number(id) },
    });
    await prismaClient.gorev.delete({
      where: { id: Number(id) },
    });
    logger.info(`Görev silindi: ${id}`);
    res.json({ message: 'Görev başarıyla silindi' });
  } catch (error) {
    logger.error(`Görev ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev silinirken hata oluştu', error: error.message });
  }
};

// Göreve yeni adım ekle
exports.addStep = async (req, res) => {
  try {
    const { id } = req.params;
    const { baslik, aciklama, tamamlandi } = req.body;
    const mevcutGorev = await prismaClient.gorev.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutGorev) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    const yeniAdim = await prismaClient.adim.create({
      data: {
        baslik,
        aciklama,
        tamamlandi: tamamlandi || false,
        gorevId: Number(id),
      },
    });
    logger.info(`Göreve adım eklendi: Görev ID ${id}, Adım ID ${yeniAdim.id}`);
    res.status(201).json(yeniAdim);
  } catch (error) {
    logger.error(`Adım eklenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Adım eklenirken hata oluştu', error: error.message });
  }
};

// Göreve bağlı adımları getir
exports.getTaskSteps = async (req, res) => {
  try {
    const { id } = req.params;
    const mevcutGorev = await prismaClient.gorev.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutGorev) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    const adimlar = await prismaClient.adim.findMany({
      where: { gorevId: Number(id) },
    });
    res.json(adimlar);
  } catch (error) {
    logger.error(`Göreve ait adımlar getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Adımlar getirilirken hata oluştu', error: error.message });
  }
};

// Kullanıcının görevlerini getir
exports.getTasksByUser = async (req, res) => {
  try {
    const { kullaniciId } = req.params;
    
    const gorevler = await prismaClient.gorev.findMany({
      where: { kullaniciId: Number(kullaniciId) },
      include: {
        liste: true,
        adimlar: {
          select: {
            id: true,
            metin: true,
            tamamlandi: true,
            sira: true,
          }
        },
        dava: true,
      },
      orderBy: {
        olusturulmaTarihi: 'desc',
      },
    });
    
    res.json(gorevler);
  } catch (error) {
    logger.error(`Kullanıcının görevleri getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Kullanıcının görevleri getirilirken hata oluştu', error: error.message });
  }
};

// Davaya göre görevleri getir
exports.getTasksByLawsuit = async (req, res) => {
  try {
    const { davaId } = req.params;
    
    const gorevler = await prismaClient.gorev.findMany({
      where: { davaId: Number(davaId) },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        adimlar: true,
      },
      orderBy: {
        olusturulmaTarihi: 'desc',
      },
    });
    
    res.json(gorevler);
  } catch (error) {
    logger.error(`Davanın görevleri getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Davanın görevleri getirilirken hata oluştu', error: error.message });
  }
};

// Tarihe göre görevleri getir (bugünün görevleri)
exports.getTodaysTasks = async (req, res) => {
  try {
    const bugun = new Date();
    bugun.setHours(0, 0, 0, 0);
    
    const yarin = new Date(bugun);
    yarin.setDate(yarin.getDate() + 1);
    
    const gorevler = await prismaClient.gorev.findMany({
      where: {
        OR: [
          {
            sonTarih: {
              gte: bugun,
              lt: yarin,
            }
          },
          {
            gunumGorunumunde: true
          }
        ]
      },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        liste: true,
        adimlar: true,
      },
      orderBy: {
        sonTarih: 'asc',
      },
    });
    
    res.json(gorevler);
  } catch (error) {
    logger.error(`Bugünün görevleri getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Bugünün görevleri getirilirken hata oluştu', error: error.message });
  }
};

// Gecikmiş görevleri getir
exports.getOverdueTasks = async (req, res) => {
  try {
    const bugun = new Date();
    bugun.setHours(0, 0, 0, 0);
    
    const gorevler = await prismaClient.gorev.findMany({
      where: {
        sonTarih: {
          lt: bugun,
        },
        durum: {
          not: 'TAMAMLANDI',
        },
      },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        liste: true,
        adimlar: true,
      },
      orderBy: {
        sonTarih: 'asc',
      },
    });
    
    res.json(gorevler);
  } catch (error) {
    logger.error(`Gecikmiş görevler getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Gecikmiş görevler getirilirken hata oluştu', error: error.message });
  }
};

// Yaklaşan görevleri getir (gelecek 7 gün)
exports.getUpcomingTasks = async (req, res) => {
  try {
    const bugun = new Date();
    bugun.setHours(0, 0, 0, 0);
    
    const birHaftaSonra = new Date(bugun);
    birHaftaSonra.setDate(birHaftaSonra.getDate() + 7);
    
    const gorevler = await prismaClient.gorev.findMany({
      where: {
        sonTarih: {
          gte: bugun,
          lt: birHaftaSonra,
        },
        durum: {
          not: 'TAMAMLANDI',
        },
      },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        liste: true,
        adimlar: true,
      },
      orderBy: {
        sonTarih: 'asc',
      },
    });
    
    res.json(gorevler);
  } catch (error) {
    logger.error(`Yaklaşan görevler getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Yaklaşan görevler getirilirken hata oluştu', error: error.message });
  }
};

// Görev durumunu güncelle
exports.updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { durum } = req.body;
    
    const mevcutGorev = await prismaClient.gorev.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutGorev) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    
    const guncellenenGorev = await prismaClient.gorev.update({
      where: { id: Number(id) },
      data: { durum },
      include: {
        atananKullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        liste: true,
        adimlar: true,
      },
    });
    
    logger.info(`Görev durumu güncellendi: ${guncellenenGorev.id} - ${durum}`);
    res.json(guncellenenGorev);
  } catch (error) {
    logger.error(`Görev durumu güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Görev durumu güncellenirken hata oluştu', error: error.message });
  }
}; 