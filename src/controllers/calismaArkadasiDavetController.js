const prisma = require('../config/database');
const logger = require('../utils/logger');
const emailSender = require('../utils/emailSender');
const { successResponse, errorResponse } = require('../utils/response');
const { isCalismaArkadasi } = require('../middleware/colleagueCheck');

/**
 * Çalışma arkadaşı daveti gönder
 * @param {object} req - Request objesi
 * @param {object} res - Response objesi
 */
exports.inviteColleague = async (req, res) => {
  try {
    const { eposta } = req.body;
    const davetEdenId = req.user.id;
    
    if (!eposta) {
      return errorResponse(res, 'E-posta adresi gereklidir', 400);
    }
    
    // Davet eden kullanıcı bilgilerini al
    const davetEden = await prisma.kullanici.findUnique({
      where: { id: davetEdenId }
    });
    
    if (!davetEden) {
      return errorResponse(res, 'Kullanıcı bulunamadı', 404);
    }
    
    // Davet edilecek kullanıcıyı e-posta adresine göre bul
    const davetEdilen = await prisma.kullanici.findUnique({
      where: { eposta }
    });
    
    if (!davetEdilen) {
      return errorResponse(res, 'Bu e-posta adresine sahip kullanıcı bulunamadı', 404);
    }
    
    // Kullanıcı kendisini davet edemez
    if (davetEdilen.id === davetEdenId) {
      return errorResponse(res, 'Kendinizi çalışma arkadaşı olarak ekleyemezsiniz', 400);
    }
    
    // Zaten çalışma arkadaşı mı kontrol et
    const isColleague = await isCalismaArkadasi(davetEdenId, davetEdilen.id);
    if (isColleague) {
      return errorResponse(res, 'Bu kullanıcı zaten çalışma arkadaşınız', 400);
    }
    
    // Zaten bekleyen bir davet var mı kontrol et
    const mevcutDavet = await prisma.calismaArkadasiDavet.findFirst({
      where: {
        davetEdenId,
        davetEdilenId: davetEdilen.id,
        durum: 'BEKLEMEDE'
      }
    });
    
    if (mevcutDavet) {
      return errorResponse(res, 'Bu kullanıcıya zaten bir davet gönderilmiş', 400);
    }
    
    // Davet oluştur
    const davet = await prisma.calismaArkadasiDavet.create({
      data: {
        davetEdenId,
        davetEdilenId: davetEdilen.id
      }
    });
    
    // E-posta bildirimi gönder
    await emailSender.sendColleagueInvitation(
      davetEdilen.eposta,
      davetEden.ad,
      davetEden.soyad
    );
    
    logger.info(`Çalışma arkadaşı daveti gönderildi: ${davetEden.id} -> ${davetEdilen.id}`);
    return successResponse(
      res,
      { id: davet.id },
      'Davet başarıyla gönderildi',
      201
    );
  } catch (error) {
    logger.error(`Davet gönderilirken hata oluştu: ${error.message}`);
    return errorResponse(res, 'Davet gönderilirken hata oluştu', 500, error);
  }
};

/**
 * Gelen davetleri listele
 * @param {object} req - Request objesi
 * @param {object} res - Response objesi
 */
