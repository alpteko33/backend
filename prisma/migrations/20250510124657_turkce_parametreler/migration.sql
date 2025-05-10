-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('YONETICI', 'AVUKAT', 'SEKRETER', 'KULLANICI');

-- CreateEnum
CREATE TYPE "Durum" AS ENUM ('AKTIF', 'PASIF', 'ASKIDA');

-- CreateEnum
CREATE TYPE "IletisimTipi" AS ENUM ('E_POSTA', 'TELEFON', 'MOBIL', 'FAKS', 'DİGER');

-- CreateEnum
CREATE TYPE "Oncelik" AS ENUM ('DUSUK', 'NORMAL', 'YUKSEK', 'ACIL');

-- CreateEnum
CREATE TYPE "GorevDurumu" AS ENUM ('BEKLEMEDE', 'DEVAM_EDIYOR', 'TAMAMLANDI', 'IPTAL_EDILDI');

-- CreateEnum
CREATE TYPE "MuvekkilTipi" AS ENUM ('BIREYSEL', 'KURUMSAL');

-- CreateEnum
CREATE TYPE "DavaDurumu" AS ENUM ('AKTIF', 'KAPALI', 'ASKIDA', 'KAZANILDI', 'KAYBEDILDI');

-- CreateEnum
CREATE TYPE "AdresTipi" AS ENUM ('EV', 'IS', 'FATURA', 'DİGER');

-- CreateTable
CREATE TABLE "Kullanici" (
    "id" SERIAL NOT NULL,
    "eposta" TEXT NOT NULL,
    "sifre" TEXT NOT NULL,
    "ad" TEXT NOT NULL,
    "soyad" TEXT NOT NULL,
    "rol" "Rol" NOT NULL DEFAULT 'KULLANICI',
    "durum" "Durum" NOT NULL DEFAULT 'AKTIF',
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kullanici_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Iletisim" (
    "id" SERIAL NOT NULL,
    "tip" "IletisimTipi" NOT NULL,
    "deger" TEXT NOT NULL,
    "aciklama" TEXT,
    "muvekkilId" INTEGER,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Iletisim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gorev" (
    "id" SERIAL NOT NULL,
    "baslik" TEXT NOT NULL,
    "aciklama" TEXT,
    "sonTarih" TIMESTAMP(3),
    "oncelik" "Oncelik" NOT NULL DEFAULT 'NORMAL',
    "durum" "GorevDurumu" NOT NULL DEFAULT 'BEKLEMEDE',
    "kullaniciId" INTEGER NOT NULL,
    "muvekkilId" INTEGER,
    "davaId" INTEGER,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Gorev_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Muvekkil" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "soyad" TEXT NOT NULL,
    "muvekkilTipi" "MuvekkilTipi" NOT NULL DEFAULT 'BIREYSEL',
    "vergiNumarasi" TEXT,
    "firmaAdi" TEXT,
    "olusturanKullaniciId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Muvekkil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dava" (
    "id" SERIAL NOT NULL,
    "davaNumarasi" TEXT NOT NULL,
    "davaTipi" TEXT NOT NULL,
    "mahkeme" TEXT NOT NULL,
    "durum" "DavaDurumu" NOT NULL DEFAULT 'AKTIF',
    "aciklama" TEXT,
    "baslangicTarihi" TIMESTAMP(3) NOT NULL,
    "bitisTarihi" TIMESTAMP(3),
    "muvekkilId" INTEGER NOT NULL,
    "avukatId" INTEGER NOT NULL,
    "karsiTaraf" TEXT,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dava_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adres" (
    "id" SERIAL NOT NULL,
    "adresSatiri" TEXT NOT NULL,
    "sehir" TEXT NOT NULL,
    "ilce" TEXT,
    "postaKodu" TEXT,
    "ulke" TEXT NOT NULL DEFAULT 'Türkiye',
    "adresTipi" "AdresTipi" NOT NULL DEFAULT 'EV',
    "muvekkilId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Adres_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kullanici_eposta_key" ON "Kullanici"("eposta");

-- CreateIndex
CREATE UNIQUE INDEX "Dava_davaNumarasi_key" ON "Dava"("davaNumarasi");

-- AddForeignKey
ALTER TABLE "Iletisim" ADD CONSTRAINT "Iletisim_muvekkilId_fkey" FOREIGN KEY ("muvekkilId") REFERENCES "Muvekkil"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gorev" ADD CONSTRAINT "Gorev_kullaniciId_fkey" FOREIGN KEY ("kullaniciId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gorev" ADD CONSTRAINT "Gorev_muvekkilId_fkey" FOREIGN KEY ("muvekkilId") REFERENCES "Muvekkil"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gorev" ADD CONSTRAINT "Gorev_davaId_fkey" FOREIGN KEY ("davaId") REFERENCES "Dava"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Muvekkil" ADD CONSTRAINT "Muvekkil_olusturanKullaniciId_fkey" FOREIGN KEY ("olusturanKullaniciId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dava" ADD CONSTRAINT "Dava_muvekkilId_fkey" FOREIGN KEY ("muvekkilId") REFERENCES "Muvekkil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dava" ADD CONSTRAINT "Dava_avukatId_fkey" FOREIGN KEY ("avukatId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adres" ADD CONSTRAINT "Adres_muvekkilId_fkey" FOREIGN KEY ("muvekkilId") REFERENCES "Muvekkil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
