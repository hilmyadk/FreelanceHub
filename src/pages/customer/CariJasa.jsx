import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function CariJasa() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const jasaList = [
    { id: 1, judul: 'Design Logo Profesional', freelancer: 'John Doe', harga: 'Rp 500.000', rating: '4.8', kategori: 'Design' },
    { id: 2, judul: 'Website Company Profile', freelancer: 'Jane Smith', harga: 'Rp 2.500.000', rating: '4.9', kategori: 'Web Development' },
    { id: 3, judul: 'Video Editing Profesional', freelancer: 'Mike Johnson', harga: 'Rp 750.000', rating: '4.7', kategori: 'Video' },
    { id: 4, judul: 'Content Writing SEO', freelancer: 'Sarah Wilson', harga: 'Rp 300.000', rating: '4.6', kategori: 'Writing' },
    { id: 5, judul: 'Mobile App Development', freelancer: 'David Lee', harga: 'Rp 5.000.000', rating: '5.0', kategori: 'Mobile Development' },
    { id: 6, judul: 'Social Media Management', freelancer: 'Emma Brown', harga: 'Rp 1.000.000', rating: '4.8', kategori: 'Marketing' },
  ];

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
        <h2 className="mb-20">Cari Jasa</h2>

        <div className="card">
          <div className="input-group">
            <input
              type="text"
              placeholder="Cari jasa yang Anda butuhkan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid-3">
          {jasaList.map((jasa) => (
            <div className="card" key={jasa.id} style={{cursor: 'pointer'}} onClick={() => navigate(`/customer/detail-jasa/${jasa.id}`)}>
              <div style={{background: 'linear-gradient(135deg, #6b5dd3, #8b7dd8)', height: '150px', borderRadius: '8px', marginBottom: '16px'}}></div>
              <h3 style={{color: 'var(--text-dark)'}}>{jasa.judul}</h3>
              <p style={{color: 'var(--text-light)', marginBottom: '8px'}}>oleh {jasa.freelancer}</p>
              <div className="flex-between" style={{marginTop: '12px'}}>
                <span style={{fontWeight: '600', color: 'var(--primary-color)'}}>{jasa.harga}</span>
                <span style={{color: 'var(--text-dark)'}}>⭐ {jasa.rating}</span>
              </div>
              <button className="btn btn-primary mt-20" style={{width: '100%'}}>
                Lihat Detail
              </button>
            </div>
          ))}
        </div>

        <button className="btn btn-secondary mt-20" onClick={() => navigate('/customer/dashboard')}>
          Kembali
        </button>
      </div>
    </div>
  );
}

export default CariJasa;
