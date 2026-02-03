import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';
import { userAPI } from '../../services/api';

function KelolaProfil() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    skills: '',
    portfolio: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await userAPI.getProfile();
      if (response.data.success) {
        const user = response.data.user;
        setFormData({
          name: user.name || '',
          email: user.email || '',
          phone: user.phone || '',
          description: user.description || '',
          skills: Array.isArray(user.skills) ? user.skills.join(', ') : (user.skills || ''),
          portfolio: user.portfolio || ''
        });
      }
    } catch (err) {
      console.error('Error fetching profile:', err);
      alert('Gagal memuat data profil');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert skills string to array
      const dataToSend = {
        name: formData.name,
        phone: formData.phone,
        skills: formData.skills.split(',').map(s => s.trim()).filter(s => s),
        portfolio: formData.portfolio
      };
      
      const response = await userAPI.updateProfile(dataToSend);
      if (response.data.success) {
        alert('Profil berhasil diperbarui!');
        navigate('/freelancer/dashboard');
      }
    } catch (err) {
      console.error('Error updating profile:', err);
      alert(err.response?.data?.message || 'Gagal menyimpan perubahan');
    }
  };

  if (loading) return <div className="container" style={{textAlign: 'center', marginTop: '50px'}}>Loading...</div>;

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
        <h2 className="mb-20">Kelola Profil</h2>

        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  disabled
                  style={{backgroundColor: '#f5f5f5', cursor: 'not-allowed'}}
                  title="Email tidak dapat diubah"
                />
              </div>

              <div className="input-group">
                <label>Nomor Telepon</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <div className="input-group">
                <label>Deskripsi Profil</label>
                <textarea
                  rows="4"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Ceritakan tentang keahlian dan pengalaman Anda..."
                ></textarea>
              </div>

              <div className="input-group">
                <label>Keahlian (pisahkan dengan koma)</label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({...formData, skills: e.target.value})}
                  placeholder="Contoh: Design, Web Development, Content Writing"
                  required
                />
              </div>

              <div className="input-group">
                <label>Link Portfolio (Opsional)</label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                  placeholder="https://..."
                />
              </div>

              <div className="flex gap-10">
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/freelancer/dashboard')}>
                  Batal
                </button>
                <button type="submit" className="btn btn-primary">
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KelolaProfil;
