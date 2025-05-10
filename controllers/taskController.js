const prisma = require('../db');

// Tüm görevleri getir
exports.getAllTasks = async (req, res) => {
  try {
    const gorevler = await prisma.gorev.findMany({
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
    res.status(500).json({ message: 'Görevler getirilirken hata oluştu', error: error.message });
  }
};

// Görev detayını getir
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const gorev = await prisma.gorev.findUnique({
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
    res.status(500).json({ message: 'Görev getirilirken hata oluştu', error: error.message });
  }
};

// Yeni görev oluştur
exports.createTask = async (req, res) => {
  try {
    const { baslik, aciklama, sonTarih, oncelik, kullaniciId, muvekkilId, davaId, listeId, gunumGorunumunde, banaAnimsat, yinelenen } = req.body;
    const kullanici = await prisma.kullanici.findUnique({
      where: { id: Number(kullaniciId) },
    });
    if (!kullanici) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    if (muvekkilId) {
      const muvekkil = await prisma.muvekkil.findUnique({
        where: { id: Number(muvekkilId) },
      });
      if (!muvekkil) {
        return res.status(404).json({ message: 'Müvekkil bulunamadı' });
      }
    }
    if (davaId) {
      const dava = await prisma.dava.findUnique({
        where: { id: Number(davaId) },
      });
      if (!dava) {
        return res.status(404).json({ message: 'Dava bulunamadı' });
      }
    }
    const yeniGorev = await prisma.gorev.create({
      data: {
        baslik,
        aciklama,
        sonTarih: sonTarih ? new Date(sonTarih) : null,
        oncelik: oncelik || 'NORMAL',
        kullaniciId: Number(kullaniciId),
        muvekkilId: muvekkilId ? Number(muvekkilId) : null,
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
        muvekkil: muvekkilId ? {
          select: {
            id: true,
            ad: true,
            soyad: true,
          }
        } : undefined,
        dava: davaId ? {
          select: {
            id: true,
            davaNumarasi: true,
            davaTipi: true,
          }
        } : undefined,
        adimlar: true,
        dosyalar: true,
        liste: true,
      },
    });
    res.status(201).json(yeniGorev);
  } catch (error) {
    res.status(500).json({ message: 'Görev oluşturulurken hata oluştu', error: error.message });
  }
};

// Görev güncelle
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { baslik, aciklama, sonTarih, oncelik, durum, kullaniciId, muvekkilId, davaId, listeId, gunumGorunumunde, banaAnimsat, yinelenen } = req.body;
    const mevcutGorev = await prisma.gorev.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutGorev) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    if (kullaniciId && kullaniciId !== mevcutGorev.kullaniciId) {
      const kullanici = await prisma.kullanici.findUnique({
        where: { id: Number(kullaniciId) },
      });
      if (!kullanici) {
        return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
      }
    }
    if (muvekkilId && muvekkilId !== mevcutGorev.muvekkilId) {
      const muvekkil = await prisma.muvekkil.findUnique({
        where: { id: Number(muvekkilId) },
      });
      if (!muvekkil) {
        return res.status(404).json({ message: 'Müvekkil bulunamadı' });
      }
    }
    if (davaId && davaId !== mevcutGorev.davaId) {
      const dava = await prisma.dava.findUnique({
        where: { id: Number(davaId) },
      });
      if (!dava) {
        return res.status(404).json({ message: 'Dava bulunamadı' });
      }
    }
    const guncellenenGorev = await prisma.gorev.update({
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
    res.json(guncellenenGorev);
  } catch (error) {
    res.status(500).json({ message: 'Görev güncellenirken hata oluştu', error: error.message });
  }
};

// Görev sil
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const mevcutGorev = await prisma.gorev.findUnique({
      where: { id: Number(id) },
    });
    if (!mevcutGorev) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    await prisma.gorev.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Görev başarıyla silindi' });
  } catch (error) {
    res.status(500).json({ message: 'Görev silinirken hata oluştu', error: error.message });
  }
};

// Kullanıcıya göre görevleri getir
exports.getTasksByUser = async (req, res) => {
  try {
    const { kullaniciId } = req.params;
    const kullanici = await prisma.kullanici.findUnique({
      where: { id: Number(kullaniciId) },
    });
    if (!kullanici) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    const gorevler = await prisma.gorev.findMany({
      where: { kullaniciId: Number(kullaniciId) },
      include: {
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
    res.status(500).json({ message: 'Görevler getirilirken hata oluştu', error: error.message });
  }
}; 