from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from backend.app.api.routes import router

app = FastAPI(
    title="DentAI API",
    description="""
## AI-Powered Dental X-Ray Analysis API

DentAI analyzes panoramic dental X-ray images using YOLO11 object detection.

### Features

- Detect Cavities
- Detect Fillings
- Detect Implants
- Detect Impacted Teeth
- AI-powered inference
- RESTful API

⚠️ This API is intended for educational and research purposes only.
""",
    version="1.0.0",
    contact={
        "name": "Srinivas Gopisetty",
        "email": "gopisettysrinivas5@gmail.com"
    },
    license_info={
        "name": "MIT License"
    }
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(router)


@app.get("/")
def home():
    return {
        "message": "Welcome to DentAI API!",
        "status": "Running Successfully"
    }