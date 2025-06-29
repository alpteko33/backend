const prisma = require('../config/database');
const logger = require('../utils/logger');
const emailSender = require('../utils/emailSender');
const { successResponse, errorResponse } = require('../utils/response');

/**
 * Personel daveti gönder
 * @param {object} req - Request objesi
 * @param {object} res - Response objesi
 */
exports.invitePersonnel = async (req, res) => {
  try {
    const { eposta } = req.body;
    const yoneticiId = req.user.id;
    
    if (!eposta) {
      return errorResponse(res, 'E-posta adresi gereklidir', 400);
    }
    
    // Davet eden yönetici bilgilerini al
    const yonetici = await prisma.kullanici.findUnique({
      where: { id: yoneticiId }
    });
    
    if (!yonetici) {
      return errorResponse(res, 'Yönetici bulunamadı', 404);
    }
    
    // Yönetici rolü kontrol et (sadece YONETICI ve AVUKAT rolleri personel davet edebilir)
    if (yonetici.rol !== 'YONETICI' && yonetici.rol !== 'AVUKAT') {
      return errorResponse(res, 'Sadece yönetici ve avukat rolündeki kullanıcılar personel davet edebilir', 403);
    }
    
    // Davet edilecek kullanıcıyı e-posta adresine göre bul
    const personel = await prisma.kullanici.findUnique({
      where: { eposta }
    });
    
    if (!personel) {
      return errorResponse(res, 'Bu e-posta adresine sahip kullanıcı bulunamadı', 404);
    }
    
    // Personel rolü kontrol et (YONETICI ve AVUKAT dışındaki roller personel olabilir)
    if (personel.rol === 'YONETICI' || personel.rol === 'AVUKAT') {
      return errorResponse(res, 'Yönetici veya avukat rolündeki kullanıcılar personel olamazlar', 400);
    }
    
    // Zaten bu yöneticinin personeli mi kontrol et
    const mevcutPersonel = await prisma.personel.findFirst({
      where: {
        eposta: personel.eposta,
        yoneticiId: yoneticiId
      }
    });
    
    if (mevcutPersonel) {
      return errorResponse(res, 'Bu kullanıcı zaten sizin personeliniz', 400);
    }
    
    // Zaten bekleyen bir davet var mı kontrol et
    const mevcutDavet = await prisma.personelDavet.findFirst({
      where: {
        yoneticiId,
        personelId: personel.id,
        durum: 'BEKLEMEDE'
      }
    });
    
    if (mevcutDavet) {
      return errorResponse(res, 'Bu kullanıcıya zaten bir davet gönderilmiş', 400);
    }
    
    // Davet oluştur
    const davet = await prisma.personelDavet.create({
      data: {
        yoneticiId,
        personelId: personel.id
      }
    });
    
    // E-posta bildirimi gönder
    try {
      await emailSender.sendPersonnelInvitation(
        personel.eposta,
        yonetici.ad,
        yonetici.soyad
      );
    } catch (emailError) {
      logger.error(`E-posta gönderimi sırasında hata: ${emailError.message}`);
      // E-posta hatası olsa da işleme devam et
    }
    
    logger.info(`Personel daveti gönderildi: ${yonetici.id} -> ${personel.id}`);
    return successResponse(
      res,
      { id: davet.id },
      'Davet başarıyla gönderildi',
      201
    );
  } catch (error) {
    logger.error(`Personel daveti gönderilirken hata oluştu: ${error.message}`);
    return errorResponse(res, 'Davet gönderilirken hata oluştu', 500, error);
  }
};

/**
 * Gelen personel davetlerini listele
 * @param {object} req - Request objesi
 * @param {object} res - Response objesi
 */
exports.getIncomingInvitations = async (req, res) => {
  try {
    const kullaniciId = req.user.id;
    
    const davetler = await prisma.personelDavet.findMany({
      where: {
        personelId: kullaniciId
      },
      include: {
        yonetici: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
            baro: true,
            profilResmi: true
          }
        }
      },
      orderBy: {
        davetTarihi: 'desc'
      }
    });
    
    return successResponse(res, davetler);
  } catch (error) {
    logger.error(`Gelen personel davetleri getirilirken hata oluştu: ${error.message}`);
    return errorResponse(res, 'Gelen davetleri getirirken hata oluştu', 500, error);
  }
};

/**
 * Gönderilen personel davetlerini listele
 * @param {object} req - Request objesi
 * @param {object} res - Response objesi
 */
