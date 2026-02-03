import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, 'Nama harus diisi'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email harus diisi'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Format email tidak valid']
  },
  password: {
    type: String,
    required: [true, 'Password harus diisi'],
    minlength: [6, 'Password minimal 6 karakter'],
    select: false
  },
  noTelp: {
    type: String,
    required: [true, 'Nomor telepon harus diisi']
  },
  role: {
    type: String,
    enum: ['customer', 'freelancer'],
    required: true
  },
  
  // Customer-specific fields
  alamat: {
    type: String,
    default: ''
  },
  perusahaan: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  
  // Freelancer-specific fields
  deskripsi: {
    type: String,
    default: ''
  },
  keahlian: {
    type: [String],
    default: []
  },
  cvUrl: {
    type: String,
    default: ''
  },
  portofolioUrl: {
    type: String,
    default: ''
  },
  
  // Common fields
  profilePicture: {
    type: String,
    default: ''
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  
  // Stats (will be calculated from other collections)
  totalPesanan: {
    type: Number,
    default: 0
  },
  pesananAktif: {
    type: Number,
    default: 0
  },
  pesananSelesai: {
    type: Number,
    default: 0
  },
  
  // Freelancer-specific stats
  totalJasa: {
    type: Number,
    default: 0
  },
  saldo: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  },
  totalReview: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  // Only hash if password is modified
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to get public profile (without sensitive data)
userSchema.methods.getPublicProfile = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

const User = mongoose.model('User', userSchema);

export default User;
