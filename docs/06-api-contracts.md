# API Contracts

## Base URL

- Development: `http://localhost:8080/api`
- Frontend proxy: `/api` (Vite proxies to backend)

## Common Response Format

### Success Response

```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful",
  "timestamp": "2026-01-01T00:00:00Z"
}
```

### Error Response

```json
{
  "success": false,
  "data": null,
  "message": "Resource not found",
  "timestamp": "2026-01-01T00:00:00Z"
}
```

### Paged Response

```json
{
  "success": true,
  "data": [ ... ],
  "message": null,
  "timestamp": "2026-01-01T00:00:00Z",
  "page": 0,
  "size": 20,
  "totalElements": 100,
  "totalPages": 5
}
```

## Health Endpoint

### GET /api/health

Returns application health status.

**Response** `200 OK`:
```json
{
  "status": "UP",
  "timestamp": "2026-01-01T00:00:00Z"
}
```

## Feature Endpoints

<!-- TODO: Define endpoints as features are implemented -->

### Template: CRUD for `<Feature>`

| Method | Path | Description | Request Body | Response |
|--------|------|-------------|-------------|----------|
| GET | `/api/<features>` | List all (paginated) | — | PagedResponse |
| GET | `/api/<features>/{id}` | Get by ID | — | ApiResponse |
| POST | `/api/<features>` | Create new | Create<Feature>Request | ApiResponse (201) |
| PUT | `/api/<features>/{id}` | Update | Update<Feature>Request | ApiResponse |
| DELETE | `/api/<features>/{id}` | Delete | — | ApiResponse (204) |

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 204 | No Content (successful delete) |
| 400 | Bad Request (validation error) |
| 404 | Not Found |
| 500 | Internal Server Error |
