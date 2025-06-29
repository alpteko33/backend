const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const logger = require('../utils/logger');

// Global session storage (production'da Redis/Database kullanın)
const activeSessions = new Map();

/**
 * UYAP verilerini senkronize eden controller
 * Farklı UYAP veri türleri için ayrı fonksiyonlar
 */
const senkronizasyonController = {
  /**
   * Avukat kişisel bilgilerini senkronize eder
   */
  avukatBilgileriSenkronize: async (req, res) => {
    try {
      const uyapHamVeri = req.body;
      const kullaniciId = req.user.id;
      
      logger.info('UYAP avukat bilgileri senkronizasyonu başlatıldı', { kullaniciId });
      
      // UYAP verisini dönüştür
      const avukatBilgileri = avukatVerisiDonustur(uyapHamVeri);
      
      console.log(avukatBilgileri);
      
      
      // Kullanıcı ID'sine göre güncelleme yap
      const guncelKullanici = await prisma.kullanici.update({
        where: { id: kullaniciId },
        data: {
          tcKimlikNo: avukatBilgileri.tcKimlikNo,
          ad: avukatBilgileri.ad,
          soyad: avukatBilgileri.soyad,
          baroNo: avukatBilgileri.baroNo,
          baro: avukatBilgileri.baro,
          guncellenmeTarihi: new Date()
        }
      });
      console.log(guncelKullanici);
      logger.info('Avukat bilgileri başarıyla senkronize edildi', { kullaniciId });
      
      return res.status(200).json({
        success: true,
        message: 'Avukat bilgileri başarıyla senkronize edildi',
        data: {
          id: guncelKullanici.id,
          ad: guncelKullanici.ad,
          soyad: guncelKullanici.soyad,
          tcKimlikNo: guncelKullanici.tcKimlikNo,
          baroNo: guncelKullanici.baroSicilNo,
          baro: guncelKullanici.baroAdi,
        }
      });
    } catch (error) {
      logger.error('Avukat bilgileri senkronizasyon hatası', { error: error.message });
      return res.status(500).json({
        success: false,
        message: 'Avukat bilgileri senkronize edilirken bir hata oluştu',
        error: error.message
      });
    }
  },
  
  /**
   * Dava bilgilerini senkronize eder
   */
  davaBilgileriSenkronize: async (req, res) => {
    try {
      const uyapHamVeri = req.body;
      const kullaniciId = req.user.id;
      
      logger.info('UYAP dava bilgileri senkronizasyonu başlatıldı', { kullaniciId });
      
      // Kullanıcı durumunu güncelle
      await prisma.kullanici.update({
        where: { id: kullaniciId },
        data: {
          senkronizasyonDurumu: 'SENKRONIZE_EDILIYOR'
        }
      });

      // UYAP'tan gelen dava verilerini dönüştür
      const davaBilgileri = uyapHamVeri.map(veri => davaVerisiDonustur(veri));
      
      const sonuclar = {
        eklenen: 0,
        guncellenen: 0,
        basarisiz: 0,
        hatalar: []
      };
      
      // Her dava için işlem yap
      for (const dava of davaBilgileri) {
        try {
          // İlgili yargı birimini bul veya oluştur
          let yargiBirimiId = null;
          if (dava.mahkeme) {
            const yargiBirimi = await prisma.yargiBirimi.upsert({
              where: {
                ad_yargiTuru_mahkemeTuru: {
                  ad: dava.mahkeme,
                  yargiTuru: dava.yargiTuru || 'HUKUK',
                  mahkemeTuru: dava.mahkemeTuru || 'ASLIYE_HUKUK_MAHKEMESI'
                }
              },
              update: {},
              create: {
                ad: dava.mahkeme,
                yargiTuru: dava.yargiTuru || 'HUKUK',
                birimTuru: dava.birimTuru || 'MAHKEME',
                mahkemeTuru: dava.mahkemeTuru || 'ASLIYE_HUKUK_MAHKEMESI'
              }
            });
            yargiBirimiId = yargiBirimi.id;
          }
          
          // Her müvekkil için ayrı dava kaydı oluştur
          if (dava.muvekkilBilgileri && dava.muvekkilBilgileri.length > 0) {
            for (const muvekkilBilgisi of dava.muvekkilBilgileri) {
              const [ad, ...soyadParts] = muvekkilBilgisi.adSoyad.split(' ');
              const soyad = soyadParts.join(' ');
              
              const muvekkil = await prisma.muvekkil.findFirst({
                where: { ad, soyad, olusturanKullaniciId: kullaniciId }
              });
              
              if (muvekkil) {
                // Bu müvekkil için mevcut dava kaydını kontrol et
                const mevcutDava = await prisma.dava.findFirst({
                  where: {
                    dosyaNumarasi: dava.dosyaNumarasi,
                    avukatId: kullaniciId,
                    muvekkilId: muvekkil.id
                  }
                });
                
                if (mevcutDava) {
                  // Mevcut davayı güncelle
                  await prisma.dava.update({
                    where: { id: mevcutDava.id },
                    data: {
                      dosyaTuru: dava.dosyaTuru,
                      mahkeme: dava.mahkeme,
                      durum: dava.durum,
                      karsiTaraf: dava.karsiTaraf,
                      karsiTarafAvukati: dava.karsiTarafAvukati,
                      yargiBirimiId: yargiBirimiId,
                      guncellemeTarihi: new Date()
                    }
                  });
                  sonuclar.guncellenen++;
                } else {
                  // Yeni dava oluştur
                  await prisma.dava.create({
                    data: {
                      dosyaNumarasi: dava.dosyaNumarasi,
                      dosyaTuru: dava.dosyaTuru,
                      mahkeme: dava.mahkeme,
                      durum: dava.durum || 'ACIK',
                      dosyaAcilisTarihi: dava.dosyaAcilisTarihi || new Date(),
                      muvekkilId: muvekkil.id,
                      avukatId: kullaniciId,
                      karsiTaraf: dava.karsiTaraf,
                      karsiTarafAvukati: dava.karsiTarafAvukati,
                      yargiBirimiId: yargiBirimiId,
                      olusturulmaTarihi: new Date()
                    }
                  });
                  sonuclar.eklenen++;
                }
              }
            }
          } else {
            // Müvekkil bilgisi yoksa varsayılan olarak kullanıcının ilk müvekkili
            let muvekkilId = dava.muvekkilId;
            if (!muvekkilId) {
              const muvekkil = await prisma.muvekkil.findFirst({
                where: { olusturanKullaniciId: kullaniciId }
              });
              
              if (muvekkil) {
                muvekkilId = muvekkil.id;
              } else {
                // Müvekkil yoksa bir hata kaydı oluştur ve bu davayı atla
                sonuclar.basarisiz++;
                sonuclar.hatalar.push(`Dava için müvekkil bulunamadı: ${dava.dosyaNumarasi}`);
                continue;
              }
            }
            
            const mevcutDava = await prisma.dava.findFirst({
              where: {
                dosyaNumarasi: dava.dosyaNumarasi,
                avukatId: kullaniciId,
                muvekkilId: muvekkilId
              }
            });
            
            if (mevcutDava) {
              // Mevcut davayı güncelle
              await prisma.dava.update({
                where: { id: mevcutDava.id },
                data: {
                  dosyaTuru: dava.dosyaTuru,
                  mahkeme: dava.mahkeme,
                  durum: dava.durum,
                  karsiTaraf: dava.karsiTaraf,
                  karsiTarafAvukati: dava.karsiTarafAvukati,
                  yargiBirimiId: yargiBirimiId,
                  guncellemeTarihi: new Date()
                }
              });
              sonuclar.guncellenen++;
            } else {
              // Yeni dava oluştur
              await prisma.dava.create({
                data: {
                  dosyaNumarasi: dava.dosyaNumarasi,
                  dosyaTuru: dava.dosyaTuru,
                  mahkeme: dava.mahkeme,
                  durum: dava.durum || 'ACIK',
                  dosyaAcilisTarihi: dava.dosyaAcilisTarihi || new Date(),
                  muvekkilId: muvekkilId,
                  avukatId: kullaniciId,
                  karsiTaraf: dava.karsiTaraf,
                  karsiTarafAvukati: dava.karsiTarafAvukati,
                  yargiBirimiId: yargiBirimiId,
                  olusturulmaTarihi: new Date()
                }
              });
              sonuclar.eklenen++;
            }
          }
        } catch (hata) {
          logger.error('Dava senkronizasyon hatası', { 
            dosyaNumarasi: dava.dosyaNumarasi, 
            hata: hata.message 
          });
          sonuclar.basarisiz++;
          sonuclar.hatalar.push(`${dava.dosyaNumarasi}: ${hata.message}`);
        }
      }
      
      // Kullanıcı durumunu güncelle
      await prisma.kullanici.update({
        where: { id: kullaniciId },
        data: {
          senkronizasyonDurumu: 'TAMAMLANDI',
          sonSenkronizasyonTarihi: new Date()
        }
      });
      
      logger.info('Dava bilgileri senkronizasyonu tamamlandı', { 
        kullaniciId, 
        eklenen: sonuclar.eklenen, 
        guncellenen: sonuclar.guncellenen,
        basarisiz: sonuclar.basarisiz
      });
      
      return res.status(200).json({
        success: true,
        message: 'Dava bilgileri başarıyla senkronize edildi',
        data: sonuclar
      });
    } catch (error) {
      // Hata durumunda kullanıcı durumunu güncelle
      await prisma.kullanici.update({
        where: { id: req.user.id },
        data: {
          senkronizasyonDurumu: 'BASARISIZ'
        }
      });
      
      logger.error('Dava bilgileri senkronizasyon hatası', { error: error.message });
      return res.status(500).json({
        success: false,
        message: 'Dava bilgileri senkronize edilirken bir hata oluştu',
        error: error.message
      });
    }
  },

  /**
   * Müvekkil bilgilerini senkronize eder
   */
  muvekkilBilgileriSenkronize: async (req, res) => {
    try {
      const uyapHamVeri = req.body;
      const kullaniciId = req.user.id;
      
      logger.info('UYAP müvekkil bilgileri senkronizasyonu başlatıldı', { kullaniciId });
      
      const sonuclar = {
        eklenen: 0,
        guncellenen: 0,
        basarisiz: 0,
        hatalar: []
      };
      
      const muvekkillerListesi = Array.isArray(uyapHamVeri) ? uyapHamVeri : [uyapHamVeri];
      
      for (const muvekkilVeri of muvekkillerListesi) {
        try {
          const muvekkil = muvekkilVerisiDonustur(muvekkilVeri);
          
          const mevcutMuvekkil = await prisma.muvekkil.findFirst({
            where: {
              ad: muvekkil.ad,
              soyad: muvekkil.soyad,
              olusturanKullaniciId: kullaniciId
            }
          });
          
          if (mevcutMuvekkil) {
            await prisma.muvekkil.update({
              where: { id: mevcutMuvekkil.id },
              data: {
                tcKimlikNo: muvekkil.tcKimlikNo,
                telefonNo: muvekkil.telefonNo,
                eposta: muvekkil.eposta,
                adres: muvekkil.adres,
                guncellemeTarihi: new Date()
              }
            });
            sonuclar.guncellenen++;
          } else {
            await prisma.muvekkil.create({
              data: {
                ad: muvekkil.ad,
                soyad: muvekkil.soyad,
                muvekkilTipi: 'GERCEK_KISI',
                tcKimlikNo: muvekkil.tcKimlikNo,
                telefonNo: muvekkil.telefonNo,
                eposta: muvekkil.eposta,
                adres: muvekkil.adres,
                olusturanKullaniciId: kullaniciId,
                olusturulmaTarihi: new Date()
              }
            });
            sonuclar.eklenen++;
          }
        } catch (hata) {
          logger.error('Müvekkil senkronizasyon hatası', { hata: hata.message });
          sonuclar.basarisiz++;
          sonuclar.hatalar.push(hata.message);
        }
      }
      
      logger.info('Müvekkil bilgileri senkronizasyonu tamamlandı', { kullaniciId, sonuclar });
      
      return res.status(200).json({
        success: true,
        message: 'Müvekkil bilgileri başarıyla senkronize edildi',
        data: sonuclar
      });
      
    } catch (error) {
      logger.error('Müvekkil bilgileri senkronizasyon hatası', { error: error.message });
      return res.status(500).json({
        success: false,
        message: 'Müvekkil bilgileri senkronize edilirken bir hata oluştu',
        error: error.message
      });
    }
  },

  /**
   * Batch senkronizasyon session başlatır
   */
  startBatchSync: async (req, res) => {
    try {
      const { metadata } = req.body;
      const kullaniciId = req.user.id;
      const sessionId = 'batch-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
      
      // Session bilgilerini kaydet
      activeSessions.set(sessionId, {
        id: sessionId,
        userId: kullaniciId,
        startTime: new Date(),
        metadata: metadata,
        batches: [],
        status: 'ACTIVE',
        totalBatches: 0,
        completedBatches: 0
      });
      
      logger.info('Batch senkronizasyon başlatıldı', { kullaniciId, sessionId, metadata });
      
      await prisma.kullanici.update({
        where: { id: kullaniciId },
        data: {
          senkronizasyonDurumu: 'SENKRONIZE_EDILIYOR',
          sonSenkronizasyonTarihi: new Date()
        }
      });
      
      console.log('🚀 BATCH SESSION STARTED:', {
        sessionId,
        metadata: {
          dosyaCount: metadata?.dosyaCount,
          muvekkilCount: metadata?.muvekkilCount,
          karsiTarafCount: metadata?.karsiTarafCount,
          avukatAdi: metadata?.avukatBilgileri?.adi + ' ' + metadata?.avukatBilgileri?.soyadi
        }
      });
      
      res.json({
        success: true,
        sessionId: sessionId,
        message: 'Batch sync session başlatıldı'
      });
      
    } catch (error) {
      logger.error('Batch sync start error:', error);
      res.status(500).json({
        success: false,
        message: 'Session başlatılamadı: ' + error.message
      });
    }
  },

  /**
   * Batch verilerini işler
   */
  processBatch: async (req, res) => {
    try {
      const { batch, sessionId } = req.body;
      const kullaniciId = req.user.id;
      
      if (!sessionId || !activeSessions.has(sessionId)) {
        return res.status(400).json({
          success: false,
          message: 'Geçersiz session ID'
        });
      }
      
      const session = activeSessions.get(sessionId);
      
      console.log('📦 PROCESSING BATCH:', {
        sessionId,
        batchId: batch.id,
        batchType: batch.type,
        dataCount: batch.data.length,
        batchNumber: batch.batchNumber,
        totalBatches: batch.totalBatches
      });
      
      logger.info('Batch işleniyor', { 
        kullaniciId, 
        batchType: batch.type,
        batchSize: batch.data.length 
      });
      
      let processedCount = 0;
      let failedCount = 0;
      const errors = [];
      
      for (const item of batch.data) {
        try {
          switch (batch.type) {
            case 'AVUKAT_BILGILERI':
              const avukatData = avukatVerisiDonustur(item);
              await prisma.kullanici.update({
                where: { id: kullaniciId },
                data: {
                  ad: avukatData.ad,
                  soyad: avukatData.soyad,
                  tcKimlikNo: avukatData.tcKimlikNo,
                  baroNo: avukatData.baroNo,
                  baro: avukatData.baro,
                  guncellenmeTarihi: new Date()
                }
              });
              break;
              
            case 'MUVEKKIL':
              const muvekkilData = muvekkilVerisiDonustur(item);
              const mevcutMuvekkil = await prisma.muvekkil.findFirst({
                where: {
                  ad: muvekkilData.ad,
                  soyad: muvekkilData.soyad,
                  olusturanKullaniciId: kullaniciId
                }
              });
              
              if (mevcutMuvekkil) {
                await prisma.muvekkil.update({
                  where: { id: mevcutMuvekkil.id },
                  data: {
                    tcKimlikNo: muvekkilData.tcKimlikNo,
                    guncellemeTarihi: new Date()
                  }
                });
              } else {
                await prisma.muvekkil.create({
                  data: {
                    ad: muvekkilData.ad,
                    soyad: muvekkilData.soyad,
                    muvekkilTipi: 'GERCEK_KISI',
                    tcKimlikNo: muvekkilData.tcKimlikNo,
                    olusturanKullaniciId: kullaniciId,
                    olusturulmaTarihi: new Date()
                  }
                });
              }
              break;
              
            case 'DAVA':
              const davaData = davaVerisiDonustur(item);
              
              // Her müvekkil için ayrı dava kaydı oluştur
              if (item.muvekkilBilgileri && item.muvekkilBilgileri.length > 0) {
                for (const muvekkilBilgisi of item.muvekkilBilgileri) {
                  const [ad, ...soyadParts] = muvekkilBilgisi.adSoyad.split(' ');
                  const soyad = soyadParts.join(' ');
                  
                  const muvekkil = await prisma.muvekkil.findFirst({
                    where: { ad, soyad, olusturanKullaniciId: kullaniciId }
                  });
                  
                  if (muvekkil) {
                    // Bu müvekkil için mevcut dava kaydını kontrol et
                    const mevcutDava = await prisma.dava.findFirst({
                      where: {
                        dosyaNumarasi: davaData.dosyaNumarasi,
                        avukatId: kullaniciId,
                        muvekkilId: muvekkil.id
                      }
                    });
                    
                    if (mevcutDava) {
                      await prisma.dava.update({
                        where: { id: mevcutDava.id },
                        data: {
                          dosyaTuru: davaData.dosyaTuru,
                          mahkeme: davaData.mahkeme,
                          durum: davaData.durum || 'ACIK',
                          guncellemeTarihi: new Date()
                        }
                      });
                    } else {
                      await prisma.dava.create({
                        data: {
                          dosyaNumarasi: davaData.dosyaNumarasi,
                          dosyaTuru: davaData.dosyaTuru,
                          mahkeme: davaData.mahkeme,
                          durum: davaData.durum || 'ACIK',
                          dosyaAcilisTarihi: davaData.dosyaAcilisTarihi,
                          avukatId: kullaniciId,
                          muvekkilId: muvekkil.id,
                          karsiTaraf: davaData.karsiTaraf,
                          olusturulmaTarihi: new Date()
                        }
                      });
                    }
                  }
                }
              } else {
                // Müvekkil bilgisi yoksa eski yöntemle devam et
                const mevcutDava = await prisma.dava.findFirst({
                  where: {
                    dosyaNumarasi: davaData.dosyaNumarasi,
                    avukatId: kullaniciId
                  }
                });
                
                if (mevcutDava) {
                  await prisma.dava.update({
                    where: { id: mevcutDava.id },
                    data: {
                      dosyaTuru: davaData.dosyaTuru,
                      mahkeme: davaData.mahkeme,
                      durum: davaData.durum || 'ACIK',
                      guncellemeTarihi: new Date()
                    }
                  });
                } else {
                  await prisma.dava.create({
                    data: {
                      dosyaNumarasi: davaData.dosyaNumarasi,
                      dosyaTuru: davaData.dosyaTuru,
                      mahkeme: davaData.mahkeme,
                      durum: davaData.durum || 'ACIK',
                      dosyaAcilisTarihi: davaData.dosyaAcilisTarihi,
                      avukatId: kullaniciId,
                      muvekkilId: null,
                      karsiTaraf: davaData.karsiTaraf,
                      olusturulmaTarihi: new Date()
                    }
                  });
                }
              }
              break;
          }
          processedCount++;
        } catch (error) {
          failedCount++;
          errors.push({ 
            item: item.adSoyad || item.dosyaNumarasi || 'unknown',
            error: error.message 
          });
          logger.error('Batch item error:', { error: error.message, item });
        }
      }
      
      // Session güncelle
      session.batches.push({
        id: batch.id,
        type: batch.type,
        processedAt: new Date(),
        recordCount: batch.data.length,
        processedCount,
        failedCount
      });
      session.completedBatches++;
      session.totalBatches = batch.totalBatches;
      
      res.json({
        success: true,
        progress: {
          sessionId,
          batchId: batch.id,
          processedRecords: batch.data.length,
          status: 'completed',
          totalBatches: session.totalBatches,
          completedBatches: session.completedBatches,
          percentage: Math.round((session.completedBatches / session.totalBatches) * 100)
        }
      });
      
    } catch (error) {
      logger.error('Batch processing error:', error);
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * Batch senkronizasyonu tamamlar
   */
  completeBatchSync: async (req, res) => {
    try {
      const { sessionId, summary } = req.body;
      const kullaniciId = req.user.id;
      
      if (!sessionId || !activeSessions.has(sessionId)) {
        return res.status(400).json({
          success: false,
          message: 'Geçersiz session ID'
        });
      }
      
      const session = activeSessions.get(sessionId);
      session.status = 'COMPLETED';
      session.endTime = new Date();
      session.summary = summary;
      
      await prisma.kullanici.update({
        where: { id: kullaniciId },
        data: {
          senkronizasyonDurumu: 'TAMAMLANDI',
          sonSenkronizasyonTarihi: new Date()
        }
      });
      
      console.log('✅ BATCH SYNC COMPLETED:', {
        sessionId,
        summary,
        duration: session.endTime - session.startTime,
        totalBatches: session.totalBatches
      });
      
      logger.info('Batch senkronizasyon tamamlandı', { kullaniciId, sessionId, summary });
      
      res.json({
        success: true,
        message: 'Batch sync başarıyla tamamlandı',
        session: {
          id: sessionId,
          duration: session.endTime - session.startTime,
          totalBatches: session.totalBatches,
          summary: summary
        }
      });
      
    } catch (error) {
      logger.error('Batch sync complete error:', error);
      res.status(500).json({
        success: false,
        message: 'Session tamamlanamadı: ' + error.message
      });
    }
  },

  /**
   * Senkronizasyonu iptal eder
   */
  cancelBatchSync: async (req, res) => {
    try {
      const { sessionId, error } = req.body;
      const kullaniciId = req.user.id;
      
      if (sessionId && activeSessions.has(sessionId)) {
        const session = activeSessions.get(sessionId);
        session.status = 'CANCELLED';
        session.endTime = new Date();
        session.error = error;
        
        console.log('❌ BATCH SYNC CANCELLED:', {
          sessionId,
          error: error?.message,
          completedBatches: session.completedBatches
        });
      }
      
      await prisma.kullanici.update({
        where: { id: kullaniciId },
        data: { senkronizasyonDurumu: 'BASARISIZ' }
      });
      
      logger.info('Batch senkronizasyon iptal edildi', { kullaniciId, sessionId });
      res.json({
        success: true,
        message: 'Batch sync iptal edildi'
      });
      
    } catch (err) {
      logger.error('Batch sync cancel error:', err);
      res.status(500).json({
        success: false,
        message: 'Cancel işlemi başarısız: ' + err.message
      });
    }
  },

  /**
   * Session durumunu sorgula
   */
  getBatchStatus: async (req, res) => {
    try {
      const { sessionId } = req.params;
      
      if (!activeSessions.has(sessionId)) {
        return res.status(404).json({
          success: false,
          message: 'Session bulunamadı'
        });
      }
      
      const session = activeSessions.get(sessionId);
      
      res.json({
        sessionId: session.id,
        status: session.status,
        totalBatches: session.totalBatches,
        completedBatches: session.completedBatches,
        percentage: session.totalBatches > 0 ? 
          Math.round((session.completedBatches / session.totalBatches) * 100) : 0,
        startTime: session.startTime,
        endTime: session.endTime
      });
      
    } catch (error) {
      logger.error('Status check error:', error);
      res.status(500).json({
        success: false,
        message: 'Durum sorgulanamadı: ' + error.message
      });
    }
  }
};

/**
 * UYAP'tan gelen avukat verilerini dönüştürür
 * @param {Object} uyapVeri - UYAP'tan gelen ham veri
 * @returns {Object} - Dönüştürülmüş avukat verileri
 */
function avukatVerisiDonustur(uyapVeri) {
  // UYAP'tan gelen örnek veri yapısı:
  // {
  //   "tckn": "12345678901",
  //   "sicilNo": "12345",
  //   "baro": "Ankara Barosu",
  //   "unvan": "Avukat"
  // }
  
  return {
    tcKimlikNo: uyapVeri.tckn || uyapVeri.tcKimlikNo || '',
    ad: uyapVeri.ad || uyapVeri.ad || '',
    soyad: uyapVeri.soyad || uyapVeri.soyad || '',
    baroNo: uyapVeri.baroNo || uyapVeri.baroSicilNo || '',
    baro: uyapVeri.baro || uyapVeri.baroAdi || '',
  };
}

/**
 * Frontend'den gelen müvekkil verilerini dönüştürür
 * @param {Object} uyapVeri - Frontend'den gelen müvekkil verisi
 * @returns {Object} - Dönüştürülmüş müvekkil verisi
 */
function muvekkilVerisiDonustur(uyapVeri) {
  // Frontend format: { adSoyad: "Ahmet Yılmaz", ... }
  const adSoyadParts = (uyapVeri.adSoyad || '').trim().split(' ');
  const ad = adSoyadParts[0] || '';
  const soyad = adSoyadParts.slice(1).join(' ') || '';
  
  return {
    ad,
    soyad,
    tcKimlikNo: uyapVeri.tcKimlikNo || '',
    telefonNo: uyapVeri.telefonNo || '',
    eposta: uyapVeri.eposta || '',
    adres: uyapVeri.adres || ''
  };
}

/**
 * UYAP'tan gelen dava verilerini dönüştürür
 * @param {Object} uyapVeri - UYAP'tan gelen ham dava verisi
 * @returns {Object} - Dönüştürülmüş dava verisi
 */
function davaVerisiDonustur(uyapVeri) {
  // UYAP'tan gelen örnek dava veri yapısı:
  // {
  //   "dosyaNo": "2023/123",
  //   "dosyaTipi": "Asliye Hukuk",
  //   "mahkemeAdi": "Ankara 1. Asliye Hukuk Mahkemesi",
  //   "durum": "DERDEST",
  //   "acilisTarihi": "2023-05-15",
  //   "davaTuru": "Alacak",
  //   "karsiTaraf": "Ahmet Yılmaz",
  //   "karsiTarafAvukati": "Mehmet Öz"
  // }
  
  // Durum dönüşümü yap
  let davaDurumu = 'ACIK';
  if (uyapVeri.durum) {
    if (uyapVeri.durum === 'KARARA ÇIKTI' || uyapVeri.durum === 'KAPANDI') {
      davaDurumu = 'KAPALI';
    }
  }
  
  // Mahkeme türünü belirle
  let mahkemeTuru = 'ASLIYE_HUKUK_MAHKEMESI';
  let yargiTuru = 'HUKUK';
  let birimTuru = 'MAHKEME';
  
  if (uyapVeri.mahkemeAdi) {
    const mahkemeAdi = uyapVeri.mahkemeAdi.toUpperCase();
    
    if (mahkemeAdi.includes('AĞIR CEZA') || mahkemeAdi.includes('AGIR CEZA')) {
      mahkemeTuru = 'AGIR_CEZA_MAHKEMESI';
      yargiTuru = 'CEZA';
    } else if (mahkemeAdi.includes('ASLİYE CEZA') || mahkemeAdi.includes('ASLIYE CEZA')) {
      mahkemeTuru = 'ASLIYE_CEZA_MAHKEMESI';
      yargiTuru = 'CEZA';
    } else if (mahkemeAdi.includes('SULH CEZA')) {
      mahkemeTuru = 'SULH_CEZA_HAKIMLIGI';
      yargiTuru = 'CEZA';
    } else if (mahkemeAdi.includes('İCRA CEZA') || mahkemeAdi.includes('ICRA CEZA')) {
      mahkemeTuru = 'ICRA_CEZA_MAHKEMESI';
      yargiTuru = 'CEZA';
    } else if (mahkemeAdi.includes('ÇOCUK CEZA') || mahkemeAdi.includes('COCUK CEZA')) {
      mahkemeTuru = 'COCUK_CEZA_MAHKEMESI';
      yargiTuru = 'CEZA';
    } else if (mahkemeAdi.includes('ÇOCUK AĞIR') || mahkemeAdi.includes('COCUK AGIR')) {
      mahkemeTuru = 'COCUK_AGIR_CEZA_MAHKEMESI';
      yargiTuru = 'CEZA';
    } else if (mahkemeAdi.includes('ASLİYE HUKUK') || mahkemeAdi.includes('ASLIYE HUKUK')) {
      mahkemeTuru = 'ASLIYE_HUKUK_MAHKEMESI';
      yargiTuru = 'HUKUK';
    } else if (mahkemeAdi.includes('SULH HUKUK')) {
      mahkemeTuru = 'SULH_HUKUK_MAHKEMESI';
      yargiTuru = 'HUKUK';
    } else if (mahkemeAdi.includes('İŞ') || mahkemeAdi.includes('IS MAHKEMESI')) {
      mahkemeTuru = 'IS_MAHKEMESI';
      yargiTuru = 'HUKUK';
    } else if (mahkemeAdi.includes('AİLE') || mahkemeAdi.includes('AILE')) {
      mahkemeTuru = 'AILE_MAHKEMESI';
      yargiTuru = 'HUKUK';
    } else if (mahkemeAdi.includes('TİCARET') || mahkemeAdi.includes('TICARET')) {
      mahkemeTuru = 'ASLIYE_TICARET_MAHKEMESI';
      yargiTuru = 'HUKUK';
    } else if (mahkemeAdi.includes('TÜKETİCİ') || mahkemeAdi.includes('TUKETICI')) {
      mahkemeTuru = 'TUKETICI_MAHKEMESI';
      yargiTuru = 'HUKUK';
    } else if (mahkemeAdi.includes('İCRA HUKUK') || mahkemeAdi.includes('ICRA HUKUK')) {
      mahkemeTuru = 'ICRA_HUKUK_MAHKEMESI';
      yargiTuru = 'HUKUK';
    } else if (mahkemeAdi.includes('İDARE') || mahkemeAdi.includes('IDARE')) {
      mahkemeTuru = 'ASLIYE_HUKUK_MAHKEMESI';
      yargiTuru = 'IDARI_YARGI';
    }
  }
  
  // Tarihi dönüştür
  let dosyaAcilisTarihi = new Date();
  if (uyapVeri.acilisTarihi) {
    try {
      dosyaAcilisTarihi = new Date(uyapVeri.acilisTarihi);
    } catch (e) {
      // Tarih dönüştürme hatası, varsayılan tarihi kullan
    }
  }
  
  return {
    dosyaNumarasi: uyapVeri.dosyaNo || uyapVeri.dosyaNumarasi || '',
    dosyaTuru: uyapVeri.dosyaTipi || uyapVeri.davaTuru || '',
    mahkeme: uyapVeri.mahkemeAdi || '',
    durum: davaDurumu,
    dosyaAcilisTarihi: dosyaAcilisTarihi,
    karsiTaraf: uyapVeri.karsiTaraf || '',
    karsiTarafAvukati: uyapVeri.karsiTarafAvukati || '',
    muvekkilId: uyapVeri.muvekkilId || null,
    yargiTuru: yargiTuru,
    birimTuru: birimTuru,
    mahkemeTuru: mahkemeTuru
  };
}

module.exports = senkronizasyonController; 