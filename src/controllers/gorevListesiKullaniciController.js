const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const logger = require('../utils/logger');
const { isCalismaArkadasi } = require('../middleware/colleagueCheck');

// Kullanıcının görev listelerini getir
exports.getGorevListeleriByKullaniciId = async (req, res) => {
  try {
    const kullaniciId = parseInt(req.params.kullaniciId);
    
    // Kullanıcının oluşturduğu görev listeleri
    const olusturulanListeler = await prisma.gorevListesi.findMany({
      where: {
        olusturanId: kullaniciId
      },
      include: {
        gorevler: true,
        kullanicilar: true
      }
    });
    
    // Kullanıcının davet edildiği görev listeleri
    const davetEdildigiListeler = await prisma.gorevListesiKullanici.findMany({
      where: {
        kullaniciId: kullaniciId,
        durumu: 'AKTIF'
      },
      include: {
        gorevListesi: {
          include: {
            gorevler: true,
            kullanicilar: true
          }
        }
      }
    });
    
    // Davet edildiği listelerin actual listelerini al
    const davetListeleri = davetEdildigiListeler.map(davet => davet.gorevListesi);
    
    // Tüm listeleri birleştir
    const tumListeler = [...olusturulanListeler, ...davetListeleri];
    
    res.json(tumListeler);
  } catch (error) {
    logger.error(`Kullanıcı ${req.params.kullaniciId} için görev listeleri getirilirken hata: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
};

// Görev listesine kullanıcı davet et
exports.inviteUserToGorevListesi = async (req, res) => {
  try {
    const { gorevListesiId, kullaniciId } = req.body;
    const davetEdenId = req.user.id; // Giriş yapan kullanıcı
    
    // Görev listesini kontrol et
    const liste = await prisma.gorevListesi.findUnique({
      where: { id: parseInt(gorevListesiId) }
    });
    
    if (!liste) {
      return res.status(404).json({ message: 'Görev listesi bulunamadı' });
    }
    
    // Davet edilecek kullanıcıyı kontrol et
    const davetEdilecekKullanici = await prisma.kullanici.findUnique({
      where: { id: parseInt(kullaniciId) }
    });
    
    if (!davetEdilecekKullanici) {
      return res.status(404).json({ message: 'Davet edilecek kullanıcı bulunamadı' });
    }
    
    // Davet eden kullanıcı liste sahibi değilse, yetki kontrolü yap
    if (liste.olusturanId !== davetEdenId) {
      // Davet eden kullanıcı, liste sahibinin çalışma arkadaşı mı?
      const isColleague = await isCalismaArkadasi(davetEdenId, liste.olusturanId);
      if (!isColleague) {
        return res.status(403).json({ message: 'Bu listeye kullanıcı davet etme yetkiniz bulunmuyor' });
      }
    }
    
    // Davet edilecek kullanıcı, davet eden kullanıcının çalışma arkadaşı mı?
    const isColleague = await isCalismaArkadasi(davetEdenId, parseInt(kullaniciId));
    if (!isColleague && davetEdenId !== liste.olusturanId) {
      return res.status(403).json({ message: 'Bu kullanıcı çalışma arkadaşınız değil' });
    }
    
    // Önce bu kullanıcının bu listeye zaten davet edilip edilmediğini kontrol et
    const mevcutDavet = await prisma.gorevListesiKullanici.findFirst({
      where: {
        gorevListesiId: parseInt(gorevListesiId),
        kullaniciId: parseInt(kullaniciId)
      }
    });
    
    if (mevcutDavet) {
      return res.status(400).json({ message: 'Bu kullanıcı zaten bu listeye davet edilmiş' });
    }
    
    const davet = await prisma.gorevListesiKullanici.create({
      data: {
        gorevListesiId: parseInt(gorevListesiId),
        kullaniciId: parseInt(kullaniciId),
        davetTarihi: new Date(),
        durumu: 'AKTIF'
      }
    });
    
    logger.info(`Kullanıcı ${kullaniciId} görev listesi ${gorevListesiId}'ye davet edildi`);
    res.status(201).json(davet);
  } catch (error) {
    logger.error(`Görev listesi davetinde hata: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

// Görev listesi kullanıcı davetini güncelle
exports.updateGorevListesiDavet = async (req, res) => {
  try {
    const { durumu } = req.body;
    const davetId = parseInt(req.params.id);
    
    const guncellenenDavet = await prisma.gorevListesiKullanici.update({
      where: {
        id: davetId
      },
      data: {
        durumu
      }
    });
    
    logger.info(`Görev listesi daveti ${davetId} durumu güncellendi: ${durumu}`);
    res.json(guncellenenDavet);
  } catch (error) {
    logger.error(`Davet güncelleme hatası: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

// Görev listesi kullanıcı davetini sil
exports.removeUserFromGorevListesi = async (req, res) => {
  try {
    const davetId = parseInt(req.params.id);
    
    // Daveti kontrol et
    const davet = await prisma.gorevListesiKullanici.findUnique({
      where: { id: davetId },
      include: { gorevListesi: true }
    });
    
    if (!davet) {
      return res.status(404).json({ message: 'Davet bulunamadı' });
    }
    
    // İşlemi yapan kullanıcı liste sahibi mi veya kendisini mi çıkarıyor kontrol et
    if (req.user.id !== davet.gorevListesi.olusturanId && req.user.id !== davet.kullaniciId) {
      // Çalışma arkadaşı mı kontrol et
      const isColleague = await isCalismaArkadasi(req.user.id, davet.gorevListesi.olusturanId);
      if (!isColleague) {
        return res.status(403).json({ message: 'Bu listedeki kullanıcıları yönetme yetkiniz bulunmuyor' });
      }
    }
    
    await prisma.gorevListesiKullanici.delete({
      where: {
        id: davetId
      }
    });
    
    logger.info(`Kullanıcı görev listesinden çıkarıldı: DavetID ${davetId}`);
    res.json({ message: 'Kullanıcı görev listesinden çıkarıldı' });
  } catch (error) {
    logger.error(`Kullanıcı listeden çıkarma hatası: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

// Görev listesindeki kullanıcıları getir
exports.getUsersByGorevListeId = async (req, res) => {
  try {
    const listeId = parseInt(req.params.listeId);
    
    // Listeyi ve liste sahibini kontrol et
    const liste = await prisma.gorevListesi.findUnique({
      where: { id: listeId },
      include: { olusturan: true }
    });
    
    if (!liste) {
      return res.status(404).json({ message: 'Görev listesi bulunamadı' });
    }
    
    // Tüm liste kullanıcılarını getir
    const listeKullanicilari = await prisma.gorevListesiKullanici.findMany({
      where: { gorevListesiId: listeId },
      include: {
        kullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
            rol: true
          }
        }
      }
    });
    
    // Kullanıcı bilgilerini düzenle ve liste sahibini işaretle
    const kullanicilar = listeKullanicilari.map(item => {
      const isOwner = item.kullanici.id === liste.olusturanId;
      
      return {
        id: item.kullanici.id,
        ad: item.kullanici.ad,
        soyad: item.kullanici.soyad,
        eposta: item.kullanici.eposta,
        rol: item.kullanici.rol,
        davetDurumu: item.durumu,
        davetTarihi: item.davetTarihi,
        davetId: item.id,
        isOwner: isOwner
      };
    });
    
    // Kullanıcıları döndür (liste sahipleri önce gelecek şekilde sırala)
    const siraliKullanicilar = kullanicilar.sort((a, b) => {
      // Önce sahipleri getir
      if (a.isOwner && !b.isOwner) return -1;
      if (!a.isOwner && b.isOwner) return 1;
      
      // Sonra alfabetik sırala
      return a.ad.localeCompare(b.ad);
    });
    
    res.json(siraliKullanicilar);
  } catch (error) {
    logger.error(`Görev listesi kullanıcıları getirme hatası: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
}; 