import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Landing & Auth Pages
import LandingPage from './pages/LandingPage';
import PilihLogin from './pages/PilihLogin';
import LoginCustomer from './pages/LoginCustomer';
import LoginFreelancer from './pages/LoginFreelancer';
import Registrasi from './pages/Registrasi';
import NotFound from './pages/NotFound';

// Customer Pages
import CustomerDashboard from './pages/customer/CustomerDashboard';
import CustomerProfil from './pages/customer/CustomerProfil';
import CariJasa from './pages/customer/CariJasa';
import DetailJasa from './pages/customer/DetailJasa';
import PesanJasa from './pages/customer/PesanJasa';
import Pembayaran from './pages/customer/Pembayaran';
import StatusPesanan from './pages/customer/StatusPesanan';
import KonfirmasiHasil from './pages/customer/KonfirmasiHasil';

// Freelancer Pages
import FreelancerDashboard from './pages/freelancer/FreelancerDashboard';
import KelolaProfil from './pages/freelancer/KelolaProfil';
import KelolaJasa from './pages/freelancer/KelolaJasa';
import TambahJasa from './pages/freelancer/TambahJasa';
import EditJasa from './pages/freelancer/EditJasa';
import PesananMasuk from './pages/freelancer/PesananMasuk';
import UploadHasil from './pages/freelancer/UploadHasil';
import Saldo from './pages/freelancer/Saldo';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import KelolaUser from './pages/admin/KelolaUser';
import VerifikasiJasa from './pages/admin/VerifikasiJasa';
import MonitoringTransaksi from './pages/admin/MonitoringTransaksi';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing & Auth Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/pilih-login" element={<PilihLogin />} />
        <Route path="/login-customer" element={<LoginCustomer />} />
        <Route path="/login-freelancer" element={<LoginFreelancer />} />
        <Route path="/registrasi" element={<Registrasi />} />

        {/* Customer Routes */}
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/profil" element={<CustomerProfil />} />
        <Route path="/customer/cari-jasa" element={<CariJasa />} />
        <Route path="/customer/detail-jasa/:id" element={<DetailJasa />} />
        <Route path="/customer/pesan-jasa/:id" element={<PesanJasa />} />
        <Route path="/customer/pembayaran/:id" element={<Pembayaran />} />
        <Route path="/customer/status-pesanan" element={<StatusPesanan />} />
        <Route path="/customer/konfirmasi-hasil/:id" element={<KonfirmasiHasil />} />

        {/* Freelancer Routes */}
        <Route path="/freelancer/dashboard" element={<FreelancerDashboard />} />
        <Route path="/freelancer/kelola-profil" element={<KelolaProfil />} />
        <Route path="/freelancer/kelola-jasa" element={<KelolaJasa />} />
        <Route path="/freelancer/kelola-jasa/tambah" element={<TambahJasa />} />
        <Route path="/freelancer/kelola-jasa/edit/:id" element={<EditJasa />} />
        <Route path="/freelancer/pesanan-masuk" element={<PesananMasuk />} />
        <Route path="/freelancer/upload-hasil/:id" element={<UploadHasil />} />
        <Route path="/freelancer/saldo" element={<Saldo />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/kelola-user" element={<KelolaUser />} />
        <Route path="/admin/verifikasi-jasa" element={<VerifikasiJasa />} />
        <Route path="/admin/monitoring-transaksi" element={<MonitoringTransaksi />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

