import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function PesanJasa() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    deskripsiKebutuhan: '',
    deadline: '',
    catatan: ''
  });

  const handleLogout = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/customer/pembayaran/${id}`);
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
        <h2 className="mb-20">Pesan Jasa</h2>

        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="card">
            <h3 style={{color: 'var(--text-dark)'}}>Detail Pesanan</h3>
            <div style={{marginTop: '16px', padding: '16px', background: 'var(--bg-light)', borderRadius: '8px', border: '1px solid var(--border-color)'}}>
              <h4 style={{color: 'var(--text-dark)'}}>Design Logo Profesional</h4>
              <p style={{color: 'var(--text-light)'}}>oleh John Doe</p>
              <p style={{marginTop: '12px', fontSize: '20px', fontWeight: '600', color: 'var(--primary-color)'}}>Rp 500.000</p>
            </div>
          </div>

          <div className="card">
            <h3 style={{color: 'var(--text-dark)'}}>Informasi Pesanan</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Deskripsi Kebutuhan</label>
                <textarea
                  rows="4"
                  placeholder="Jelaskan detail kebutuhan Anda..."
                  value={formData.deskripsiKebutuhan}
                  onChange={(e) => setFormData({...formData, deskripsiKebutuhan: e.target.value})}
                  required
                ></textarea>
              </div>

              <div className="input-group">
                <label>Deadline</label>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({...formData, deadline: e.target.value})}
                  required
                />
              </div>

              <div className="input-group">
                <label>Catatan Tambahan (Opsional)</label>
                <textarea
                  rows="3"
                  placeholder="Catatan tambahan untuk freelancer..."
                  value={formData.catatan}
                  onChange={(e) => setFormData({...formData, catatan: e.target.value})}
                ></textarea>
              </div>

              <div className="flex gap-10">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => navigate(`/customer/detail-jasa/${id}`)}
                >
                  Kembali
                </button>
                <button type="submit" className="btn btn-primary">
                  Lanjut ke Pembayaran
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PesanJasa;
