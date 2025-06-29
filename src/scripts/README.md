# Görev Listesi Kullanıcı Entegrasyonu

Bu klasör, görev listesi kullanıcı entegrasyonu için gereken betikleri (script) içermektedir. Mevcut sistem, görev listesi oluşturan kullanıcıları `GorevListesi` tablosunda `olusturanId` alanında saklarken, diğer kullanıcıları `GorevListesiKullanici` tablosunda saklamaktadır.

Bu durum, tüm görev listesi kullanıcılarını tek bir sorguda almanızı zorlaştırır ve kod karmaşıklığını artırır.

## Yapılan İyileştirme

Yeni yaklaşımda:

1. Görev listesi oluşturulduğunda, oluşturan kullanıcı otomatik olarak `GorevListesiKullanici` tablosuna eklenecek
2. Oluşturan kullanıcı, isOwner=true ile özel olarak işaretlenecek
3. Mevcut görev listeleri için, migrasyonu çalıştırarak tüm liste sahiplerini `GorevListesiKullanici` tablosuna ekleyebilirsiniz

## Migrasyon Çalıştırma

```bash
# Betik dizinine gidin
cd src/scripts

# Migrasyon script'ini çalıştırın
node migrateListeKullanicilar.js
```

Bu betik şunları yapacaktır:

1. Tüm mevcut görev listelerini bulacak
2. Her liste için, oluşturan kullanıcının `GorevListesiKullanici` tablosunda olup olmadığını kontrol edecek
3. Eğer yoksa, oluşturan kullanıcıyı liste kullanıcıları arasına ekleyecek

## Sistem Değişiklikleri

Bu entegrasyon sonucunda yapılan değişiklikler:

1. `gorevListesiController.js`: Görev listesi oluşturulduğunda, oluşturan kullanıcı otomatik olarak liste kullanıcılarına ekleniyor
2. `gorevListesiKullaniciController.js`: `getUsersByGorevListeId` fonksiyonu, artık liste sahibini özel olarak işaretliyor ve sıralamada öncelik veriyor
3. `migrateListeKullanicilar.js`: Mevcut görev listeleri için migrasyon betiği

## Avantajlar

Bu iyileştirme ile:

1. Bir görev listesinin tüm kullanıcılarını tek bir sorguda alabilirsiniz
2. Liste sahibini ve diğer kullanıcıları tek bir veri yapısında yönetebilirsiniz
3. Erişim kontrolü daha basit ve tutarlı hale gelir
4. İlişkisel yapı daha net ve anlaşılır olur

## PostgreSQL Sorgusu ile Test

GorevListesi ve ilişkili kullanıcıları görmek için şu sorguyu kullanabilirsiniz:

```sql
SELECT 
    gl.id as liste_id, 
    gl.ad as liste_adi,
    k_sahip.ad || ' ' || k_sahip.soyad as liste_sahibi,
    k.ad || ' ' || k.soyad as kullanici,
    CASE WHEN gl."olusturanId" = k.id THEN 'Evet' ELSE 'Hayır' END as sahip_mi,
    glk.durumu,
    glk."davetTarihi"
FROM "GorevListesi" gl
JOIN "Kullanici" k_sahip ON gl."olusturanId" = k_sahip.id
JOIN "GorevListesiKullanici" glk ON gl.id = glk."gorevListesiId"
JOIN "Kullanici" k ON glk."kullaniciId" = k.id
ORDER BY gl.id, (gl."olusturanId" = k.id) DESC, k.ad;
``` 