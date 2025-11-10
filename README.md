# LTI ATS - Applicant Tracking System

## 📋 Description

Modern Applicant Tracking System built with React, TypeScript, Express, Prisma, and PostgreSQL.

## 🚀 Technologies Used

- **Frontend**: React 18, TypeScript, React Router, CSS-in-JS
- **Backend**: Express, TypeScript, Prisma ORM
- **Database**: PostgreSQL 15
- **Development**: Node.js, Docker

## 📦 Prerequisites

- Node.js 18+ 
- Docker Desktop
- npm or yarn

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/AntonioJose-Dev/AI4Devs-lab-ides-202510-RO.git
cd AI4Devs-lab-ides-202510-RO
```

### 2. Database Setup (PostgreSQL with Docker)

```bash
docker-compose up -d
```

**Database Credentials:**
- **User**: lti_user
- **Password**: lti_password
- **Database**: lti_ats
- **Port**: 5432

### 3. Backend Setup

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

Backend will run on: http://localhost:3010

### 4. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run on: http://localhost:3000

## 📊 Database Schema

- **Candidates**: Applicant information
- **Jobs**: Job postings
- **Applications**: Candidate applications to jobs
- **Interviews**: Interview scheduling and feedback
- **Recruiters**: Recruiter profiles

## 🎨 Features

✅ Modern glassmorphism dashboard design

✅ Responsive sidebar navigation

✅ Statistics cards with trend indicators

✅ Recent applications view

✅ Upcoming interviews calendar

✅ Multi-section navigation (Dashboard, Candidates, Jobs, Applications, Interviews, Recruiters)

## 📝 Notes

This project was created as part of the AI4Devs IDE lab exercise using Cursor AI assistant.

## 👨‍💻 Author

Antonio José - LTI Academy
