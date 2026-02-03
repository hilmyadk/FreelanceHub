import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginCustomer.css'; // Using same CSS as login pages
import ThemeToggle from '../components/ThemeToggle';
import { authAPI } from '../services/api';

function Registrasi() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: '',
    confirmPassword: '',
    jenisAkun: 'customer',
    noTelp: '',
    deskripsi: '',
    cvFile: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Validate password match
      if (formData.password !== formData.confirmPassword) {
        setError('Password dan konfirmasi password tidak cocok');
        setLoading(false);
        return;
      }
      
      // Prepare data for API
      const registrationData = {
        ...formData,
        // Send filename only if file exists (temporary until file upload is implemented)
        cvFile: formData.cvFile ? formData.cvFile.name : ''
      };

      // Register user
      const response = await authAPI.register(registrationData);
      
      if (response.data.success) {
        // Save token and user data
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Show success message
        alert(response.data.message || 'Registrasi berhasil!');
        
        // Redirect based on role
        if (response.data.user.role === 'customer') {
          navigate('/customer/dashboard');
        } else {
          navigate('/freelancer/dashboard');
        }
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Registrasi gagal. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({...formData, cvFile: file});
    }
  };

  const handleBackToHome = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  return (
    <div className="login-page">
      {/* Theme Toggle */}
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>

      <div className="login-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="login-container" style={{maxWidth: '580px'}}>
        <div className="login-icon-header">
          <div className="login-avatar register-avatar">
            <span>📝</span>
          </div>
        </div>
        
        <div className="login-header">
          <div className="header-badge">✨ Bergabung Sekarang</div>
          <h1>Registrasi</h1>
          <p>Daftarkan diri Anda untuk bergabung dengan FreelanceHub</p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div style={{
              padding: '12px',
              marginBottom: '16px',
              backgroundColor: '#fee',
              border: '1px solid #fcc',
              borderRadius: '8px',
              color: '#c33',
              fontSize: '14px'
            }}>
              ⚠️ {error}
            </div>
          )}
          
          <div className="input-group">
            <label>Nama Lengkap</label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                value={formData.nama}
                onChange={(e) => setFormData({...formData, nama: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <div className="input-wrapper">
              <span className="input-icon">📧</span>
              <input
                type="email"
                placeholder="Masukkan email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Nomor Telepon</label>
            <div className="input-wrapper">
              <span className="input-icon">📱</span>
              <input
                type="tel"
                placeholder="Masukkan nomor telepon"
                value={formData.noTelp}
                onChange={(e) => setFormData({...formData, noTelp: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Jenis Akun</label>
            <div className="input-wrapper">
              <span className="input-icon">🎯</span>
              <select
                value={formData.jenisAkun}
                onChange={(e) => setFormData({...formData, jenisAkun: e.target.value})}
                style={{paddingLeft: '50px'}}
              >
                <option value="customer">Customer</option>
                <option value="freelancer">Freelancer</option>
              </select>
            </div>
          </div>

          {/* Conditional Fields for Freelancer */}
          <div className={`freelancer-fields ${formData.jenisAkun === 'freelancer' ? 'show' : ''}`}>
            <div className="input-group">
              <label>Deskripsi Singkat</label>
              <div className="input-wrapper">
                <span className="input-icon" style={{alignSelf: 'flex-start', paddingTop: '14px'}}>📝</span>
                <textarea
                  placeholder="Ceritakan tentang keahlian dan pengalaman Anda"
                  value={formData.deskripsi}
                  onChange={(e) => setFormData({...formData, deskripsi: e.target.value})}
                  rows="4"
                  style={{
                    paddingLeft: '50px',
                    resize: 'vertical',
                    minHeight: '100px'
                  }}
                  required={formData.jenisAkun === 'freelancer'}
                  disabled={formData.jenisAkun !== 'freelancer'}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Upload CV/Portofolio</label>
              <div className="input-wrapper file-input-wrapper">
                <span className="input-icon">📎</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  style={{paddingLeft: '50px'}}
                  required={formData.jenisAkun === 'freelancer'}
                  disabled={formData.jenisAkun !== 'freelancer'}
                />
                {formData.cvFile && (
                  <span className="file-name">
                    ✓ {formData.cvFile.name}
                  </span>
                )}
              </div>
              <small style={{
                display: 'block',
                marginTop: '8px',
                color: 'var(--text-light)',
                fontSize: '13px'
              }}>
                Format: PDF, DOC, DOCX (Max. 5MB)
              </small>
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper" style={{position: 'relative'}}>
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
                style={{paddingRight: '40px'}}
              />
              <span 
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  userSelect: 'none'
                }}
                title={showPassword ? "Sembunyikan password" : "Lihat password"}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>

          <div className="input-group">
            <label>Konfirmasi Password</label>
            <div className="input-wrapper" style={{position: 'relative'}}>
              <span className="input-icon">🔐</span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Konfirmasi password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
                style={{paddingRight: '40px'}}
              />
              <span 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  userSelect: 'none'
                }}
                title={showConfirmPassword ? "Sembunyikan password" : "Lihat password"}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </span>
            </div>
          </div>

          <button type="submit" className="btn btn-login" disabled={loading}>
            <span>{loading ? 'Mendaftar...' : 'Daftar'}</span>
          </button>
        </form>

        <div className="login-footer">
          <div className="register-prompt">
            <p>Sudah punya akun? <a onClick={() => navigate('/pilih-login')}>Login</a></p>
          </div>
          <button className="btn btn-back" onClick={handleBackToHome}>
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registrasi;
