# Module-Level Design

## Backend Modules

### Common Module (`com.app.common`)

Shared infrastructure used by all features.

```
common/
├── exception/
│   ├── GlobalExceptionHandler.java   # @ControllerAdvice, uniform error responses
│   └── ResourceNotFoundException.java # 404 exception
└── dto/
    ├── ApiResponse.java              # { success, data, message, timestamp }
    └── PagedResponse.java            # Extends ApiResponse with pagination
```

### Config Module (`com.app.config`)

Application-wide configuration.

```
config/
├── WebConfig.java        # CORS, custom argument resolvers
└── DatabaseConfig.java   # DataSource (profile-aware)
```

### Health Module (`com.app.health`)

```
health/
└── HealthController.java  # GET /api/health → { status: "UP" }
```

### Feature Module Template (`com.app.<feature>`)

Each domain feature follows this structure:

```
<feature>/
├── <Feature>Controller.java       # REST endpoints
├── <Feature>Service.java          # Interface
├── <Feature>ServiceImpl.java      # Implementation
├── <Feature>Repository.java       # Spring Data JPA
├── dto/
│   ├── Create<Feature>Request.java
│   ├── Update<Feature>Request.java
│   └── <Feature>Response.java
└── model/
    └── <Feature>.java             # JPA Entity
```

## Frontend Modules

### API Layer (`src/api/`)

```
api/
├── client.ts           # Base HTTP client (axios/fetch wrapper)
└── <feature>Api.ts     # Per-feature API functions
```

### Common Components (`src/components/common/`)

```
components/common/
├── Layout.tsx          # Page layout wrapper
├── Navbar.tsx          # Navigation bar
├── LoadingSpinner.tsx  # Loading state indicator
└── ErrorBoundary.tsx   # Error boundary component
```

### Feature Module Template (`src/features/<feature>/`)

```
features/<feature>/
├── <Feature>Page.tsx     # Route-level page
├── <Feature>List.tsx     # List/table view
├── <Feature>Form.tsx     # Create/edit form
├── <Feature>Detail.tsx   # Detail view
└── use<Feature>.ts       # Custom hook (data + state)
```

## Module Interaction Flow

```
User Action → React Component → Custom Hook → API Client
    → HTTP Request → Spring Controller → Service → Repository → Database
    → Entity → Service (→ DTO) → Controller → JSON Response
    → API Client → Custom Hook → React Component → UI Update
```
