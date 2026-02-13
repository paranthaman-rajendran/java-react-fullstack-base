# Full-Stack Personal Application

A personal full-stack application built with **React** (frontend), **Spring Boot** (backend), and **PostgreSQL** (database).

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + TypeScript (Vite) |
| Backend | Java 21 + Spring Boot 3.4 (Gradle) |
| Database | PostgreSQL 16 (Docker) |
| Migration | Flyway |
| Testing | JUnit 5, Vitest, React Testing Library |

## Prerequisites

- Java 21+
- Node.js 22+
- Docker
- Gradle 8.5+

## Quick Start

```bash
# 1. Start PostgreSQL
docker compose up -d db

# 2. Start backend (new terminal)
cd backend
gradlew bootRun --args="--spring.profiles.active=dev"

# 3. Start frontend (new terminal)
cd frontend
npm install
npm run dev
```

Or use the startup script:

```bash
# Windows
scripts\dev-start.bat

# Unix
./scripts/dev-start.sh
```

## Access

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:8080/api |
| Health Check | http://localhost:8080/api/health |

## Project Structure

```
├── docs/          # Product & technical documentation
├── backend/       # Spring Boot application
├── frontend/      # React application
├── scripts/       # Development utility scripts
└── docker-compose.yml
```

## Documentation

See the `docs/` folder for detailed documentation:

- [Product Overview](docs/01-product-overview.md)
- [Functional Requirements](docs/02-functional-requirements.md)
- [Business Rules](docs/03-business-rules.md)
- [High-Level Architecture](docs/04-high-level-architecture.md)
- [Module-Level Design](docs/05-module-level-design.md)
- [API Contracts](docs/06-api-contracts.md)
- [Data Model Design](docs/07-data-model-design.md)
- [Technology Decisions](docs/08-technology-decisions.md)
- [Setup & Deployment](docs/09-setup-and-deployment.md)
