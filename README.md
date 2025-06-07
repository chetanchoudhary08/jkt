# Document Management and Q&A Prototype

This repository contains a minimal prototype demonstrating a document ingestion
service with RAG-based Q&A, a Node.js service for authentication and document
management, and an Angular front‑end. All services are dockerised.

## Requirements
- Docker and Docker Compose
- Node 20 and Python 3.11 if running locally without Docker

## Running with Docker

```bash
docker-compose up --build
```

The following services will be available:
- **RAG Service** – `http://localhost:8000`
- **User Service** – `http://localhost:3000`
- **Frontend** – `http://localhost:4200`

## Running Tests

Python service:
```bash
cd rag_service
pip install -r requirements.txt
pytest
```

Node service:
```bash
cd user_service
npm install
npm test
```

Frontend:
```bash
cd frontend
npm install
npm test
```

## Project Structure
```
rag_service/   # FastAPI application for ingestion and Q&A
user_service/  # Node.js Express API for auth and docs
frontend/      # Angular client
```
