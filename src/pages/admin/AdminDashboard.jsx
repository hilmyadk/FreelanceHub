import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
          <h1>FreelanceHub - Admin</h1>
          <div className="navbar-menu">
            <button onClick={() => navigate('/admin/dashboard')}>Dashboard</button>
            <button onClick={() => navigate('/admin/kelola-user')}>Kelola User</button>
            <button onClick={() => navigate('/admin/verifikasi-jasa')}>Verifikasi Jasa</button>
            <button onClick={() => navigate('/admin/monitoring-transaksi')}>Monitoring</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="dashboard-header">
          <h2>Dashboard Admin</h2>
          <p>Kelola dan monitor platform FreelanceHub</p>
        </div>

        <div className="grid-3">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <h3>Total User</h3>
              <p className="stat-number">1.234</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💼</div>
            <div className="stat-content">
              <h3>Total Jasa</h3>
              <p className="stat-number">456</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-content">
              <h3>Total Transaksi</h3>
              <p className="stat-number">2.345</p>
            </div>
          </div>
        </div>

        <div className="grid-2">
          <div className="card">
            <h3>Statistik Bulan Ini</h3>
            <div style={{marginTop: '20px'}}>
              <div className="flex-between" style={{marginBottom: '12px'}}>
                <span>User Baru</span>
                <strong style={{color: 'var(--success-color)'}}>+87</strong>
              </div>
              <div className="flex-between" style={{marginBottom: '12px'}}>
                <span>Jasa Baru</span>
                <strong style={{color: 'var(--success-color)'}}>+34</strong>
              </div>
              <div className="flex-between" style={{marginBottom: '12px'}}>
                <span>Transaksi</span>
                <strong style={{color: 'var(--success-color)'}}>+156</strong>
              </div>
              <div className="flex-between">
                <span>Revenue</span>
                <strong style={{color: 'var(--primary-color)'}}>Rp 45.600.000</strong>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Perlu Perhatian</h3>
            <div style={{marginTop: '20px'}}>
              <div className="flex-between" style={{marginBottom: '12px', padding: '8px', background: 'var(--bg-light)', borderRadius: '6px'}}>
                <span>Jasa Menunggu Verifikasi</span>
                <span className="status-badge status-pending">12</span>
              </div>
              <div className="flex-between" style={{marginBottom: '12px', padding: '8px', background: 'var(--bg-light)', borderRadius: '6px'}}>
                <span>Laporan User</span>
                <span className="status-badge status-pending">5</span>
              </div>
              <div className="flex-between" style={{padding: '8px', background: 'var(--bg-light)', borderRadius: '6px'}}>
                <span>Dispute Transaksi</span>
                <span className="status-badge status-pending">3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Aktivitas Terbaru</h3>
          <div style={{marginTop: '16px'}}>
            <div style={{padding: '12px', background: 'var(--bg-light)', borderRadius: '8px', marginBottom: '8px'}}>
              <p><strong>User baru:</strong> john.doe@email.com mendaftar sebagai Freelancer</p>
              <p style={{fontSize: '12px', color: 'var(--text-light)', marginTop: '4px'}}>5 menit yang lalu</p>
            </div>
            <div style={{padding: '12px', background: 'var(--bg-light)', borderRadius: '8px', marginBottom: '8px'}}>
              <p><strong>Jasa baru:</strong> "Website E-commerce" menunggu verifikasi</p>
              <p style={{fontSize: '12px', color: 'var(--text-light)', marginTop: '4px'}}>15 menit yang lalu</p>
            </div>
            <div style={{padding: '12px', background: 'var(--bg-light)', borderRadius: '8px'}}>
              <p><strong>Transaksi:</strong> Pembayaran Rp 2.500.000 berhasil diproses</p>
              <p style={{fontSize: '12px', color: 'var(--text-light)', marginTop: '4px'}}>23 menit yang lalu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
