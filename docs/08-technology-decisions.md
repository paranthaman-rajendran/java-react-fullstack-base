# Technology Decisions

## Summary

| Area | Decision | ADR |
|------|----------|-----|
| Database | PostgreSQL 16 via Docker | [ADR-001](adr/adr-001-database-choice.md) |
| Build Tool | Gradle 8.5 | [ADR-002](adr/adr-002-build-tool.md) |
| Frontend Tooling | Vite + TypeScript | [ADR-003](adr/adr-003-frontend-tooling.md) |
| Backend Framework | Spring Boot 3.4 | Established standard |
| Schema Migration | Flyway | Spring Boot native integration |
| Frontend State | useState + custom hooks | Start simple, escalate to Zustand if needed |
| CSS | TBD (CSS Modules or Tailwind) | To be decided during implementation |
| API Format | REST + JSON | Standard for CRUD applications |
| Containerization | Docker + Docker Compose | Local development and future deployment |

## ADR Template

Each Architecture Decision Record follows this format:

```markdown
# ADR-NNN: <Title>
## Status: Accepted | Proposed | Deprecated
## Context: What problem or decision are we facing?
## Decision: What did we choose?
## Consequences: What are the trade-offs?
```

See individual ADRs in the `adr/` subdirectory for detailed rationale.
