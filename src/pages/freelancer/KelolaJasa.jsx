import { useNavigate } from 'react-router-dom';
import '../DashboardPages.css';
import ThemeToggle from '../../components/ThemeToggle';

function KelolaJasa() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const jasaList = [
    { id: 1, judul: 'Design Logo Profesional', harga: 'Rp 500.000', status: 'Aktif', pesanan: 12 },
    { id: 2, judul: 'Website Company Profile', harga: 'Rp 2.500.000', status: 'Aktif', pesanan: 8 },
    { id: 3, judul: 'Video Editing', harga: 'Rp 750.000', status: 'Nonaktif', pesanan: 5 },
  ];

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
        <div className="flex-between mb-20">
          <h2>Kelola Jasa</h2>
          <button className="btn btn-primary" onClick={() => navigate('/freelancer/kelola-jasa/tambah')}>
            + Tambah Jasa Baru
          </button>
        </div>

        <div className="card">
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{borderBottom: '2px solid var(--border-color)', textAlign: 'left'}}>
                <th style={{padding: '12px'}}>Nama Jasa</th>
                <th style={{padding: '12px'}}>Harga</th>
                <th style={{padding: '12px'}}>Status</th>
                <th style={{padding: '12px'}}>Total Pesanan</th>
                <th style={{padding: '12px'}}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {jasaList.map((jasa) => (
                <tr key={jasa.id} style={{borderBottom: '1px solid var(--border-color)'}}>
                  <td style={{padding: '16px'}}>{jasa.judul}</td>
                  <td style={{padding: '16px', fontWeight: '600', color: 'var(--primary-color)'}}>{jasa.harga}</td>
                  <td style={{padding: '16px'}}>
                    <span className={`status-badge ${jasa.status === 'Aktif' ? 'status-completed' : 'status-pending'}`}>
                      {jasa.status}
                    </span>
                  </td>
                  <td style={{padding: '16px'}}>{jasa.pesanan} pesanan</td>
                  <td style={{padding: '16px'}}>
                    <button 
                      className="btn btn-secondary" 
                      style={{padding: '6px 12px', fontSize: '14px', marginRight: '8px'}}
                      onClick={() => navigate(`/freelancer/kelola-jasa/edit/${jasa.id}`)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-danger" 
                      style={{padding: '6px 12px', fontSize: '14px'}}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="btn btn-secondary mt-20" onClick={() => navigate('/freelancer/dashboard')}>
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
}

export default KelolaJasa;
