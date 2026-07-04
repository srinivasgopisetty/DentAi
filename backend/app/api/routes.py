from fastapi import APIRouter

router = APIRouter(prefix="/api/v1")


@router.get("/health")
def health():
    return {
        "status": "healthy"
    }


@router.post("/predict")
async def predict():
    print("========== PREDICT ENDPOINT HIT ==========", flush=True)

    return {
        "status": "success",
        "message": "Predict endpoint is working."
    }