// LocalStorage Service - Menggantikan Backend API
// Menyimpan semua data user, authentication, dan profile secara lokal

const STORAGE_KEYS = {
  USERS: 'freelancehub_users',
  CURRENT_USER: 'freelancehub_current_user',
  FREELANCER_SERVICES: 'freelancehub_services',
  ORDERS: 'freelancehub_orders',
  TRANSACTIONS: 'freelancehub_transactions'
};

// ==================== Helper Functions ====================

const getFromStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error reading from localStorage: ${key}`, error);
    return null;
  }
};

const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Error saving to localStorage: ${key}`, error);
    return false;
  }
};

// ==================== User Management ====================

// Initialize default users (admin, demo accounts)
const initializeDefaultUsers = () => {
  const users = getFromStorage(STORAGE_KEYS.USERS);
  if (!users || users.length === 0) {
    const defaultUsers = [
      {
        id: 'admin-001',
        email: 'admin@freelancehub.com',
        password: 'admin123', // Dalam production, hash password!
        name: 'Admin FreelanceHub',
        role: 'admin',
        createdAt: new Date().toISOString()
      },
      {
        id: 'customer-001',
        email: 'customer@demo.com',
        password: 'customer123',
        name: 'Demo Customer',
        role: 'customer',
        phone: '08123456789',
        address: 'Jakarta, Indonesia',
        createdAt: new Date().toISOString()
      },
      {
        id: 'freelancer-001',
        email: 'freelancer@demo.com',
        password: 'freelancer123',
        name: 'Demo Freelancer',
        role: 'freelancer',
        phone: '08198765432',
        skills: ['Web Development', 'UI/UX Design'],
        portfolio: 'https://portfolio.demo.com',
        balance: 0,
        createdAt: new Date().toISOString()
      }
    ];
    saveToStorage(STORAGE_KEYS.USERS, defaultUsers);
    return defaultUsers;
  }
  return users;
};

// Get all users
export const getAllUsers = () => {
  return getFromStorage(STORAGE_KEYS.USERS) || initializeDefaultUsers();
};

// Get user by ID
export const getUserById = (userId) => {
  const users = getAllUsers();
  return users.find(user => user.id === userId);
};

// Get user by email
export const getUserByEmail = (email) => {
  const users = getAllUsers();
  return users.find(user => user.email.toLowerCase() === email.toLowerCase());
};

// ==================== Authentication ====================

