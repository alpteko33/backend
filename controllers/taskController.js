const prisma = require('../db');

// Tüm görevleri getir
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      include: {
        assignedTo: {
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
          }
        },
        client: {
          select: {
            id: true,
            name: true,
            surname: true,
          }
        },
        lawsuit: {
          select: {
            id: true,
            caseNumber: true,
            caseType: true,
          }
        }
      },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Görevler getirilirken hata oluştu', error: error.message });
  }
};

// Görev detayını getir
exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await prisma.task.findUnique({
      where: { id: Number(id) },
      include: {
        assignedTo: {
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
          }
        },
        client: {
          select: {
            id: true,
            name: true,
            surname: true,
            contacts: true,
          }
        },
        lawsuit: {
          select: {
            id: true,
            caseNumber: true,
            caseType: true,
            court: true,
          }
        }
      },
    });
    
    if (!task) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Görev getirilirken hata oluştu', error: error.message });
  }
};

// Yeni görev oluştur
exports.createTask = async (req, res) => {
  try {
    const { 
      title, 
      description, 
      dueDate, 
      priority, 
      userId, 
      clientId,
      lawsuitId
    } = req.body;
    
    // Kullanıcı kontrolü
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });
    
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    // Müşteri kontrolü (eğer belirtildiyse)
    if (clientId) {
      const client = await prisma.client.findUnique({
        where: { id: Number(clientId) },
      });
      
      if (!client) {
        return res.status(404).json({ message: 'Müşteri bulunamadı' });
      }
    }
    
    // Dava kontrolü (eğer belirtildiyse)
    if (lawsuitId) {
      const lawsuit = await prisma.lawsuit.findUnique({
        where: { id: Number(lawsuitId) },
      });
      
      if (!lawsuit) {
        return res.status(404).json({ message: 'Dava bulunamadı' });
      }
    }
    
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        dueDate: dueDate ? new Date(dueDate) : null,
        priority: priority || 'NORMAL',
        userId: Number(userId),
        clientId: clientId ? Number(clientId) : null,
        lawsuitId: lawsuitId ? Number(lawsuitId) : null,
      },
      include: {
        assignedTo: {
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
          }
        },
        client: clientId ? {
          select: {
            id: true,
            name: true,
            surname: true,
          }
        } : undefined,
        lawsuit: lawsuitId ? {
          select: {
            id: true,
            caseNumber: true,
            caseType: true,
          }
        } : undefined,
      },
    });
    
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Görev oluşturulurken hata oluştu', error: error.message });
  }
};

// Görev güncelle
exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      title, 
      description, 
      dueDate, 
      priority, 
      status,
      userId, 
      clientId,
      lawsuitId
    } = req.body;
    
    // Görevin var olup olmadığını kontrol et
    const existingTask = await prisma.task.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingTask) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    
    // Kullanıcı değiştiyse kullanıcının var olup olmadığını kontrol et
    if (userId && userId !== existingTask.userId) {
      const user = await prisma.user.findUnique({
        where: { id: Number(userId) },
      });
      
      if (!user) {
        return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
      }
    }
    
    // Müşteri değiştiyse müşterinin var olup olmadığını kontrol et
    if (clientId && clientId !== existingTask.clientId) {
      const client = await prisma.client.findUnique({
        where: { id: Number(clientId) },
      });
      
      if (!client) {
        return res.status(404).json({ message: 'Müşteri bulunamadı' });
      }
    }
    
    // Dava değiştiyse davanın var olup olmadığını kontrol et
    if (lawsuitId && lawsuitId !== existingTask.lawsuitId) {
      const lawsuit = await prisma.lawsuit.findUnique({
        where: { id: Number(lawsuitId) },
      });
      
      if (!lawsuit) {
        return res.status(404).json({ message: 'Dava bulunamadı' });
      }
    }
    
    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        title: title || undefined,
        description: description || undefined,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        priority: priority || undefined,
        status: status || undefined,
        userId: userId ? Number(userId) : undefined,
        clientId: clientId ? Number(clientId) : undefined,
        lawsuitId: lawsuitId ? Number(lawsuitId) : undefined,
      },
      include: {
        assignedTo: {
          select: {
            id: true,
            name: true,
            surname: true,
            email: true,
          }
        },
        client: {
          select: {
            id: true,
            name: true,
            surname: true,
          }
        },
        lawsuit: {
          select: {
            id: true,
            caseNumber: true,
            caseType: true,
          }
        }
      },
    });
    
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Görev güncellenirken hata oluştu', error: error.message });
  }
};

// Görev sil
exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Görevin var olup olmadığını kontrol et
    const existingTask = await prisma.task.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingTask) {
      return res.status(404).json({ message: 'Görev bulunamadı' });
    }
    
    // Görevi sil
    await prisma.task.delete({
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
    const { userId } = req.params;
    
    // Kullanıcının var olup olmadığını kontrol et
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });
    
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    
    const tasks = await prisma.task.findMany({
      where: { userId: Number(userId) },
      include: {
        client: {
          select: {
            id: true,
            name: true,
            surname: true,
          }
        },
        lawsuit: {
          select: {
            id: true,
            caseNumber: true,
            caseType: true,
          }
        }
      },
    });
    
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Görevler getirilirken hata oluştu', error: error.message });
  }
}; 