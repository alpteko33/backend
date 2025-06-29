const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Tüm dilekçeleri listele
exports.tumDilekceleriGetir = async (req, res) => {
  try {
    const { kullaniciId, sablonlar } = req.query;
    
    const filtreler = {};
    
    if (kullaniciId) {
      filtreler.kullaniciId = parseInt(kullaniciId);
    }
    
    if (sablonlar === 'true') {
      filtreler.sablonMu = true;
    }
    
    const dilekceler = await prisma.dilekce.findMany({
      where: filtreler,
      include: {
        dilekceKonusu: true,
        dilekceType: true,
        dava: true,
        kullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true
          }
        }
      },
      orderBy: {
        olusturulmaTarihi: 'desc'
      }
    });
    
    res.json(dilekceler);
  } catch (error) {
    console.error('Dilekçeler getirilirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçeler getirilirken bir hata oluştu.' });
  }
};

// Belirli bir dilekçeyi getir
exports.dilekceGetir = async (req, res) => {
  try {
    const { id } = req.params;
    
    const dilekce = await prisma.dilekce.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        dilekceKonusu: true,
        dilekceType: true,
        dava: true,
        kullanici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true
          }
        }
      }
    });
    
    if (!dilekce) {
      return res.status(404).json({ hata: 'Dilekçe bulunamadı.' });
    }
    
    res.json(dilekce);
  } catch (error) {
    console.error('Dilekçe getirilirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe getirilirken bir hata oluştu.' });
  }
};

// Yeni dilekçe oluştur
exports.dilekceOlustur = async (req, res) => {
  try {
    const {
      baslik,
      icerik,
      dilekceKonusuId,
      mahkemeBilgisi,
      dosyaNoBilgisi,
      tarafBilgisi,
      avukatBilgisi,
      dilekceturuId,
      kullaniciId,
      davaId,
      hukukiNedenler,
      hukukiDeliller,
      neticeVeTalep,
      sablonMu
    } = req.body;
    
    // Zorunlu alanları kontrol et
    if (!baslik || !icerik || !kullaniciId) {
      return res.status(400).json({ hata: 'Başlık, içerik ve kullanıcı ID zorunludur.' });
    }
    
    // Yeni dilekçe oluştur
    const yeniDilekce = await prisma.dilekce.create({
      data: {
        baslik,
        icerik,
        dilekceKonusuId: dilekceKonusuId ? parseInt(dilekceKonusuId) : null,
        mahkemeBilgisi,
        dosyaNoBilgisi,
        tarafBilgisi,
        avukatBilgisi,
        dilekceturuId: dilekceturuId ? parseInt(dilekceturuId) : null,
        kullaniciId: parseInt(kullaniciId),
        davaId: davaId ? parseInt(davaId) : null,
        hukukiNedenler,
        hukukiDeliller,
        neticeVeTalep,
        sablonMu: sablonMu || false
      }
    });
    
    res.status(201).json(yeniDilekce);
  } catch (error) {
    console.error('Dilekçe oluşturulurken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe oluşturulurken bir hata oluştu.' });
  }
};

// Dilekçe güncelle
exports.dilekceGuncelle = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      baslik,
      icerik,
      dilekceKonusuId,
      mahkemeBilgisi,
      dosyaNoBilgisi,
      tarafBilgisi,
      avukatBilgisi,
      dilekceturuId,
      davaId,
      hukukiNedenler,
      hukukiDeliller,
      neticeVeTalep,
      sablonMu
    } = req.body;
    
    // Dilekçeyi güncelle
    const guncelDilekce = await prisma.dilekce.update({
      where: {
        id: parseInt(id)
      },
      data: {
        baslik,
        icerik,
        dilekceKonusuId: dilekceKonusuId ? parseInt(dilekceKonusuId) : null,
        mahkemeBilgisi,
        dosyaNoBilgisi,
        tarafBilgisi,
        avukatBilgisi,
        dilekceturuId: dilekceturuId ? parseInt(dilekceturuId) : null,
        davaId: davaId ? parseInt(davaId) : null,
        hukukiNedenler,
        hukukiDeliller,
        neticeVeTalep,
        sablonMu
      }
    });
    
    res.json(guncelDilekce);
  } catch (error) {
    console.error('Dilekçe güncellenirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe güncellenirken bir hata oluştu.' });
  }
};

// Dilekçe sil
exports.dilekceSil = async (req, res) => {
  try {
    const { id } = req.params;
    
    await prisma.dilekce.delete({
      where: {
        id: parseInt(id)
      }
    });
    
    res.json({ mesaj: 'Dilekçe başarıyla silindi.' });
  } catch (error) {
    console.error('Dilekçe silinirken hata oluştu:', error);
    res.status(500).json({ hata: 'Dilekçe silinirken bir hata oluştu.' });
  }
}; 