const prisma = require('../db');

// Tüm müşterileri getir
exports.getAllClients = async (req, res) => {
  try {
    const clients = await prisma.client.findMany({
      include: {
        contacts: true,
        addresses: true,
      },
    });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Müşteriler getirilirken hata oluştu', error: error.message });
  }
};

// Müşteri detayını getir
exports.getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await prisma.client.findUnique({
      where: { id: Number(id) },
      include: {
        contacts: true,
        addresses: true,
        lawsuits: true,
        tasks: true,
      },
    });
    
    if (!client) {
      return res.status(404).json({ message: 'Müşteri bulunamadı' });
    }
    
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: 'Müşteri getirilirken hata oluştu', error: error.message });
  }
};

// Yeni müşteri oluştur
exports.createClient = async (req, res) => {
  try {
    const { 
      name, 
      surname, 
      clientType, 
      taxNumber, 
      companyName, 
      contacts, 
      addresses 
    } = req.body;
    
    // Kullanıcı ID'si (gerçek uygulamada kimlik doğrulama sisteminden gelecek)
    const createdById = req.user?.id || 1; // Varsayılan olarak 1 kullanılıyor
    
    const newClient = await prisma.client.create({
      data: {
        name,
        surname,
        clientType: clientType || 'INDIVIDUAL',
        taxNumber,
        companyName,
        createdById,
        // İlişkili iletişim bilgilerini oluştur
        contacts: contacts ? {
          create: contacts.map(contact => ({
            type: contact.type,
            value: contact.value,
            description: contact.description,
          }))
        } : undefined,
        // İlişkili adres bilgilerini oluştur
        addresses: addresses ? {
          create: addresses.map(address => ({
            addressLine: address.addressLine,
            city: address.city,
            district: address.district,
            postalCode: address.postalCode,
            country: address.country || 'Türkiye',
            addressType: address.addressType || 'HOME',
          }))
        } : undefined,
      },
      include: {
        contacts: true,
        addresses: true,
      },
    });
    
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ message: 'Müşteri oluşturulurken hata oluştu', error: error.message });
  }
};

// Müşteri güncelle
exports.updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      name, 
      surname, 
      clientType, 
      taxNumber, 
      companyName
    } = req.body;
    
    // Önce müşterinin var olup olmadığını kontrol et
    const existingClient = await prisma.client.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingClient) {
      return res.status(404).json({ message: 'Müşteri bulunamadı' });
    }
    
    const updatedClient = await prisma.client.update({
      where: { id: Number(id) },
      data: {
        name: name || undefined,
        surname: surname || undefined,
        clientType: clientType || undefined,
        taxNumber: taxNumber || undefined,
        companyName: companyName || undefined,
      },
      include: {
        contacts: true,
        addresses: true,
      },
    });
    
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: 'Müşteri güncellenirken hata oluştu', error: error.message });
  }
};

// Müşteri sil
exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Önce müşterinin var olup olmadığını kontrol et
    const existingClient = await prisma.client.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingClient) {
      return res.status(404).json({ message: 'Müşteri bulunamadı' });
    }
    
    // İlişkili tüm contact ve address kayıtlarını sil
    await prisma.contact.deleteMany({
      where: { clientId: Number(id) },
    });
    
    await prisma.address.deleteMany({
      where: { clientId: Number(id) },
    });
    
    // Müşteriyi sil
    await prisma.client.delete({
      where: { id: Number(id) },
    });
    
    res.json({ message: 'Müşteri başarıyla silindi' });
  } catch (error) {
    res.status(500).json({ message: 'Müşteri silinirken hata oluştu', error: error.message });
  }
};

// Müşteriye yeni iletişim bilgisi ekle
exports.addContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, value, description } = req.body;
    
    // Önce müşterinin var olup olmadığını kontrol et
    const existingClient = await prisma.client.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingClient) {
      return res.status(404).json({ message: 'Müşteri bulunamadı' });
    }
    
    const newContact = await prisma.contact.create({
      data: {
        type,
        value,
        description,
        clientId: Number(id),
      },
    });
    
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: 'İletişim bilgisi eklenirken hata oluştu', error: error.message });
  }
};

// Müşteriye yeni adres bilgisi ekle
exports.addAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { addressLine, city, district, postalCode, country, addressType } = req.body;
    
    // Önce müşterinin var olup olmadığını kontrol et
    const existingClient = await prisma.client.findUnique({
      where: { id: Number(id) },
    });
    
    if (!existingClient) {
      return res.status(404).json({ message: 'Müşteri bulunamadı' });
    }
    
    const newAddress = await prisma.address.create({
      data: {
        addressLine,
        city,
        district,
        postalCode,
        country: country || 'Türkiye',
        addressType: addressType || 'HOME',
        clientId: Number(id),
      },
    });
    
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(500).json({ message: 'Adres bilgisi eklenirken hata oluştu', error: error.message });
  }
}; 