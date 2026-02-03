import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function TambahJasa() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    judul: '',
    kategori: '',
    deskripsi: '',
    harga: '',
    waktuPengerjaan: '',
    portofolio: ''
  });

  const handleLogout = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/freelancer/kelola-jasa');
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
        <h2 className="mb-20">Tambah Jasa Baru</h2>

        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Judul Jasa</label>
                <input
                  type="text"
                  value={formData.judul}
                  onChange={(e) => setFormData({...formData, judul: e.target.value})}
                  placeholder="Contoh: Design Logo Profesional"
                  required
                />
              </div>

              <div className="input-group">
                <label>Kategori</label>
                <select
                  value={formData.kategori}
                  onChange={(e) => setFormData({...formData, kategori: e.target.value})}
                  required
                >
                  <option value="">Pilih Kategori</option>
                  <option value="design">Design</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="writing">Content Writing</option>
                  <option value="video">Video Editing</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
              </div>

              <div className="input-group">
                <label>Deskripsi Jasa</label>
                <textarea
                  rows="5"
                  value={formData.deskripsi}
                  onChange={(e) => setFormData({...formData, deskripsi: e.target.value})}
                  placeholder="Jelaskan detail tentang jasa yang Anda tawarkan..."
                  required
                ></textarea>
              </div>

              <div className="grid-2">
                <div className="input-group">
                  <label>Harga (Rp)</label>
                  <input
                    type="number"
                    value={formData.harga}
                    onChange={(e) => setFormData({...formData, harga: e.target.value})}
                    placeholder="500000"
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Waktu Pengerjaan</label>
                  <input
                    type="text"
                    value={formData.waktuPengerjaan}
                    onChange={(e) => setFormData({...formData, waktuPengerjaan: e.target.value})}
                    placeholder="3-5 hari"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Upload Gambar/Portfolio</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFormData({...formData, portofolio: e.target.files[0]})}
                />
                <p style={{fontSize: '12px', color: 'var(--text-light)', marginTop: '4px'}}>
                  Upload gambar portfolio untuk jasa ini (opsional)
                </p>
              </div>

              <div className="flex gap-10 mt-20">
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/freelancer/kelola-jasa')}>
                  Batal
                </button>
                <button type="submit" className="btn btn-primary">
                  Tambah Jasa
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TambahJasa;
