const prisma = require('../db');

// Tüm davaları getir
exports.getAllLawsuits = async (req, res) => {
  try {
    const lawsuits = await prisma.lawsuit.findMany({
      include: {
        client: true,
        lawyer: {
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
          }
        },
      },
    });
    res.json(lawsuits);
  } catch (error) {
    res.status(500).json({ message: 'Davalar getirilirken hata oluştu', error: error.message });
  }
};

// Dava detayını getir
exports.getLawsuitById = async (req, res) => {
  try {
    const { id } = req.params;
    const lawsuit = await prisma.lawsuit.findUnique({
      where: { id: Number(id) },
      include: {
        client: {
          include: {
            contacts: true,
            addresses: true,
          }
        },
        lawyer: {
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
          }
        },
        tasks: true,
      },
    });
    
    if (!lawsuit) {
      return res.status(404).json({ message: 'Dava bulunamadı' });
    }
    
    res.json(lawsuit);
  } catch (error) {
    res.status(500).json({ message: 'Dava getirilirken hata oluştu', error: error.message });
  }
};

// Yeni dava oluştur
exports.createLawsuit = async (req, res) => {
  try {
    const { 
      caseNumber, 
      caseType, 
      court, 
      description, 
      startDate, 
      clientId, 
      opposingParty,
      status
    } = req.body;
    
    // Müşterinin var olup olmadığını kontrol et
    const client = await prisma.client.findUnique({
      where: { id: Number(clientId) },
    });
    
    if (!client) {
      return res.status(404).json({ message: 'Müşteri bulunamadı' });
    }
    
    // Kullanıcı ID'si (gerçek uygulamada kimlik doğrulama sisteminden gelecek)
    const lawyerId = req.user?.id || 1; // Varsayılan olarak 1 kullanılıyor
    
    const newLawsuit = await prisma.lawsuit.create({
      data: {
        caseNumber,
        caseType,
        court,
        description,
        startDate: new Date(startDate),
        clientId: Number(clientId),
        lawyerId,
        opposingParty,
        status: status || 'ACTIVE',
      },
      include: {
        client: true,
        lawyer: {
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
          }
        },
      },
    });
    
    res.status(201).json(newLawsuit);
  } catch (error) {
    res.status(500).json({ message: 'Dava oluşturulurken hata oluştu', error: error.message });
  }
};

// Dava güncelle
exports.updateLawsuit = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      caseNumber, 
      caseType, 
      court, 
      description, 
      startDate, 
      endDate,
      clientId, 
      opposingParty,
      status
    } = req.body;
    
    // Davanın var olup olmadığını kontrol et
    const existingLawsuit = await prisma.lawsuit.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingLawsuit) {
      return res.status(404).json({ message: 'Dava bulunamadı' });
    }
    
    // Müşteri değiştiyse müşterinin var olup olmadığını kontrol et
    if (clientId && clientId !== existingLawsuit.clientId) {
      const client = await prisma.client.findUnique({
        where: { id: Number(clientId) },
      });
      
      if (!client) {
        return res.status(404).json({ message: 'Müşteri bulunamadı' });
      }
    }
    
    const updatedLawsuit = await prisma.lawsuit.update({
      where: { id: Number(id) },
      data: {
        caseNumber: caseNumber || undefined,
        caseType: caseType || undefined,
        court: court || undefined,
        description: description || undefined,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
        clientId: clientId ? Number(clientId) : undefined,
        opposingParty: opposingParty || undefined,
        status: status || undefined,
      },
      include: {
        client: true,
        lawyer: {
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
          }
        },
      },
    });
    
    res.json(updatedLawsuit);
  } catch (error) {
    res.status(500).json({ message: 'Dava güncellenirken hata oluştu', error: error.message });
  }
};

// Dava sil
exports.deleteLawsuit = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Davanın var olup olmadığını kontrol et
    const existingLawsuit = await prisma.lawsuit.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingLawsuit) {
      return res.status(404).json({ message: 'Dava bulunamadı' });
    }
    
    // İlişkili tüm task kayıtlarını güncelle (lawsuitId'yi null yap)
    await prisma.task.updateMany({
      where: { lawsuitId: Number(id) },
      data: { lawsuitId: null },
    });
    
    // Davayı sil
    await prisma.lawsuit.delete({
      where: { id: Number(id) },
    });
    
    res.json({ message: 'Dava başarıyla silindi' });
  } catch (error) {
    res.status(500).json({ message: 'Dava silinirken hata oluştu', error: error.message });
  }
};

// Davaya göre görevleri getir
exports.getLawsuitTasks = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Davanın var olup olmadığını kontrol et
    const existingLawsuit = await prisma.lawsuit.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingLawsuit) {
      return res.status(404).json({ message: 'Dava bulunamadı' });
    }
    
    const tasks = await prisma.task.findMany({
      where: { lawsuitId: Number(id) },
      include: {
        assignedTo: {
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
          }
        },
      },
    });
    
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Görevler getirilirken hata oluştu', error: error.message });
  }
}; 