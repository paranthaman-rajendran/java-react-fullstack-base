# QUICK START GUIDE

## 🚀 Start Everything (One Command)

### Windows:

```bash
scripts\dev-start.bat
```

### Mac/Linux:

```bash
chmod +x scripts/dev-start.sh
./scripts/dev-start.sh
```

This starts:

- ✅ PostgreSQL (Docker)
- ✅ Spring Boot Backend (port 8080)
- ✅ React Frontend (port 5173)

## 📍 Open in Browser

- **Frontend**: http://localhost:5173
- **Backend Health**: http://localhost:8080/api/health
- **API Base**: http://localhost:8080/api

## 📁 Project Structure

```
├── docs/              ← Product & technical docs
├── backend/           ← Spring Boot + Java
├── frontend/          ← React + TypeScript
├── docker-compose.yml ← PostgreSQL container
└── scripts/           ← Dev startup scripts
```

## 🔧 Manual Startup (if preferred)

**Terminal 1 — Database:**

```bash
docker compose up db
```

**Terminal 2 — Backend:**

```bash
cd backend
./gradlew bootRun --args="--spring.profiles.active=dev"
```

**Terminal 3 — Frontend:**

```bash
cd frontend
npm install
npm run dev
```

## 📚 Documentation Structure

| File                                 | Purpose                    |
| ------------------------------------ | -------------------------- |
| `docs/01-product-overview.md`        | What the app does          |
| `docs/02-functional-requirements.md` | Features & user stories    |
| `docs/03-business-rules.md`          | Domain rules & validation  |
| `docs/04-high-level-architecture.md` | System design              |
| `docs/05-module-level-design.md`     | Backend/frontend structure |
| `docs/06-api-contracts.md`           | REST endpoint specs        |
| `docs/07-data-model-design.md`       | Database schema            |
| `docs/08-technology-decisions.md`    | Why each tech choice       |
| `docs/09-setup-and-deployment.md`    | Deploy instructions        |

## 🧪 Run Tests

**Backend:**

```bash
cd backend && ./gradlew test
```

**Frontend:**

```bash
cd frontend && npm test
```

## 🛑 Stop Everything

Close all open terminals. Then:

```bash
docker compose down
```

## 📝 Next Steps

1. Open `docs/01-product-overview.md` → Define your application
2. Add business rules in `docs/03-business-rules.md`
3. Create first feature:
   - Add API endpoint in `backend/src/main/java/com/app/<feature>/`
   - Create React component in `frontend/src/features/<feature>/`
   - Implement Flyway migration in `backend/src/main/resources/db/migration/V<N>__<name>.sql`
4. Update API contracts in `docs/06-api-contracts.md`
5. Write tests (backend & frontend)

## 💡 Tech Stack

| Layer      | Technology                               |
| ---------- | ---------------------------------------- |
| Frontend   | React 18 + TypeScript + Vite             |
| Backend    | Spring Boot 3.4 + Java 21 + Gradle       |
| Database   | PostgreSQL 16 (Docker)                   |
| Migrations | Flyway                                   |
| Testing    | JUnit 5 + Vitest + React Testing Library |

---

**Questions?** Check the docs/ folder or README.md
