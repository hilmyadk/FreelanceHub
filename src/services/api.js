// API Service - Pure LocalStorage (No Backend)
// Menggantikan semua API calls dengan localStorage operations

import {
  register as registerUser,
  login as loginUser,
  logout as logoutUser,
  getCurrentUser,
  isLoggedIn,
  hasRole,
  updateProfile as updateUserProfile,
  changePassword as changeUserPassword,
  getUserById as getUser,
  getAllUsers,
  getUsersByRole,
  deleteUser,
  initializeApp
} from './localStorage';

// Initialize app saat pertama kali load
initializeApp();

// Simulate async behavior untuk konsistensi dengan API calls sebelumnya
const asyncWrapper = (fn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = fn(...args);
          if (result.success === false) {
            reject({ response: { data: { message: result.message } } });
          } else {
            resolve({ data: result });
          }
        } catch (error) {
          reject({ response: { data: { message: error.message } } });
        }
      }, 100); // Simulate network delay
    });
  };
};

// Auth endpoints
export const authAPI = {
  register: asyncWrapper(registerUser),
  login: asyncWrapper(({ email, password, role }) => loginUser(email, password, role)),
  logout: asyncWrapper(logoutUser),
  getMe: asyncWrapper(() => {
    const user = getCurrentUser();
    if (!user) {
      return { success: false, message: 'Tidak ada user yang login' };
    }
    return { success: true, user };
  }),
  isLoggedIn,
  hasRole
};

// User endpoints
export const userAPI = {
  getProfile: asyncWrapper(() => {
    const user = getCurrentUser();
    if (!user) {
      return { success: false, message: 'Tidak ada user yang login' };
    }
    return { success: true, user };
  }),
  updateProfile: asyncWrapper((data) => {
    const user = getCurrentUser();
    if (!user) {
      return { success: false, message: 'Tidak ada user yang login' };
    }
    return updateUserProfile(user.id, data);
  }),
  changePassword: asyncWrapper((oldPassword, newPassword) => {
    const user = getCurrentUser();
    if (!user) {
      return { success: false, message: 'Tidak ada user yang login' };
    }
    return changeUserPassword(user.id, oldPassword, newPassword);
  }),
  getUserById: asyncWrapper((id) => {
    const user = getUser(id);
    if (!user) {
      return { success: false, message: 'User tidak ditemukan' };
    }
    return { success: true, user };
  }),
  getAllUsers: asyncWrapper(() => {
    return { success: true, users: getAllUsers() };
  }),
  getUsersByRole: asyncWrapper((role) => {
    return { success: true, users: getUsersByRole(role) };
  }),
  deleteUser: asyncWrapper(deleteUser)
};

// Export utility functions
export { getCurrentUser, isLoggedIn, hasRole };

export default {
  authAPI,
  userAPI
};
