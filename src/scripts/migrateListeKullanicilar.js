/**
 * Bu script, veritabanındaki mevcut tüm görev listeleri için
 * listeyi oluşturan kullanıcıyı GorevListesiKullanici tablosuna ekler.
 * Bu şekilde, listeyi oluşturan kullanıcı da liste kullanıcıları arasında yer alır.
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function migrateListeKullanicilar() {
  try {
    console.log('Görev Listesi - Kullanıcı migrasyonu başlıyor...');
    
    // Tüm görev listelerini getir
    const gorevListeleri = await prisma.gorevListesi.findMany({
      select: {
        id: true,
        olusturanId: true,
        olusturulmaTarihi: true
      }
    });
    
    console.log(`${gorevListeleri.length} görev listesi bulundu.`);
    
    // Her görev listesi için, oluşturan kullanıcı GorevListesiKullanici tablosunda var mı kontrol et
    let eklenenKullaniciSayisi = 0;
    
    for (const liste of gorevListeleri) {
      // Oluşturan kullanıcı zaten listeye eklenmiş mi kontrol et
      const mevcutKullanici = await prisma.gorevListesiKullanici.findFirst({
        where: {
          gorevListesiId: liste.id,
          kullaniciId: liste.olusturanId
        }
      });
      
      // Kullanıcı daha önce eklenmemişse ekle
      if (!mevcutKullanici) {
        await prisma.gorevListesiKullanici.create({
          data: {
            gorevListesiId: liste.id,
            kullaniciId: liste.olusturanId,
            davetTarihi: liste.olusturulmaTarihi || new Date(),
            durumu: 'AKTIF'
          }
        });
        
        eklenenKullaniciSayisi++;
        console.log(`Liste #${liste.id}: Oluşturan Kullanıcı #${liste.olusturanId} listeye eklendi.`);
      } else {
        console.log(`Liste #${liste.id}: Oluşturan Kullanıcı #${liste.olusturanId} zaten listeye eklenmiş.`);
      }
    }
    
    console.log(`Migrasyon tamamlandı. Toplam ${eklenenKullaniciSayisi} liste için kullanıcı eklendi.`);
  } catch (error) {
    console.error('Migrasyon sırasında hata oluştu:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Script'in doğrudan çalıştırılması durumunda
if (require.main === module) {
  migrateListeKullanicilar()
    .then(() => {
      console.log('Migrasyon işlemi tamamlandı.');
      process.exit(0);
    })
    .catch(error => {
      console.error('Migrasyon hatası:', error);
      process.exit(1);
    });
}

module.exports = { migrateListeKullanicilar }; 