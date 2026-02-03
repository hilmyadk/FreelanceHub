import { useNavigate } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function Saldo() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const transaksiList = [
    { id: 1, judul: 'Design Logo Perusahaan', customer: 'PT. Maju Jaya', jumlah: 'Rp 500.000', tanggal: '23 Jan 2026', status: 'Berhasil' },
    { id: 2, judul: 'Video Editing', customer: 'John Smith', jumlah: 'Rp 750.000', tanggal: '22 Jan 2026', status: 'Berhasil' },
    { id: 3, judul: 'Website Company Profile', customer: 'PT. ABC', jumlah: 'Rp 2.500.000', tanggal: '20 Jan 2026', status: 'Berhasil' },
  ];

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
        <h2 className="mb-20">Saldo & Transaksi</h2>

        <div className="card" style={{textAlign: 'center', background: 'linear-gradient(135deg, #6b5dd3, #8b7dd8)', color: 'white'}}>
          <h3 style={{marginBottom: '8px', opacity: '0.9'}}>Total Saldo</h3>
          <p style={{fontSize: '48px', fontWeight: '700', marginBottom: '16px'}}>Rp 5.250.000</p>
          <button className="btn btn-success">
            Tarik Saldo
          </button>
        </div>

        <div className="grid-3">
          <div className="card">
            <h4>Bulan Ini</h4>
            <p style={{fontSize: '24px', fontWeight: '600', color: 'var(--primary-color)', marginTop: '8px'}}>Rp 3.750.000</p>
          </div>
          <div className="card">
            <h4>Total Transaksi</h4>
            <p style={{fontSize: '24px', fontWeight: '600', color: 'var(--primary-color)', marginTop: '8px'}}>32</p>
          </div>
          <div className="card">
            <h4>Pending</h4>
            <p style={{fontSize: '24px', fontWeight: '600', color: 'var(--warning-color)', marginTop: '8px'}}>Rp 1.500.000</p>
          </div>
        </div>

        <div className="card">
          <h3 className="mb-20">Riwayat Transaksi</h3>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{borderBottom: '2px solid var(--border-color)', textAlign: 'left'}}>
                <th style={{padding: '12px'}}>Tanggal</th>
                <th style={{padding: '12px'}}>Pesanan</th>
                <th style={{padding: '12px'}}>Customer</th>
                <th style={{padding: '12px'}}>Jumlah</th>
                <th style={{padding: '12px'}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {transaksiList.map((transaksi) => (
                <tr key={transaksi.id} style={{borderBottom: '1px solid var(--border-color)'}}>
                  <td style={{padding: '16px'}}>{transaksi.tanggal}</td>
                  <td style={{padding: '16px'}}>{transaksi.judul}</td>
                  <td style={{padding: '16px'}}>{transaksi.customer}</td>
                  <td style={{padding: '16px', fontWeight: '600', color: 'var(--success-color)'}}>{transaksi.jumlah}</td>
                  <td style={{padding: '16px'}}>
                    <span className="status-badge status-completed">{transaksi.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="btn btn-secondary mt-20" onClick={() => navigate('/freelancer/dashboard')}>
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
}

export default Saldo;
