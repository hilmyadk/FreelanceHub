# FreelanceHub Backend API

Backend API untuk platform FreelanceHub menggunakan Node.js, Express, dan MongoDB.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Setup Environment Variables

File `.env` sudah dikonfigurasi dengan:
- MongoDB Connection String
- JWT Secret
- Server Port (5000)

### 3. Start Backend Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server akan berjalan di: **http://localhost:5000**

## 📡 API Endpoints

### Authentication

#### Register
- **POST** `/api/auth/register`
- Body:
```json
{
  "nama": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123",
  "noTelp": "081234567890",
  "jenisAkun": "customer",
  "deskripsi": "Deskripsi (required for freelancer)",
  "cvFile": "URL (optional)"
}
```

#### Login
- **POST** `/api/auth/login`
- Body:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
- **GET** `/api/auth/me`
- Headers: `Authorization: Bearer <token>`

### Users

#### Get Profile
- **GET** `/api/users/profile`
- Headers: `Authorization: Bearer <token>`

#### Update Profile
- **PUT** `/api/users/profile`
- Headers: `Authorization: Bearer <token>`
- Body:
```json
{
  "nama": "John Updated",
  "noTelp": "081234567890",
  "alamat": "Jakarta",
  "perusahaan": "PT ABC",
  "bio": "Customer bio",
  "deskripsi": "Freelancer description",
  "keahlian": "Design, Development",
  "portofolioUrl": "https://portfolio.com"
}
```

## 🗄️ Database Schema

### Users Collection
```javascript
{
  nama: String,
  email: String (unique),
  password: String (hashed),
  noTelp: String,
  role: String, // 'customer' | 'freelancer'
  
  // Customer fields
  alamat: String,
  perusahaan: String,
  bio: String,
  
  // Freelancer fields
  deskripsi: String,
  keahlian: [String],
  cvUrl: String,
  portofolioUrl: String,
  
  // Stats
  totalPesanan: Number,
  saldo: Number,
  rating: Number,
  
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Security

- Password hashing menggunakan **bcryptjs**
- JWT token untuk authentication
- Token expires dalam 7 hari
- CORS enabled untuk frontend

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas)
- **ODM**: Mongoose
- **Authentication**: JWT + bcryptjs
- **CORS**: Enabled

## 📝 Notes

- Server default port: **5000**
- MongoDB sudah terkoneksi ke Atlas
- JWT secret di `.env` (ganti untuk production)
- CORS configured untuk `http://localhost:5173` (Vite dev server)
