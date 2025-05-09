const prisma = require('../db');
const bcrypt = require('bcrypt');

// Tüm kullanıcıları getir
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        surname: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
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
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      select: {
        id: true,
        email: true,
        name: true,
        surname: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
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
    const { email, password, name, surname, role } = req.body;
    
    // Email kontrolü
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      return res.status(400).json({ message: 'Bu email adresi zaten kullanılıyor' });
    }
    
    // Şifre hashleme
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        surname,
        role: role || 'USER',
      },
    });
    
    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ message: 'Kullanıcı oluşturulurken hata oluştu', error: error.message });
  }
};

// Kullanıcı güncelle
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, name, surname, role, status } = req.body;
    
    // Önce kullanıcının var olup olmadığını kontrol et
    const existingUser = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingUser) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    // Email değiştiyse benzersiz olduğundan emin ol
    if (email && email !== existingUser.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email },
      });
      
      if (emailExists) {
        return res.status(400).json({ message: 'Bu email adresi zaten kullanılıyor' });
      }
    }
    
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        email: email || undefined,
        name: name || undefined,
        surname: surname || undefined,
        role: role || undefined,
        status: status || undefined,
      },
      select: {
        id: true,
        email: true,
        name: true,
        surname: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
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
    const existingUser = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingUser) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    await prisma.user.delete({
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
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    // Mevcut şifreyi kontrol et
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Mevcut şifre yanlış' });
    }
    
    // Yeni şifreyi hashle ve güncelle
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    await prisma.user.update({
      where: { id: Number(id) },
      data: {
        password: hashedPassword,
      },
    });
    
    res.json({ message: 'Şifre başarıyla güncellendi' });
  } catch (error) {
    res.status(500).json({ message: 'Şifre güncellenirken hata oluştu', error: error.message });
  }
}; 