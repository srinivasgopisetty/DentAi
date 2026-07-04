from typing import List
from pydantic import BaseModel


class Detection(BaseModel):
    class_name: str
    confidence: float
    bbox: List[float]


class Finding(BaseModel):
    class_name: str
    count: int
    confidence: float
    location: str
    description: str
    recommendations: List[str]


class Summary(BaseModel):
    detected_conditions: List[str]


class Analysis(BaseModel):
    filename: str
    total_findings: int
    report_name: str


class PredictionResponse(BaseModel):
    analysis: Analysis
    findings: List[Finding]
    detections: List[Detection]
    summary: Summary
    disclaimer: str