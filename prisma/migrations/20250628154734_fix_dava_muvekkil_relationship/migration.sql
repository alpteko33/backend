/*
  Warnings:

  - A unique constraint covering the columns `[dosyaNumarasi,avukatId,muvekkilId]` on the table `Dava` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Dava_dosyaNumarasi_avukatId_key";

-- DropIndex
DROP INDEX "Dava_dosyaNumarasi_key";

-- CreateIndex
CREATE UNIQUE INDEX "Dava_dosyaNumarasi_avukatId_muvekkilId_key" ON "Dava"("dosyaNumarasi", "avukatId", "muvekkilId");
