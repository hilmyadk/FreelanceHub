import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function UploadHasil() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    catatan: '',
    file: null
  });

  const handleLogout = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/freelancer/pesanan-masuk');
  };

  const pesanan = {
    id: id,
    judul: 'Website Landing Page',
    customer: 'Startup ABC',
    harga: 'Rp 2.500.000',
    deadline: '30 Jan 2026',
    deskripsi: 'Membuat landing page untuk produk SaaS dengan design modern dan responsif'
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
        <button className="btn btn-secondary mb-20" onClick={() => navigate('/freelancer/pesanan-masuk')}>
          Kembali
        </button>

        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="card">
            <h2>Upload Hasil Pekerjaan</h2>
            
            <div style={{marginTop: '24px', padding: '16px', background: 'var(--bg-light)', borderRadius: '8px'}}>
              <h3>{pesanan.judul}</h3>
              <p style={{color: 'var(--text-light)', marginTop: '4px'}}>Customer: {pesanan.customer}</p>
              <p style={{marginTop: '8px'}}>{pesanan.deskripsi}</p>
              <div className="flex-between" style={{marginTop: '12px'}}>
                <span style={{fontWeight: '600', color: 'var(--primary-color)'}}>{pesanan.harga}</span>
                <span style={{fontSize: '14px'}}>Deadline: {pesanan.deadline}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{marginTop: '24px'}}>
              <div className="input-group">
                <label>Upload File Hasil</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFormData({...formData, file: e.target.files})}
                  required
                />
                <p style={{fontSize: '12px', color: 'var(--text-light)', marginTop: '4px'}}>
                  Anda dapat mengupload beberapa file sekaligus
                </p>
              </div>

              <div className="input-group">
                <label>Catatan untuk Customer</label>
                <textarea
                  rows="4"
                  value={formData.catatan}
                  onChange={(e) => setFormData({...formData, catatan: e.target.value})}
                  placeholder="Jelaskan detail hasil pekerjaan atau instruksi penggunaan..."
                  required
                ></textarea>
              </div>

              <div className="flex gap-10 mt-20">
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/freelancer/pesanan-masuk')}>
                  Batal
                </button>
                <button type="submit" className="btn btn-success">
                  Upload Hasil
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadHasil;
