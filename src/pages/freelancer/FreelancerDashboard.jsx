import { useNavigate } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function FreelancerDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
          <h1>FreelanceHub - Freelancer</h1>
          <div className="navbar-menu">
            <button onClick={() => navigate('/freelancer/dashboard')}>Dashboard</button>
            <button onClick={() => navigate('/freelancer/kelola-jasa')}>Kelola Jasa</button>
            <button onClick={() => navigate('/freelancer/pesanan-masuk')}>Pesanan</button>
            <button onClick={() => navigate('/freelancer/saldo')}>Saldo</button>
            <button onClick={handleLogout}>Logout</button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="dashboard-header">
          <h2>Dashboard Freelancer</h2>
          <p>Selamat datang kembali!</p>
        </div>

        <div className="grid-3">
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-content">
              <h3>Pesanan Aktif</h3>
              <p className="stat-number">5</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💼</div>
            <div className="stat-content">
              <h3>Total Jasa</h3>
              <p className="stat-number">8</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h3>Saldo</h3>
              <p className="stat-number">Rp 5.2jt</p>
            </div>
          </div>
        </div>

        <div className="dashboard-actions">
          <div className="card">
            <h3>Menu Cepat</h3>
            <div className="action-buttons">
              <button 
                className="btn btn-primary" 
                onClick={() => navigate('/freelancer/kelola-jasa/tambah')}
              >
                + Tambah Jasa Baru
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => navigate('/freelancer/pesanan-masuk')}
              >
                📋 Lihat Pesanan
              </button>
              <button 
                className="btn btn-accent" 
                onClick={() => navigate('/freelancer/kelola-profil')}
              >
                👤 Edit Profil
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
                <p>Customer: PT. Maju Jaya</p>
              </div>
              <span className="status-badge status-progress">Sedang Dikerjakan</span>
            </div>
            <div className="order-item">
              <div className="order-info">
                <h4>Website Landing Page</h4>
                <p>Customer: Startup ABC</p>
              </div>
              <span className="status-badge status-pending">Pesanan Baru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreelancerDashboard;
