import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #6b5dd3 0%, #8b7dd8 100%)',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '60px 40px',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        maxWidth: '500px'
      }}>
        <h1 style={{fontSize: '72px', color: 'var(--primary-color)', marginBottom: '16px'}}>404</h1>
        <h2 style={{fontSize: '32px', marginBottom: '16px', color: 'var(--text-dark)'}}>Halaman Tidak Ditemukan</h2>
        <p style={{color: 'var(--text-light)', marginBottom: '32px', fontSize: '16px'}}>
          Maaf, halaman yang Anda cari tidak dapat ditemukan.
        </p>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/')}
          style={{fontSize: '16px'}}
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}

export default NotFound;
