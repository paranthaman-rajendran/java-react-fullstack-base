# Data Model Design

## Database

- **Engine**: PostgreSQL 16
- **Schema management**: Flyway migrations
- **Naming convention**: snake_case for tables and columns

## Common Columns

All entities include these audit columns:

| Column | Type | Description |
|--------|------|-------------|
| `id` | `BIGSERIAL` | Primary key (auto-generated) |
| `created_at` | `TIMESTAMP WITH TIME ZONE` | Record creation time (UTC) |
| `updated_at` | `TIMESTAMP WITH TIME ZONE` | Last modification time (UTC) |

## Entity-Relationship Diagram

<!-- TODO: Add ER diagram as features are defined -->

```
[Entity definitions will be added here as features are implemented]
```

## Table Definitions

<!-- TODO: Define tables as features are implemented -->

### Template

```sql
CREATE TABLE <feature_name>s (
    id              BIGSERIAL PRIMARY KEY,
    -- feature-specific columns here
    created_at      TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
```

## Indexes

<!-- TODO: Define indexes based on query patterns -->

| Table | Index | Columns | Purpose |
|-------|-------|---------|---------|
| — | — | — | — |

## Migration Strategy

- All schema changes via Flyway migration files
- Location: `backend/src/main/resources/db/migration/`
- Naming: `V<version>__<description>.sql` (e.g., `V1__initial_schema.sql`)
- Never use `ddl-auto: create/update` outside development
