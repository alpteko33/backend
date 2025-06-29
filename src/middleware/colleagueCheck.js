const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const logger = require('../utils/logger');

/**
 * Kullanıcının çalışma arkadaşı olup olmadığını kontrol eden yardımcı fonksiyon
 * @param {number} kullaniciId - Kontrol eden kullanıcı ID
 * @param {number} hedefKullaniciId - Kontrol edilen kullanıcı ID
 * @returns {Promise<boolean>} - Çalışma arkadaşı ise true, değilse false
 */
async function isCalismaArkadasi(kullaniciId, hedefKullaniciId) {
  try {
    // Kullanıcı ID'leri aynı ise, kendisi ile ilgili işlem yapıyor demektir
    if (kullaniciId === hedefKullaniciId) {
      return true;
    }

    // Hedef kullanıcının bilgilerini al
    const hedefKullanici = await prisma.kullanici.findUnique({
      where: { id: hedefKullaniciId },
      select: { eposta: true }
    });

    if (!hedefKullanici) {
      return false;
    }

    // Çalışma arkadaşı kaydını kontrol et
    const calismaArkadasi = await prisma.calismaArkadasi.findFirst({
      where: {
        kullaniciId: kullaniciId,
        eposta: hedefKullanici.eposta
      }
    });

    return !!calismaArkadasi;
  } catch (error) {
    logger.error(`Çalışma arkadaşı kontrolünde hata: ${error.message}`);
    return false;
  }
}

/**
 * İki kullanıcının karşılıklı çalışma arkadaşı olup olmadığını kontrol eden yardımcı fonksiyon
 * @param {number} kullaniciId1 - Birinci kullanıcı ID
 * @param {number} kullaniciId2 - İkinci kullanıcı ID
 * @returns {Promise<boolean>} - Karşılıklı çalışma arkadaşı ise true, değilse false
 */
async function areColleagues(kullaniciId1, kullaniciId2) {
  try {
    // Kullanıcı ID'leri aynı ise, kendisi ile ilgili işlem yapıyor demektir
    if (kullaniciId1 === kullaniciId2) {
      return true;
    }
    
    // İki yönlü kontrol et
    const isFirstColleague = await isCalismaArkadasi(kullaniciId1, kullaniciId2);
    const isSecondColleague = await isCalismaArkadasi(kullaniciId2, kullaniciId1);
    
    // Her iki yönde de çalışma arkadaşı olması gerekiyor
    return isFirstColleague && isSecondColleague;
  } catch (error) {
    logger.error(`Karşılıklı çalışma arkadaşı kontrolünde hata: ${error.message}`);
    return false;
  }
}

/**
 * Kullanıcının görev listesi üzerinde yetki kontrolü
 */
exports.canManageGorevListesi = async (req, res, next) => {
  try {
    // Liste ID'sini farklı parametre isimlerinden almak için kontrol ekliyoruz
    const listeId = parseInt(req.params.id || req.params.listeId || req.body.gorevListesiId);
    const kullaniciId = req.user.id;

    if (!listeId || !kullaniciId) {
      return res.status(400).json({ message: 'Geçersiz istek, liste ID veya kullanıcı ID eksik' });
    }

    // Liste bilgilerini al
    const liste = await prisma.gorevListesi.findUnique({
      where: { id: listeId }
    });

    if (!liste) {
      return res.status(404).json({ message: 'Görev listesi bulunamadı' });
    }

    // Kullanıcı listenin sahibi mi?
    if (liste.olusturanId === kullaniciId) {
      req.isListOwner = true;
      return next();
    }

    // Kullanıcı liste oluşturan kişinin çalışma arkadaşı mı?
    const isColleague = await isCalismaArkadasi(kullaniciId, liste.olusturanId);
    if (isColleague) {
      req.isListOwner = false;
      return next();
    }

    // Liste kullanıcıya paylaşılmış mı?
    const listeKullanici = await prisma.gorevListesiKullanici.findFirst({
      where: {
        gorevListesiId: listeId,
        kullaniciId: kullaniciId,
        durumu: 'AKTIF'
      }
    });

    if (listeKullanici) {
      req.isListOwner = false;
      return next();
    }

    logger.warn(`Yetkisiz erişim: Kullanıcı ${kullaniciId} görev listesi ${listeId} için izinsiz erişim denedi`);
    return res.status(403).json({ message: 'Bu görev listesini görüntülemek veya yönetmek için yetkiniz bulunmuyor' });
  } catch (error) {
    logger.error(`Görev listesi yetkilendirme hatası: ${error.message}`);
    return res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
};

/**
 * Görev atama yetkisi kontrolü
 */
exports.canAssignTask = async (req, res, next) => {
  try {
    const atananKullaniciId = parseInt(req.body.kullaniciId);
    const atayanKullaniciId = req.user.id;

    if (!atananKullaniciId) {
      return next(); // Kullanıcı atanmıyorsa kontrole gerek yok
    }

    // Kullanıcı kendisine görev atıyor mu?
    if (atananKullaniciId === atayanKullaniciId) {
      return next();
    }

    // Kullanıcı YONETICI rolünde mi?
    if (req.user.rol === 'YONETICI') {
      return next();
    }

    // Atanacak kullanıcı, atayan kullanıcının çalışma arkadaşı mı?
    const isColleague = await isCalismaArkadasi(atayanKullaniciId, atananKullaniciId);
    if (isColleague) {
      return next();
    }

    logger.warn(`Yetkisiz görev ataması: Kullanıcı ${atayanKullaniciId} -> Kullanıcı ${atananKullaniciId}`);
    return res.status(403).json({ message: 'Bu kullanıcıya görev atama yetkiniz bulunmuyor. Kullanıcı çalışma arkadaşınız değil.' });
  } catch (error) {
    logger.error(`Görev atama yetkilendirme hatası: ${error.message}`);
    return res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
};

// Dışa export edilecek yardımcı fonksiyon
exports.isCalismaArkadasi = isCalismaArkadasi;
exports.areColleagues = areColleagues; 