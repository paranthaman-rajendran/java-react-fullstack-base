@echo off
echo ===========================================
echo  Full-Stack App - Development Startup
echo ===========================================
echo.

echo Starting PostgreSQL...
docker compose up -d db
if %errorlevel% neq 0 (
    echo ERROR: Failed to start PostgreSQL
    exit /b 1
)

echo Waiting for PostgreSQL to be ready...
timeout /t 3 /nobreak

echo.
echo Starting Backend (Spring Boot)...
echo Press Ctrl+C to stop backend, then close this window.
start "Backend" cmd /k "cd backend && gradlew.bat bootRun --args=""--spring.profiles.active=dev"""

echo Waiting for backend to start (10 seconds)...
timeout /t 10 /nobreak

echo.
echo Starting Frontend (React + Vite)...
echo Press Ctrl+C to stop frontend, then close that window.
cd frontend
call npm install >nul 2>&1
start "Frontend" cmd /k "npm run dev"

echo.
echo ===========================================
echo Services starting:
echo Frontend:  http://localhost:5173
echo Backend:   http://localhost:8080/api
echo Health:    http://localhost:8080/api/health
echo Database:  localhost:5432
echo ===========================================
echo.
echo Press any key to close this window (services will continue running)
pause >nul
