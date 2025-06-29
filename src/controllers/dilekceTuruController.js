const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Tüm dilekçe türlerini listele
exports.tumDilekceTurleriniGetir = async (req, res) => {
  try {
    const dilekceTurleri = await prisma.dilekceTuru.findMany({
      orderBy: {
        ad: 'asc'
      }
    });
    
    res.json(dilekceTurleri);
  } catch (error) {
    console.error('Dilekçe türleri getirilirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe türleri getirilirken bir hata oluştu.' });
  }
};

// Belirli bir dilekçe türünü getir
exports.dilekceTuruGetir = async (req, res) => {
  try {
    const { id } = req.params;
    
    const dilekceTuru = await prisma.dilekceTuru.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        dilekceler: true
      }
    });
    
    if (!dilekceTuru) {
      return res.status(404).json({ hata: 'Dilekçe türü bulunamadı.' });
    }
    
    res.json(dilekceTuru);
  } catch (error) {
    console.error('Dilekçe türü getirilirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe türü getirilirken bir hata oluştu.' });
  }
};

// Yeni dilekçe türü oluştur
exports.dilekceTuruOlustur = async (req, res) => {
  try {
    const { ad, aciklama, sablonIcerik } = req.body;
    
    // Zorunlu alanları kontrol et
    if (!ad) {
      return res.status(400).json({ hata: 'Tür adı zorunludur.' });
    }
    
    // Benzersiz ad kontrolü
    const mevcutTur = await prisma.dilekceTuru.findUnique({
      where: {
        ad
      }
    });
    
    if (mevcutTur) {
      return res.status(400).json({ hata: 'Bu isimde bir dilekçe türü zaten var.' });
    }
    
    // Yeni dilekçe türü oluştur
    const yeniDilekceTuru = await prisma.dilekceTuru.create({
      data: {
        ad,
        aciklama,
        sablonIcerik
      }
    });
    
    res.status(201).json(yeniDilekceTuru);
  } catch (error) {
    console.error('Dilekçe türü oluşturulurken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe türü oluşturulurken bir hata oluştu.' });
  }
};

// Dilekçe türünü güncelle
exports.dilekceTuruGuncelle = async (req, res) => {
  try {
    const { id } = req.params;
    const { ad, aciklama, sablonIcerik } = req.body;
    
    // Zorunlu alanları kontrol et
    if (!ad) {
      return res.status(400).json({ hata: 'Tür adı zorunludur.' });
    }
    
    // Benzersiz ad kontrolü (kendi ID'si hariç)
    const mevcutTur = await prisma.dilekceTuru.findFirst({
      where: {
        ad,
        id: {
          not: parseInt(id)
        }
      }
    });
    
    if (mevcutTur) {
      return res.status(400).json({ hata: 'Bu isimde başka bir dilekçe türü zaten var.' });
    }
    
    // Dilekçe türünü güncelle
    const guncelDilekceTuru = await prisma.dilekceTuru.update({
      where: {
        id: parseInt(id)
      },
      data: {
        ad,
        aciklama,
        sablonIcerik
      }
    });
    
    res.json(guncelDilekceTuru);
  } catch (error) {
    console.error('Dilekçe türü güncellenirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe türü güncellenirken bir hata oluştu.' });
  }
};

// Dilekçe türünü sil
exports.dilekceTuruSil = async (req, res) => {
  try {
    const { id } = req.params;
    
    // İlişkili dilekçeleri kontrol et
    const iliskiliDilekceler = await prisma.dilekce.findMany({
      where: {
        dilekceturuId: parseInt(id)
      }
    });
    
    if (iliskiliDilekceler.length > 0) {
      return res.status(400).json({ 
        hata: 'Bu türe bağlı dilekçeler olduğu için silemezsiniz. Önce bağlı dilekçeleri silmelisiniz.' 
      });
    }
    
    await prisma.dilekceTuru.delete({
      where: {
        id: parseInt(id)
      }
    });
    
    res.json({ mesaj: 'Dilekçe türü başarıyla silindi.' });
  } catch (error) {
    console.error('Dilekçe türü silinirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe türü silinirken bir hata oluştu.' });
  }
}; 