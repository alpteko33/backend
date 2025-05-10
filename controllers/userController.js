const prisma = require('../db');
const bcrypt = require('bcrypt');

// Tüm kullanıcıları getir
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.kullanici.findMany({
      select: {
        id: true,
        eposta: true,
        ad: true,
        soyad: true,
        rol: true,
        durum: true,
        olusturulmaTarihi: true,
        guncellenmeTarihi: true,
      },
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Kullanıcılar getirilirken hata oluştu', error: error.message });
  }
};

// Kullanıcı detayını getir
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.kullanici.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        eposta: true,
        ad: true,
        soyad: true,
        rol: true,
        durum: true,
        olusturulmaTarihi: true,
        guncellenmeTarihi: true,
      },
    });
    
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Kullanıcı getirilirken hata oluştu', error: error.message });
  }
};

// Yeni kullanıcı oluştur
exports.createUser = async (req, res) => {
  try {
    const { eposta, sifre, ad, soyad, rol } = req.body;
    
    // Eposta kontrolü
    const existingUser = await prisma.kullanici.findUnique({
      where: { eposta },
    });
    
    if (existingUser) {
      return res.status(400).json({ message: 'Bu e-posta adresi zaten kullanılıyor' });
    }
    
    // Şifre hashleme
    const hashedPassword = await bcrypt.hash(sifre, 10);
    
    const newUser = await prisma.kullanici.create({
      data: {
        eposta,
        sifre: hashedPassword,
        ad,
        soyad,
        rol: rol || 'KULLANICI',
      },
    });
    
    const { sifre: _, ...userWithoutPassword } = newUser;
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: 'Kullanıcı oluşturulurken hata oluştu', error: error.message });
  }
};

// Kullanıcı güncelle
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { eposta, ad, soyad, rol, durum } = req.body;
    
    // Önce kullanıcının var olup olmadığını kontrol et
    const existingUser = await prisma.kullanici.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingUser) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    // Eposta değiştiyse benzersiz olduğundan emin ol
    if (eposta && eposta !== existingUser.eposta) {
      const epostaExists = await prisma.kullanici.findUnique({
        where: { eposta },
      });
      
      if (epostaExists) {
        return res.status(400).json({ message: 'Bu e-posta adresi zaten kullanılıyor' });
      }
    }
    
    const updatedUser = await prisma.kullanici.update({
      where: { id: Number(id) },
      data: {
        eposta: eposta || undefined,
        ad: ad || undefined,
        soyad: soyad || undefined,
        rol: rol || undefined,
        durum: durum || undefined,
      },
      select: {
        id: true,
        eposta: true,
        ad: true,
        soyad: true,
        rol: true,
        durum: true,
        olusturulmaTarihi: true,
        guncellenmeTarihi: true,
      },
    });
    
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Kullanıcı güncellenirken hata oluştu', error: error.message });
  }
};

// Kullanıcı sil
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Önce kullanıcının var olup olmadığını kontrol et
    const existingUser = await prisma.kullanici.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingUser) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    await prisma.kullanici.delete({
      where: { id: Number(id) },
    });
    
    res.json({ message: 'Kullanıcı başarıyla silindi' });
  } catch (error) {
    res.status(500).json({ message: 'Kullanıcı silinirken hata oluştu', error: error.message });
  }
};

// Şifre değiştir
exports.changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;
    
    // Kullanıcıyı bul
    const user = await prisma.kullanici.findUnique({
      where: { id: Number(id) },
    });
    
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    // Mevcut şifreyi kontrol et
    const isPasswordValid = await bcrypt.compare(currentPassword, user.sifre);
    
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Mevcut şifre yanlış' });
    }
    
    // Yeni şifreyi hashle ve güncelle
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    await prisma.kullanici.update({
      where: { id: Number(id) },
      data: {
        sifre: hashedPassword,
      },
    });
    
    res.json({ message: 'Şifre başarıyla güncellendi' });
  } catch (error) {
    res.status(500).json({ message: 'Şifre güncellenirken hata oluştu', error: error.message });
  }
}; 