/*
  Warnings:

  - You are about to drop the column `guncellemeTarihi` on the `Kullanici` table. All the data in the column will be lost.
  - Added the required column `guncellenmeTarihi` to the `Kullanici` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gorev" ADD COLUMN     "banaAnimsat" TIMESTAMP(3),
ADD COLUMN     "gunumGorunumunde" BOOLEAN,
ADD COLUMN     "listeId" INTEGER,
ADD COLUMN     "yinelenen" BOOLEAN;

-- AlterTable
ALTER TABLE "Kullanici" DROP COLUMN "guncellemeTarihi",
ADD COLUMN     "guncellenmeTarihi" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Adim" (
    "id" SERIAL NOT NULL,
    "metin" TEXT NOT NULL,
    "tamamlandi" BOOLEAN NOT NULL DEFAULT false,
    "sira" INTEGER NOT NULL,
    "gorevId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Adim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dosya" (
    "id" SERIAL NOT NULL,
    "dosyaAdi" TEXT NOT NULL,
    "dosyaYolu" TEXT NOT NULL,
    "gorevId" INTEGER NOT NULL,
    "kullaniciId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dosya_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GorevListesi" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "olusturanId" INTEGER NOT NULL,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GorevListesi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GorevListesiKullanici" (
    "id" SERIAL NOT NULL,
    "gorevListesiId" INTEGER NOT NULL,
    "kullaniciId" INTEGER NOT NULL,
    "davetTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GorevListesiKullanici_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Gorev" ADD CONSTRAINT "Gorev_listeId_fkey" FOREIGN KEY ("listeId") REFERENCES "GorevListesi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adim" ADD CONSTRAINT "Adim_gorevId_fkey" FOREIGN KEY ("gorevId") REFERENCES "Gorev"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dosya" ADD CONSTRAINT "Dosya_gorevId_fkey" FOREIGN KEY ("gorevId") REFERENCES "Gorev"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dosya" ADD CONSTRAINT "Dosya_kullaniciId_fkey" FOREIGN KEY ("kullaniciId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GorevListesi" ADD CONSTRAINT "GorevListesi_olusturanId_fkey" FOREIGN KEY ("olusturanId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GorevListesiKullanici" ADD CONSTRAINT "GorevListesiKullanici_gorevListesiId_fkey" FOREIGN KEY ("gorevListesiId") REFERENCES "GorevListesi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GorevListesiKullanici" ADD CONSTRAINT "GorevListesiKullanici_kullaniciId_fkey" FOREIGN KEY ("kullaniciId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
