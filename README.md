# Avukatlık Bürosu Yönetim Sistemi API

Bu proje, avukatlık büroları için geliştirilmiş bir yönetim sistemi API'sidir. Müşteri, dava ve görev takibi gibi temel fonksiyonları içerir.

## Özellikler

- Kullanıcı yönetimi (avukatlar, sekreterler vb.)
- Müşteri yönetimi
- Dava takibi
- Görev yönetimi
- İletişim bilgileri ve adres yönetimi

## Teknolojiler

- Node.js ve Express.js
- PostgreSQL veritabanı
- Prisma ORM
- Railway platformu

## Kurulum

1. Projeyi klonlayın
```bash
git clone <repo-url>
cd <repo-directory>
```

2. Bağımlılıkları yükleyin
```bash
npm install
```

3. `.env` dosyasını yapılandırın (PostgreSQL bağlantı bilgileri)
```
DATABASE_URL=postgresql://username:password@host:port/database
```

4. Veritabanı şemasını oluşturun
```bash
npx prisma db push
```

5. Uygulamayı başlatın
```bash
npm run dev
```

## API Endpoints

### Kullanıcılar

- `GET /api/users` - Tüm kullanıcıları listele
- `GET /api/users/:id` - Belirli bir kullanıcıyı getir
- `POST /api/users` - Yeni kullanıcı oluştur
- `PUT /api/users/:id` - Kullanıcı bilgilerini güncelle
- `DELETE /api/users/:id` - Kullanıcıyı sil
- `PUT /api/users/:id/change-password` - Kullanıcı şifresini değiştir

### Müşteriler

- `GET /api/clients` - Tüm müşterileri listele
- `GET /api/clients/:id` - Belirli bir müşteriyi getir
- `POST /api/clients` - Yeni müşteri oluştur
- `PUT /api/clients/:id` - Müşteri bilgilerini güncelle
- `DELETE /api/clients/:id` - Müşteriyi sil
- `POST /api/clients/:id/contacts` - Müşteriye iletişim bilgisi ekle
- `POST /api/clients/:id/addresses` - Müşteriye adres bilgisi ekle

### Davalar

- `GET /api/lawsuits` - Tüm davaları listele
- `GET /api/lawsuits/:id` - Belirli bir davayı getir
- `POST /api/lawsuits` - Yeni dava oluştur
- `PUT /api/lawsuits/:id` - Dava bilgilerini güncelle
- `DELETE /api/lawsuits/:id` - Davayı sil
- `GET /api/lawsuits/:id/tasks` - Davaya ait görevleri getir

### Görevler

- `GET /api/tasks` - Tüm görevleri listele
- `GET /api/tasks/:id` - Belirli bir görevi getir
- `POST /api/tasks` - Yeni görev oluştur 
- `PUT /api/tasks/:id` - Görev bilgilerini güncelle
- `DELETE /api/tasks/:id` - Görevi sil
- `GET /api/tasks/user/:userId` - Kullanıcıya ait görevleri getir

## Veritabanı Şeması

Veritabanı şeması 6 ana tablodan oluşmaktadır:

- Users (Kullanıcılar)
- Clients (Müşteriler)
- Lawsuits (Davalar)
- Tasks (Görevler)
- Contacts (İletişim Bilgileri)
- Addresses (Adresler)

İlişkiler:
- Bir kullanıcının birden fazla görevi olabilir
- Bir kullanıcı birden fazla müşteri ve dava oluşturabilir
- Bir müşterinin birden fazla iletişim bilgisi, adresi ve davası olabilir
- Bir davanın birden fazla görevi olabilir
- Bir görev bir müşteri veya dava ile ilişkilendirilebilir

## Lisans

MIT 