# Quick Start Guide - FreelanceHub

## 🚀 Cara Menjalankan Aplikasi

### 1. Pastikan Development Server Berjalan

Jika belum berjalan, jalankan perintah:
```bash
npm run dev
```

### 2. Buka Browser

Akses: **http://localhost:5173**

---

## 🎯 Testing Flow Aplikasi

### Testing Flow Customer:

1. **Landing Page** (http://localhost:5173)
   - Klik "Mulai Sekarang" atau "Login"

2. **Pilih Login** (http://localhost:5173/pilih-login)
   - Klik "Login sebagai Customer"

3. **Login Customer** (http://localhost:5173/login-customer)
   - Isi form (email/password apa saja)
   - Klik "Login"

4. **Customer Dashboard** (http://localhost:5173/customer/dashboard)
   - Lihat statistik pesanan
   - Klik "🔍 Cari Jasa"

5. **Cari Jasa** (http://localhost:5173/customer/cari-jasa)
   - Browse jasa-jasa tersedia
   - Klik salah satu card jasa atau "Lihat Detail"

6. **Detail Jasa** (http://localhost:5173/customer/detail-jasa/1)
   - Lihat detail jasa, portfolio, dan ulasan
   - Klik "Pesan Sekarang"

7. **Pesan Jasa** (http://localhost:5173/customer/pesan-jasa/1)
   - Isi deskripsi kebutuhan dan deadline
   - Klik "Lanjut ke Pembayaran"

8. **Pembayaran** (http://localhost:5173/customer/pembayaran/1)
   - Pilih metode pembayaran
   - Klik "Bayar Sekarang"

9. **Status Pesanan** (http://localhost:5173/customer/status-pesanan)
   - Lihat semua pesanan
   - Klik salah satu pesanan

10. **Konfirmasi Hasil** (http://localhost:5173/customer/konfirmasi-hasil/1)
    - Lihat file hasil
    - Klik "Terima & Konfirmasi"
    - Isi review dan rating

---

### Testing Flow Freelancer:

1. Akses: **http://localhost:5173/pilih-login**
   - Klik "Login sebagai Freelancer"

2. **Login Freelancer**
   - Isi form login
   - Masuk ke dashboard freelancer

3. **Freelancer Dashboard**
   - Klik "+ Tambah Jasa Baru"

4. **Tambah Jasa**
   - Isi form jasa baru
   - Klik "Tambah Jasa"

5. **Kelola Jasa**
   - Edit atau hapus jasa
   - Lihat status jasa

6. **Pesanan Masuk**
   - Lihat pesanan dari customer
   - Klik "Upload Hasil"

7. **Upload Hasil**
   - Upload file hasil pekerjaan
   - Isi catatan
   - Submit

8. **Saldo**
   - Lihat total saldo
   - Lihat riwayat transaksi

---

### Testing Flow Admin:

1. **Akses Langsung**: http://localhost:5173/admin/dashboard

2. **Admin Dashboard**
   - Lihat statistik platform
   - Klik menu navigasi

3. **Kelola User**
   - Lihat semua user
   - Suspend/Aktifkan user

4. **Verifikasi Jasa**
   - Lihat jasa yang perlu diverifikasi
   - Approve atau reject jasa

5. **Monitoring Transaksi**
   - Lihat semua transaksi
   - Monitor fee platform

---

## 🔗 Direct Links untuk Testing

### Landing & Auth:
- Landing: http://localhost:5173
- Pilih Login: http://localhost:5173/pilih-login
- Registrasi: http://localhost:5173/registrasi

### Customer (Direct Access):
- Dashboard: http://localhost:5173/customer/dashboard
- Cari Jasa: http://localhost:5173/customer/cari-jasa
- Status Pesanan: http://localhost:5173/customer/status-pesanan

### Freelancer (Direct Access):
- Dashboard: http://localhost:5173/freelancer/dashboard
- Kelola Jasa: http://localhost:5173/freelancer/kelola-jasa
- Pesanan Masuk: http://localhost:5173/freelancer/pesanan-masuk
- Saldo: http://localhost:5173/freelancer/saldo

### Admin (Direct Access):
- Dashboard: http://localhost:5173/admin/dashboard
- Kelola User: http://localhost:5173/admin/kelola-user
- Verifikasi Jasa: http://localhost:5173/admin/verifikasi-jasa
- Monitoring: http://localhost:5173/admin/monitoring-transaksi

---

## ✅ Checklist Testing

### Navigasi:
- [ ] Landing page → Pilih Login
- [ ] Login → Dashboard
- [ ] Semua menu navbar berfungsi
- [ ] Tombol "Kembali" di setiap halaman
- [ ] Logout mengarah ke landing page

### Customer Flow:
- [ ] Dashboard menampilkan statistik
- [ ] Browse dan search jasa
- [ ] Detail jasa lengkap dengan portfolio
- [ ] Form pesan jasa dapat diisi
- [ ] Pembayaran dengan pilihan metode
- [ ] Status pesanan terupdate
- [ ] Konfirmasi hasil dan review

### Freelancer Flow:
- [ ] Dashboard menampilkan statistik
- [ ] Tambah jasa baru
- [ ] Edit dan hapus jasa
- [ ] Kelola profil
- [ ] Lihat pesanan masuk
- [ ] Upload hasil pekerjaan
- [ ] Lihat saldo dan transaksi

### Admin Flow:
- [ ] Dashboard monitoring lengkap
- [ ] Kelola user (suspend/aktifkan)
- [ ] Verifikasi jasa (approve/reject)
- [ ] Monitoring semua transaksi

---

## 🎨 UI/UX yang Sudah Diimplementasi

✅ Color scheme sesuai mockup (Purple gradient)
✅ Responsive design
✅ Card-based layout
✅ Status badges dengan warna berbeda
✅ Hover effects pada button dan card
✅ Clean navigation bar
✅ Form styling konsisten
✅ Grid layout untuk menampilkan data

---

## 📝 Catatan Penting

1. **Semua data adalah DUMMY** - belum ada koneksi ke backend
2. **Login tidak memvalidasi** - langsung masuk ke dashboard
3. **Upload file** - hanya placeholder, file belum disimpan
4. **Pembayaran** - hanya simulasi, tidak ada payment gateway
5. **Notifikasi** - belum diimplementasikan
6. **Search** - belum berfungsi filtering, hanya UI
7. **Email/Password** - tidak ada validasi real

---

## 🚧 Ready untuk Development Selanjutnya

Project ini siap untuk:
- Integrasi dengan REST API / GraphQL
- Implementasi state management (Redux/Context)
- Autentikasi real (JWT, OAuth)
- Upload file ke cloud storage
- Payment gateway integration
- Real-time notifications (WebSocket)
- Database integration

---

**Happy Testing! 🎉**
