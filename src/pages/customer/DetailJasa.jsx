import { useNavigate, useParams } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function DetailJasa() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleLogout = () => {
    navigate('/');
  };

  const jasa = {
    id: id,
    judul: 'Design Logo Profesional',
    freelancer: 'John Doe',
    harga: 'Rp 500.000',
    rating: '4.8',
    deskripsi: 'Saya akan membuat design logo profesional untuk bisnis Anda dengan revisi unlimited hingga Anda puas dengan hasilnya.',
    waktuPengerjaan: '3-5 hari',
    portfolio: ['Portfolio 1', 'Portfolio 2', 'Portfolio 3'],
    ulasan: [
      { nama: 'Customer A', rating: 5, komentar: 'Hasilnya sangat memuaskan!' },
      { nama: 'Customer B', rating: 4, komentar: 'Bagus, responsif, dan profesional' }
    ]
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
        <button className="btn btn-secondary mb-20" onClick={() => navigate('/customer/cari-jasa')}>
          Kembali
        </button>

        <div className="grid-2">
          <div>
            <div className="card">
              <div style={{background: 'linear-gradient(135deg, #6b5dd3, #8b7dd8)', height: '300px', borderRadius: '8px', marginBottom: '16px'}}></div>
              <h2>{jasa.judul}</h2>
              <p style={{color: 'var(--text-light)', marginTop: '8px'}}>oleh {jasa.freelancer}</p>
              <div className="flex-between mt-20">
                <span style={{fontSize: '24px', fontWeight: '700', color: 'var(--primary-color)'}}>{jasa.harga}</span>
                <span style={{fontSize: '18px'}}>⭐ {jasa.rating}</span>
              </div>
            </div>

            <div className="card">
              <h3>Portfolio</h3>
              <div className="grid-3" style={{marginTop: '16px'}}>
                {jasa.portfolio.map((item, index) => (
                  <div key={index} style={{background: 'var(--bg-light)', height: '100px', borderRadius: '8px'}}></div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <h3>Deskripsi Jasa</h3>
              <p style={{marginTop: '12px', lineHeight: '1.8'}}>{jasa.deskripsi}</p>
              
              <div style={{marginTop: '24px'}}>
                <h4>Waktu Pengerjaan</h4>
                <p style={{color: 'var(--text-light)'}}>{jasa.waktuPengerjaan}</p>
              </div>

              <button 
                className="btn btn-primary mt-20" 
                style={{width: '100%'}}
                onClick={() => navigate(`/customer/pesan-jasa/${id}`)}
              >
                Pesan Sekarang
              </button>
            </div>

            <div className="card">
              <h3>Ulasan</h3>
              {jasa.ulasan.map((ulasan, index) => (
                <div key={index} style={{marginTop: '16px', padding: '12px', background: 'var(--bg-light)', borderRadius: '8px'}}>
                  <div className="flex-between mb-20">
                    <strong>{ulasan.nama}</strong>
                    <span>⭐ {ulasan.rating}</span>
                  </div>
                  <p style={{color: 'var(--text-light)'}}>{ulasan.komentar}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailJasa;
