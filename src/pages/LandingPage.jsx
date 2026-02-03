import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LandingPage.css';
import ThemeToggle from '../components/ThemeToggle';

function LandingPage() {
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openModal = (type) => {
    let content = {};
    
    if (type === 'faq') {
      content = {
        title: 'FAQ - Pertanyaan yang Sering Diajukan',
        body: (
          <div className="modal-faq">
            <div className="faq-item">
              <h4>Bagaimana cara mendaftar di FreelanceHub?</h4>
              <p>Klik tombol "Register" di halaman utama, pilih jenis akun (Customer atau Freelancer), lalu isi form pendaftaran dengan lengkap.</p>
            </div>
            <div className="faq-item">
              <h4>Apakah FreelanceHub gratis?</h4>
              <p>Ya, mendaftar dan membuat akun di FreelanceHub gratis. Kami hanya mengambil fee kecil (5%) dari setiap transaksi yang berhasil.</p>
            </div>
            <div className="faq-item">
              <h4>Bagaimana cara pembayaran di FreelanceHub?</h4>
              <p>Kami menyediakan berbagai metode pembayaran seperti Transfer Bank, E-Wallet (GoPay, OVO, Dana), dan Virtual Account.</p>
            </div>
            <div className="faq-item">
              <h4>Apakah transaksi di FreelanceHub aman?</h4>
              <p>Ya, sangat aman. Kami menggunakan sistem escrow dimana pembayaran ditahan sampai pekerjaan selesai dan disetujui oleh customer.</p>
            </div>
            <div className="faq-item">
              <h4>Bagaimana jika saya tidak puas dengan hasil pekerjaan?</h4>
              <p>Anda dapat meminta revisi kepada freelancer. Jika masih tidak puas, Anda dapat mengajukan dispute dan tim kami akan membantu menyelesaikannya.</p>
            </div>
          </div>
        )
      };
    } else if (type === 'contact') {
      content = {
        title: 'Hubungi Kami',
        body: (
          <div className="modal-contact">
            <div className="contact-item">
              <h4>📧 Email</h4>
              <p>support@freelancehub.com</p>
              <p>info@freelancehub.com</p>
            </div>
            <div className="contact-item">
              <h4>📱 Telepon</h4>
              <p>+62 21 1234 5678</p>
              <p>Senin - Jumat: 09.00 - 18.00 WIB</p>
            </div>
            <div className="contact-item">
              <h4>💬 Live Chat</h4>
              <p>Tersedia di dashboard setelah login</p>
            </div>
            <div className="contact-item">
              <h4>📍 Alamat Kantor</h4>
              <p>Jl. Sudirman No. 123</p>
              <p>Jakarta Pusat, DKI Jakarta 10220</p>
            </div>
          </div>
        )
      };
    } else if (type === 'privacy') {
      content = {
        title: 'Privacy Policy',
        body: (
          <div className="modal-privacy">
            <div className="privacy-section">
              <h4>1. Pengumpulan Informasi</h4>
              <p>Kami mengumpulkan informasi yang Anda berikan saat mendaftar, termasuk nama, email, nomor telepon, dan informasi profil lainnya.</p>
            </div>
            <div className="privacy-section">
              <h4>2. Penggunaan Informasi</h4>
              <p>Informasi yang kami kumpulkan digunakan untuk menyediakan layanan, memproses transaksi, dan meningkatkan pengalaman pengguna di platform FreelanceHub.</p>
            </div>
            <div className="privacy-section">
              <h4>3. Keamanan Data</h4>
              <p>Kami menggunakan enkripsi dan protokol keamanan standar industri untuk melindungi data pribadi Anda dari akses yang tidak sah.</p>
            </div>
            <div className="privacy-section">
              <h4>4. Pembagian Informasi</h4>
              <p>Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum.</p>
            </div>
            <div className="privacy-section">
              <h4>5. Cookie</h4>
              <p>Kami menggunakan cookie untuk meningkatkan pengalaman browsing Anda dan menganalisis penggunaan website.</p>
            </div>
            <div className="privacy-section">
              <h4>6. Hak Anda</h4>
              <p>Anda memiliki hak untuk mengakses, mengubah, atau menghapus data pribadi Anda kapan saja melalui pengaturan akun.</p>
            </div>
          </div>
        )
      };
    }
    
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setModalContent(null), 300);
  };

  const handleSocialClick = (platform, e) => {
    e.preventDefault();
    alert(`Link ${platform} belum tersedia. Ini adalah placeholder untuk demo.`);
  };

  return (
    <div className="landing-page">
      {/* Theme Toggle */}
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <div className="hero-section" id="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">🚀 Platform Freelance Terpercaya</div>
          <h1 className="hero-title">FreelanceHub</h1>
          <p className="tagline">Temukan Freelancer Terbaik atau Tawarkan Jasa Anda</p>
          <p className="description">
            Platform yang menghubungkan Customer dengan Freelancer profesional
            untuk berbagai kebutuhan jasa digital dan kreatif
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-large" onClick={() => navigate('/pilih-login')}>
              <span>Mulai Sekarang</span>
            </button>
            <button className="btn btn-secondary btn-large" onClick={() => navigate('/registrasi')}>
              <span>Register</span>
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Freelancer</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Project Selesai</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Kepuasan</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Button */}
        <div className="scroll-down-indicator" onClick={() => scrollToSection('features-section')}>
          <div className="scroll-arrow">↓</div>
          <span className="scroll-text">Scroll</span>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section" id="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Mengapa FreelanceHub?</h2>
            <p className="section-subtitle">Platform terbaik untuk menghubungkan talenta dengan peluang</p>
          </div>
          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🎯</div>
              </div>
              <h3>Mudah Digunakan</h3>
              <p>Interface yang intuitif dan mudah dipahami untuk semua kalangan</p>
              <div className="feature-arrow">→</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">⭐</div>
              </div>
              <h3>Freelancer Terverifikasi</h3>
              <p>Semua freelancer telah melalui proses verifikasi dan penilaian</p>
              <div className="feature-arrow">→</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">💰</div>
              </div>
              <h3>Transaksi Aman</h3>
              <p>Sistem pembayaran yang aman dan terpercaya</p>
              <div className="feature-arrow">→</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Button */}
        <div className="scroll-down-indicator" onClick={() => scrollToSection('how-it-works-section')}>
          <div className="scroll-arrow">↓</div>
          <span className="scroll-text">Scroll</span>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works-section" id="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cara Kerja</h2>
            <p className="section-subtitle">Hanya 4 langkah mudah untuk memulai</p>
          </div>
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Daftar Akun</h3>
                <p>Buat akun sebagai Customer atau Freelancer</p>
              </div>
            </div>
            <div className="step-connector">→</div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Browse Jasa</h3>
                <p>Temukan jasa atau tawarkan keahlian Anda</p>
              </div>
            </div>
            <div className="step-connector">→</div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Mulai Project</h3>
                <p>Diskusi detail dan mulai bekerja</p>
              </div>
            </div>
            <div className="step-connector">→</div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Selesai & Bayar</h3>
                <p>Terima hasil dan lakukan pembayaran</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Button */}
        <div className="scroll-down-indicator" onClick={() => scrollToSection('categories-section')}>
          <div className="scroll-arrow">↓</div>
          <span className="scroll-text">Scroll</span>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section" id="categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kategori Populer</h2>
            <p className="section-subtitle">Berbagai jasa yang tersedia di FreelanceHub</p>
          </div>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">🎨</div>
              <h4>Design Grafis</h4>
              <p>Logo, Banner, Ilustrasi</p>
            </div>
            <div className="category-card">
              <div className="category-icon">💻</div>
              <h4>Web Development</h4>
              <p>Website, Landing Page</p>
            </div>
            <div className="category-card">
              <div className="category-icon">📱</div>
              <h4>Mobile Apps</h4>
              <p>iOS, Android Apps</p>
            </div>
            <div className="category-card">
              <div className="category-icon">✍️</div>
              <h4>Content Writing</h4>
              <p>Article, Copywriting</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎬</div>
              <h4>Video Editing</h4>
              <p>Video, Motion Graphics</p>
            </div>
            <div className="category-card">
              <div className="category-icon">📊</div>
              <h4>Digital Marketing</h4>
              <p>SEO, Social Media</p>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Button */}
        <div className="scroll-down-indicator" onClick={() => scrollToSection('testimonial-section')}>
          <div className="scroll-arrow">↓</div>
          <span className="scroll-text">Scroll</span>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section" id="testimonial-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Apa Kata Mereka?</h2>
            <p className="section-subtitle">Testimoni dari pengguna FreelanceHub</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "FreelanceHub sangat membantu saya menemukan freelancer yang tepat untuk project website saya. Prosesnya cepat dan mudah!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <div className="author-name">Ahmad Rizki</div>
                  <div className="author-role">Customer</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Sebagai freelancer, platform ini memberikan banyak peluang project berkualitas. Sistemnya juga sangat profesional."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">S</div>
                <div className="author-info">
                  <div className="author-name">Siti Nurhaliza</div>
                  <div className="author-role">Freelancer</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Payment sistemnya aman dan transparan. Saya merasa tenang melakukan transaksi di FreelanceHub."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">B</div>
                <div className="author-info">
                  <div className="author-name">Budi Santoso</div>
                  <div className="author-role">Customer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>FreelanceHub</h3>
              <p>Platform Freelance Terpercaya di Indonesia</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Platform</h4>
                <a onClick={() => scrollToSection('hero-section')}>Tentang Kami</a>
                <a onClick={() => scrollToSection('how-it-works-section')}>Cara Kerja</a>
                <a onClick={() => scrollToSection('categories-section')}>Kategori</a>
              </div>
              <div className="footer-column">
                <h4>Dukungan</h4>
                <a onClick={() => openModal('faq')}>FAQ</a>
                <a onClick={() => openModal('contact')}>Hubungi Kami</a>
                <a onClick={() => openModal('privacy')}>Privacy Policy</a>
              </div>
              <div className="footer-column">
                <h4>Sosial Media</h4>
                <a href="#" onClick={(e) => handleSocialClick('Instagram', e)}>Instagram</a>
                <a href="#" onClick={(e) => handleSocialClick('Facebook', e)}>Facebook</a>
                <a href="#" onClick={(e) => handleSocialClick('Twitter', e)}>Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 FreelanceHub. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalContent?.title}</h3>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            <div className="modal-body">
              {modalContent?.body}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
