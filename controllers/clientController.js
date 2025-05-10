const prisma = require('../db');

// Tüm müvekkilleri getir
exports.getAllClients = async (req, res) => {
  try {
    const muvekkiller = await prisma.muvekkil.findMany({
      include: {
        iletisimler: true,
        adresler: true,
        gorevler: true,
        davalar: true,
      },
    });
    res.json(muvekkiller);
  } catch (error) {
    res.status(500).json({ message: 'Müvekkiller getirilirken hata oluştu', error: error.message });
  }
};

// Müvekkil detayını getir
exports.getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const muvekkil = await prisma.muvekkil.findUnique({
      where: { id: Number(id) },
      include: {
        iletisimler: true,
        adresler: true,
        davalar: true,
        gorevler: true,
      },
    });
    if (!muvekkil) {
      return res.status(404).json({ message: 'Müvekkil bulunamadı' });
    }
    res.json(muvekkil);
  } catch (error) {
    res.status(500).json({ message: 'Müvekkil getirilirken hata oluştu', error: error.message });
  }
};

// Yeni müvekkil oluştur
exports.createClient = async (req, res) => {
  try {
    const { ad, soyad, muvekkilTipi, vergiNumarasi, firmaAdi, iletisimler, adresler } = req.body;
    const olusturanKullaniciId = req.user?.id || 1;
    const yeniMuvekkil = await prisma.muvekkil.create({
      data: {
        ad,
        soyad,
        muvekkilTipi: muvekkilTipi || 'BIREYSEL',
        vergiNumarasi,
        firmaAdi,
        olusturanKullaniciId,
        iletisimler: iletisimler ? {
          create: iletisimler.map(iletisim => ({
            tip: iletisim.tip,
            deger: iletisim.deger,
            aciklama: iletisim.aciklama,
          }))
        } : undefined,
        adresler: adresler ? {
          create: adresler.map(adres => ({
            adresSatiri: adres.adresSatiri,
            sehir: adres.sehir,
            ilce: adres.ilce,
            postaKodu: adres.postaKodu,
            ulke: adres.ulke || 'Türkiye',
            adresTipi: adres.adresTipi || 'EV',
          }))
        } : undefined,
      },
      include: {
        iletisimler: true,
        adresler: true,
        gorevler: true,
        davalar: true,
      },
    });
    res.status(201).json(yeniMuvekkil);
  } catch (error) {
    res.status(500).json({ message: 'Müvekkil oluşturulurken hata oluştu', error: error.message });
  }
};

// Müvekkil güncelle
exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { ad, soyad, muvekkilTipi, vergiNumarasi, firmaAdi } = req.body;
    const mevcutMuvekkil = await prisma.muvekkil.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutMuvekkil) {
      return res.status(404).json({ message: 'Müvekkil bulunamadı' });
    }
    const guncellenenMuvekkil = await prisma.muvekkil.update({
      where: { id: Number(id) },
      data: {
        ad: ad || undefined,
        soyad: soyad || undefined,
        muvekkilTipi: muvekkilTipi || undefined,
        vergiNumarasi: vergiNumarasi || undefined,
        firmaAdi: firmaAdi || undefined,
      },
      include: {
        iletisimler: true,
        adresler: true,
        gorevler: true,
        davalar: true,
      },
    });
    res.json(guncellenenMuvekkil);
  } catch (error) {
    res.status(500).json({ message: 'Müvekkil güncellenirken hata oluştu', error: error.message });
  }
};

// Müvekkil sil
exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const mevcutMuvekkil = await prisma.muvekkil.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutMuvekkil) {
      return res.status(404).json({ message: 'Müvekkil bulunamadı' });
    }
    await prisma.iletisim.deleteMany({
      where: { muvekkilId: Number(id) },
    });
    await prisma.adres.deleteMany({
      where: { muvekkilId: Number(id) },
    });
    await prisma.gorev.deleteMany({
      where: { muvekkilId: Number(id) },
    });
    await prisma.dava.deleteMany({
      where: { muvekkilId: Number(id) },
    });
    await prisma.muvekkil.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Müvekkil başarıyla silindi' });
  } catch (error) {
    res.status(500).json({ message: 'Müvekkil silinirken hata oluştu', error: error.message });
  }
};

// Müvekkile yeni iletişim bilgisi ekle
exports.addContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { tip, deger, aciklama } = req.body;
    const mevcutMuvekkil = await prisma.muvekkil.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutMuvekkil) {
      return res.status(404).json({ message: 'Müvekkil bulunamadı' });
    }
    const yeniIletisim = await prisma.iletisim.create({
      data: {
        tip,
        deger,
        aciklama,
        muvekkilId: Number(id),
      },
    });
    res.status(201).json(yeniIletisim);
  } catch (error) {
    res.status(500).json({ message: 'İletişim bilgisi eklenirken hata oluştu', error: error.message });
  }
};

// Müvekkile yeni adres bilgisi ekle
exports.addAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { adresSatiri, sehir, ilce, postaKodu, ulke, adresTipi } = req.body;
    const mevcutMuvekkil = await prisma.muvekkil.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutMuvekkil) {
      return res.status(404).json({ message: 'Müvekkil bulunamadı' });
    }
    const yeniAdres = await prisma.adres.create({
      data: {
        adresSatiri,
        sehir,
        ilce,
        postaKodu,
        ulke: ulke || 'Türkiye',
        adresTipi: adresTipi || 'EV',
        muvekkilId: Number(id),
      },
    });
    res.status(201).json(yeniAdres);
  } catch (error) {
    res.status(500).json({ message: 'Adres bilgisi eklenirken hata oluştu', error: error.message });
  }
}; 