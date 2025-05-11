/*
  Warnings:

  - The values [DİGER] on the enum `AdresTipi` will be removed. If these variants are still used in the database, this will fail.
  - The values [DİGER] on the enum `IletisimTipi` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `aciklama` on the `Dava` table. All the data in the column will be lost.
  - You are about to drop the column `baslangicTarihi` on the `Dava` table. All the data in the column will be lost.
  - You are about to drop the column `bitisTarihi` on the `Dava` table. All the data in the column will be lost.
  - You are about to drop the column `davaNumarasi` on the `Dava` table. All the data in the column will be lost.
  - You are about to drop the column `davaTipi` on the `Dava` table. All the data in the column will be lost.
  - You are about to drop the column `muvekkilId` on the `Gorev` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dosyaNumarasi]` on the table `Dava` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dosyaAcilisTarihi` to the `Dava` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dosyaNumarasi` to the `Dava` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dosyaTuru` to the `Dava` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guncellemeTarihi` to the `Dosya` table without a default value. This is not possible if the table is not empty.
  - Made the column `gunumGorunumunde` on table `Gorev` required. This step will fail if there are existing NULL values in that column.
  - Made the column `yinelenen` on table `Gorev` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `guncellemeTarihi` to the `GorevListesi` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SenkronizasyonDurumu" AS ENUM ('BEKLEMEDE', 'SENKRONIZE_EDILIYOR', 'TAMAMLANDI', 'BASARISIZ', 'ERTELENDI');

-- CreateEnum
CREATE TYPE "NotTuru" AS ENUM ('MUVEKKIL_NOTU', 'IRTIBAT_NOTU', 'DAVA_NOTU', 'ICRA_NOTU');

-- CreateEnum
CREATE TYPE "OnemDurumu" AS ENUM ('NORMAL', 'ONEMLI', 'ACIL', 'ZAMANLI');

-- CreateEnum
CREATE TYPE "EvrakTuru" AS ENUM ('STAJYER', 'GORUSME_TUTANAGI', 'DILEKCE', 'BILGILENDIRME_RAPORU', 'FATURA', 'KVKK_METNI', 'MAHKEME_KARARI', 'SÖZLEŞME', 'DIGER');

-- CreateEnum
CREATE TYPE "IrtibatTuru" AS ENUM ('AVUKAT', 'HAKIM', 'SAVCI', 'BILIRKISI', 'DANISMANLIK', 'DIGER');

-- CreateEnum
CREATE TYPE "AcikKapali" AS ENUM ('ACIK', 'KAPALI');

-- CreateEnum
CREATE TYPE "FinansTuru" AS ENUM ('GELIR', 'GIDER', 'DUZENSIZ_GELIR', 'DUZENSIZ_GIDER');

-- CreateEnum
CREATE TYPE "FinansDurumu" AS ENUM ('ONAYLANDI', 'ONAYLANMADI', 'BEKLEMEDE');

-- CreateEnum
CREATE TYPE "OdemeKanali" AS ENUM ('NAKIT', 'BANKA', 'KREDI_KARTI', 'EFT_HAVALE', 'DIGER');

-- AlterEnum
BEGIN;
CREATE TYPE "AdresTipi_new" AS ENUM ('EV', 'IS', 'FATURA', 'DIGER');
ALTER TABLE "Adres" ALTER COLUMN "adresTipi" DROP DEFAULT;
ALTER TABLE "Adres" ALTER COLUMN "adresTipi" TYPE "AdresTipi_new" USING ("adresTipi"::text::"AdresTipi_new");
ALTER TYPE "AdresTipi" RENAME TO "AdresTipi_old";
ALTER TYPE "AdresTipi_new" RENAME TO "AdresTipi";
DROP TYPE "AdresTipi_old";
ALTER TABLE "Adres" ALTER COLUMN "adresTipi" SET DEFAULT 'EV';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "IletisimTipi_new" AS ENUM ('E_POSTA', 'TELEFON', 'MOBIL', 'FAKS', 'DIGER');
ALTER TABLE "Iletisim" ALTER COLUMN "tip" TYPE "IletisimTipi_new" USING ("tip"::text::"IletisimTipi_new");
ALTER TYPE "IletisimTipi" RENAME TO "IletisimTipi_old";
ALTER TYPE "IletisimTipi_new" RENAME TO "IletisimTipi";
DROP TYPE "IletisimTipi_old";
COMMIT;

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Rol" ADD VALUE 'KATIP';
ALTER TYPE "Rol" ADD VALUE 'STAJYER';
ALTER TYPE "Rol" ADD VALUE 'MUHASEBECI';

-- DropForeignKey
ALTER TABLE "Adres" DROP CONSTRAINT "Adres_muvekkilId_fkey";

-- DropForeignKey
ALTER TABLE "Dosya" DROP CONSTRAINT "Dosya_gorevId_fkey";

-- DropForeignKey
ALTER TABLE "Gorev" DROP CONSTRAINT "Gorev_muvekkilId_fkey";

-- DropIndex
DROP INDEX "Dava_davaNumarasi_key";

-- AlterTable
ALTER TABLE "Adres" ADD COLUMN     "calismaArkadasiId" INTEGER,
ADD COLUMN     "irtibatId" INTEGER,
ADD COLUMN     "personelId" INTEGER,
ALTER COLUMN "muvekkilId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Dava" DROP COLUMN "aciklama",
DROP COLUMN "baslangicTarihi",
DROP COLUMN "bitisTarihi",
DROP COLUMN "davaNumarasi",
DROP COLUMN "davaTipi",
ADD COLUMN     "acikKapali" "AcikKapali" NOT NULL DEFAULT 'ACIK',
ADD COLUMN     "dosyaAcilisTarihi" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dosyaNumarasi" TEXT NOT NULL,
ADD COLUMN     "dosyaTuru" TEXT NOT NULL,
ADD COLUMN     "karsiTarafAvukati" TEXT,
ADD COLUMN     "yargiDairesi" TEXT;

-- AlterTable
ALTER TABLE "Dosya" ADD COLUMN     "boyut" DOUBLE PRECISION,
ADD COLUMN     "dosyaTipi" TEXT,
ADD COLUMN     "evrakId" INTEGER,
ADD COLUMN     "guncellemeTarihi" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "gorevId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Gorev" DROP COLUMN "muvekkilId",
ALTER COLUMN "gunumGorunumunde" SET NOT NULL,
ALTER COLUMN "gunumGorunumunde" SET DEFAULT false,
ALTER COLUMN "yinelenen" SET NOT NULL,
ALTER COLUMN "yinelenen" SET DEFAULT false;

-- AlterTable
ALTER TABLE "GorevListesi" ADD COLUMN     "aciklama" TEXT,
ADD COLUMN     "guncellemeTarihi" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "GorevListesiKullanici" ADD COLUMN     "durumu" "Durum" NOT NULL DEFAULT 'AKTIF';

-- AlterTable
ALTER TABLE "Iletisim" ADD COLUMN     "calismaArkadasiId" INTEGER,
ADD COLUMN     "irtibatId" INTEGER,
ADD COLUMN     "personelId" INTEGER;

-- AlterTable
ALTER TABLE "Kullanici" ADD COLUMN     "adres" TEXT,
ADD COLUMN     "baroNo" TEXT,
ADD COLUMN     "profilResmi" TEXT,
ADD COLUMN     "senkronizasyonDurumu" "SenkronizasyonDurumu" NOT NULL DEFAULT 'BEKLEMEDE',
ADD COLUMN     "sonSenkronizasyonTarihi" TIMESTAMP(3),
ADD COLUMN     "tcKimlikNo" TEXT,
ADD COLUMN     "telefonNo" TEXT,
ALTER COLUMN "rol" SET DEFAULT 'AVUKAT';

-- AlterTable
ALTER TABLE "Muvekkil" ADD COLUMN     "eposta" TEXT,
ADD COLUMN     "tarafSifati" TEXT,
ADD COLUMN     "tcKimlikNo" TEXT,
ADD COLUMN     "telefonNo" TEXT,
ALTER COLUMN "ad" DROP NOT NULL,
ALTER COLUMN "soyad" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Not" (
    "id" SERIAL NOT NULL,
    "baslik" TEXT,
    "icerik" TEXT NOT NULL,
    "notTuru" "NotTuru" NOT NULL,
    "etiketler" TEXT,
    "onemDurumu" "OnemDurumu" NOT NULL DEFAULT 'NORMAL',
    "hatirlatmaTarihi" TIMESTAMP(3),
    "meblaga" DOUBLE PRECISION,
    "olusturanId" INTEGER NOT NULL,
    "muvekkilId" INTEGER,
    "davaId" INTEGER,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Not_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personel" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "soyad" TEXT NOT NULL,
    "tcKimlikNo" TEXT,
    "telefonNo" TEXT,
    "eposta" TEXT,
    "gorevi" TEXT NOT NULL,
    "maas" DOUBLE PRECISION,
    "iseBaslamaTarihi" TIMESTAMP(3),
    "yoneticiId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Personel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Irtibat" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "soyad" TEXT NOT NULL,
    "tcKimlikNo" TEXT,
    "telefonNo" TEXT,
    "eposta" TEXT,
    "baroNo" TEXT,
    "irtibatTuru" "IrtibatTuru" NOT NULL,
    "konusu" TEXT,
    "planlananTarih" TIMESTAMP(3),
    "kullaniciId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Irtibat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evrak" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "evrakTuru" "EvrakTuru" NOT NULL,
    "dosyaNo" TEXT,
    "aciklama" TEXT,
    "muvekkilId" INTEGER,
    "davaId" INTEGER,
    "olusturanId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evrak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinansIslemi" (
    "id" SERIAL NOT NULL,
    "islemTuru" "FinansTuru" NOT NULL,
    "miktar" DOUBLE PRECISION NOT NULL,
    "aciklama" TEXT,
    "islemTarihi" TIMESTAMP(3) NOT NULL,
    "odemeKanali" "OdemeKanali",
    "kategori" TEXT,
    "durum" "FinansDurumu" NOT NULL DEFAULT 'ONAYLANMADI',
    "muvekkilId" INTEGER,
    "davaId" INTEGER,
    "kullaniciId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinansIslemi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalismaArkadasi" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "soyad" TEXT NOT NULL,
    "tcKimlikNo" TEXT,
    "telefonNo" TEXT,
    "eposta" TEXT,
    "baroNo" TEXT,
    "kullaniciId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CalismaArkadasi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dava_dosyaNumarasi_key" ON "Dava"("dosyaNumarasi");

-- AddForeignKey
ALTER TABLE "Iletisim" ADD CONSTRAINT "Iletisim_irtibatId_fkey" FOREIGN KEY ("irtibatId") REFERENCES "Irtibat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Iletisim" ADD CONSTRAINT "Iletisim_personelId_fkey" FOREIGN KEY ("personelId") REFERENCES "Personel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Iletisim" ADD CONSTRAINT "Iletisim_calismaArkadasiId_fkey" FOREIGN KEY ("calismaArkadasiId") REFERENCES "CalismaArkadasi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adres" ADD CONSTRAINT "Adres_muvekkilId_fkey" FOREIGN KEY ("muvekkilId") REFERENCES "Muvekkil"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adres" ADD CONSTRAINT "Adres_personelId_fkey" FOREIGN KEY ("personelId") REFERENCES "Personel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adres" ADD CONSTRAINT "Adres_calismaArkadasiId_fkey" FOREIGN KEY ("calismaArkadasiId") REFERENCES "CalismaArkadasi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adres" ADD CONSTRAINT "Adres_irtibatId_fkey" FOREIGN KEY ("irtibatId") REFERENCES "Irtibat"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dosya" ADD CONSTRAINT "Dosya_gorevId_fkey" FOREIGN KEY ("gorevId") REFERENCES "Gorev"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dosya" ADD CONSTRAINT "Dosya_evrakId_fkey" FOREIGN KEY ("evrakId") REFERENCES "Evrak"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Not" ADD CONSTRAINT "Not_olusturanId_fkey" FOREIGN KEY ("olusturanId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Not" ADD CONSTRAINT "Not_muvekkilId_fkey" FOREIGN KEY ("muvekkilId") REFERENCES "Muvekkil"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Not" ADD CONSTRAINT "Not_davaId_fkey" FOREIGN KEY ("davaId") REFERENCES "Dava"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personel" ADD CONSTRAINT "Personel_yoneticiId_fkey" FOREIGN KEY ("yoneticiId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Irtibat" ADD CONSTRAINT "Irtibat_kullaniciId_fkey" FOREIGN KEY ("kullaniciId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evrak" ADD CONSTRAINT "Evrak_muvekkilId_fkey" FOREIGN KEY ("muvekkilId") REFERENCES "Muvekkil"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evrak" ADD CONSTRAINT "Evrak_davaId_fkey" FOREIGN KEY ("davaId") REFERENCES "Dava"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evrak" ADD CONSTRAINT "Evrak_olusturanId_fkey" FOREIGN KEY ("olusturanId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinansIslemi" ADD CONSTRAINT "FinansIslemi_muvekkilId_fkey" FOREIGN KEY ("muvekkilId") REFERENCES "Muvekkil"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinansIslemi" ADD CONSTRAINT "FinansIslemi_davaId_fkey" FOREIGN KEY ("davaId") REFERENCES "Dava"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinansIslemi" ADD CONSTRAINT "FinansIslemi_kullaniciId_fkey" FOREIGN KEY ("kullaniciId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalismaArkadasi" ADD CONSTRAINT "CalismaArkadasi_kullaniciId_fkey" FOREIGN KEY ("kullaniciId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
