# High-Level Architecture

## Architecture Style

Two-tier client-server architecture: React SPA communicates with a Spring Boot REST API over HTTP/JSON.

## System Diagram

```
┌─────────────────────────────┐
│  React SPA (Vite/TS)        │  Port 5173
│  Pages → Components → API   │
└──────────┬──────────────────┘
           │ HTTP/REST (JSON)
           │ Vite proxy: /api/* → :8080
           ▼
┌─────────────────────────────┐
│  Spring Boot                │  Port 8080
│  Controller → Service → Repo│
└──────────┬──────────────────┘
           │ JDBC (Spring Data JPA)
           ▼
┌─────────────────────────────┐
│  PostgreSQL 16 (Docker)     │  Port 5432
└─────────────────────────────┘
```

## Layer Responsibilities

### Frontend (React + TypeScript)

| Component | Responsibility |
|-----------|---------------|
| Pages | Route-level components, layout composition |
| Components | Reusable UI elements |
| Hooks | Data fetching, state management |
| API Client | HTTP abstraction, request/response handling |

### Backend (Spring Boot)

| Layer | Responsibility |
|-------|---------------|
| Controller | Accept HTTP requests, validate input (`@Valid`), return DTOs |
| Service | Business logic, transaction management, entity ↔ DTO conversion |
| Repository | Data access via Spring Data JPA |
| Entity/Model | JPA entities mapped to database tables |
| DTO | Request/Response objects (never expose entities) |

### Database (PostgreSQL)

| Concern | Approach |
|---------|----------|
| Schema management | Flyway migrations |
| Connection | JDBC via HikariCP (Spring Boot default) |
| Local setup | Docker container |

## Communication

- **Development**: Vite dev server proxies `/api/*` to Spring Boot on port 8080
- **Production**: Nginx serves static React build and reverse-proxies `/api/*` to Spring Boot
- **Data format**: JSON for all API communication
- **API prefix**: All backend endpoints under `/api/`

## Key Design Decisions

- Package-by-feature organization in backend
- Feature-based directory structure in frontend
- Interfaces for all Service classes
- Constructor injection only (no field `@Autowired`)
- DTOs at API boundary (entities never exposed)
