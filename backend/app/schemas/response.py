from typing import List
from pydantic import BaseModel


class Finding(BaseModel):
    class_name: str
    count: int
    confidence: float
    description: str
    recommendations: List[str]


class Summary(BaseModel):
    detected_conditions: List[str]


class Analysis(BaseModel):
    filename: str
    total_findings: int


class PredictionResponse(BaseModel):
    analysis: Analysis
    findings: List[Finding]
    summary: Summary
    disclaimer: str