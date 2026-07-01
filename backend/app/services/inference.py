from ultralytics import YOLO

# Load model once
model = YOLO("runs/detect/dentai_v1/weights/best.pt")


def get_model():
    return model


def predict_image(image_path: str):

    results = model.predict(
        source=image_path,
        conf=0.25,
        save=False
    )

    detections = []

    for result in results:
        for box in result.boxes:

            detections.append({
                "class": model.names[int(box.cls)],
                "confidence": round(float(box.conf), 3),
                "bbox": [
                    round(float(x), 2)
                    for x in box.xyxy[0]
                ]
            })

    return detections