// Register new user
export const register = ({ email, password, name, role, phone, ...otherData }) => {
  try {
    // Validasi input
    if (!email || !password || !name || !role) {
      throw new Error('Semua field wajib diisi');
    }

    // Cek apakah email sudah terdaftar
    const existingUser = getUserByEmail(email);
    if (existingUser) {
      throw new Error('Email sudah terdaftar');
    }

    // Buat user baru
    const users = getAllUsers();
    const newUser = {
      id: `${role}-${Date.now()}`,
      email: email.toLowerCase(),
      password, // Dalam production, hash password!
      name,
      role,
      phone: phone || '',
      ...(role === 'freelancer' && {
        skills: [],
        portfolio: '',
        balance: 0
      }),
      ...(role === 'customer' && {
        address: ''
      }),
      ...otherData,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveToStorage(STORAGE_KEYS.USERS, users);

    // Auto login setelah register
    const userWithoutPassword = { ...newUser };
    delete userWithoutPassword.password;
    
    saveToStorage(STORAGE_KEYS.CURRENT_USER, userWithoutPassword);

    return {
      success: true,
      message: 'Registrasi berhasil',
      user: userWithoutPassword
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

// Login user
export const login = (email, password, role) => {
  try {
    // Validasi input
    if (!email || !password) {
      throw new Error('Email dan password wajib diisi');
    }

    // Cari user berdasarkan email
    const user = getUserByEmail(email);

    if (!user) {
      throw new Error('Email tidak terdaftar');
    }

    // Cek password
    if (user.password !== password) {
      throw new Error('Password salah');
    }

    // Cek role (opsional)
    if (role && user.role !== role) {
      throw new Error(`Akun ini terdaftar sebagai ${user.role}, bukan ${role}`);
    }

    // Simpan current user (tanpa password)
    const userWithoutPassword = { ...user };
    delete userWithoutPassword.password;
    
    saveToStorage(STORAGE_KEYS.CURRENT_USER, userWithoutPassword);

    return {
      success: true,
      message: 'Login berhasil',
      user: userWithoutPassword
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

// Logout user
export const logout = () => {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  return {
    success: true,
    message: 'Logout berhasil'
  };
};

// Get current logged in user
export const getCurrentUser = () => {
  return getFromStorage(STORAGE_KEYS.CURRENT_USER);
};

// Check if user is logged in
export const isLoggedIn = () => {
  return getCurrentUser() !== null;
};

// Check user role
export const hasRole = (role) => {
  const user = getCurrentUser();
  return user && user.role === role;
};

// ==================== Profile Management ====================

// Update user profile
export const updateProfile = (userId, updates) => {
  try {
    const users = getAllUsers();
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
      throw new Error('User tidak ditemukan');
    }

    // Update user data (kecuali email, password, role, id)
    const allowedUpdates = ['name', 'phone', 'address', 'skills', 'portfolio'];
    const filteredUpdates = {};
    
    Object.keys(updates).forEach(key => {
      if (allowedUpdates.includes(key)) {
        filteredUpdates[key] = updates[key];
      }
    });

    users[userIndex] = {
      ...users[userIndex],
      ...filteredUpdates,
      updatedAt: new Date().toISOString()
    };

    saveToStorage(STORAGE_KEYS.USERS, users);

    // Update current user juga jika sedang login
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.id === userId) {
      const updatedUser = { ...users[userIndex] };
      delete updatedUser.password;
      saveToStorage(STORAGE_KEYS.CURRENT_USER, updatedUser);
    }

    return {
      success: true,
      message: 'Profile berhasil diupdate',
      user: users[userIndex]
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

// Change password
export const changePassword = (userId, oldPassword, newPassword) => {
  try {
    const users = getAllUsers();
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
      throw new Error('User tidak ditemukan');
    }

    if (users[userIndex].password !== oldPassword) {
      throw new Error('Password lama salah');
    }

    users[userIndex].password = newPassword;
    users[userIndex].updatedAt = new Date().toISOString();

    saveToStorage(STORAGE_KEYS.USERS, users);

    return {
      success: true,
      message: 'Password berhasil diubah'
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

// ==================== Admin Functions ====================

// Delete user (admin only)
export const deleteUser = (userId) => {
  try {
    let users = getAllUsers();
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
      throw new Error('User tidak ditemukan');
    }

    users = users.filter(user => user.id !== userId);
    saveToStorage(STORAGE_KEYS.USERS, users);

    return {
      success: true,
      message: 'User berhasil dihapus'
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

// Get users by role
export const getUsersByRole = (role) => {
  const users = getAllUsers();
  return users.filter(user => user.role === role);
};

// ==================== Initialize ====================

// Initialize default data saat pertama kali load
export const initializeApp = () => {
  initializeDefaultUsers();
  
  // Initialize other data if needed
  if (!getFromStorage(STORAGE_KEYS.FREELANCER_SERVICES)) {
    saveToStorage(STORAGE_KEYS.FREELANCER_SERVICES, []);
  }
  
  if (!getFromStorage(STORAGE_KEYS.ORDERS)) {
    saveToStorage(STORAGE_KEYS.ORDERS, []);
  }
  
  if (!getFromStorage(STORAGE_KEYS.TRANSACTIONS)) {
    saveToStorage(STORAGE_KEYS.TRANSACTIONS, []);
  }
};

// Export storage keys untuk digunakan di komponen lain
export { STORAGE_KEYS };
