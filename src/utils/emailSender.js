const nodemailer = require('nodemailer');
const logger = require('./logger');

/**
 * E-posta gönderme işlemlerini yapan sınıf
 */
class EmailSender {
  constructor() {
    // SMTP yapılandırmasını al (production ortamında .env'den alınmalı)
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true' || false,
      auth: {
        user: process.env.SMTP_USER || 'user@example.com',
        pass: process.env.SMTP_PASS || 'password'
      }
    });
  }

  /**
   * E-posta gönderir
   * @param {string} to - Alıcı e-posta adresi
   * @param {string} subject - E-posta konusu
   * @param {string} text - Düz metin içerik
   * @param {string} html - HTML içerik (opsiyonel)
   * @returns {Promise<boolean>} - Başarılı ise true, başarısız ise false
   */
  async sendEmail(to, subject, text, html = null) {
    try {
      const mailOptions = {
        from: `"Katip Uygulaması" <${process.env.SMTP_USER || 'noreply@example.com'}>`,
        to,
        subject,
        text
      };

      if (html) {
        mailOptions.html = html;
      }

      // Eğer geliştirme modundaysa gerçekten e-posta gönderme
      if (process.env.NODE_ENV === 'development') {
        logger.info(`[DEV] E-posta gönderildi (Sahte): To=${to}, Subject=${subject}`);
        logger.debug(`[DEV] E-posta içeriği: ${text}`);
        return true;
      }

      // E-postayı gönder
      const info = await this.transporter.sendMail(mailOptions);
      logger.info(`E-posta gönderildi: ${info.messageId}`);
      return true;
    } catch (error) {
      logger.error(`E-posta gönderilirken hata oluştu: ${error.message}`);
      return false;
    }
  }

  /**
   * Çalışma arkadaşı daveti gönderir
   * @param {string} to - Alıcı e-posta adresi
   * @param {string} davetEdenAd - Davet eden kullanıcının adı
   * @param {string} davetEdenSoyad - Davet eden kullanıcının soyadı
   * @returns {Promise<boolean>} - Başarılı ise true, başarısız ise false
   */
  async sendColleagueInvitation(to, davetEdenAd, davetEdenSoyad) {
    const subject = 'Katip Uygulaması - Çalışma Arkadaşı Daveti';
    const text = `Sayın Kullanıcı,

${davetEdenAd} ${davetEdenSoyad} sizi Katip uygulamasında çalışma arkadaşı olarak eklemek istiyor.

Uygulamaya giriş yaparak daveti kabul edebilir veya reddedebilirsiniz.

İyi çalışmalar dileriz.
Katip Ekibi
`;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #4A6FDC; color: white; padding: 10px; text-align: center; }
    .content { padding: 20px; border: 1px solid #ddd; }
    .footer { color: #666; font-size: 12px; text-align: center; margin-top: 20px; }
    .button { background-color: #4A6FDC; color: white; padding: 10px 15px; text-decoration: none; display: inline-block; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Katip Uygulaması</h2>
    </div>
    <div class="content">
      <p>Sayın Kullanıcı,</p>
      <p><strong>${davetEdenAd} ${davetEdenSoyad}</strong> sizi Katip uygulamasında çalışma arkadaşı olarak eklemek istiyor.</p>
      <p>Uygulamaya giriş yaparak daveti kabul edebilir veya reddedebilirsiniz.</p>
      <p>İyi çalışmalar dileriz.<br>Katip Ekibi</p>
    </div>
    <div class="footer">
      <p>Bu e-posta Katip uygulaması tarafından otomatik olarak gönderilmiştir.</p>
    </div>
  </div>
</body>
</html>
`;

    return this.sendEmail(to, subject, text, html);
  }

  /**
   * Personel daveti gönderir
   * @param {string} to - Alıcı e-posta adresi
   * @param {string} yoneticiAd - Yönetici kullanıcının adı
   * @param {string} yoneticiSoyad - Yönetici kullanıcının soyadı
   * @returns {Promise<boolean>} - Başarılı ise true, başarısız ise false
   */
  async sendPersonnelInvitation(to, yoneticiAd, yoneticiSoyad) {
    const subject = 'Katip Uygulaması - Personel Daveti';
    const text = `Sayın Kullanıcı,

${yoneticiAd} ${yoneticiSoyad} sizi Katip uygulamasında personel olarak çalışmaya davet ediyor.

Uygulamaya giriş yaparak daveti kabul edebilir veya reddedebilirsiniz.

İyi çalışmalar dileriz.
Katip Ekibi
`;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #4A6FDC; color: white; padding: 10px; text-align: center; }
    .content { padding: 20px; border: 1px solid #ddd; }
    .footer { color: #666; font-size: 12px; text-align: center; margin-top: 20px; }
    .button { background-color: #4A6FDC; color: white; padding: 10px 15px; text-decoration: none; display: inline-block; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Katip Uygulaması</h2>
    </div>
    <div class="content">
      <p>Sayın Kullanıcı,</p>
      <p><strong>${yoneticiAd} ${yoneticiSoyad}</strong> sizi Katip uygulamasında personel olarak çalışmaya davet ediyor.</p>
      <p>Uygulamaya giriş yaparak daveti kabul edebilir veya reddedebilirsiniz.</p>
      <p>İyi çalışmalar dileriz.<br>Katip Ekibi</p>
    </div>
    <div class="footer">
      <p>Bu e-posta Katip uygulaması tarafından otomatik olarak gönderilmiştir.</p>
    </div>
  </div>
</body>
</html>
`;

    return this.sendEmail(to, subject, text, html);
  }

  /**
   * Davet yanıtı bildirimini gönderir
   * @param {string} to - Alıcı e-posta adresi
   * @param {string} yanitVerenAd - Yanıt veren kullanıcının adı
   * @param {string} yanitVerenSoyad - Yanıt veren kullanıcının soyadı
   * @param {boolean} kabulEdildi - Davet kabul edildi mi?
   * @returns {Promise<boolean>} - Başarılı ise true, başarısız ise false
   */
  async sendInvitationResponse(to, yanitVerenAd, yanitVerenSoyad, kabulEdildi) {
    const subject = `Katip Uygulaması - Çalışma Arkadaşı Daveti ${kabulEdildi ? 'Kabul Edildi' : 'Reddedildi'}`;
    const text = `Sayın Kullanıcı,

${yanitVerenAd} ${yanitVerenSoyad} gönderdiğiniz çalışma arkadaşı davetini ${kabulEdildi ? 'kabul etti' : 'reddetti'}.

${kabulEdildi ? 'Artık çalışma arkadaşı listesinde görüntülenecek ve ortak işlemleri gerçekleştirebileceksiniz.' : ''}

İyi çalışmalar dileriz.
Katip Ekibi
`;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #4A6FDC; color: white; padding: 10px; text-align: center; }
    .content { padding: 20px; border: 1px solid #ddd; }
    .footer { color: #666; font-size: 12px; text-align: center; margin-top: 20px; }
    .status-accepted { color: green; font-weight: bold; }
    .status-rejected { color: red; font-weight: bold; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Katip Uygulaması</h2>
    </div>
    <div class="content">
      <p>Sayın Kullanıcı,</p>
      <p><strong>${yanitVerenAd} ${yanitVerenSoyad}</strong> gönderdiğiniz çalışma arkadaşı davetini 
      <span class="status-${kabulEdildi ? 'accepted' : 'rejected'}">${kabulEdildi ? 'kabul etti' : 'reddetti'}</span>.</p>
      
      ${kabulEdildi ? '<p>Artık çalışma arkadaşı listesinde görüntülenecek ve ortak işlemleri gerçekleştirebileceksiniz.</p>' : ''}
      
      <p>İyi çalışmalar dileriz.<br>Katip Ekibi</p>
    </div>
    <div class="footer">
      <p>Bu e-posta Katip uygulaması tarafından otomatik olarak gönderilmiştir.</p>
    </div>
  </div>
</body>
</html>
`;

    return this.sendEmail(to, subject, text, html);
  }
}

// Singleton instance
const emailSender = new EmailSender();

module.exports = emailSender; 