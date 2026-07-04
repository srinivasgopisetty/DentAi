from ultralytics import YOLO
from backend.app.services.localization import estimate_region
import traceback

print("Loading YOLO model...", flush=True)

model = YOLO("runs/detect/dentai_v1/weights/best.pt")

print("YOLO model loaded successfully.", flush=True)


def get_model():
    return model


def predict_image(image_path: str):
    try:
        print(f"Running inference on: {image_path}", flush=True)

        results = model.predict(
            source=image_path,
            conf=0.25,
            save=False,
            verbose=True,
        )

        print("Inference finished.", flush=True)

        detections = []

        for result in results:
            for box in result.boxes:

                xywh = box.xywhn[0]

                x_center = float(xywh[0])
                y_center = float(xywh[1])

                location = estimate_region(x_center, y_center)

                detections.append({
                    "class": model.names[int(box.cls)],
                    "confidence": round(float(box.conf), 3),
                    "location": location,
                    "bbox": [
                        round(float(x), 2)
                        for x in box.xyxy[0]
                    ]
                })

        print(f"Detections: {len(detections)}", flush=True)

        return detections

    except Exception:
        print("===== INFERENCE ERROR =====", flush=True)
        traceback.print_exc()
        raise