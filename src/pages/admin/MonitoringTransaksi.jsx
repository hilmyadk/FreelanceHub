import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MonitoringTransaksi() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('semua');

  const transaksiList = [
    { 
      id: 1, 
      judul: 'Design Logo Perusahaan', 
      customer: 'PT. Maju Jaya', 
      freelancer: 'John Doe',
      jumlah: 'Rp 500.000',
      fee: 'Rp 25.000',
      status: 'Selesai',
      tanggal: '23 Jan 2026' 
    },
    { 
      id: 2, 
      judul: 'Website Landing Page', 
      customer: 'Startup ABC', 
      freelancer: 'Jane Smith',
      jumlah: 'Rp 2.500.000',
      fee: 'Rp 125.000',
      status: 'Dalam Proses',
      tanggal: '24 Jan 2026' 
    },
    { 
      id: 3, 
      judul: 'Video Editing', 
      customer: 'John Smith', 
      freelancer: 'Mike Johnson',
      jumlah: 'Rp 750.000',
      fee: 'Rp 37.500',
      status: 'Selesai',
      tanggal: '22 Jan 2026' 
    },
    { 
      id: 4, 
      judul: 'Mobile App UI Design', 
      customer: 'PT. Digital', 
      freelancer: 'Sarah Wilson',
      jumlah: 'Rp 3.000.000',
      fee: 'Rp 150.000',
      status: 'Pending',
      tanggal: '24 Jan 2026' 
    },
  ];

  const getStatusBadge = (status) => {
    if (status === 'Pending') return 'status-pending';
    if (status === 'Dalam Proses') return 'status-progress';
    if (status === 'Selesai') return 'status-completed';
    return 'status-pending';
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
        <h2 className="mb-20">Monitoring Transaksi</h2>

        <div className="grid-3 mb-20">
          <div className="card">
            <h4>Total Transaksi</h4>
            <p style={{fontSize: '24px', fontWeight: '600', color: 'var(--primary-color)', marginTop: '8px'}}>2.345</p>
          </div>
          <div className="card">
            <h4>Volume Transaksi</h4>
            <p style={{fontSize: '24px', fontWeight: '600', color: 'var(--primary-color)', marginTop: '8px'}}>Rp 345.6jt</p>
          </div>
          <div className="card">
            <h4>Fee Platform</h4>
            <p style={{fontSize: '24px', fontWeight: '600', color: 'var(--success-color)', marginTop: '8px'}}>Rp 17.3jt</p>
          </div>
        </div>

        <div className="card">
          <div className="flex-between mb-20">
            <div className="input-group" style={{marginBottom: 0, width: '300px'}}>
              <input type="text" placeholder="Cari transaksi..." />
            </div>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="semua">Semua Status</option>
              <option value="pending">Pending</option>
              <option value="proses">Dalam Proses</option>
              <option value="selesai">Selesai</option>
            </select>
          </div>

          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{borderBottom: '2px solid var(--border-color)', textAlign: 'left'}}>
                <th style={{padding: '12px'}}>Tanggal</th>
                <th style={{padding: '12px'}}>Jasa</th>
                <th style={{padding: '12px'}}>Customer</th>
                <th style={{padding: '12px'}}>Freelancer</th>
                <th style={{padding: '12px'}}>Jumlah</th>
                <th style={{padding: '12px'}}>Fee (5%)</th>
                <th style={{padding: '12px'}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {transaksiList.map((transaksi) => (
                <tr key={transaksi.id} style={{borderBottom: '1px solid var(--border-color)'}}>
                  <td style={{padding: '16px'}}>{transaksi.tanggal}</td>
                  <td style={{padding: '16px'}}>{transaksi.judul}</td>
                  <td style={{padding: '16px'}}>{transaksi.customer}</td>
                  <td style={{padding: '16px'}}>{transaksi.freelancer}</td>
                  <td style={{padding: '16px', fontWeight: '600', color: 'var(--primary-color)'}}>{transaksi.jumlah}</td>
                  <td style={{padding: '16px', fontWeight: '600', color: 'var(--success-color)'}}>{transaksi.fee}</td>
                  <td style={{padding: '16px'}}>
                    <span className={`status-badge ${getStatusBadge(transaksi.status)}`}>
                      {transaksi.status}
                    </span>
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

export default MonitoringTransaksi;
