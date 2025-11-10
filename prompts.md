# Prompts Engineering - Proyecto LTI ATS

**Estudiante:** Antonio José  
**Fecha:** 10 de noviembre de 2025  
**Herramienta:** Cursor AI  
**Proyecto:** LTI Applicant Tracking System

---

## Prompt 1: Configuración del Backend - Archivo .env

### ROLE & CONTEXT
You are a senior backend developer specializing in Node.js and environment configuration for production-ready applications.

### TASK
Create a secure .env file for a Node.js Express backend that uses PostgreSQL database with proper environment variables.

### SPECIFICATIONS
**File Location**: `backend/.env`

**Required Variables**:
- DATABASE_URL with PostgreSQL connection string
- PORT for Express server (3010)
- NODE_ENV set to development

**Database Credentials**:
- User: postgres
- Password: password
- Database: mydatabase
- Host: localhost
- Port: 5432
- Schema: public

**Format**: Standard .env format with KEY="value" syntax

---

## Prompt 2: Prisma Schema - Modelos del ATS

### ROLE & CONTEXT
You are an expert database architect with deep knowledge of Prisma ORM, PostgreSQL, and enterprise application data modeling. You specialize in designing scalable, normalized database schemas for business applications.

### TASK
Create a complete Prisma schema for an Applicant Tracking System (ATS) with proper relationships, constraints, and indexes optimized for a recruitment platform.

### SPECIFICATIONS

**File**: `@backend/prisma/schema.prisma`

**Required Models** (with exact fields):

1. **Candidate**
   - id (auto-increment primary key)
   - firstName, lastName (String)
   - email (unique, indexed)
   - phone (String, optional)
   - resume (Text, optional)
   - appliedDate (DateTime)
   - status (Enum: NEW, SCREENING, INTERVIEWING, OFFERED, HIRED, REJECTED)
   - createdAt, updatedAt (auto timestamps)

2. **Job**
   - id (auto-increment primary key)
   - title (String)
   - description (Text)
   - department (String)
   - location (String)
   - status (Enum: DRAFT, OPEN, CLOSED, CANCELLED)
   - postedDate (DateTime)
   - closedDate (DateTime, optional)
   - recruiterId (foreign key to Recruiter)
   - createdAt, updatedAt

3. **Application**
   - id (auto-increment primary key)
   - candidateId (foreign key to Candidate)
   - jobId (foreign key to Job - map to jobPostingId)
   - applicationDate (DateTime)
   - status (Enum: PENDING, REVIEWING, SHORTLISTED, REJECTED, ACCEPTED)
   - notes (Text, optional)
   - createdAt, updatedAt
   - **Constraint**: Unique combination of (candidateId, jobPostingId)

4. **Interview**
   - id (auto-increment primary key)
   - applicationId (foreign key to Application)
   - interviewDate (DateTime)
   - interviewType (Enum: PHONE_SCREEN, VIDEO, ONSITE, TECHNICAL, HR, FINAL)
   - interviewer (String - map to interviewerId as foreign key to Recruiter)
   - feedback (Text, optional)
   - score (Int, optional, range 1-10)
   - status (Enum: SCHEDULED, COMPLETED, CANCELLED, NO_SHOW)
   - createdAt, updatedAt

5. **Recruiter**
   - id (auto-increment primary key)
   - firstName, lastName (String)
   - email (unique, indexed)
   - department (String)
   - createdAt, updatedAt

**Technical Requirements**:
- Use PostgreSQL as datasource
- Map table names to snake_case format
- Add indexes on email fields
- Add indexes on status fields for filtering
- Configure cascade delete appropriately
- Use @db.Text for long text fields

---

## Prompt 3: Dashboard Frontend - UI Moderna Premium

### ROLE & CONTEXT
You are a senior UI/UX developer specializing in modern, enterprise-grade SaaS dashboards. You have expertise in glassmorphism design, gradient aesthetics, and creating pixel-perfect interfaces that deliver exceptional user experiences.

