from fastapi import FastAPI
from .api import ingestion, qa

app = FastAPI(title="RAG Service")

app.include_router(ingestion.router, prefix="/ingestion")
app.include_router(qa.router, prefix="/qa")

