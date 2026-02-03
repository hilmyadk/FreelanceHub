import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function KelolaUser() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('semua');

  const userList = [
    { id: 1, nama: 'John Doe', email: 'john@example.com', tipe: 'Freelancer', status: 'Aktif', bergabung: '10 Jan 2026' },
    { id: 2, nama: 'Jane Smith', email: 'jane@example.com', tipe: 'Customer', status: 'Aktif', bergabung: '12 Jan 2026' },
    { id: 3, nama: 'Mike Johnson', email: 'mike@example.com', tipe: 'Freelancer', status: 'Suspended', bergabung: '15 Jan 2026' },
    { id: 4, nama: 'Sarah Wilson', email: 'sarah@example.com', tipe: 'Customer', status: 'Aktif', bergabung: '18 Jan 2026' },
  ];

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
        <h2 className="mb-20">Kelola User</h2>

        <div className="card">
          <div className="flex-between mb-20">
            <div className="input-group" style={{marginBottom: 0, width: '300px'}}>
              <input type="text" placeholder="Cari user..." />
            </div>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="semua">Semua Tipe</option>
              <option value="customer">Customer</option>
              <option value="freelancer">Freelancer</option>
            </select>
          </div>

          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{borderBottom: '2px solid var(--border-color)', textAlign: 'left'}}>
                <th style={{padding: '12px'}}>Nama</th>
                <th style={{padding: '12px'}}>Email</th>
                <th style={{padding: '12px'}}>Tipe</th>
                <th style={{padding: '12px'}}>Status</th>
                <th style={{padding: '12px'}}>Bergabung</th>
                <th style={{padding: '12px'}}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id} style={{borderBottom: '1px solid var(--border-color)'}}>
                  <td style={{padding: '16px'}}>{user.nama}</td>
                  <td style={{padding: '16px'}}>{user.email}</td>
                  <td style={{padding: '16px'}}>
                    <span className={`status-badge ${user.tipe === 'Freelancer' ? 'status-progress' : 'status-completed'}`}>
                      {user.tipe}
                    </span>
                  </td>
                  <td style={{padding: '16px'}}>
                    <span className={`status-badge ${user.status === 'Aktif' ? 'status-completed' : 'status-rejected'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td style={{padding: '16px'}}>{user.bergabung}</td>
                  <td style={{padding: '16px'}}>
                    <button className="btn btn-secondary" style={{padding: '6px 12px', fontSize: '14px', marginRight: '8px'}}>
                      Detail
                    </button>
                    {user.status === 'Aktif' ? (
                      <button className="btn btn-danger" style={{padding: '6px 12px', fontSize: '14px'}}>
                        Suspend
                      </button>
                    ) : (
                      <button className="btn btn-success" style={{padding: '6px 12px', fontSize: '14px'}}>
                        Aktifkan
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="btn btn-secondary mt-20" onClick={() => navigate('/admin/dashboard')}>
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
}

export default KelolaUser;
