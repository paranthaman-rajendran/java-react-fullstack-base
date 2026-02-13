# Setup and Deployment Guide

## Prerequisites

| Tool | Version | Verification |
|------|---------|-------------|
| Java | 21+ | `java -version` |
| Node.js | 22+ | `node -v` |
| Docker | 29+ | `docker --version` |
| Gradle | 8.5+ | `gradle -v` |

## Local Development Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd full-stack-app-plan
```

### 2. Start PostgreSQL

```bash
docker compose up -d db
```

Verify: `docker ps` should show `app-postgres` running on port 5432.

### 3. Start Backend

```bash
cd backend
gradlew bootRun --args="--spring.profiles.active=dev"
```

Verify: `curl http://localhost:8080/api/health` returns `{"status":"UP"}`.

### 4. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Verify: Open `http://localhost:5173` in browser.

### Quick Start (All at Once)

```bash
# Windows
scripts\dev-start.bat

# Unix
./scripts/dev-start.sh
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `SPRING_PROFILES_ACTIVE` | `dev` | Spring profile |
| `POSTGRES_DB` | `appdb` | Database name |
| `POSTGRES_USER` | `appuser` | Database username |
| `POSTGRES_PASSWORD` | `apppass` | Database password |

## Port Assignments

| Service | Port |
|---------|------|
| React (Vite) | 5173 |
| Spring Boot | 8080 |
| PostgreSQL | 5432 |

## Database Management

### Run Migrations

Flyway migrations run automatically on Spring Boot startup.

### Reset Database

```bash
docker compose down -v    # Removes volume (data)
docker compose up -d db   # Fresh start
```

## Running Tests

### Backend

```bash
cd backend
gradlew test
```

### Frontend

```bash
cd frontend
npm test
```

## Docker Full Stack (Production-like)

```bash
docker compose up --build
```

This builds and runs all services (PostgreSQL + Backend + Frontend).
