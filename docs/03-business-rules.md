# Business Rules

## Overview

This document defines the domain-specific rules, validations, and constraints that the application code must enforce.

## General Rules

| ID | Rule | Enforcement |
|----|------|-------------|
| BR-001 | All entities must have a unique identifier | Database (auto-generated primary key) |
| BR-002 | All timestamps must be stored in UTC | Backend (JPA auditing) |
| BR-003 | Soft delete preferred over hard delete | Backend (Service layer) |

## Domain-Specific Rules

<!-- TODO: Add rules specific to your domain -->

### Validation Rules

| Field | Rule | Error Message |
|-------|------|---------------|
| Name fields | Required, 1-255 characters | "Name is required and must be between 1 and 255 characters" |
| Date fields | Must not be in the past (where applicable) | "Date must be today or in the future" |

## Data Integrity

- All foreign key relationships must be enforced at the database level
- Cascading deletes must be explicitly defined per relationship
- Unique constraints must be enforced at both database and application level
