const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Tüm dilekçe konularını listele
exports.tumDilekceKonulariniGetir = async (req, res) => {
  try {
    const dilekceKonulari = await prisma.dilekceKonusu.findMany({
      orderBy: {
        ad: 'asc'
      }
    });
    
    res.json(dilekceKonulari);
  } catch (error) {
    console.error('Dilekçe konuları getirilirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe konuları getirilirken bir hata oluştu.' });
  }
};

// Belirli bir dilekçe konusunu getir
exports.dilekceKonusuGetir = async (req, res) => {
  try {
    const { id } = req.params;
    
    const dilekceKonusu = await prisma.dilekceKonusu.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        dilekceler: true
      }
    });
    
    if (!dilekceKonusu) {
      return res.status(404).json({ hata: 'Dilekçe konusu bulunamadı.' });
    }
    
    res.json(dilekceKonusu);
  } catch (error) {
    console.error('Dilekçe konusu getirilirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe konusu getirilirken bir hata oluştu.' });
  }
};

// Yeni dilekçe konusu oluştur
exports.dilekceKonusuOlustur = async (req, res) => {
  try {
    const { ad, aciklama } = req.body;
    
    // Zorunlu alanları kontrol et
    if (!ad) {
      return res.status(400).json({ hata: 'Konu adı zorunludur.' });
    }
    
    // Benzersiz ad kontrolü
    const mevcutKonu = await prisma.dilekceKonusu.findUnique({
      where: {
        ad
      }
    });
    
    if (mevcutKonu) {
      return res.status(400).json({ hata: 'Bu isimde bir dilekçe konusu zaten var.' });
    }
    
    // Yeni dilekçe konusu oluştur
    const yeniDilekceKonusu = await prisma.dilekceKonusu.create({
      data: {
        ad,
        aciklama
      }
    });
    
    res.status(201).json(yeniDilekceKonusu);
  } catch (error) {
    console.error('Dilekçe konusu oluşturulurken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe konusu oluşturulurken bir hata oluştu.' });
  }
};

// Dilekçe konusunu güncelle
exports.dilekceKonusuGuncelle = async (req, res) => {
  try {
    const { id } = req.params;
    const { ad, aciklama } = req.body;
    
    // Zorunlu alanları kontrol et
    if (!ad) {
      return res.status(400).json({ hata: 'Konu adı zorunludur.' });
    }
    
    // Benzersiz ad kontrolü (kendi ID'si hariç)
    const mevcutKonu = await prisma.dilekceKonusu.findFirst({
      where: {
        ad,
        id: {
          not: parseInt(id)
        }
      }
    });
    
    if (mevcutKonu) {
      return res.status(400).json({ hata: 'Bu isimde başka bir dilekçe konusu zaten var.' });
    }
    
    // Dilekçe konusunu güncelle
    const guncelDilekceKonusu = await prisma.dilekceKonusu.update({
      where: {
        id: parseInt(id)
      },
      data: {
        ad,
        aciklama
      }
    });
    
    res.json(guncelDilekceKonusu);
  } catch (error) {
    console.error('Dilekçe konusu güncellenirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe konusu güncellenirken bir hata oluştu.' });
  }
};

// Dilekçe konusunu sil
exports.dilekceKonusuSil = async (req, res) => {
  try {
    const { id } = req.params;
    
    // İlişkili dilekçeleri kontrol et
    const iliskiliDilekceler = await prisma.dilekce.findMany({
      where: {
        dilekceKonusuId: parseInt(id)
      }
    });
    
    if (iliskiliDilekceler.length > 0) {
      return res.status(400).json({ 
        hata: 'Bu konuya bağlı dilekçeler olduğu için silemezsiniz. Önce bağlı dilekçeleri silmelisiniz.' 
      });
    }
    
    await prisma.dilekceKonusu.delete({
      where: {
        id: parseInt(id)
      }
    });
    
    res.json({ mesaj: 'Dilekçe konusu başarıyla silindi.' });
  } catch (error) {
    console.error('Dilekçe konusu silinirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe konusu silinirken bir hata oluştu.' });
  }
}; 