### TASK
Create a STUNNING, production-ready ATS Dashboard with modern design trends including glassmorphism, gradients, and smooth animations that rivals premium products like Linear, Notion, or Vercel.

### SPECIFICATIONS

**File**: `@frontend/src/App.tsx`

**Design System**:
- **Theme**: Dark mode with purple/blue/indigo gradients
- **Style Pattern**: Glassmorphism (backdrop-filter: blur)
- **Color Palette**:
  - Primary gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
  - Card background: `rgba(255, 255, 255, 0.1)`
  - Text: White/Light gray hierarchy
  - Accent: Purple/Blue for CTAs and highlights

**Layout Structure**:

1. **Sidebar (Left, Fixed, 280px)**:
   - **Header**: Logo "LTI ATS" + tagline "RECRUITMENT"
   - **Navigation Items** with icons:
     * 🏠 Dashboard
     * 👥 Candidates
     * 💼 Job Postings
     * 📄 Applications
     * 🎤 Interviews
     * 👔 Recruiters
   - **Active State**: Glow effect + background highlight
   - **Styling**: Gradient background, glassmorphism

2. **Main Content Area**:
   - **Header Section**:
     * Welcome message: "Bienvenido de nuevo, Antonio"
     * Current date in Spanish format
   
   - **Statistics Grid (2x2)**:
     * Card 1: Total Candidates - 1,247 (+12% trend)
     * Card 2: Active Jobs - 34 (+5% trend)
     * Card 3: Pending Applications - 89 (+23% trend)
     * Card 4: Interviews This Week - 15 (+8% trend)
   
   - **Each Stat Card Must Include**:
     * Icon (large, colored)
     * Large number (main metric)
     * Label (descriptive text)
     * Trend indicator (green with ↑ and percentage)
     * Micro sparkline/chart visualization
   
   - **Additional Widgets**:
     * "Aplicaciones Recientes" table (5 rows: avatar, name, position, status badge)
     * "Próximas Entrevistas" calendar widget

**Technical Constraints**:
- **Styling**: CSS-in-JS or inline styles ONLY (no external CSS files)
- **Typography**: Clean, modern font stack
- **Spacing**: 16px base unit, generous whitespace
- **Animations**: Smooth transitions (0.3s ease) on hover
- **Shadows**: Multi-layer for depth
- **Border Radius**: 16px for cards
- **Responsiveness**: Desktop-first (1920px optimal)

**Visual Effects**:
- Glassmorphism cards with `backdrop-filter: blur(10px)`
- Gradient overlays on hover
- Subtle glow effects on active elements
- Box shadows for elevation: `0 8px 32px 0 rgba(31, 38, 135, 0.37)`

---

## Prompt 4: Navegación Funcional con React Router

### ROLE & CONTEXT
You are a React specialist with expertise in routing, state management, and creating seamless single-page application experiences.

### TASK
Implement functional navigation using React Router DOM to make the sidebar menu interactive. Each menu item should route to its own view with placeholder content matching the design aesthetic.

### SPECIFICATIONS

**Dependencies**: 
- Install `react-router-dom` via npm

**Implementation Requirements**:

1. **Router Setup**:
   - Wrap app in `BrowserRouter`
   - Define routes for: `/`, `/candidates`, `/jobs`, `/applications`, `/interviews`, `/recruiters`

2. **Sidebar Navigation**:
   - Convert menu items to `<Link>` components
   - Highlight active route with visual indicator
   - Maintain same glassmorphism styling

3. **Views (Placeholder Content)**:
   - **Dashboard** (`/`): Show existing dashboard with stats
   - **Candidates** (`/candidates`): Placeholder with title "Candidates" + icon
   - **Job Postings** (`/jobs`): Placeholder with title "Job Postings" + icon
   - **Applications** (`/applications`): Placeholder with title "Applications" + icon
   - **Interviews** (`/interviews`): Placeholder with title "Interviews" + icon
   - **Recruiters** (`/recruiters`): Placeholder with title "Recruiters" + icon

