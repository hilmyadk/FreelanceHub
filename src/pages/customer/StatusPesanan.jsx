import { useNavigate } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function StatusPesanan() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const pesananList = [
    { 
      id: 1, 
      judul: 'Design Logo Profesional', 
      freelancer: 'John Doe', 
      status: 'progress', 
      harga: 'Rp 500.000',
      tanggal: '20 Jan 2026' 
    },
    { 
      id: 2, 
      judul: 'Website Company Profile', 
      freelancer: 'Jane Smith', 
      status: 'pending', 
      harga: 'Rp 2.500.000',
      tanggal: '22 Jan 2026' 
    },
    { 
      id: 3, 
      judul: 'Video Editing', 
      freelancer: 'Mike Johnson', 
      status: 'completed', 
      harga: 'Rp 750.000',
      tanggal: '15 Jan 2026' 
    },
  ];

  const getStatusBadge = (status) => {
    if (status === 'pending') return 'status-pending';
    if (status === 'progress') return 'status-progress';
    if (status === 'completed') return 'status-completed';
    return 'status-pending';
  };

  const getStatusText = (status) => {
    if (status === 'pending') return 'Menunggu Konfirmasi';
    if (status === 'progress') return 'Dalam Proses';
    if (status === 'completed') return 'Selesai';
    return status;
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
        <div className="flex-between mb-20">
          <h2>Status Pesanan</h2>
          <button className="btn btn-primary" onClick={() => navigate('/customer/cari-jasa')}>
            + Pesan Jasa Baru
          </button>
        </div>

        <div className="card">
          {pesananList.map((pesanan) => (
            <div 
              key={pesanan.id} 
              className="order-item"
              style={{cursor: 'pointer'}}
              onClick={() => navigate(`/customer/konfirmasi-hasil/${pesanan.id}`)}
            >
              <div className="order-info">
                <h4>{pesanan.judul}</h4>
                <p>Freelancer: {pesanan.freelancer}</p>
                <p style={{fontSize: '12px', marginTop: '4px'}}>Tanggal: {pesanan.tanggal}</p>
              </div>
              <div style={{textAlign: 'right'}}>
                <span className={`status-badge ${getStatusBadge(pesanan.status)}`}>
                  {getStatusText(pesanan.status)}
                </span>
                <p style={{marginTop: '8px', fontWeight: '600', color: 'var(--primary-color)'}}>{pesanan.harga}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-secondary mt-20" onClick={() => navigate('/customer/dashboard')}>
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
}

export default StatusPesanan;