exports.getIncomingInvitations = async (req, res) => {
  try {
    const kullaniciId = req.user.id;
    
    const davetler = await prisma.calismaArkadasiDavet.findMany({
      where: {
        davetEdilenId: kullaniciId
      },
      include: {
        davetEden: {
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
    logger.error(`Gelen davetleri getirirken hata oluştu: ${error.message}`);
    return errorResponse(res, 'Gelen davetleri getirirken hata oluştu', 500, error);
  }
};

/**
 * Gönderilen davetleri listele
 * @param {object} req - Request objesi
 * @param {object} res - Response objesi
 */
exports.getOutgoingInvitations = async (req, res) => {
  try {
    const kullaniciId = req.user.id;
    
    const davetler = await prisma.calismaArkadasiDavet.findMany({
      where: {
        davetEdenId: kullaniciId
      },
      include: {
        davetEdilen: {
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
    logger.error(`Gönderilen davetleri getirirken hata oluştu: ${error.message}`);
    return errorResponse(res, 'Gönderilen davetleri getirirken hata oluştu', 500, error);
  }
};

/**
 * Davete yanıt ver (kabul et veya reddet)
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
    const davet = await prisma.calismaArkadasiDavet.findUnique({
      where: { id: parseInt(davetId) },
      include: {
        davetEden: true,
        davetEdilen: true
      }
    });
    
    if (!davet) {
      return errorResponse(res, 'Davet bulunamadı', 404);
    }
    
    // Bu davet bu kullanıcıya mı?
    if (davet.davetEdilenId !== kullaniciId) {
      return errorResponse(res, 'Bu daveti yanıtlama yetkiniz bulunmuyor', 403);
    }
    
    // Davet zaten yanıtlanmış mı?
    if (davet.durum !== 'BEKLEMEDE') {
      return errorResponse(res, 'Bu davet zaten yanıtlanmış', 400);
    }
    
    // Daveti güncelle
    await prisma.calismaArkadasiDavet.update({
      where: { id: davet.id },
      data: {
        durum: kabul ? 'KABUL_EDILDI' : 'REDDEDILDI',
        yanitTarihi: new Date()
      }
    });
    
    // Eğer kabul edildiyse, çalışma arkadaşı ilişkisi kur
    if (kabul) {
      // Davet edilen -> Davet eden ilişkisi
      await prisma.calismaArkadasi.create({
        data: {
          ad: davet.davetEden.ad,
          soyad: davet.davetEden.soyad,
          eposta: davet.davetEden.eposta,
          baro: davet.davetEden.baro,
          baroNo: davet.davetEden.baroNo,
          tcKimlikNo: davet.davetEden.tcKimlikNo,
          telefonNo: davet.davetEden.telefonNo,
          kullaniciId: davet.davetEdilenId
        }
      });
      
      // Davet eden -> Davet edilen ilişkisi
      await prisma.calismaArkadasi.create({
        data: {
          ad: davet.davetEdilen.ad,
          soyad: davet.davetEdilen.soyad,
          eposta: davet.davetEdilen.eposta,
          baro: davet.davetEdilen.baro,
          baroNo: davet.davetEdilen.baroNo,
          tcKimlikNo: davet.davetEdilen.tcKimlikNo,
          telefonNo: davet.davetEdilen.telefonNo,
          kullaniciId: davet.davetEdenId
        }
      });
    }
    
    // E-posta bildirimi gönder
    await emailSender.sendInvitationResponse(
      davet.davetEden.eposta,
      davet.davetEdilen.ad,
      davet.davetEdilen.soyad,
      kabul
    );
    
    logger.info(`Çalışma arkadaşı daveti yanıtlandı: ID=${davet.id}, Kabul=${kabul}`);
    
    const message = kabul
      ? 'Davet kabul edildi ve çalışma arkadaşı ilişkisi kuruldu'
      : 'Davet reddedildi';
    
    return successResponse(res, { id: davet.id, kabul }, message);
  } catch (error) {
    logger.error(`Davet yanıtlanırken hata oluştu: ${error.message}`);
    return errorResponse(res, 'Davet yanıtlanırken hata oluştu', 500, error);
  }
};

/**
 * Daveti iptal et
 * @param {object} req - Request objesi
 * @param {object} res - Response objesi
 */
exports.cancelInvitation = async (req, res) => {
  try {
    const davetId = parseInt(req.params.id);
    const kullaniciId = req.user.id;
    
    // Daveti bul
    const davet = await prisma.calismaArkadasiDavet.findUnique({
      where: { id: davetId }
    });
    
    if (!davet) {
      return errorResponse(res, 'Davet bulunamadı', 404);
    }
    
    // Bu daveti bu kullanıcı mı göndermiş?
    if (davet.davetEdenId !== kullaniciId) {
      return errorResponse(res, 'Bu daveti iptal etme yetkiniz bulunmuyor', 403);
    }
    
    // Davet zaten yanıtlanmış mı?
    if (davet.durum !== 'BEKLEMEDE') {
      return errorResponse(res, 'Bu davet zaten yanıtlanmış, iptal edilemez', 400);
    }
    
    // Daveti sil
    await prisma.calismaArkadasiDavet.delete({
      where: { id: davet.id }
    });
    
    logger.info(`Çalışma arkadaşı daveti iptal edildi: ID=${davet.id}`);
    return successResponse(res, { id: davet.id }, 'Davet başarıyla iptal edildi');
  } catch (error) {
    logger.error(`Davet iptal edilirken hata oluştu: ${error.message}`);
    return errorResponse(res, 'Davet iptal edilirken hata oluştu', 500, error);
  }
}; 