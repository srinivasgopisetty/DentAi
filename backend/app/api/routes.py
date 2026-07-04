from pathlib import Path
import shutil

from fastapi import APIRouter, UploadFile, File

router = APIRouter(prefix="/api/v1")

UPLOAD_DIR = Path("backend/uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    print("Endpoint reached", flush=True)

    image_path = UPLOAD_DIR / file.filename

    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    print("Image saved", flush=True)

    return {
        "filename": file.filename,
        "saved": True
    }