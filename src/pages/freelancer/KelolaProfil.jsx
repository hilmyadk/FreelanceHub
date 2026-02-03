import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';
import { userAPI } from '../../services/api';

function KelolaProfil() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
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
        portfolio: formData.portfolio,
        description: formData.description
      };
      
      const response = await userAPI.updateProfile(dataToSend);
      if (response.data.success) {
        setIsEditing(false);
        alert('Profil berhasil diperbarui!');
        fetchProfile(); // Refresh data
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
        <div className="dashboard-header">
          <h2>Profil Freelancer</h2>
          <p>Kelola informasi profil dan keahlian Anda</p>
        </div>

        <div className="profile-container">
          {/* Profile Header Card */}
          <div className="card profile-header-card">
            <div className="profile-avatar-section">
              <div className="profile-avatar freelancer-avatar">
                <span className="avatar-text">{formData.name?.charAt(0) || 'F'}</span>
              </div>
              <div className="profile-header-info">
                <h2>{formData.name}</h2>
                <p>{formData.email}</p>
                <span className="profile-badge freelancer-badge">✨ Freelancer</span>
              </div>
            </div>
            <button 
              className={`btn ${isEditing ? 'btn-secondary' : 'btn-primary'}`}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? '❌ Batal Edit' : '✏️ Edit Profil'}
            </button>
          </div>

          {/* Profile Form Card */}
          <div className="card profile-form-card">
            <h3>Informasi Pribadi</h3>
            <form onSubmit={handleSubmit}>
              <div className="profile-form-grid">
                <div className="input-group">
                  <label>Nama Lengkap</label>
                  <div className="input-wrapper">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={!isEditing}
                      style={{paddingLeft: '50px'}}
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <div className="input-wrapper input-disabled">
                    <span className="input-icon">📧</span>
                    <input
                      type="email"
                      value={formData.email}
                      disabled
                      style={{paddingLeft: '50px'}}
                      title="Email tidak dapat diubah"
                    />
                  </div>
                  <small style={{color: 'var(--text-secondary)', fontSize: '0.85em', marginTop: '4px', display: 'block'}}>
                    Email tidak dapat diubah untuk keamanan akun
                  </small>
                </div>

                <div className="input-group">
                  <label>Nomor Telepon</label>
                  <div className="input-wrapper">
                    <span className="input-icon">📱</span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      disabled={!isEditing}
                      style={{paddingLeft: '50px'}}
                      required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Link Portfolio</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🔗</span>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                      disabled={!isEditing}
                      style={{paddingLeft: '50px'}}
                      placeholder="https://portfolio-anda.com"
                    />
                  </div>
                </div>

                <div className="input-group full-width">
                  <label>Keahlian</label>
                  <div className="input-wrapper">
                    <span className="input-icon">⚡</span>
                    <input
                      type="text"
                      value={formData.skills}
                      onChange={(e) => setFormData({...formData, skills: e.target.value})}
                      disabled={!isEditing}
                      style={{paddingLeft: '50px'}}
                      placeholder="Contoh: Web Development, UI/UX Design, Content Writing"
                      required
                    />
                  </div>
                  <small style={{color: 'var(--text-secondary)', fontSize: '0.85em', marginTop: '4px', display: 'block'}}>
                    Pisahkan keahlian dengan koma
                  </small>
                </div>

                <div className="input-group full-width">
                  <label>Deskripsi Profil</label>
                  <div className="input-wrapper">
                    <span className="input-icon" style={{alignSelf: 'flex-start', paddingTop: '14px'}}>📝</span>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      disabled={!isEditing}
                      rows="4"
                      style={{paddingLeft: '50px', resize: 'vertical', minHeight: '100px'}}
                      placeholder="Ceritakan tentang keahlian dan pengalaman Anda sebagai freelancer..."
                    />
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="profile-form-actions">
                  <button type="submit" className="btn btn-primary">
                    💾 Simpan Perubahan
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KelolaProfil;
