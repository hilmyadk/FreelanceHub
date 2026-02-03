import { useNavigate } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function PesananMasuk() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const pesananList = [
    { 
      id: 1, 
      judul: 'Design Logo Perusahaan', 
      customer: 'PT. Maju Jaya', 
      status: 'pending', 
      harga: 'Rp 500.000',
      deadline: '28 Jan 2026' 
    },
    { 
      id: 2, 
      judul: 'Website Landing Page', 
      customer: 'Startup ABC', 
      status: 'progress', 
      harga: 'Rp 2.500.000',
      deadline: '30 Jan 2026' 
    },
    { 
      id: 3, 
      judul: 'Video Editing', 
      customer: 'John Smith', 
      status: 'completed', 
      harga: 'Rp 750.000',
      deadline: '22 Jan 2026' 
    },
  ];

  const getStatusBadge = (status) => {
    if (status === 'pending') return 'status-pending';
    if (status === 'progress') return 'status-progress';
    if (status === 'completed') return 'status-completed';
    return 'status-pending';
  };

  const getStatusText = (status) => {
    if (status === 'pending') return 'Pesanan Baru';
    if (status === 'progress') return 'Sedang Dikerjakan';
    if (status === 'completed') return 'Selesai';
    return status;
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
        <h2 className="mb-20">Pesanan Masuk</h2>

        <div className="card">
          {pesananList.map((pesanan) => (
            <div 
              key={pesanan.id} 
              className="order-item"
              style={{cursor: 'pointer'}}
              onClick={() => navigate(`/freelancer/upload-hasil/${pesanan.id}`)}
            >
              <div className="order-info">
                <h4>{pesanan.judul}</h4>
                <p>Customer: {pesanan.customer}</p>
                <p style={{fontSize: '12px', marginTop: '4px'}}>Deadline: {pesanan.deadline}</p>
              </div>
              <div style={{textAlign: 'right'}}>
                <span className={`status-badge ${getStatusBadge(pesanan.status)}`}>
                  {getStatusText(pesanan.status)}
                </span>
                <p style={{marginTop: '8px', fontWeight: '600', color: 'var(--primary-color)'}}>{pesanan.harga}</p>
                {pesanan.status === 'progress' && (
                  <button 
                    className="btn btn-accent mt-20" 
                    style={{padding: '6px 12px', fontSize: '14px'}}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/freelancer/upload-hasil/${pesanan.id}`);
                    }}
                  >
                    Upload Hasil
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-secondary mt-20" onClick={() => navigate('/freelancer/dashboard')}>
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
}

export default PesananMasuk;
