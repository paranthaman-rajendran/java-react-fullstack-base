#!/bin/bash

echo "=========================================="
echo " Full-Stack App - Development Startup"
echo "=========================================="
echo ""

echo "Starting PostgreSQL..."
docker compose up -d db

if [ $? -ne 0 ]; then
    echo "ERROR: Failed to start PostgreSQL"
    exit 1
fi

echo "Waiting for PostgreSQL to be ready..."
sleep 3

echo ""
echo "Starting Backend (Spring Boot)..."
echo "Press Ctrl+C in the terminal to stop."
cd backend
./gradlew bootRun --args="--spring.profiles.active=dev" &
BACKEND_PID=$!

echo "Waiting for backend to start (10 seconds)..."
sleep 10

echo ""
echo "Starting Frontend (React + Vite)..."
cd ../frontend
npm install >/dev/null 2>&1
npm run dev &
FRONTEND_PID=$!

echo ""
echo "=========================================="
echo "Services started:"
echo "Frontend:  http://localhost:5173"
echo "Backend:   http://localhost:8080/api"
echo "Health:    http://localhost:8080/api/health"
echo "Database:  localhost:5432"
echo "=========================================="
echo ""
echo "Press Ctrl+C to stop all services."

wait
