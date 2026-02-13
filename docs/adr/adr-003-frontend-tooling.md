# ADR-003: Frontend Tooling

## Status

Accepted

## Context

We need a build tool and development server for the React frontend. The main options are Create React App (CRA) and Vite.

## Decision

**Vite** with **TypeScript** in strict mode.

## Consequences

**Positive:**
- CRA is deprecated and no longer maintained; Vite is the modern standard
- Significantly faster dev server startup and hot module replacement
- Built-in proxy configuration for backend communication
- First-class TypeScript support
- Vitest integrates naturally for testing (same config)
- TypeScript catches type errors at compile time and provides self-documenting code

**Negative:**
- Older React tutorials reference CRA; some adaptation needed
- TypeScript adds compilation step (negligible cost)

**Trade-off:** Modern, maintained tooling with better DX outweighs the adaptation cost from CRA-based tutorials.
