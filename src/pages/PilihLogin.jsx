import { useNavigate } from 'react-router-dom';
import './PilihLogin.css';
import ThemeToggle from '../components/ThemeToggle';

function PilihLogin() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  return (
    <div className="pilih-login-page">
      {/* Theme Toggle */}
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>

      <div className="pilih-login-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="pilih-login-container">
        <div className="header-badge">🔐 Akses Akun</div>
        <h1>Pilih Jenis Login</h1>
        <p className="subtitle">Silakan pilih jenis akun Anda untuk melanjutkan</p>

        <div className="login-options">
          <div className="login-card customer-card" onClick={() => navigate('/login-customer')}>
            <div className="card-glow"></div>
            <div className="login-icon-wrapper">
              <div className="login-icon">👤</div>
            </div>
            <h2>Customer</h2>
            <p>Saya ingin mencari dan memesan jasa freelancer</p>
            <button className="btn btn-card">Login sebagai Customer</button>
          </div>

          <div className="login-card freelancer-card" onClick={() => navigate('/login-freelancer')}>
            <div className="card-glow"></div>
            <div className="login-icon-wrapper">
              <div className="login-icon">💼</div>
            </div>
            <h2>Freelancer</h2>
            <p>Saya ingin menawarkan jasa dan menerima pesanan</p>
            <button className="btn btn-card">Login sebagai Freelancer</button>
          </div>
        </div>

        <div className="register-link">
          <p>Belum punya akun? <a onClick={() => navigate('/registrasi')}>Daftar di sini</a></p>
        </div>

        <button className="btn btn-outline mt-20" onClick={handleBackToHome}>
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}

export default PilihLogin;
