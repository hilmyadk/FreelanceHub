import User from '../models/User.js';

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getProfile = async (req, res) => {
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
    console.error('GetProfile Error:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server',
      error: error.message
    });
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User tidak ditemukan'
      });
    }
    
    const {
      nama,
      noTelp,
      alamat,
      perusahaan,
      bio,
      deskripsi,
      keahlian,
      portofolioUrl
    } = req.body;
    
    // Update common fields
    if (nama) user.nama = nama;
    if (noTelp) user.noTelp = noTelp;
    
    // Update customer-specific fields
    if (user.role === 'customer') {
      if (alamat !== undefined) user.alamat = alamat;
      if (perusahaan !== undefined) user.perusahaan = perusahaan;
      if (bio !== undefined) user.bio = bio;
    }
    
    // Update freelancer-specific fields
    if (user.role === 'freelancer') {
      if (deskripsi !== undefined) user.deskripsi = deskripsi;
      if (keahlian !== undefined) {
        // Convert comma-separated string to array
        user.keahlian = typeof keahlian === 'string' 
          ? keahlian.split(',').map(k => k.trim())
          : keahlian;
      }
      if (portofolioUrl !== undefined) user.portofolioUrl = portofolioUrl;
    }
    
    await user.save();
    
    res.json({
      success: true,
      message: 'Profil berhasil diperbarui',
      user: user.getPublicProfile()
    });
  } catch (error) {
    console.error('UpdateProfile Error:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server',
      error: error.message
    });
  }
};

// @desc    Get user by ID (for viewing other user's profile)
// @route   GET /api/users/:id
// @access  Private
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
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
    console.error('GetUserById Error:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server',
      error: error.message
    });
  }
};
