import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function KonfirmasiHasil() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');

  const handleLogout = () => {
    navigate('/');
  };

  const pesanan = {
    id: id,
    judul: 'Design Logo Profesional',
    freelancer: 'John Doe',
    harga: 'Rp 500.000',
    status: 'completed',
    tanggalSelesai: '23 Jan 2026',
    fileHasil: ['logo_final_v1.png', 'logo_final_v2.png', 'logo_source.ai']
  };

  const handleKonfirmasi = () => {
    setShowReviewForm(true);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    navigate('/customer/status-pesanan');
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
        <button className="btn btn-secondary mb-20" onClick={() => navigate('/customer/status-pesanan')}>
          Kembali
        </button>

        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="card">
            <h2 style={{color: 'var(--text-dark)'}}>Konfirmasi Hasil Pekerjaan</h2>
            
            <div style={{marginTop: '24px', padding: '16px', background: 'var(--bg-light)', borderRadius: '8px', border: '1px solid var(--border-color)'}}>
              <h3 style={{color: 'var(--text-dark)'}}>{pesanan.judul}</h3>
              <p style={{color: 'var(--text-light)', marginTop: '4px'}}>Freelancer: {pesanan.freelancer}</p>
              <p style={{marginTop: '8px', fontWeight: '600', color: 'var(--primary-color)'}}>{pesanan.harga}</p>
              <p style={{marginTop: '8px', fontSize: '14px', color: 'var(--text-secondary)'}}>Selesai: {pesanan.tanggalSelesai}</p>
            </div>

            <div style={{marginTop: '24px'}}>
              <h3 style={{color: 'var(--text-dark)'}}>File Hasil</h3>
              <div style={{marginTop: '12px'}}>
                {pesanan.fileHasil.map((file, index) => (
                  <div key={index} style={{padding: '12px', background: 'var(--bg-light)', borderRadius: '8px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid var(--border-color)'}}>
                    <span style={{color: 'var(--text-dark)'}}>
📄 {file}</span>
                    <button className="btn btn-accent" style={{padding: '6px 12px', fontSize: '14px'}}>
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {!showReviewForm ? (
              <div style={{marginTop: '32px', display: 'flex', gap: '12px'}}>
                <button className="btn btn-danger" onClick={() => navigate('/customer/status-pesanan')}>
                  Minta Revisi
                </button>
                <button className="btn btn-success" onClick={handleKonfirmasi}>
                  Terima & Konfirmasi
                </button>
              </div>
            ) : (
              <div style={{marginTop: '32px'}}>
                <h3 style={{color: 'var(--text-dark)'}}>Berikan Review</h3>
                <form onSubmit={handleSubmitReview}>
                  <div className="input-group">
                    <label>Rating</label>
                    <select value={rating} onChange={(e) => setRating(e.target.value)}>
                      <option value="5">⭐⭐⭐⭐⭐ Sangat Baik</option>
                      <option value="4">⭐⭐⭐⭐ Baik</option>
                      <option value="3">⭐⭐⭐ Cukup</option>
                      <option value="2">⭐⭐ Kurang</option>
                      <option value="1">⭐ Buruk</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label>Review Anda</label>
                    <textarea
                      rows="4"
                      placeholder="Bagikan pengalaman Anda bekerja dengan freelancer ini..."
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                    Kirim Review
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KonfirmasiHasil;
