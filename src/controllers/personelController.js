const prisma = require('@prisma/client');
const logger = require('../utils/logger');

// Veritabanı bağlantısı
const { PrismaClient } = prisma;
const prismaClient = new PrismaClient();

// Tüm personelleri getir
exports.getAllPersonnel = async (req, res) => {
  try {
    const personeller = await prismaClient.personel.findMany({
      include: {
        adresler: true,
        iletisimler: true,
        yonetici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    res.json(personeller);
  } catch (error) {
    logger.error(`Personeller getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personeller getirilirken hata oluştu', error: error.message });
  }
};

// Personel detayını getir
exports.getPersonnelById = async (req, res) => {
  try {
    const { id } = req.params;
    const personel = await prismaClient.personel.findUnique({
      where: { id: Number(id) },
      include: {
        adresler: true,
        iletisimler: true,
        yonetici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            sifre: false
          }
        }
      }
    });
    
    if (!personel) {
      return res.status(404).json({ message: 'Personel bulunamadı' });
    }
    
    res.json(personel);
  } catch (error) {
    logger.error(`Personel ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel getirilirken hata oluştu', error: error.message });
  }
};

// Yeni personel oluştur
exports.createPersonnel = async (req, res) => {
  try {
    const { ad, soyad, tcKimlikNo, telefonNo, eposta, gorevi, maas, iseBaslamaTarihi, yoneticiId } = req.body;
    
    const personel = await prismaClient.personel.create({
      data: {
        ad,
        soyad,
        tcKimlikNo,
        telefonNo,
        eposta,
        gorevi,
        maas: maas ? parseFloat(maas) : null,
        iseBaslamaTarihi: iseBaslamaTarihi ? new Date(iseBaslamaTarihi) : null,
        yoneticiId: yoneticiId ? Number(yoneticiId) : null
      }
    });
    
    logger.info(`Yeni personel oluşturuldu: ${personel.id}`);
    res.status(201).json(personel);
  } catch (error) {
    logger.error(`Personel oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel oluşturulurken hata oluştu', error: error.message });
  }
};

// Personel güncelle
exports.updatePersonnel = async (req, res) => {
  try {
    const { id } = req.params;
    const { ad, soyad, tcKimlikNo, telefonNo, eposta, gorevi, maas, iseBaslamaTarihi, yoneticiId } = req.body;
    
    const mevcutPersonel = await prismaClient.personel.findUnique({
      where: { id: Number(id) }
    });
    
    if (!mevcutPersonel) {
      return res.status(404).json({ message: 'Personel bulunamadı' });
    }
    
    const personel = await prismaClient.personel.update({
      where: { id: Number(id) },
      data: {
        ad: ad || undefined,
        soyad: soyad || undefined,
        tcKimlikNo: tcKimlikNo || undefined,
        telefonNo: telefonNo || undefined,
        eposta: eposta || undefined,
        gorevi: gorevi || undefined,
        maas: maas ? parseFloat(maas) : undefined,
        iseBaslamaTarihi: iseBaslamaTarihi ? new Date(iseBaslamaTarihi) : undefined,
        yoneticiId: yoneticiId ? Number(yoneticiId) : undefined
      }
    });
    
    logger.info(`Personel güncellendi: ${id}`);
    res.json(personel);
  } catch (error) {
    logger.error(`Personel ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel güncellenirken hata oluştu', error: error.message });
  }
};

// Personel sil
exports.deletePersonnel = async (req, res) => {
  try {
    const { id } = req.params;
    
    const mevcutPersonel = await prismaClient.personel.findUnique({
      where: { id: Number(id) }
    });
    
    if (!mevcutPersonel) {
      return res.status(404).json({ message: 'Personel bulunamadı' });
    }
    
    await prismaClient.personel.delete({
      where: { id: Number(id) }
    });
    
    logger.info(`Personel silindi: ${id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Personel ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel silinirken hata oluştu', error: error.message });
  }
};

// Personele yeni adres ekle
exports.addAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { adresSatiri, sehir, ilce, postaKodu, ulke, adresTipi } = req.body;
    
    const mevcutPersonel = await prismaClient.personel.findUnique({
      where: { id: Number(id) }
    });
    
    if (!mevcutPersonel) {
      return res.status(404).json({ message: 'Personel bulunamadı' });
    }
    
    const adres = await prismaClient.adres.create({
      data: {
        adresSatiri,
        sehir,
        ilce,
        postaKodu,
        ulke: ulke || 'Türkiye',
        adresTipi: adresTipi || 'EV',
        personelId: Number(id)
      }
    });
    
    logger.info(`Personele yeni adres eklendi: Personel ID ${id}, Adres ID ${adres.id}`);
    res.status(201).json(adres);
  } catch (error) {
    logger.error(`Adres eklenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Adres eklenirken hata oluştu', error: error.message });
  }
};

// Personele yeni iletişim ekle
exports.addContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { tip, deger, aciklama } = req.body;
    
    const mevcutPersonel = await prismaClient.personel.findUnique({
      where: { id: Number(id) }
    });
    
    if (!mevcutPersonel) {
      return res.status(404).json({ message: 'Personel bulunamadı' });
    }
    
    const iletisim = await prismaClient.iletisim.create({
      data: {
        tip,
        deger,
        aciklama,
        personelId: Number(id)
      }
    });
    
    logger.info(`Personele yeni iletişim bilgisi eklendi: Personel ID ${id}, İletişim ID ${iletisim.id}`);
    res.status(201).json(iletisim);
  } catch (error) {
    logger.error(`İletişim eklenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'İletişim eklenirken hata oluştu', error: error.message });
  }
};

// PERSONEL ÖZLÜK EVRAKLARI İŞLEMLERİ

// Tüm özlük evraklarını getir
exports.getAllOzlukEvraklari = async (req, res) => {
  try {
    const ozlukEvraklari = await prismaClient.personelOzlukEvraki.findMany({
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dosya: true
      }
    });
    res.json(ozlukEvraklari);
  } catch (error) {
    logger.error(`Özlük evrakları getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Özlük evrakları getirilirken hata oluştu', error: error.message });
  }
};

// Yeni özlük evrakı oluştur
exports.createOzlukEvraki = async (req, res) => {
  try {
    const { evrakTuru, personelId, dosyaId } = req.body;
    
    const personel = await prismaClient.personel.findUnique({
      where: { id: Number(personelId) }
    });
    
    if (!personel) {
      return res.status(404).json({ message: 'Personel bulunamadı' });
    }
    
    if (dosyaId) {
      const dosya = await prismaClient.dosya.findUnique({
        where: { id: Number(dosyaId) }
      });
      
      if (!dosya) {
        return res.status(404).json({ message: 'Dosya bulunamadı' });
      }
    }
    
    const ozlukEvraki = await prismaClient.personelOzlukEvraki.create({
      data: {
        evrakTuru,
        personelId: Number(personelId),
        dosyaId: dosyaId ? Number(dosyaId) : null,
      },
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dosya: true
      }
    });
    
    logger.info(`Yeni özlük evrakı oluşturuldu: ${ozlukEvraki.id}`);
    res.status(201).json(ozlukEvraki);
  } catch (error) {
    logger.error(`Özlük evrakı oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Özlük evrakı oluşturulurken hata oluştu', error: error.message });
  }
};

// Belirli bir özlük evrakını getir
exports.getOzlukEvrakiById = async (req, res) => {
  try {
    const { id } = req.params;
    const ozlukEvraki = await prismaClient.personelOzlukEvraki.findUnique({
      where: { id: Number(id) },
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dosya: true
      }
    });
    
    if (!ozlukEvraki) {
      return res.status(404).json({ message: 'Özlük evrakı bulunamadı' });
    }
    
    res.json(ozlukEvraki);
  } catch (error) {
    logger.error(`Özlük evrakı ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Özlük evrakı getirilirken hata oluştu', error: error.message });
  }
};

// Özlük evrakını güncelle
exports.updateOzlukEvraki = async (req, res) => {
  try {
    const { id } = req.params;
    const { evrakTuru, dosyaId } = req.body;
    
    const mevcutOzlukEvraki = await prismaClient.personelOzlukEvraki.findUnique({
      where: { id: Number(id) }
    });
    
    if (!mevcutOzlukEvraki) {
      return res.status(404).json({ message: 'Özlük evrakı bulunamadı' });
    }
    
    if (dosyaId) {
      const dosya = await prismaClient.dosya.findUnique({
        where: { id: Number(dosyaId) }
      });
      
      if (!dosya) {
        return res.status(404).json({ message: 'Dosya bulunamadı' });
      }
    }
    
    const ozlukEvraki = await prismaClient.personelOzlukEvraki.update({
      where: { id: Number(id) },
      data: {
        evrakTuru: evrakTuru || undefined,
        dosyaId: dosyaId ? Number(dosyaId) : undefined,
      },
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dosya: true
      }
    });
    
    logger.info(`Özlük evrakı güncellendi: ${id}`);
    res.json(ozlukEvraki);
  } catch (error) {
    logger.error(`Özlük evrakı ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Özlük evrakı güncellenirken hata oluştu', error: error.message });
  }
};

// Özlük evrakını sil
exports.deleteOzlukEvraki = async (req, res) => {
  try {
    const { id } = req.params;
    
    const mevcutOzlukEvraki = await prismaClient.personelOzlukEvraki.findUnique({
      where: { id: Number(id) }
    });
    
    if (!mevcutOzlukEvraki) {
      return res.status(404).json({ message: 'Özlük evrakı bulunamadı' });
    }
    
    await prismaClient.personelOzlukEvraki.delete({
      where: { id: Number(id) }
    });
    
    logger.info(`Özlük evrakı silindi: ${id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Özlük evrakı ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Özlük evrakı silinirken hata oluştu', error: error.message });
  }
};

// Personele göre özlük evraklarını getir
exports.getOzlukEvraklariByPersonelId = async (req, res) => {
  try {
    const { personelId } = req.params;
    
    const personel = await prismaClient.personel.findUnique({
      where: { id: Number(personelId) }
    });
    
    if (!personel) {
      return res.status(404).json({ message: 'Personel bulunamadı' });
    }
    
    const ozlukEvraklari = await prismaClient.personelOzlukEvraki.findMany({
      where: { personelId: Number(personelId) },
      include: {
        dosya: true
      }
    });
    
    res.json(ozlukEvraklari);
  } catch (error) {
    logger.error(`Personelin özlük evrakları getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personelin özlük evrakları getirilirken hata oluştu', error: error.message });
  }
};

// Belirli tür özlük evraklarını getir
exports.getOzlukEvraklariByTur = async (req, res) => {
  try {
    const { evrakTuru } = req.params;
    
    const ozlukEvraklari = await prismaClient.personelOzlukEvraki.findMany({
      where: { evrakTuru },
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dosya: true
      }
    });
    
    res.json(ozlukEvraklari);
  } catch (error) {
    logger.error(`Belirli tür özlük evrakları getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Belirli tür özlük evrakları getirilirken hata oluştu', error: error.message });
  }
};

// PERSONEL İZİN İŞLEMLERİ

// Tüm personel izinlerini getir
exports.getAllIzinler = async (req, res) => {
  try {
    const izinler = await prismaClient.personelIzin.findMany({
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dosya: true
      }
    });
    res.json(izinler);
  } catch (error) {
    logger.error(`İzinler getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'İzinler getirilirken hata oluştu', error: error.message });
  }
};

// Yeni personel izni oluştur
exports.createIzin = async (req, res) => {
  try {
    const { izinTuru, baslangicTarihi, bitisTarihi, personelId, dosyaId } = req.body;
    
    const personel = await prismaClient.personel.findUnique({
      where: { id: Number(personelId) }
    });
    
    if (!personel) {
      return res.status(404).json({ message: 'Personel bulunamadı' });
    }
    
    if (dosyaId) {
      const dosya = await prismaClient.dosya.findUnique({
        where: { id: Number(dosyaId) }
      });
      
      if (!dosya) {
        return res.status(404).json({ message: 'Dosya bulunamadı' });
      }
    }
    
    // Tarih validasyonu
    const baslangic = new Date(baslangicTarihi);
    const bitis = new Date(bitisTarihi);
    
    if (baslangic > bitis) {
      return res.status(400).json({ message: 'Başlangıç tarihi bitiş tarihinden sonra olamaz' });
    }
    
    const izin = await prismaClient.personelIzin.create({
      data: {
        izinTuru,
        baslangicTarihi: baslangic,
        bitisTarihi: bitis,
        personelId: Number(personelId),
        dosyaId: dosyaId ? Number(dosyaId) : null,
      },
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dosya: true
      }
    });
    
    logger.info(`Yeni personel izni oluşturuldu: ${izin.id}`);
    res.status(201).json(izin);
  } catch (error) {
    logger.error(`Personel izni oluşturulurken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel izni oluşturulurken hata oluştu', error: error.message });
  }
};

// Belirli bir personel iznini getir
exports.getIzinById = async (req, res) => {
  try {
    const { id } = req.params;
    const izin = await prismaClient.personelIzin.findUnique({
      where: { id: Number(id) },
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dosya: true
      }
    });
    
    if (!izin) {
      return res.status(404).json({ message: 'Personel izni bulunamadı' });
    }
    
    res.json(izin);
  } catch (error) {
    logger.error(`Personel izni ${req.params.id} getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel izni getirilirken hata oluştu', error: error.message });
  }
};

// Personel iznini güncelle
exports.updateIzin = async (req, res) => {
  try {
    const { id } = req.params;
    const { izinTuru, baslangicTarihi, bitisTarihi, dosyaId } = req.body;
    
    const mevcutIzin = await prismaClient.personelIzin.findUnique({
      where: { id: Number(id) }
    });
    
    if (!mevcutIzin) {
      return res.status(404).json({ message: 'Personel izni bulunamadı' });
    }
    
    if (dosyaId) {
      const dosya = await prismaClient.dosya.findUnique({
        where: { id: Number(dosyaId) }
      });
      
      if (!dosya) {
        return res.status(404).json({ message: 'Dosya bulunamadı' });
      }
    }
    
    // Tarih validasyonu (eğer her iki tarih de güncellenmişse)
    let baslangic = mevcutIzin.baslangicTarihi;
    let bitis = mevcutIzin.bitisTarihi;
    
    if (baslangicTarihi) baslangic = new Date(baslangicTarihi);
    if (bitisTarihi) bitis = new Date(bitisTarihi);
    
    if (baslangic > bitis) {
      return res.status(400).json({ message: 'Başlangıç tarihi bitiş tarihinden sonra olamaz' });
    }
    
    const izin = await prismaClient.personelIzin.update({
      where: { id: Number(id) },
      data: {
        izinTuru: izinTuru || undefined,
        baslangicTarihi: baslangicTarihi ? baslangic : undefined,
        bitisTarihi: bitisTarihi ? bitis : undefined,
        dosyaId: dosyaId ? Number(dosyaId) : undefined,
      },
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dosya: true
      }
    });
    
    logger.info(`Personel izni güncellendi: ${id}`);
    res.json(izin);
  } catch (error) {
    logger.error(`Personel izni ${req.params.id} güncellenirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel izni güncellenirken hata oluştu', error: error.message });
  }
};

// Personel iznini sil
exports.deleteIzin = async (req, res) => {
  try {
    const { id } = req.params;
    
    const mevcutIzin = await prismaClient.personelIzin.findUnique({
      where: { id: Number(id) }
    });
    
    if (!mevcutIzin) {
      return res.status(404).json({ message: 'Personel izni bulunamadı' });
    }
    
    await prismaClient.personelIzin.delete({
      where: { id: Number(id) }
    });
    
    logger.info(`Personel izni silindi: ${id}`);
    res.status(204).send();
  } catch (error) {
    logger.error(`Personel izni ${req.params.id} silinirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personel izni silinirken hata oluştu', error: error.message });
  }
};

// Personele göre izinleri getir
exports.getIzinlerByPersonelId = async (req, res) => {
  try {
    const { personelId } = req.params;
    
    const personel = await prismaClient.personel.findUnique({
      where: { id: Number(personelId) }
    });
    
    if (!personel) {
      return res.status(404).json({ message: 'Personel bulunamadı' });
    }
    
    const izinler = await prismaClient.personelIzin.findMany({
      where: { personelId: Number(personelId) },
      include: {
        dosya: true
      },
      orderBy: {
        baslangicTarihi: 'desc'
      }
    });
    
    res.json(izinler);
  } catch (error) {
    logger.error(`Personelin izinleri getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Personelin izinleri getirilirken hata oluştu', error: error.message });
  }
};

// Belirli türdeki izinleri getir
exports.getIzinlerByTur = async (req, res) => {
  try {
    const { izinTuru } = req.params;
    
    const izinler = await prismaClient.personelIzin.findMany({
      where: { izinTuru },
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dosya: true
      },
      orderBy: {
        baslangicTarihi: 'desc'
      }
    });
    
    res.json(izinler);
  } catch (error) {
    logger.error(`Belirli tür izinler getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Belirli tür izinler getirilirken hata oluştu', error: error.message });
  }
};

// Tarih aralığına göre izinleri getir
exports.getIzinlerByTarihAraligi = async (req, res) => {
  try {
    const { baslangic, bitis } = req.params;
    
    // Tarih validasyonu
    const baslangicTarihi = new Date(baslangic);
    const bitisTarihi = new Date(bitis);
    
    if (baslangicTarihi > bitisTarihi) {
      return res.status(400).json({ message: 'Başlangıç tarihi bitiş tarihinden sonra olamaz' });
    }
    
    const izinler = await prismaClient.personelIzin.findMany({
      where: {
        OR: [
          // İzin başlangıç tarihi aralık içinde
          {
            baslangicTarihi: {
              gte: baslangicTarihi,
              lte: bitisTarihi
            }
          },
          // İzin bitiş tarihi aralık içinde
          {
            bitisTarihi: {
              gte: baslangicTarihi,
              lte: bitisTarihi
            }
          },
          // İzin aralığı, sorgu aralığını içeriyor
          {
            AND: [
              { baslangicTarihi: { lte: baslangicTarihi } },
              { bitisTarihi: { gte: bitisTarihi } }
            ]
          }
        ]
      },
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        },
        dosya: true
      },
      orderBy: {
        baslangicTarihi: 'asc'
      }
    });
    
    res.json(izinler);
  } catch (error) {
    logger.error(`Tarih aralığındaki izinler getirilirken hata oluştu: ${error.message}`);
    res.status(500).json({ message: 'Tarih aralığındaki izinler getirilirken hata oluştu', error: error.message });
  }
};