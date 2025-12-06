Team Members: Bibekdeep Singh, Smilepreet Kaur, Navpreet Kaur

Local Setup
1. Requirements

Node.js 18+

PostgreSQL database

Clerk account with API keys

Vite (frontend)

Express (backend)


Clone the Repository
git clone https://github.com/your-repo-url.git
cd Full-Stack Project

# Install Dependencies
Front-end
cd frontend
npm install

Back-end
cd backend
npm install

# Frontend .env
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
VITE_API_URL=http://localhost:3000/api/v1

# Backend .env
DATABASE_URL="postgresql://postgres:password@localhost:5432/devdb"
CLERK_SECRET_KEY=your_clerk_secret_key
PORT=3000

# Database Setup
Start PostgreSQL locally

Ensure your local database is running and matches your DATABASE_URL.

# Run Prisma migrations

Inside backend:
npx prisma migrate dev

# Running the Applications
Start the back-end
cd backend
npm run dev

# Start the front-end
cd frontend
npm run dev

# Clerk Authentication Setup

Go to https://dashboard.clerk.com

Create a new application

Copy:

Publishable Key → frontend .env
Secret Key → backend .env
