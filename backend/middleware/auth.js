import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Protect routes - verify JWT token
export const protect = async (req, res, next) => {
  let token;
  
  // Check if token exists in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header (format: "Bearer <token>")
      token = req.headers.authorization.split(' ')[1];
      
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Get user from token (exclude password)
      req.user = await User.findById(decoded.id).select('-password');
      
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'User tidak ditemukan'
        });
      }
      
      // Check if user is active
      if (!req.user.isActive) {
        return res.status(401).json({
          success: false,
          message: 'Akun Anda telah dinonaktifkan'
        });
      }
      
      next();
    } catch (error) {
      console.error('Auth Middleware Error:', error);
      return res.status(401).json({
        success: false,
        message: 'Token tidak valid atau sudah expired'
      });
    }
  }
  
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Akses ditolak, token tidak ditemukan'
    });
  }
};

// Authorize specific roles
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Role ${req.user.role} tidak memiliki akses ke resource ini`
      });
    }
    next();
  };
};
