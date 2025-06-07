from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from ..services.qa_service import QAService

router = APIRouter()

class Question(BaseModel):
    query: str
    document_ids: list[int] | None = None

@router.post('/')
async def ask(question: Question):
    try:
        answer = await QAService.answer(question.query, question.document_ids)
        return {"answer": answer}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
