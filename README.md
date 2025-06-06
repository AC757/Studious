# Studious - An Ed-Tech Platform

![Last Commit](https://img.shields.io/github/last-commit/AC757/Studious)
![Top Language](https://img.shields.io/github/languages/top/AC757/Studious)
![Language Count](https://img.shields.io/github/languages/count/AC757/Studious)

**Empower Learning, Transform Lives, Ignite Potential**

## 🚀 Overview

Studious is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides a seamless and interactive learning experience for students while offering instructors a platform to showcase their expertise globally.

### Key Features

- 📚 **Course Management**: Create, update, delete, and manage educational content
- 👥 **Dual User Roles**: Separate interfaces for students and instructors
- 💳 **Payment Integration**: Secure course purchases via Razorpay
- ☁️ **Cloud Storage**: Media management through Cloudinary
- 🔐 **Secure Authentication**: JWT-based auth with OTP verification
- 📱 **Responsive Design**: Seamless experience across all devices
- 📊 **Analytics Dashboard**: Insights for instructors on course performance
- ⭐ **Rating System**: Students can rate and review courses

## 🛠️ Built With

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

### Services
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (v4.4 or higher)
- **Git**

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AC757/Studious.git
   cd Studious
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the server directory with the following variables:
   ```env
   # Database
   MONGODB_URL=your_mongodb_connection_string
   
   # JWT Secret
   JWT_SECRET=your_jwt_secret_key
   
   # Email Configuration
   MAIL_HOST=your_smtp_host
   MAIL_USER=your_email
   MAIL_PASS=your_email_password
   
   # Cloudinary Configuration
   CLOUD_NAME=your_cloudinary_cloud_name
   API_KEY=your_cloudinary_api_key
   API_SECRET=your_cloudinary_api_secret
   
   # Razorpay Configuration
   RAZORPAY_KEY=your_razorpay_key
   RAZORPAY_SECRET=your_razorpay_secret
   
   # Frontend URL
   FRONTEND_URL=http://localhost:3000
   ```

## 💻 Usage

### Development Mode

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the frontend application**
   ```bash
   cd client
   npm start
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:4000/api

### Production Mode

```bash
# Build the frontend
cd client
npm run build

# Start the production server
cd ../server
npm start
```

## 🏗️ System Architecture

StudyNotion follows a client-server architecture with three main components:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│   Frontend      │────▶│   Backend       │────▶│   Database      │
│   (React)       │     │   (Node.js)     │     │   (MongoDB)     │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
        │                        │                        │
        └────────────────────────┴────────────────────────┘
                          RESTful APIs
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-otp` - Verify OTP
- `POST /api/auth/forgot-password` - Password reset

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get specific course
- `POST /api/courses` - Create new course (Instructor only)
- `PUT /api/courses/:id` - Update course (Instructor only)
- `DELETE /api/courses/:id` - Delete course (Instructor only)
- `POST /api/courses/:id/rate` - Rate a course (Student only)

### User Management
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update user profile
- `GET /api/dashboard` - Get dashboard data

## 🧪 Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🚀 Deployment

StudyNotion can be deployed using the following services:

- **Frontend**: [Vercel](https://vercel.com/)
- **Backend**: [Render](https://render.com/)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Media Storage**: [Cloudinary](https://cloudinary.com/)

### Deployment Steps

1. **Deploy Database**
   - Create a MongoDB Atlas cluster
   - Get connection string

2. **Deploy Backend**
   - Push code to GitHub
   - Connect Render to repository
   - Set environment variables
   - Deploy

3. **Deploy Frontend**
   - Build the React app
   - Deploy to Vercel
   - Configure environment variables
