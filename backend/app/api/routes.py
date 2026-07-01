from fastapi import APIRouter, UploadFile, File
from backend.app.services.inference import get_model, predict_image
from pathlib import Path
import shutil
from fastapi import HTTPException

router = APIRouter(prefix="/api/v1")

model = get_model()
UPLOAD_DIR = Path("backend/uploads")
UPLOAD_DIR.mkdir(exist_ok=True)
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png"}

@router.get(
    "/health",
    tags=["Health"]
)
def health_check():
    return {
        "status": "healthy",
        "message": "DentAI API is running"
    }


@router.get(
        "/model",
        tags=["Model"]
)
def model_info():
    return {
        "message": "DentAI model loaded successfully",
        "model_type": str(type(model))
    }

@router.post(
    "/predict",
    tags=["Prediction"]
)
async def predict(file: UploadFile = File(...)):

    # Save uploaded image
    image_path = UPLOAD_DIR / file.filename
    extension = image_path.suffix.lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
        status_code=400,
        detail="Only JPG, JPEG and PNG images are allowed"
    )

    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Run AI inference
    detections = predict_image(str(image_path))

    return {
        "filename": file.filename,
        "total_detections": len(detections),
        "detections": detections
    }