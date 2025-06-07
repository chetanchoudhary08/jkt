from fastapi import APIRouter, UploadFile, HTTPException

from ..services.embedding_service import EmbeddingService

router = APIRouter()

@router.post('/upload')
async def upload_document(file: UploadFile):
    content = await file.read()
    try:
        doc_id = await EmbeddingService.ingest(file.filename, content)
        return {"id": doc_id, "status": "ingested"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
