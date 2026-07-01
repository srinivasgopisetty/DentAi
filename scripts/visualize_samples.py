from pathlib import Path
import random
import cv2

# Dataset path
DATASET = Path("datasets/Dental_Xray_Dataset")

IMAGE_DIR = DATASET / "train/images"
LABEL_DIR = DATASET / "train/labels"

OUTPUT_DIR = Path("outputs/samples")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

CLASS_NAMES = [
    "Cavity",
    "Fillings",
    "Impacted Tooth",
    "Implant"
]

# Pick 5 random images
images = list(IMAGE_DIR.glob("*.*"))
random.shuffle(images)

for image_path in images[:5]:

    img = cv2.imread(str(image_path))
    h, w = img.shape[:2]

    label_file = LABEL_DIR / f"{image_path.stem}.txt"

    if label_file.exists():

        with open(label_file) as f:

            for line in f:

                cls, x, y, bw, bh = map(float, line.split())

                cls = int(cls)

                # Convert YOLO format to pixel coordinates
                x1 = int((x - bw / 2) * w)
                y1 = int((y - bh / 2) * h)
                x2 = int((x + bw / 2) * w)
                y2 = int((y + bh / 2) * h)

                cv2.rectangle(
                    img,
                    (x1, y1),
                    (x2, y2),
                    (0, 255, 0),
                    2
                )

                cv2.putText(
                    img,
                    CLASS_NAMES[cls],
                    (x1, max(y1 - 10, 20)),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    0.6,
                    (0, 255, 0),
                    2
                )

    output_path = OUTPUT_DIR / image_path.name

    cv2.imwrite(str(output_path), img)

    print(f"Saved: {output_path}")

print("\nVisualization complete!")