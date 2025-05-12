/*
  Warnings:

  - The values [AKTIF,ASKIDA,KAZANILDI,KAYBEDILDI] on the enum `DavaDurumu` will be removed. If these variants are still used in the database, this will fail.
  - The values [STAJYER,DILEKCE,FATURA,MAHKEME_KARARI,SÖZLEŞME] on the enum `EvrakTuru` will be removed. If these variants are still used in the database, this will fail.
  - The values [GELIR,GIDER] on the enum `FinansTuru` will be removed. If these variants are still used in the database, this will fail.
  - The values [BIREYSEL,KURUMSAL] on the enum `MuvekkilTipi` will be removed. If these variants are still used in the database, this will fail.
  - The values [DUSUK,YUKSEK,ACIL] on the enum `Oncelik` will be removed. If these variants are still used in the database, this will fail.
  - The values [KULLANICI] on the enum `Rol` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `acikKapali` on the `Dava` table. All the data in the column will be lost.
  - You are about to drop the column `yargiDairesi` on the `Dava` table. All the data in the column will be lost.
  - You are about to drop the column `aciklama` on the `Evrak` table. All the data in the column will be lost.
  - You are about to drop the column `dosyaNo` on the `Evrak` table. All the data in the column will be lost.
  - You are about to drop the column `durum` on the `FinansIslemi` table. All the data in the column will be lost.
  - You are about to drop the column `kategori` on the `FinansIslemi` table. All the data in the column will be lost.
  - You are about to drop the column `odemeKanali` on the `FinansIslemi` table. All the data in the column will be lost.
  - You are about to drop the column `baslik` on the `Gorev` table. All the data in the column will be lost.
  - You are about to drop the column `aciklama` on the `GorevListesi` table. All the data in the column will be lost.
  - You are about to drop the column `baroNo` on the `Irtibat` table. All the data in the column will be lost.
  - You are about to drop the column `irtibatTuru` on the `Irtibat` table. All the data in the column will be lost.
  - You are about to drop the column `tcKimlikNo` on the `Irtibat` table. All the data in the column will be lost.
  - You are about to drop the column `firmaAdi` on the `Muvekkil` table. All the data in the column will be lost.
  - You are about to drop the column `baslik` on the `Not` table. All the data in the column will be lost.
  - You are about to drop the column `etiketler` on the `Not` table. All the data in the column will be lost.
  - You are about to drop the column `meblaga` on the `Not` table. All the data in the column will be lost.
  - You are about to drop the column `maas` on the `Personel` table. All the data in the column will be lost.
  - You are about to drop the `Adres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Iletisim` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "OzlukEvrakTuru" AS ENUM ('IKAMETGAH_BELGESI', 'NUFUS_KAYIT_ORNEGI', 'NUFUS_CUZDANI_FOTOKOPISI', 'VESIKALIK_FOTOGRAF', 'IS_HIZMET_SOZLESMESI', 'DIPLOMA_FOTOKOPISI', 'SAGLIK_RAPORU', 'IS_BASVURU_FORMU', 'SABIKA_KAYDI', 'ASKERLIK_DURUM_BELGESI', 'EVLILIK_CUZDANI_FOTOKOPISI', 'COCUK_NUFUS_CUZDANI_FOTOKOPISI', 'SGK_ISE_GIRIS_BILDIRGESI', 'DIGER');

-- CreateEnum
CREATE TYPE "IzinTuru" AS ENUM ('YILLIK_IZIN', 'DOGUM_IZNI', 'SUT_IZNI', 'BABALIK_IZNI', 'HASTALIK_IZNI', 'OLUM_IZNI', 'YENI_IS_ARAMA_IZNI', 'RESMI_TATIL_IZNI', 'HAFTA_TATILI_IZNI', 'EVLILIK_IZNI', 'EVLAT_EDINME_IZNI', 'MAZERET_IZNI', 'REFAKAT_IZNI', 'DIGER');

-- CreateEnum
CREATE TYPE "YargiTuru" AS ENUM ('CEZA', 'HUKUK', 'ICRA', 'IDARI_YARGI', 'SATIS_MEMURLUGU', 'ARABULUCULUK', 'CUMHURIYET_BASSAVCILIGI', 'TAZMINAT_KOMISYON_BASKANLIGI');

-- CreateEnum
CREATE TYPE "OdemeTipi" AS ENUM ('AVUKATLIK_UCRETI_VE_YARGILAMA_GIDERI_PESIN', 'AVUKATLIK_UCRETI_VE_YARGILAMA_GIDERI_TAKSITLI', 'AVUKATLIK_UCRETI_PESIN_VE_YARGILAMA_GIDERI_TAKSITLI', 'AVUKATLIK_UCRETI_TAKSITLI_VE_YARGILAMA_GIDERI_PESIN');

-- CreateEnum
CREATE TYPE "CezaMahkemeleri" AS ENUM ('AGIR_CEZA_MAHKEMESI', 'ASLIYE_CEZA_MAHKEMESI', 'SULH_CEZA_HAKIMLIGI', 'ICRA_CEZA_MAHKEMESI', 'COCUK_CEZA_MAHKEMESI', 'COCUK_AGIR_CEZA_MAHKEMESI', 'YARGITAY_CEZA_DAIRESI', 'FIKRI_VE_SINAI_HAKLAR_CEZA_MAHKEMESI', 'INFAZ_HAKIMLIGI', 'BOLGE_ADLIYE_MAHKEMESI_CEZA_DAIRESI');

-- CreateEnum
CREATE TYPE "HukukMahkemeleri" AS ENUM ('ASLIYE_HUKUK_MAHKEMESI', 'SULH_HUKUK_MAHKEMESI', 'IS_MAHKEMESI', 'AILE_MAHKEMESI', 'FIKRI_VE_SINAI_HAKLAR_MAHKEMESI', 'KADASTRO_MAHKEMESI', 'YARGITAY_HUKUK_DAIRESI', 'ASLIYE_TICARET_MAHKEMESI', 'TUKETICI_MAHKEMESI', 'ICRA_HUKUK_MAHKEMESI', 'BOLGE_ADLIYE_MAHKEMESI_HUKUK_DAIRESI');

-- AlterEnum
BEGIN;
CREATE TYPE "DavaDurumu_new" AS ENUM ('ACIK', 'KAPALI');
ALTER TABLE "Dava" ALTER COLUMN "durum" DROP DEFAULT;
ALTER TABLE "Dava" ALTER COLUMN "durum" TYPE "DavaDurumu_new" USING ("durum"::text::"DavaDurumu_new");
ALTER TYPE "DavaDurumu" RENAME TO "DavaDurumu_old";
ALTER TYPE "DavaDurumu_new" RENAME TO "DavaDurumu";
DROP TYPE "DavaDurumu_old";
ALTER TABLE "Dava" ALTER COLUMN "durum" SET DEFAULT 'ACIK';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "EvrakTuru_new" AS ENUM ('SOZLESME', 'GORUSME_TUTANAGI', 'BILGILENDIRME_RAPORU', 'KVKK_METNI', 'DIGER');
ALTER TABLE "Evrak" ALTER COLUMN "evrakTuru" TYPE "EvrakTuru_new" USING ("evrakTuru"::text::"EvrakTuru_new");
ALTER TYPE "EvrakTuru" RENAME TO "EvrakTuru_old";
ALTER TYPE "EvrakTuru_new" RENAME TO "EvrakTuru";
DROP TYPE "EvrakTuru_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "FinansTuru_new" AS ENUM ('SABIT_GELIR', 'SABIT_GIDER', 'DUZENSIZ_GELIR', 'DUZENSIZ_GIDER');
ALTER TABLE "FinansIslemi" ALTER COLUMN "islemTuru" TYPE "FinansTuru_new" USING ("islemTuru"::text::"FinansTuru_new");
ALTER TYPE "FinansTuru" RENAME TO "FinansTuru_old";
ALTER TYPE "FinansTuru_new" RENAME TO "FinansTuru";
DROP TYPE "FinansTuru_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "MuvekkilTipi_new" AS ENUM ('GERCEK_KISI', 'TUZEL_KISI');
ALTER TABLE "Muvekkil" ALTER COLUMN "muvekkilTipi" DROP DEFAULT;
ALTER TABLE "Muvekkil" ALTER COLUMN "muvekkilTipi" TYPE "MuvekkilTipi_new" USING ("muvekkilTipi"::text::"MuvekkilTipi_new");
ALTER TYPE "MuvekkilTipi" RENAME TO "MuvekkilTipi_old";
ALTER TYPE "MuvekkilTipi_new" RENAME TO "MuvekkilTipi";
DROP TYPE "MuvekkilTipi_old";
ALTER TABLE "Muvekkil" ALTER COLUMN "muvekkilTipi" SET DEFAULT 'GERCEK_KISI';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Oncelik_new" AS ENUM ('NORMAL', 'ONEMLI');
ALTER TABLE "Gorev" ALTER COLUMN "oncelik" DROP DEFAULT;
ALTER TABLE "Gorev" ALTER COLUMN "oncelik" TYPE "Oncelik_new" USING ("oncelik"::text::"Oncelik_new");
ALTER TYPE "Oncelik" RENAME TO "Oncelik_old";
ALTER TYPE "Oncelik_new" RENAME TO "Oncelik";
DROP TYPE "Oncelik_old";
ALTER TABLE "Gorev" ALTER COLUMN "oncelik" SET DEFAULT 'NORMAL';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Rol_new" AS ENUM ('YONETICI', 'AVUKAT', 'SEKRETER', 'KATIP', 'STAJYER', 'MUHASEBECI', 'DIGER');
ALTER TABLE "Kullanici" ALTER COLUMN "rol" DROP DEFAULT;
ALTER TABLE "Kullanici" ALTER COLUMN "rol" TYPE "Rol_new" USING ("rol"::text::"Rol_new");
ALTER TYPE "Rol" RENAME TO "Rol_old";
ALTER TYPE "Rol_new" RENAME TO "Rol";
DROP TYPE "Rol_old";
ALTER TABLE "Kullanici" ALTER COLUMN "rol" SET DEFAULT 'AVUKAT';
COMMIT;

-- DropForeignKey
ALTER TABLE "Adres" DROP CONSTRAINT "Adres_calismaArkadasiId_fkey";

-- DropForeignKey
ALTER TABLE "Adres" DROP CONSTRAINT "Adres_irtibatId_fkey";

-- DropForeignKey
ALTER TABLE "Adres" DROP CONSTRAINT "Adres_muvekkilId_fkey";

-- DropForeignKey
ALTER TABLE "Adres" DROP CONSTRAINT "Adres_personelId_fkey";

-- DropForeignKey
ALTER TABLE "Iletisim" DROP CONSTRAINT "Iletisim_calismaArkadasiId_fkey";

-- DropForeignKey
ALTER TABLE "Iletisim" DROP CONSTRAINT "Iletisim_irtibatId_fkey";

-- DropForeignKey
ALTER TABLE "Iletisim" DROP CONSTRAINT "Iletisim_muvekkilId_fkey";

-- DropForeignKey
ALTER TABLE "Iletisim" DROP CONSTRAINT "Iletisim_personelId_fkey";

-- AlterTable
ALTER TABLE "CalismaArkadasi" ADD COLUMN     "adres" TEXT,
ADD COLUMN     "baro" TEXT;

-- AlterTable
ALTER TABLE "Dava" DROP COLUMN "acikKapali",
DROP COLUMN "yargiDairesi",
ALTER COLUMN "durum" SET DEFAULT 'ACIK',
ALTER COLUMN "dosyaTuru" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Dosya" ADD COLUMN     "muvekkilId" INTEGER;

-- AlterTable
ALTER TABLE "Evrak" DROP COLUMN "aciklama",
DROP COLUMN "dosyaNo",
ADD COLUMN     "bilgilendirmeMetni" TEXT,
ADD COLUMN     "genelHukumler" TEXT,
ADD COLUMN     "kvkkMetni" TEXT,
ADD COLUMN     "muvekkilAdres" TEXT,
ADD COLUMN     "muvekkilTcNo" TEXT,
ADD COLUMN     "muvekkilTelefonNo" TEXT,
ADD COLUMN     "onizlemeOnayi" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "surecTamamlandi" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "FinansIslemi" DROP COLUMN "durum",
DROP COLUMN "kategori",
DROP COLUMN "odemeKanali";

-- AlterTable
ALTER TABLE "Gorev" DROP COLUMN "baslik";

-- AlterTable
ALTER TABLE "GorevListesi" DROP COLUMN "aciklama";

-- AlterTable
ALTER TABLE "Irtibat" DROP COLUMN "baroNo",
DROP COLUMN "irtibatTuru",
DROP COLUMN "tcKimlikNo";

-- AlterTable
ALTER TABLE "Kullanici" ADD COLUMN     "baro" TEXT;

-- AlterTable
ALTER TABLE "Muvekkil" DROP COLUMN "firmaAdi",
ADD COLUMN     "adres" TEXT,
ADD COLUMN     "kurumAdi" TEXT,
ALTER COLUMN "muvekkilTipi" SET DEFAULT 'GERCEK_KISI';

-- AlterTable
ALTER TABLE "Not" DROP COLUMN "baslik",
DROP COLUMN "etiketler",
DROP COLUMN "meblaga",
ADD COLUMN     "meblag" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Personel" DROP COLUMN "maas",
ADD COLUMN     "adres" TEXT;

-- DropTable
DROP TABLE "Adres";

-- DropTable
DROP TABLE "Iletisim";

-- DropEnum
DROP TYPE "AcikKapali";

-- DropEnum
DROP TYPE "AdresTipi";

-- DropEnum
DROP TYPE "FinansDurumu";

-- DropEnum
DROP TYPE "IletisimTipi";

-- DropEnum
DROP TYPE "IrtibatTuru";

-- DropEnum
DROP TYPE "OdemeKanali";

-- CreateTable
CREATE TABLE "PersonelOzlukEvraki" (
    "id" SERIAL NOT NULL,
    "evrakTuru" "OzlukEvrakTuru" NOT NULL,
    "dosyaId" INTEGER,
    "personelId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonelOzlukEvraki_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonelIzin" (
    "id" SERIAL NOT NULL,
    "izinTuru" "IzinTuru" NOT NULL,
    "baslangicTarihi" TIMESTAMP(3) NOT NULL,
    "bitisTarihi" TIMESTAMP(3) NOT NULL,
    "dosyaId" INTEGER,
    "personelId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonelIzin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonelUcretPusulasi" (
    "id" SERIAL NOT NULL,
    "donem" TEXT NOT NULL,
    "brutUcret" DOUBLE PRECISION NOT NULL,
    "netUcret" DOUBLE PRECISION NOT NULL,
    "dosyaId" INTEGER,
    "personelId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonelUcretPusulasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SozlesmeDetay" (
    "id" SERIAL NOT NULL,
    "evrakId" INTEGER NOT NULL,
    "yargiTuru" "YargiTuru" NOT NULL,
    "gorevliYargiBirimi" TEXT NOT NULL,
    "yetkiliYargiBirimi" TEXT NOT NULL,
    "davaTuru" TEXT NOT NULL,
    "tevdiEdilenIs" TEXT NOT NULL,
    "teslimEdilenBelgeler" TEXT NOT NULL,
    "odemeTipi" "OdemeTipi" NOT NULL,
    "avukatlikUcreti" DOUBLE PRECISION NOT NULL,
    "yargilamaGideri" DOUBLE PRECISION NOT NULL,
    "pesinMi" BOOLEAN NOT NULL DEFAULT true,
    "taksitBilgisi" TEXT,
    "kdvOrani" DOUBLE PRECISION NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SozlesmeDetay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GorusmeTutanagiDetay" (
    "id" SERIAL NOT NULL,
    "evrakId" INTEGER NOT NULL,
    "avukatBeyani" TEXT NOT NULL,
    "muvekkilBeyani" TEXT NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GorusmeTutanagiDetay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YargiBirimi" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "yargiTuru" "YargiTuru" NOT NULL,
    "birimTuru" TEXT NOT NULL,

    CONSTRAINT "YargiBirimi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CezaMahkemesi" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,

    CONSTRAINT "CezaMahkemesi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HukukMahkemesi" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,

    CONSTRAINT "HukukMahkemesi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SozlesmeDetay_evrakId_key" ON "SozlesmeDetay"("evrakId");

-- CreateIndex
CREATE UNIQUE INDEX "GorusmeTutanagiDetay_evrakId_key" ON "GorusmeTutanagiDetay"("evrakId");

-- CreateIndex
CREATE UNIQUE INDEX "YargiBirimi_ad_yargiTuru_key" ON "YargiBirimi"("ad", "yargiTuru");

-- CreateIndex
CREATE UNIQUE INDEX "CezaMahkemesi_ad_key" ON "CezaMahkemesi"("ad");

-- CreateIndex
CREATE UNIQUE INDEX "HukukMahkemesi_ad_key" ON "HukukMahkemesi"("ad");

-- AddForeignKey
ALTER TABLE "Dosya" ADD CONSTRAINT "Dosya_muvekkilId_fkey" FOREIGN KEY ("muvekkilId") REFERENCES "Muvekkil"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonelOzlukEvraki" ADD CONSTRAINT "PersonelOzlukEvraki_dosyaId_fkey" FOREIGN KEY ("dosyaId") REFERENCES "Dosya"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonelOzlukEvraki" ADD CONSTRAINT "PersonelOzlukEvraki_personelId_fkey" FOREIGN KEY ("personelId") REFERENCES "Personel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonelIzin" ADD CONSTRAINT "PersonelIzin_dosyaId_fkey" FOREIGN KEY ("dosyaId") REFERENCES "Dosya"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonelIzin" ADD CONSTRAINT "PersonelIzin_personelId_fkey" FOREIGN KEY ("personelId") REFERENCES "Personel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonelUcretPusulasi" ADD CONSTRAINT "PersonelUcretPusulasi_dosyaId_fkey" FOREIGN KEY ("dosyaId") REFERENCES "Dosya"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonelUcretPusulasi" ADD CONSTRAINT "PersonelUcretPusulasi_personelId_fkey" FOREIGN KEY ("personelId") REFERENCES "Personel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SozlesmeDetay" ADD CONSTRAINT "SozlesmeDetay_evrakId_fkey" FOREIGN KEY ("evrakId") REFERENCES "Evrak"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GorusmeTutanagiDetay" ADD CONSTRAINT "GorusmeTutanagiDetay_evrakId_fkey" FOREIGN KEY ("evrakId") REFERENCES "Evrak"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
