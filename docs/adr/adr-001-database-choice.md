# ADR-001: Database Choice

## Status

Accepted

## Context

We need a database for a personal full-stack application. The options considered were SQLite (file-based, zero setup) and PostgreSQL (client-server, requires a running process).

## Decision

**PostgreSQL 16** running in a Docker container.

## Consequences

**Positive:**
- Docker is already available on the development machine, making setup a single command
- Spring Data JPA and Hibernate have excellent PostgreSQL support with no dialect edge cases
- Flyway has first-class PostgreSQL support
- TestContainers works seamlessly with PostgreSQL for integration tests
- Production-ready if the application ever grows beyond personal use
- Supports concurrent connections, full-text search, JSON columns, and advanced features

**Negative:**
- Requires Docker to be running (minor overhead)
- Slightly more complex than SQLite's zero-config approach

**Trade-off:** The "lightweight" advantage of SQLite is negated by Docker making PostgreSQL equally easy to start and stop.
