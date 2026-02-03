import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function Pembayaran() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [metodePembayaran, setMetodePembayaran] = useState('');

  const handleLogout = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Setelah pembayaran, arahkan ke status pesanan
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
        <h2 className="mb-20">Pembayaran</h2>

        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <div className="card">
            <h3>Ringkasan Pesanan</h3>
            <div style={{marginTop: '16px'}}>
              <div className="flex-between" style={{marginBottom: '12px'}}>
                <span>Design Logo Profesional</span>
                <span style={{fontWeight: '600'}}>Rp 500.000</span>
              </div>
              <div className="flex-between" style={{marginBottom: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-color)'}}>
                <span>Biaya Platform (5%)</span>
                <span style={{fontWeight: '600'}}>Rp 25.000</span>
              </div>
              <div className="flex-between" style={{marginTop: '16px', paddingTop: '16px', borderTop: '2px solid var(--border-color)'}}>
                <strong>Total</strong>
                <strong style={{fontSize: '20px', color: 'var(--primary-color)'}}>Rp 525.000</strong>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Metode Pembayaran</h3>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>
                  <input 
                    type="radio" 
                    name="metode" 
                    value="transfer"
                    checked={metodePembayaran === 'transfer'}
                    onChange={(e) => setMetodePembayaran(e.target.value)}
                  /> Transfer Bank
                </label>
              </div>
              <div className="input-group">
                <label>
                  <input 
                    type="radio" 
                    name="metode" 
                    value="ewallet"
                    checked={metodePembayaran === 'ewallet'}
                    onChange={(e) => setMetodePembayaran(e.target.value)}
                  /> E-Wallet (GoPay, OVO, Dana)
                </label>
              </div>
              <div className="input-group">
                <label>
                  <input 
                    type="radio" 
                    name="metode" 
                    value="va"
                    checked={metodePembayaran === 'va'}
                    onChange={(e) => setMetodePembayaran(e.target.value)}
                  /> Virtual Account
                </label>
              </div>

              <div className="flex gap-10 mt-20">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => navigate(`/customer/pesan-jasa/${id}`)}
                >
                  Kembali
                </button>
                <button type="submit" className="btn btn-success">
                  Bayar Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pembayaran;
