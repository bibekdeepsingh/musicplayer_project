# Music Player Organizer – Full Stack Project

This project is a full-stack music application developed over five sprints.  
It includes a React (Vite + TypeScript) front-end, a Node.js/Express back-end,  
a SQL database using Prisma ORM, and authentication using Clerk.

---

## Team Members
- Bibekdeep Singh – Playlist Manager  
- Smilepreet Kaur Bajwa – Subscription Manager  
- Navpreet Kaur – Now Playing Feature  

---

# Project Overview

The Music Player Organizer allows users to:
- View and manage playlists  
- Manage subscriptions  
- Track a personalized “Now Playing” song  
- Register, log in, and authenticate with Clerk  
- Store and retrieve data from a SQL database  
- Navigate through multiple pages using React Router  
- Use reusable components, hooks, services, and repositories  

The project evolved across five sprints, each adding new functionality.



### Local Setup
# Requirements

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

---

# Sprint Descriptions

## Sprint 1
- Group formation and project theme selection  
- Project initialized with Vite (React + TypeScript)  
- High-level components created  
- App rendered initial components  
- Basic styling and project README created  
- Git workflow established with protected branches  

## Sprint 2
- Added React Router and multi-page navigation  
- Navigation bar added to header/footer  
- Shared state implemented across pages  
- Form components created  
- Dynamic list components created for add/remove functionality  

## Sprint 3
- Project refactored using custom hooks, services, and repositories  
- Business logic moved to services  
- Data logic moved to repositories  
- Test data created for initial development  
- Architecture documentation created  

## Sprint 4
- Back-end created using Node.js and Express  
- Prisma ORM installed and connected to SQL database  
- Controllers, services, routes, middleware added  
- CORS configured  
- Front-end updated to fetch data from the back-end instead of test data  

## Sprint 5
- Clerk authentication added to front-end and back-end  
- Session tokens sent to back-end for protected routes  
- Database schema updated with user-linked data models  
- Personalized Now Playing feature implemented  
- Logged-in and logged-out UI behaviors added  
- Full local setup documentation added  
