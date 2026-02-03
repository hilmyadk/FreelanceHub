# FreelanceHub

Platform yang menghubungkan Customer dengan Freelancer untuk berbagai kebutuhan jasa digital dan kreatif.

## 🚀 Fitur Utama

### Untuk Customer:
- **Cari Jasa**: Browse dan cari berbagai jasa freelance
- **Detail Jasa**: Lihat detail lengkap jasa dan portfolio freelancer
- **Pesan Jasa**: Pesan jasa dengan deskripsi kebutuhan spesifik
- **Pembayaran**: Sistem pembayaran terintegrasi
- **Status Pesanan**: Monitor progress pesanan real-time
- **Konfirmasi & Review**: Konfirmasi hasil dan berikan rating

### Untuk Freelancer:
- **Dashboard**: Lihat statistik dan overview bisnis
- **Kelola Profil**: Update profil dan portfolio
- **Kelola Jasa**: Tambah, edit, dan kelola jasa yang ditawarkan
- **Pesanan Masuk**: Terima dan kelola pesanan dari customer
- **Upload Hasil**: Upload hasil pekerjaan kepada customer
- **Saldo**: Monitor pendapatan dan tarik saldo

### Untuk Admin:
- **Dashboard**: Monitor keseluruhan platform
- **Kelola User**: Manage customer dan freelancer
- **Verifikasi Jasa**: Approve atau reject jasa baru
- **Monitoring Transaksi**: Track semua transaksi dan fee platform

## 📋 Teknologi yang Digunakan

- **React** - Library UI
- **Vite** - Build tool dan dev server
- **React Router** - Routing dan navigasi
- **CSS3** - Styling

## 🛠️ Instalasi

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```

4. Buka browser dan akses: `http://localhost:5173`

## 📁 Struktur Project

```
FreelanceHub/
├── src/
│   ├── pages/
│   │   ├── customer/         # Halaman untuk customer
│   │   ├── freelancer/       # Halaman untuk freelancer
│   │   ├── admin/            # Halaman untuk admin
│   │   ├── LandingPage.jsx
│   │   ├── PilihLogin.jsx
│   │   ├── LoginCustomer.jsx
│   │   ├── LoginFreelancer.jsx
│   │   └── Registrasi.jsx
│   ├── components/           # Komponen reusable (future)
│   ├── App.jsx              # Main app dengan routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
└── README.md
```

## 🎨 Navigasi Halaman

### Customer Flow:
1. Landing Page → Pilih Login → Login Customer
2. Customer Dashboard
3. Cari Jasa → Detail Jasa → Pesan Jasa → Pembayaran
4. Status Pesanan → Konfirmasi Hasil

### Freelancer Flow:
1. Landing Page → Pilih Login → Login Freelancer
2. Freelancer Dashboard
3. Kelola Profil
4. Kelola Jasa → Tambah/Edit Jasa
5. Pesanan Masuk → Upload Hasil
6. Saldo

### Admin Flow:
1. Admin Dashboard
2. Kelola User
3. Verifikasi Jasa
4. Monitoring Transaksi

## 🔐 Akses Demo

Untuk demo, Anda dapat langsung mengakses halaman-halaman berikut:

- **Landing Page**: `/`
- **Customer Dashboard**: `/customer/dashboard`
- **Freelancer Dashboard**: `/freelancer/dashboard`
- **Admin Dashboard**: `/admin/dashboard`

## 📝 Catatan

- Saat ini semua fungsi masih berupa **placeholder**
- Data yang ditampilkan adalah **data dummy**
- Navigasi antar halaman sudah berfungsi dengan baik
- Styling mengikuti desain dari mockup yang diberikan
- Siap untuk integrasi backend di masa mendatang

## 🚧 Development

Project ini dibuat dengan fokus pada:
- Clean code structure
- Responsive design
- User-friendly navigation
- Scalable architecture

## 📱 Responsive Design

Website ini dirancang untuk bekerja dengan baik di berbagai ukuran layar:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🎯 Roadmap

- [ ] Integrasi dengan backend API
- [ ] Implementasi autentikasi real
- [ ] Sistem notifikasi real-time
- [ ] Upload file dan gambar
- [ ] Payment gateway integration
- [ ] Chat antara customer dan freelancer
- [ ] Advanced search dan filter
- [ ] Dashboard analytics yang lebih detail

## 👨‍💻 Developer

Dibuat untuk memenuhi kebutuhan project Semester 7

---

**FreelanceHub** - Connecting Talents with Opportunities 🚀