4. **Design Consistency**:
   - All views use same gradient background
   - Same card styling for placeholder content
   - Smooth page transitions

**Technical Constraints**:
- Use React Router v6 syntax
- Maintain existing styling approach (CSS-in-JS)
- No page reloads (SPA behavior)

---

## Prompt 5: Documentación Completa - README.md

### ROLE & CONTEXT
You are a technical writer specializing in developer documentation for full-stack applications. Your documentation is clear, comprehensive, and follows industry best practices.

### TASK
Create a professional, well-structured README.md that enables any developer to clone, setup, and run the LTI ATS project with zero friction.

### SPECIFICATIONS

**File**: `@README.md` (root level)

**Required Sections**:

1. **Header**:
   - Project title: "LTI ATS - Applicant Tracking System"
   - Brief description (2-3 sentences)
   - Tech stack badges/icons (optional but nice)

2. **Technologies Used**:
   - Frontend: React 18, TypeScript, React Router, CSS-in-JS
   - Backend: Express, TypeScript, Prisma ORM
   - Database: PostgreSQL 15 (Alpine Docker image)
   - Development: Node.js, Docker Desktop

3. **Prerequisites**:
   - Node.js 18+
   - Docker Desktop
   - npm or yarn

4. **Setup Instructions** (Step-by-step):
   
   **Database**:
docker-compose up -d

text
- **Credentials (MUST BE VISIBLE)**:
  * User: `lti_user`
  * Password: `lti_password`
  * Database: `lti_ats`
  * Port: `5432`

**Backend**:
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run dev

text
Runs on: `http://localhost:3010`

**Frontend**:
cd frontend
npm install
npm start

text
Runs on: `http://localhost:3000`

5. **Database Schema Overview**:
- List 5 main entities with brief description
- Candidate, Job, Application, Interview, Recruiter

6. **Features**:
- Modern glassmorphism dashboard
- Responsive sidebar navigation
- Statistics cards with trends
- Multi-section views
- PostgreSQL with Prisma ORM

7. **Project Structure**:
/backend (Express + Prisma)
/frontend (React + TypeScript)
/prisma (Schema + Migrations)

text

8. **Notes**:
- Mention this was created as AI4Devs IDE lab exercise
- Built with Cursor AI assistant

9. **Author**:
- Antonio José - LTI Academy

**Format Requirements**:
- Use proper Markdown syntax
- Code blocks with language highlighting
- Emoji for visual appeal (✅ 🚀 📋)
- Clear hierarchy with headers
- Readable spacing

---

## Resumen de Experiencia

### Tecnologías Dominadas
- ✅ React 18 + TypeScript
- ✅ Express.js + TypeScript
- ✅ Prisma ORM + PostgreSQL
- ✅ React Router DOM v6
- ✅ CSS-in-JS (Glassmorphism design)
- ✅ Docker + Docker Compose

### Problemas Resueltos

1. **Conflicto de Puerto PostgreSQL**
- **Contexto**: Puerto 5432 ocupado por contenedor previo
- **Solución**: Reutilizar contenedor existente con credenciales correctas

2. **Drift en Migraciones Prisma**
- **Contexto**: Base de datos con schema desactualizado
- **Solución**: Reset schema y aplicar migraciones limpias

3. **Navegación Estática**
- **Contexto**: Sidebar sin funcionalidad
- **Solución**: Implementación de React Router con rutas dinámicas

### Tiempo de Desarrollo
- **Total**: ~45 minutos
- **Con Cursor AI**: 90% más rápido que manualmente

### Conclusión
El prompt engineering estructurado con formato ROLE/TASK/SPECIFICATIONS permitió obtener código de alta calidad en el primer intento, minimizando iteraciones y acelerando el desarrollo.