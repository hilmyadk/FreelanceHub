import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';
import { userAPI } from '../../services/api';

function CustomerProfil() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    bio: ''
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
          address: user.address || '',
          company: user.company || '',
          bio: user.bio || ''
        });
      }
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError('Gagal memuat data profil');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await userAPI.updateProfile(formData);
      if (response.data.success) {
        setIsEditing(false);
        alert('Profil berhasil diperbarui!');
        fetchProfile(); // Refresh profile data
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
        <div className="dashboard-header">
          <h2>Profil Saya</h2>
          <p>Kelola informasi profil Anda</p>
        </div>

        <div className="profile-container">
          {/* Profile Header Card */}
          <div className="card profile-header-card">
            <div className="profile-avatar-section">
              <div className="profile-avatar">
                <span className="avatar-text">{formData.name?.charAt(0) || 'C'}</span>
              </div>
              <div className="profile-header-info">
                <h2>{formData.name}</h2>
                <p>{formData.email}</p>
                <span className="profile-badge">Customer</span>
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
            <form onSubmit={handleSave}>
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
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <div className="input-wrapper">
                    <span className="input-icon">📧</span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={!isEditing}
                      style={{paddingLeft: '50px'}}
                    />
                  </div>
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
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Perusahaan (Opsional)</label>
                  <div className="input-wrapper">
                    <span className="input-icon">🏢</span>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      disabled={!isEditing}
                      style={{paddingLeft: '50px'}}
                    />
                  </div>
                </div>

                <div className="input-group full-width">
                  <label>Alamat</label>
                  <div className="input-wrapper">
                    <span className="input-icon" style={{alignSelf: 'flex-start', paddingTop: '14px'}}>📍</span>
                    <textarea
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      disabled={!isEditing}
                      rows="2"
                      style={{paddingLeft: '50px', resize: 'vertical'}}
                    />
                  </div>
                </div>

                <div className="input-group full-width">
                  <label>Bio</label>
                  <div className="input-wrapper">
                    <span className="input-icon" style={{alignSelf: 'flex-start', paddingTop: '14px'}}>📝</span>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setFormData({...formData, bio: e.target.value})}
                      disabled={!isEditing}
                      rows="3"
                      style={{paddingLeft: '50px', resize: 'vertical'}}
                      placeholder="Ceritakan sedikit tentang Anda atau kebutuhan project Anda"
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

export default CustomerProfil;
