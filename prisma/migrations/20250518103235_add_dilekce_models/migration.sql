-- CreateTable
CREATE TABLE "PersonelDavet" (
    "id" SERIAL NOT NULL,
    "yoneticiId" INTEGER NOT NULL,
    "personelId" INTEGER NOT NULL,
    "durum" "DavetDurumu" NOT NULL DEFAULT 'BEKLEMEDE',
    "davetTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "yanitTarihi" TIMESTAMP(3),

    CONSTRAINT "PersonelDavet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dilekce" (
    "id" SERIAL NOT NULL,
    "baslik" TEXT NOT NULL,
    "icerik" TEXT NOT NULL,
    "dilekceKonusuId" INTEGER,
    "mahkemeBilgisi" TEXT,
    "dosyaNoBilgisi" TEXT,
    "tarafBilgisi" TEXT,
    "avukatBilgisi" TEXT,
    "dilekceturuId" INTEGER,
    "kullaniciId" INTEGER NOT NULL,
    "davaId" INTEGER,
    "hukukiNedenler" TEXT,
    "hukukiDeliller" TEXT,
    "neticeVeTalep" TEXT,
    "sablonMu" BOOLEAN NOT NULL DEFAULT false,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dilekce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DilekceKonusu" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "aciklama" TEXT,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DilekceKonusu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DilekceTuru" (
    "id" SERIAL NOT NULL,
    "ad" TEXT NOT NULL,
    "aciklama" TEXT,
    "sablonIcerik" TEXT,
    "olusturulmaTarihi" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guncellemeTarihi" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DilekceTuru_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DilekceKonusu_ad_key" ON "DilekceKonusu"("ad");

-- CreateIndex
CREATE UNIQUE INDEX "DilekceTuru_ad_key" ON "DilekceTuru"("ad");

-- AddForeignKey
ALTER TABLE "PersonelDavet" ADD CONSTRAINT "PersonelDavet_yoneticiId_fkey" FOREIGN KEY ("yoneticiId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonelDavet" ADD CONSTRAINT "PersonelDavet_personelId_fkey" FOREIGN KEY ("personelId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dilekce" ADD CONSTRAINT "Dilekce_dilekceKonusuId_fkey" FOREIGN KEY ("dilekceKonusuId") REFERENCES "DilekceKonusu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dilekce" ADD CONSTRAINT "Dilekce_dilekceturuId_fkey" FOREIGN KEY ("dilekceturuId") REFERENCES "DilekceTuru"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dilekce" ADD CONSTRAINT "Dilekce_kullaniciId_fkey" FOREIGN KEY ("kullaniciId") REFERENCES "Kullanici"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dilekce" ADD CONSTRAINT "Dilekce_davaId_fkey" FOREIGN KEY ("davaId") REFERENCES "Dava"("id") ON DELETE SET NULL ON UPDATE CASCADE;
