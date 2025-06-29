const prisma = require('../config/database');
const { successResponse, errorResponse } = require('../utils/response');

// Tüm kullanıcıları getir
const getAllKullanicilar = async (req, res) => {
  try {
    const kullanicilar = await prisma.kullanici.findMany({
      select: {
        id: true,
        eposta: true,
        ad: true,
        soyad: true,
        rol: true,
        durum: true,
        baroNo: true,
        tcKimlikNo: true,
        telefonNo: true,
        adres: true,
        profilResmi: true,
        olusturulmaTarihi: true,
        sifre: false
      }
    });
    return successResponse(res, kullanicilar);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

// Tek kullanıcı detayı getir
const getKullaniciById = async (req, res) => {
  try {
    const kullanici = await prisma.kullanici.findUnique({
      where: { id: parseInt(req.params.id) },
      select: {
        id: true,
        eposta: true,
        ad: true,
        soyad: true,
        rol: true,
        durum: true,
        baroNo: true,
        tcKimlikNo: true,
        telefonNo: true,
        adres: true,
        profilResmi: true,
        olusturulmaTarihi: true,
        sifre: false
      }
    });
    
    if (!kullanici) {
      return errorResponse(res, 'Kullanıcı bulunamadı', 404);
    }
    
    return successResponse(res, kullanici);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

// Yeni kullanıcı oluştur
const createKullanici = async (req, res) => {
  try {
    const kullanici = await prisma.kullanici.create({
      data: {
        eposta: req.body.eposta,
        sifre: req.body.sifre,
        ad: req.body.ad,
        soyad: req.body.soyad,
        rol: req.body.rol,
        durum: req.body.durum || 'AKTIF',
        baroNo: req.body.baroNo,
        tcKimlikNo: req.body.tcKimlikNo,
        telefonNo: req.body.telefonNo,
        adres: req.body.adres,
        profilResmi: req.body.profilResmi
      }
    });
    
    const { sifre, ...kullaniciDondurulen } = kullanici;
    return successResponse(res, kullaniciDondurulen, 'Kullanıcı başarıyla oluşturuldu', 201);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

// Kullanıcı güncelle
const updateKullanici = async (req, res) => {
  try {
    const { sifre, ...digerVeriler } = req.body;
    
    const kullanici = await prisma.kullanici.update({
      where: { id: parseInt(req.params.id) },
      data: digerVeriler
    });
    
    const { sifre: kullaniciSifre, ...kullaniciDondurulen } = kullanici;
    return successResponse(res, kullaniciDondurulen, 'Kullanıcı başarıyla güncellendi');
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

// Kullanıcı sil
const deleteKullanici = async (req, res) => {
  try {
    await prisma.kullanici.delete({
      where: { id: parseInt(req.params.id) }
    });
    return successResponse(res, null, 'Kullanıcı başarıyla silindi', 204);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

// Şifre değiştir
const changePassword = async (req, res) => {
  try {
    const { eskiSifre, yeniSifre } = req.body;
    
    const kullanici = await prisma.kullanici.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    
    if (!kullanici) {
      return errorResponse(res, 'Kullanıcı bulunamadı', 404);
    }
    
    if (kullanici.sifre !== eskiSifre) {
      return errorResponse(res, 'Eski şifre yanlış', 400);
    }
    
    await prisma.kullanici.update({
      where: { id: parseInt(req.params.id) },
      data: { sifre: yeniSifre }
    });
    
    return successResponse(res, null, 'Şifre başarıyla değiştirildi');
  } catch (error) {
    return errorResponse(res, error.message);
  }
};

module.exports = {
  getAllKullanicilar,
  getKullaniciById,
  createKullanici,
  updateKullanici,
  deleteKullanici,
  changePassword
}; 