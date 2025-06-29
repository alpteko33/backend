/*
  Warnings:

  - A unique constraint covering the columns `[dosyaNumarasi,avukatId]` on the table `Dava` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ad,soyad,olusturanKullaniciId]` on the table `Muvekkil` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Dava_dosyaNumarasi_avukatId_key" ON "Dava"("dosyaNumarasi", "avukatId");

-- CreateIndex
CREATE UNIQUE INDEX "Muvekkil_ad_soyad_olusturanKullaniciId_key" ON "Muvekkil"("ad", "soyad", "olusturanKullaniciId");
