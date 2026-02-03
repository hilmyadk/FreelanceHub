import { useNavigate } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function CustomerDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
          <h1>FreelanceHub - Customer</h1>
          <div className="navbar-menu">
            <button onClick={() => navigate('/customer/dashboard')}>Dashboard</button>
            <button onClick={() => navigate('/customer/status-pesanan')}>Pesanan Saya</button>
            <button onClick={() => navigate('/customer/profil')}>Profil</button>
            <button onClick={handleLogout}>Logout</button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="dashboard-header">
          <h2>Dashboard Customer</h2>
          <p>Selamat datang di FreelanceHub</p>
        </div>

        <div className="grid-3">
          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <div className="stat-content">
              <h3>Pesanan Aktif</h3>
              <p className="stat-number">3</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <h3>Selesai</h3>
              <p className="stat-number">12</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <h3>Menunggu</h3>
              <p className="stat-number">1</p>
            </div>
          </div>
        </div>

        <div className="dashboard-actions">
          <div className="card">
            <h3>Apa yang ingin Anda lakukan?</h3>
            <div className="action-buttons">
              <button 
                className="btn btn-primary" 
                onClick={() => navigate('/customer/cari-jasa')}
              >
                🔍 Cari Jasa
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => navigate('/customer/status-pesanan')}
              >
                📦 Lihat Pesanan
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Pesanan Terbaru</h3>
          <div className="order-list">
            <div className="order-item">
              <div className="order-info">
                <h4>Design Logo Perusahaan</h4>
                <p>Freelancer: John Doe</p>
              </div>
              <span className="status-badge status-progress">Dalam Proses</span>
            </div>
            <div className="order-item">
              <div className="order-info">
                <h4>Website Company Profile</h4>
                <p>Freelancer: Jane Smith</p>
              </div>
              <span className="status-badge status-pending">Menunggu Konfirmasi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
