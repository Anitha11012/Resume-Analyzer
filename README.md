# AI Resume Analyzer

A microservices-based Resume Analyzer built with the MERN stack. The application allows users to upload resumes, extract PDF content, analyze ATS compatibility, and identify missing skills for job applications.

## Features

* PDF Resume Upload
* Resume Text Extraction using pdf-parse
* ATS Score Calculation
* Skill Extraction
* Missing Keyword Detection
* Job Description Matching
* REST API Architecture
* MongoDB Data Storage
* Microservices Design
* Docker Ready

## Architecture

```text
Frontend (React)
        |
        v
API Gateway
   |       |
   v       v
Resume   Analysis
Service  Service
   \       /
    \     /
     MongoDB
```

## Tech Stack

### Frontend

* React
* Vite
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* pdf-parse

### DevOps

* Docker
* Docker Compose
* GitHub Actions

## Project Structure

```text
resume-analyzer/

├── apps/
│   └── web/
│
├── services/
│   ├── resume-service/
│   ├── analysis-service/
│   └── api-gateway/
│
├── docker-compose.yml
└── README.md
```

## Microservices

### Resume Service

Responsibilities:

* Upload Resume
* Store PDF Metadata
* Extract Resume Text
* Manage Resume Records

### Analysis Service

Responsibilities:

* ATS Analysis
* Skill Detection
* Missing Keyword Identification
* Job Description Matching

### API Gateway

Responsibilities:

* Route Requests
* Centralized API Access

## API Endpoints

### Resume Service

Upload Resume

POST /api/resume/upload

Get Resume

GET /api/resume/:id

### Analysis Service

Analyze Resume

POST /api/analysis/:resumeId

Get Analysis

GET /api/analysis/:resumeId

Job Match

POST /api/analysis/match/:resumeId

## Local Setup

### Clone Repository

```bash
git clone <repository-url>
cd resume-analyzer
```

### Install Dependencies

Frontend

```bash
cd apps/web
npm install
```

Resume Service

```bash
cd services/resume-service
npm install
```

Analysis Service

```bash
cd services/analysis-service
npm install
```

API Gateway

```bash
cd services/api-gateway
npm install
```

### Environment Variables

Create a .env file inside each backend service.

Example:

```env
PORT=5002
MONGO_URI=your_mongodb_connection_string
```

### Run Services

Resume Service

```bash
npm run dev
```

Analysis Service

```bash
npm run dev
```

API Gateway

```bash
npm run dev
```

Frontend

```bash
npm run dev
```

## Future Enhancements

* OpenAI Resume Analysis
* Authentication & Authorization
* ATS Dashboard Visualizations
* Dockerized Deployment
* CI/CD Pipeline
* Cloud Deployment

## Author

Built as a portfolio project demonstrating:

* MERN Stack Development
* Microservices Architecture
* REST API Design
* MongoDB Integration
* Docker & DevOps Concepts
