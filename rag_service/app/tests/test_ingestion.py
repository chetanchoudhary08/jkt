import pytest
from httpx import AsyncClient
from httpx import ASGITransport
from ..main import app

@pytest.mark.asyncio
async def test_upload_document():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        response = await ac.post("/ingestion/upload", files={"file": ("foo.txt", b"hello")})
    assert response.status_code == 200
    assert response.json()["status"] == "ingested"