exports.getOutgoingInvitations = async (req, res) => {
  try {
    const kullaniciId = req.user.id;
    
    const davetler = await prisma.personelDavet.findMany({
      where: {
        yoneticiId: kullaniciId
      },
      include: {
        personel: {
          select: {
            id: true,
            ad: true,
            soyad: true,
            eposta: true,
            rol: true,
            profilResmi: true
          }
        }
      },
      orderBy: {
        davetTarihi: 'desc'
      }
    });
    
    return successResponse(res, davetler);
  } catch (error) {
    logger.error(`Gönderilen personel davetleri getirilirken hata oluştu: ${error.message}`);
    return errorResponse(res, 'Gönderilen davetleri getirirken hata oluştu', 500, error);
  }
};

/**
 * Personel davetine yanıt ver (kabul et veya reddet)
 * @param {object} req - Request objesi
 * @param {object} res - Response objesi
 */
exports.respondToInvitation = async (req, res) => {
  try {
    const { davetId, kabul } = req.body;
    const kullaniciId = req.user.id;
    
    if (davetId === undefined || kabul === undefined) {
      return errorResponse(res, 'Davet ID ve kabul durumu gereklidir', 400);
    }
    
    // Daveti bul
    const davet = await prisma.personelDavet.findUnique({
      where: { id: parseInt(davetId) },
      include: {
        yonetici: true,
        personel: true
      }
    });
    
    if (!davet) {
      return errorResponse(res, 'Davet bulunamadı', 404);
    }
    
    // Bu davet bu kullanıcıya mı?
    if (davet.personelId !== kullaniciId) {
      return errorResponse(res, 'Bu daveti yanıtlama yetkiniz bulunmuyor', 403);
    }
    
    // Davet zaten yanıtlanmış mı?
    if (davet.durum !== 'BEKLEMEDE') {
      return errorResponse(res, 'Bu davet zaten yanıtlanmış', 400);
    }
    
    // İşlemleri bir transaction içinde yap
    const result = await prisma.$transaction(async (tx) => {
      // Daveti güncelle
      const guncellenenDavet = await tx.personelDavet.update({
        where: { id: parseInt(davetId) },
        data: {
          durum: kabul ? 'KABUL_EDILDI' : 'REDDEDILDI',
          yanitTarihi: new Date()
        }
      });
      
      // Eğer davet kabul edildiyse personel kaydı oluştur
      if (kabul) {
        const personel = await tx.personel.create({
          data: {
            ad: davet.personel.ad,
            soyad: davet.personel.soyad,
            tcKimlikNo: davet.personel.tcKimlikNo,
            telefonNo: davet.personel.telefonNo,
            eposta: davet.personel.eposta,
            adres: davet.personel.adres,
            gorevi: davet.personel.rol, // Personelin rolünü görevi olarak kaydet
            iseBaslamaTarihi: new Date(),
            yoneticiId: davet.yoneticiId
          }
        });
        
        logger.info(`Personel kaydı oluşturuldu: Personel ID ${personel.id}, Yönetici ID ${davet.yoneticiId}`);
        return { guncellenenDavet, personel };
      }
      
      return { guncellenenDavet };
    });
    
    // Sonucu dön
    const mesaj = kabul ? 'Davet kabul edildi ve personel kaydı oluşturuldu' : 'Davet reddedildi';
    return successResponse(res, result, mesaj);
    
  } catch (error) {
    logger.error(`Personel daveti yanıtlanırken hata oluştu: ${error.message}`);
    return errorResponse(res, 'Davet yanıtlanırken hata oluştu', 500, error);
  }
};

/**
 * Personel davetini iptal et
 * @param {object} req - Request objesi
 * @param {object} res - Response objesi
 */
exports.cancelInvitation = async (req, res) => {
  try {
    const { id } = req.params;
    const kullaniciId = req.user.id;
    
    // Daveti bul
    const davet = await prisma.personelDavet.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!davet) {
      return errorResponse(res, 'Davet bulunamadı', 404);
    }
    
    // Bu daveti iptal etme yetkisi var mı?
    if (davet.yoneticiId !== kullaniciId) {
      return errorResponse(res, 'Bu daveti iptal etme yetkiniz bulunmuyor', 403);
    }
    
    // Davet yanıtlanmış mı?
    if (davet.durum !== 'BEKLEMEDE') {
      return errorResponse(res, 'Yanıtlanmış bir daveti iptal edemezsiniz', 400);
    }
    
    // Daveti sil
    await prisma.personelDavet.delete({
      where: { id: parseInt(id) }
    });
    
    logger.info(`Personel daveti iptal edildi: ${id}`);
    return successResponse(res, null, 'Davet başarıyla iptal edildi');
    
  } catch (error) {
    logger.error(`Personel daveti iptal edilirken hata oluştu: ${error.message}`);
    return errorResponse(res, 'Davet iptal edilirken hata oluştu', 500, error);
  }
}; 