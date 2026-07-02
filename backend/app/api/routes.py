from pathlib import Path
import shutil

from fastapi import APIRouter, UploadFile, File, HTTPException

from backend.app.services.inference import get_model, predict_image
from backend.app.services.recommendation import generate_recommendations

from backend.app.schemas.response import (
    PredictionResponse,
    Analysis,
    Finding,
    Summary,
)

router = APIRouter(prefix="/api/v1")

# Load model once
model = get_model()

# Upload directory
UPLOAD_DIR = Path("backend/uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

# Allowed image formats
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
    response_model=PredictionResponse,
    tags=["Prediction"]
)
async def predict(file: UploadFile = File(...)):

    # Validate file extension
    image_path = UPLOAD_DIR / file.filename
    extension = image_path.suffix.lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Only JPG, JPEG and PNG images are allowed."
        )

    # Save uploaded image
    with open(image_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Run AI inference
    detections = predict_image(str(image_path))

    # Generate recommendations
    findings = generate_recommendations(detections)

    return PredictionResponse(
        analysis=Analysis(
            filename=file.filename,
            total_findings=len(findings)
        ),
        findings=[
            Finding(
                class_name=item["class"],
                count=item["count"],
                confidence=item["confidence"],
                description=item["description"],
                recommendations=item["recommendation"]
            )
            for item in findings
        ],
        summary=Summary(
            detected_conditions=sorted(
                list({item["class"] for item in findings})
            )
        ),
        disclaimer=(
            "DentAI is an AI-assisted educational tool. "
            "It is not a substitute for professional dental diagnosis "
            "or clinical judgment."
        )
    )