import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginCustomer.css'; // Using same CSS
import ThemeToggle from '../components/ThemeToggle';
import { authAPI } from '../services/api';

function LoginFreelancer() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const response = await authAPI.login({
        email: formData.email,
        password: formData.password,
        role: 'freelancer' // Validate freelancer role
      });
      
      if (response.data.success) {
        // Redirect to freelancer dashboard
        navigate('/freelancer/dashboard');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Login gagal. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/pilih-login');
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
      
      <div className="login-container">
        <div className="login-icon-header">
          <div className="login-avatar freelancer-avatar">
            <span>💼</span>
          </div>
        </div>
        
        <div className="login-header">
          <div className="header-badge freelancer-badge">✨ Freelancer Portal</div>
          <h1>Login Freelancer</h1>
          <p>Masuk untuk mengelola jasa dan pesanan Anda</p>
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
            <label>Email</label>
            <div className="input-wrapper">
              <span className="input-icon">📧</span>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper" style={{position: 'relative'}}>
              <span className="input-icon">🔒</span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password Anda"
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

          <button type="submit" className="btn btn-login" disabled={loading}>
            <span>{loading ? 'Loading...' : 'Login'}</span>
          </button>
        </form>

        <div className="login-footer">
          <div className="register-prompt">
            <p>Belum punya akun? <a onClick={() => navigate('/registrasi')}>Daftar</a></p>
          </div>
          <button className="btn btn-back" onClick={handleBack}>
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginFreelancer;
