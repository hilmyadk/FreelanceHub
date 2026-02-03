# Panduan Navigasi FreelanceHub

## 🏠 Halaman Utama dan Autentikasi

### 1. Landing Page (`/`)
- Halaman pertama yang dilihat pengunjung
- Tombol "Mulai Sekarang" → mengarah ke `/pilih-login`
- Tombol "Login" → mengarah ke `/pilih-login`
- Tombol "Daftar Sekarang" → mengarah ke `/registrasi`

### 2. Pilih Login (`/pilih-login`)
- Pilih jenis akun: Customer atau Freelancer
- "Login sebagai Customer" → `/login-customer`
- "Login sebagai Freelancer" → `/login-freelancer`
- Link "Daftar di sini" → `/registrasi`

### 3. Login Customer (`/login-customer`)
- Form login untuk customer
- Setelah login → `/customer/dashboard`

### 4. Login Freelancer (`/login-freelancer`)
- Form login untuk freelancer
- Setelah login → `/freelancer/dashboard`

### 5. Registrasi (`/registrasi`)
- Form pendaftaran akun baru
- Pilih jenis akun: Customer atau Freelancer
- Setelah registrasi → `/pilih-login`

---

## 👤 Alur Customer

### Dashboard Customer (`/customer/dashboard`)
- Statistik pesanan (Aktif, Selesai, Menunggu)
- Tombol "🔍 Cari Jasa" → `/customer/cari-jasa`
- Tombol "📦 Lihat Pesanan" → `/customer/status-pesanan`
- Klik pesanan terbaru → `/customer/konfirmasi-hasil/:id`

### Cari Jasa (`/customer/cari-jasa`)
- Browse semua jasa tersedia
- Search bar untuk mencari jasa
- Klik card jasa → `/customer/detail-jasa/:id`

### Detail Jasa (`/customer/detail-jasa/:id`)
- Lihat detail lengkap jasa
- Portfolio freelancer
- Ulasan customer lain
- Tombol "Pesan Sekarang" → `/customer/pesan-jasa/:id`

### Pesan Jasa (`/customer/pesan-jasa/:id`)
- Form detail pesanan
- Deskripsi kebutuhan
- Deadline
- Tombol "Lanjut ke Pembayaran" → `/customer/pembayaran/:id`

### Pembayaran (`/customer/pembayaran/:id`)
- Ringkasan pesanan
- Pilih metode pembayaran
- Tombol "Bayar Sekarang" → `/customer/status-pesanan`

### Status Pesanan (`/customer/status-pesanan`)
- List semua pesanan
- Status: Pending, Dalam Proses, Selesai
- Klik pesanan → `/customer/konfirmasi-hasil/:id`

### Konfirmasi Hasil (`/customer/konfirmasi-hasil/:id`)
- Lihat file hasil pekerjaan
- Download hasil
- Tombol "Minta Revisi" atau "Terima & Konfirmasi"
- Form review dan rating

---

## 💼 Alur Freelancer

### Dashboard Freelancer (`/freelancer/dashboard`)
- Statistik (Pesanan Aktif, Total Jasa, Saldo)
- Tombol "+ Tambah Jasa Baru" → `/freelancer/kelola-jasa/tambah`
- Tombol "📋 Lihat Pesanan" → `/freelancer/pesanan-masuk`
- Tombol "👤 Edit Profil" → `/freelancer/kelola-profil`

### Kelola Profil (`/freelancer/kelola-profil`)
- Edit informasi profil
- Deskripsi, keahlian, portfolio
- Tombol "Simpan Perubahan" → kembali ke dashboard

### Kelola Jasa (`/freelancer/kelola-jasa`)
- List semua jasa yang ditawarkan
- Status: Aktif/Nonaktif
- Tombol "+ Tambah Jasa Baru" → `/freelancer/kelola-jasa/tambah`
- Tombol "Edit" → `/freelancer/kelola-jasa/edit/:id`
- Tombol "Hapus" → hapus jasa

### Tambah Jasa (`/freelancer/kelola-jasa/tambah`)
- Form tambah jasa baru
- Judul, kategori, deskripsi, harga, waktu pengerjaan
- Upload portfolio
- Tombol "Tambah Jasa" → `/freelancer/kelola-jasa`

### Edit Jasa (`/freelancer/kelola-jasa/edit/:id`)
- Form edit jasa existing
- Ubah status (Aktif/Nonaktif)
- Tombol "Simpan Perubahan" → `/freelancer/kelola-jasa`

### Pesanan Masuk (`/freelancer/pesanan-masuk`)
- List pesanan dari customer
- Status: Pesanan Baru, Sedang Dikerjakan, Selesai
- Tombol "Upload Hasil" → `/freelancer/upload-hasil/:id`
- Klik pesanan → `/freelancer/upload-hasil/:id`

### Upload Hasil (`/freelancer/upload-hasil/:id`)
- Detail pesanan
- Upload file hasil
- Catatan untuk customer
- Tombol "Upload Hasil" → `/freelancer/pesanan-masuk`

### Saldo (`/freelancer/saldo`)
- Total saldo
- Statistik bulan ini, total transaksi, pending
- Riwayat transaksi
- Tombol "Tarik Saldo"

---

## 👨‍💼 Alur Admin

### Dashboard Admin (`/admin/dashboard`)
- Statistik total (User, Jasa, Transaksi)
- Statistik bulan ini
- Perlu perhatian (Verifikasi, Laporan, Dispute)
- Aktivitas terbaru

### Kelola User (`/admin/kelola-user`)
- List semua user (Customer & Freelancer)
- Search user
- Filter by tipe
- Status: Aktif/Suspended
- Tombol "Detail", "Suspend", "Aktifkan"

### Verifikasi Jasa (`/admin/verifikasi-jasa`)
- List jasa yang perlu diverifikasi
- Filter: Semua, Menunggu, Terverifikasi, Ditolak
- Tombol "✓ Setujui" atau "✗ Tolak"

### Monitoring Transaksi (`/admin/monitoring-transaksi`)
- Statistik transaksi
- Volume transaksi dan fee platform
- List semua transaksi
- Filter by status
- Detail per transaksi

---

## 🎯 Tips Navigasi

1. **Navbar**: Setiap dashboard memiliki navbar untuk navigasi cepat
2. **Tombol Kembali**: Hampir setiap halaman memiliki tombol untuk kembali
3. **Breadcrumb**: Follow flow yang logis dari satu halaman ke halaman lain
4. **Logout**: Tersedia di navbar, mengarah kembali ke landing page

---

## 🔄 Flow Lengkap

### Customer:
Landing → Login → Dashboard → Cari Jasa → Detail → Pesan → Bayar → Status → Konfirmasi

### Freelancer:
Landing → Login → Dashboard → Tambah Jasa → Terima Pesanan → Upload Hasil → Saldo

### Admin:
Dashboard → Kelola User/Jasa/Transaksi → Verifikasi → Monitor

---

**Note**: Semua tombol dan link sudah fungsional untuk navigasi. Data yang ditampilkan saat ini adalah dummy data.
