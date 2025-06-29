/*
  Warnings:

  - You are about to drop the `CezaMahkemesi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HukukMahkemesi` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[ad,yargiTuru,mahkemeTuru]` on the table `YargiBirimi` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mahkemeTuru` to the `YargiBirimi` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DavetDurumu" AS ENUM ('BEKLEMEDE', 'KABUL_EDILDI', 'REDDEDILDI');

-- DropIndex
DROP INDEX "YargiBirimi_ad_yargiTuru_key";

-- AlterTable
ALTER TABLE "Dava" ADD COLUMN     "yargiBirimiId" INTEGER;

-- AlterTable
ALTER TABLE "YargiBirimi" ADD COLUMN     "mahkemeTuru" TEXT NOT NULL;

-- DropTable
DROP TABLE "CezaMahkemesi";

-- DropTable
DROP TABLE "HukukMahkemesi";

-- CreateTable
CREATE TABLE "CalismaArkadasiDavet" (
    "id" SERIAL NOT NULL,
    "davetEdenId" INTEGER NOT NULL,
    "davetEdilenId" INTEGER NOT NULL,
    "durum" "DavetDurumu" NOT NULL DEFAULT 'BEKLEMEDE',
    "davetTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "yanitTarihi" TIMESTAMP(3),

    CONSTRAINT "CalismaArkadasiDavet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "YargiBirimi_ad_yargiTuru_mahkemeTuru_key" ON "YargiBirimi"("ad", "yargiTuru", "mahkemeTuru");

-- AddForeignKey
ALTER TABLE "Dava" ADD CONSTRAINT "Dava_yargiBirimiId_fkey" FOREIGN KEY ("yargiBirimiId") REFERENCES "YargiBirimi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalismaArkadasiDavet" ADD CONSTRAINT "CalismaArkadasiDavet_davetEdenId_fkey" FOREIGN KEY ("davetEdenId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalismaArkadasiDavet" ADD CONSTRAINT "CalismaArkadasiDavet_davetEdilenId_fkey" FOREIGN KEY ("davetEdilenId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
