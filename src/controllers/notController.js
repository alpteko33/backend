const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Tüm notları getir
exports.getAllNotes = async (req, res) => {
  try {
    const notlar = await prisma.not.findMany({
      include: {
        olusturan: true,
        ilgiliMuvekkil: true,
        ilgiliDava: true
      }
    });
    res.json(notlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Yeni not oluştur
exports.createNote = async (req, res) => {
  try {
    const yeniNot = await prisma.not.create({
      data: req.body
    });
    res.status(201).json(yeniNot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Belirli bir notu getir
exports.getNoteById = async (req, res) => {
  try {
    const not = await prisma.not.findUnique({
      where: {
        id: parseInt(req.params.id)
      },
      include: {
        olusturan: true,
        ilgiliMuvekkil: true,
        ilgiliDava: true
      }
    });
    
    if (!not) {
      return res.status(404).json({ message: 'Not bulunamadı' });
    }
    
    res.json(not);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Notu güncelle
exports.updateNote = async (req, res) => {
  try {
    const guncellenenNot = await prisma.not.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    });
    res.json(guncellenenNot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Notu sil
exports.deleteNote = async (req, res) => {
  try {
    await prisma.not.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.json({ message: 'Not başarıyla silindi' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Kullanıcıya göre notları getir
exports.getNotesByUser = async (req, res) => {
  try {
    const notlar = await prisma.not.findMany({
      where: {
        olusturanId: parseInt(req.params.kullaniciId)
      }
    });
    res.json(notlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Müvekkile göre notları getir
exports.getNotesByClient = async (req, res) => {
  try {
    const notlar = await prisma.not.findMany({
      where: {
        muvekkilId: parseInt(req.params.muvekkilId)
      }
    });
    res.json(notlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Davaya göre notları getir
exports.getNotesByLawsuit = async (req, res) => {
  try {
    const notlar = await prisma.not.findMany({
      where: {
        davaId: parseInt(req.params.davaId)
      }
    });
    res.json(notlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Not türüne göre notları getir
exports.getNotesByType = async (req, res) => {
  try {
    const notlar = await prisma.not.findMany({
      where: {
        notTuru: req.params.notTuru
      }
    });
    res.json(notlar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; 