import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// @desc    Register new user (Customer or Freelancer)
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
  try {
    const { 
      nama, 
      email, 
      password, 
      confirmPassword,
      noTelp, 
      jenisAkun, 
      deskripsi, 
      cvFile 
    } = req.body;
    
    // Validation
    if (!nama || !email || !password || !noTelp || !jenisAkun) {
      return res.status(400).json({ 
        success: false,
        message: 'Semua field wajib harus diisi' 
      });
    }
    
    // Check password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Password dan konfirmasi password tidak cocok'
      });
    }
    
    // Check password length
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password minimal 6 karakter'
      });
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ 
        success: false,
        message: 'Email sudah terdaftar' 
      });
    }
    
    // Freelancer-specific validation
    if (jenisAkun === 'freelancer' && !deskripsi) {
      return res.status(400).json({
        success: false,
        message: 'Deskripsi wajib diisi untuk freelancer'
      });
    }
    
    // Create user object
    const userData = {
      nama,
      email,
      password,
      noTelp,
      role: jenisAkun
    };
    
    // Add freelancer-specific fields
    if (jenisAkun === 'freelancer') {
      userData.deskripsi = deskripsi;
      // Ensure cvUrl is a string (handle object/file case)
      const cvUrlValue = cvFile && typeof cvFile === 'object' ? '' : cvFile;
      userData.cvUrl = cvUrlValue || ''; 
    }
    
    // Create user
    const user = await User.create(userData);
    
    // Generate token
    const token = generateToken(user._id);
    
    res.status(201).json({
      success: true,
      message: 'Registrasi berhasil!',
      token,
      user: {
        id: user._id,
        nama: user.nama,
        email: user.email,
        role: user.role,
        noTelp: user.noTelp
      }
    });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Terjadi kesalahan server',
      error: error.message 
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        success: false,
        message: 'Email dan password harus diisi' 
      });
    }
    
    // Check if user exists (include password field)
    const user = await User.findOne({ email }).select('+password');
    
    if (!user) {
      return res.status(401).json({ 
        success: false,
        message: 'Email atau password salah' 
      });
    }
    
    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Akun Anda telah dinonaktifkan'
      });
    }
    
    // Verify password
    const isPasswordMatch = await user.comparePassword(password);
    
    if (!isPasswordMatch) {
      return res.status(401).json({ 
        success: false,
        message: 'Email atau password salah' 
      });
    }
    
    // Generate token
    const token = generateToken(user._id);
    
    // Get user without password
    const userProfile = user.getPublicProfile();
    
    res.json({
      success: true,
      message: 'Login berhasil!',
      token,
      user: {
        id: userProfile._id,
        nama: userProfile.nama,
        email: userProfile.email,
        role: userProfile.role,
        noTelp: userProfile.noTelp,
        profilePicture: userProfile.profilePicture
      }
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Terjadi kesalahan server',
      error: error.message 
    });
  }
};

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User tidak ditemukan'
      });
    }
    
    res.json({
      success: true,
      user: user.getPublicProfile()
    });
  } catch (error) {
    console.error('GetMe Error:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server',
      error: error.message
    });
  }
};
