from collections import defaultdict

from backend.app.core.knowledge_base import KNOWLEDGE_BASE


def generate_recommendations(detections):
    grouped = defaultdict(list)

    # Group detections by class
    for detection in detections:
        grouped[detection["class"]].append(detection)

    findings = []

    for class_name, items in grouped.items():

        if class_name not in KNOWLEDGE_BASE:
            continue

        info = KNOWLEDGE_BASE[class_name]

        avg_confidence = round(
            sum(item["confidence"] for item in items) / len(items),
            3
        )

        findings.append({
            "class": class_name,
            "count": len(items),
            "confidence": avg_confidence,

            # NEW
            "location": items[0]["location"],

            "description": info["description"],
            "recommendation": info["recommendation"]
        })

    return findings