const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seed başlatılıyor...');

  // Default Dilekçe Türleri
  const dilekceTurleri = [
    {
      ad: 'Cevap Dilekçesi',
      aciklama: 'Davaya karşı cevap dilekçesi',
      sablonIcerik: 'CEVAP DİLEKÇESİDİR\n\nSAYIN MAHKEMENİZE\n\nDOSYA NO: {dosyaNoBilgisi}\n\nCEVAP VEREN: {tarafBilgisi}\n\nVEKİLİ: {avukatBilgisi}\n\nKARŞI TARAF: {karsiTaraf}\n\nKONU: {konu}\n\nAÇIKLAMALAR: {icerik}\n\nHUKUKİ NEDENLER: {hukukiNedenler}\n\nHUKUKİ DELİLLER: {hukukiDeliller}\n\nSONUÇ VE İSTEM: {neticeVeTalep}\n\nSaygılarımla,\n{avukatBilgisi}'
    },
    {
      ad: 'Dava Dilekçesi',
      aciklama: 'Dava açmak için kullanılan dilekçe',
      sablonIcerik: 'DAVA DİLEKÇESİDİR\n\n{mahkemeBilgisi}\n\nDOSYA NO: {dosyaNoBilgisi}\n\nDAVACI: {tarafBilgisi}\n\nVEKİLİ: {avukatBilgisi}\n\nDAVALI: {karsiTaraf}\n\nKONU: {konu}\n\nAÇIKLAMALAR: {icerik}\n\nHUKUKİ NEDENLER: {hukukiNedenler}\n\nHUKUKİ DELİLLER: {hukukiDeliller}\n\nSONUÇ VE İSTEM: {neticeVeTalep}\n\nSaygılarımla,\n{avukatBilgisi}'
    },
    {
      ad: 'İhtarname',
      aciklama: 'Karşı tarafa gönderilen resmi uyarı',
      sablonIcerik: 'İHTARNAME\n\nGÖNDEREN: {tarafBilgisi}\n\nVEKİLİ: {avukatBilgisi}\n\nMUHATAP: {karsiTaraf}\n\nKONU: {konu}\n\nAÇIKLAMALAR: {icerik}\n\nTALEP: {neticeVeTalep}\n\nSaygılarımla,\n{avukatBilgisi}'
    },
    {
      ad: 'Bilirkişi Raporu İtiraz Dilekçesi',
      aciklama: 'Bilirkişi raporuna itiraz için dilekçe',
      sablonIcerik: 'BİLİRKİŞİ RAPORUNA İTİRAZ DİLEKÇESİDİR\n\n{mahkemeBilgisi}\n\nDOSYA NO: {dosyaNoBilgisi}\n\nİTİRAZ EDEN: {tarafBilgisi}\n\nVEKİLİ: {avukatBilgisi}\n\nKARŞI TARAF: {karsiTaraf}\n\nKONU: {dosyaNoBilgisi} Sayılı dosyada sunulan bilirkişi raporuna itirazlarımızı içerir.\n\nİTİRAZLAR: {icerik}\n\nHUKUKİ NEDENLER: {hukukiNedenler}\n\nSONUÇ VE İSTEM: {neticeVeTalep}\n\nSaygılarımla,\n{avukatBilgisi}'
    },
    {
      ad: 'Duruşma Erteleme Talebi',
      aciklama: 'Duruşma erteleme talebi için dilekçe',
      sablonIcerik: 'DURUŞMA ERTELEME TALEP DİLEKÇESİDİR\n\n{mahkemeBilgisi}\n\nDOSYA NO: {dosyaNoBilgisi}\n\nTALEP EDEN: {tarafBilgisi}\n\nVEKİLİ: {avukatBilgisi}\n\nKARŞI TARAF: {karsiTaraf}\n\nKONU: {dosyaNoBilgisi} sayılı dosyada {icerik} tarihli duruşmanın ertelenmesi talebidir.\n\nERTELEME NEDENİ: {icerik}\n\nSONUÇ VE İSTEM: {neticeVeTalep}\n\nSaygılarımla,\n{avukatBilgisi}'
    }
  ];

  // Default Dilekçe Konuları
  const dilekceKonulari = [
    {
      ad: 'Alacak Davası',
      aciklama: 'Para alacakları ile ilgili açılan davalar'
    },
    {
      ad: 'Tazminat Davası',
      aciklama: 'Maddi ve manevi tazminat talepleri'
    },
    {
      ad: 'Boşanma Davası',
      aciklama: 'Evliliğin sona erdirilmesi ile ilgili davalar'
    },
    {
      ad: 'İş Davası',
      aciklama: 'İşçi-işveren uyuşmazlıkları'
    },
    {
      ad: 'İcra Takibi',
      aciklama: 'Borçların tahsili ile ilgili takipler'
    },
    {
      ad: 'Tahliye Davası',
      aciklama: 'Kiracının tahliyesi için açılan davalar'
    },
    {
      ad: 'Ceza Davası',
      aciklama: 'Suç teşkil eden fiiller ile ilgili davalar'
    },
    {
      ad: 'İtiraz',
      aciklama: 'Çeşitli kararlara karşı itirazlar'
    }
  ];

  for (const tur of dilekceTurleri) {
    const mevcutTur = await prisma.dilekceTuru.findUnique({
      where: { ad: tur.ad }
    });

    if (!mevcutTur) {
      await prisma.dilekceTuru.create({
        data: tur
      });
      console.log(`Dilekçe türü oluşturuldu: ${tur.ad}`);
    } else {
      console.log(`Bu dilekçe türü zaten var: ${tur.ad}`);
    }
  }

  for (const konu of dilekceKonulari) {
    const mevcutKonu = await prisma.dilekceKonusu.findUnique({
      where: { ad: konu.ad }
    });

    if (!mevcutKonu) {
      await prisma.dilekceKonusu.create({
        data: konu
      });
      console.log(`Dilekçe konusu oluşturuldu: ${konu.ad}`);
    } else {
      console.log(`Bu dilekçe konusu zaten var: ${konu.ad}`);
    }
  }

  console.log('Seed tamamlandı!');
}

main()
  .catch((e) => {
    console.error('Seed hatası:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 