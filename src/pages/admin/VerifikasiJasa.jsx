import { useNavigate } from 'react-router-dom';

function VerifikasiJasa() {
  const navigate = useNavigate();

  const jasaList = [
    { id: 1, judul: 'Website E-commerce Professional', freelancer: 'John Doe', kategori: 'Web Development', harga: 'Rp 5.000.000', status: 'pending' },
    { id: 2, judul: 'Mobile App Design', freelancer: 'Jane Smith', kategori: 'Design', harga: 'Rp 3.000.000', status: 'pending' },
    { id: 3, judul: 'SEO Optimization', freelancer: 'Mike Johnson', kategori: 'Marketing', harga: 'Rp 1.500.000', status: 'verified' },
    { id: 4, judul: 'Video Production', freelancer: 'Sarah Wilson', kategori: 'Video', harga: 'Rp 2.000.000', status: 'rejected' },
  ];

  const handleVerifikasi = (id, action) => {
    console.log(`${action} jasa dengan ID: ${id}`);
    // Placeholder action
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
          <h1>FreelanceHub - Admin</h1>
          <div className="navbar-menu">
            <button onClick={() => navigate('/admin/dashboard')}>Dashboard</button>
            <button onClick={() => navigate('/admin/kelola-user')}>Kelola User</button>
            <button onClick={() => navigate('/admin/verifikasi-jasa')}>Verifikasi Jasa</button>
            <button onClick={() => navigate('/admin/monitoring-transaksi')}>Monitoring</button>
            <button onClick={() => navigate('/')}>Logout</button>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="mb-20">Verifikasi Jasa</h2>

        <div className="card">
          <div className="flex gap-10 mb-20">
            <button className="btn btn-primary">Semua</button>
            <button className="btn btn-secondary">Menunggu Verifikasi</button>
            <button className="btn btn-secondary">Terverifikasi</button>
            <button className="btn btn-secondary">Ditolak</button>
          </div>

          {jasaList.map((jasa) => (
            <div key={jasa.id} className="card" style={{marginBottom: '16px', background: 'var(--bg-light)'}}>
              <div className="flex-between">
                <div style={{flex: 1}}>
                  <h3>{jasa.judul}</h3>
                  <p style={{color: 'var(--text-light)', marginTop: '4px'}}>
                    Freelancer: {jasa.freelancer} | Kategori: {jasa.kategori}
                  </p>
                  <p style={{marginTop: '8px', fontWeight: '600', color: 'var(--primary-color)'}}>{jasa.harga}</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end'}}>
                  <span className={`status-badge ${
                    jasa.status === 'pending' ? 'status-pending' : 
                    jasa.status === 'verified' ? 'status-completed' : 
                    'status-rejected'
                  }`}>
                    {jasa.status === 'pending' ? 'Menunggu' : jasa.status === 'verified' ? 'Terverifikasi' : 'Ditolak'}
                  </span>
                  {jasa.status === 'pending' && (
                    <div style={{display: 'flex', gap: '8px'}}>
                      <button 
                        className="btn btn-success" 
                        style={{padding: '6px 12px', fontSize: '14px'}}
                        onClick={() => handleVerifikasi(jasa.id, 'approve')}
                      >
                        ✓ Setujui
                      </button>
                      <button 
                        className="btn btn-danger" 
                        style={{padding: '6px 12px', fontSize: '14px'}}
                        onClick={() => handleVerifikasi(jasa.id, 'reject')}
                      >
                        ✗ Tolak
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-secondary mt-20" onClick={() => navigate('/admin/dashboard')}>
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
}

export default VerifikasiJasa;
