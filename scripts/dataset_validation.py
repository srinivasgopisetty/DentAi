from pathlib import Path
import cv2

DATASET = Path("datasets/Dental_Xray_Dataset")

splits = ["train", "valid", "test"]

total_images = 0
total_labels = 0

missing_labels = 0
missing_images = 0
corrupted_images = 0
invalid_class_ids = 0
invalid_boxes = 0

print("=" * 60)
print("DATASET VALIDATION")
print("=" * 60)

for split in splits:

    image_dir = DATASET / split / "images"
    label_dir = DATASET / split / "labels"

    for image_path in image_dir.iterdir():

        total_images += 1

        label_path = label_dir / (image_path.stem + ".txt")

        if not label_path.exists():
            missing_labels += 1
            continue

        img = cv2.imread(str(image_path))

        if img is None:
            corrupted_images += 1
            continue

        with open(label_path, "r") as f:

            lines = f.readlines()

            total_labels += len(lines)

            for line in lines:

                values = line.strip().split()

                if len(values) != 5:
                    invalid_boxes += 1
                    continue

                cls = int(values[0])

                if cls not in [0, 1, 2, 3]:
                    invalid_class_ids += 1

                x, y, w, h = map(float, values[1:])

                if not (
                    0 <= x <= 1 and
                    0 <= y <= 1 and
                    0 < w <= 1 and
                    0 < h <= 1
                ):
                    invalid_boxes += 1

    for label_path in label_dir.iterdir():

        image_path = image_dir / (label_path.stem + ".jpg")

        if not image_path.exists():

            image_path = image_dir / (label_path.stem + ".png")

        if not image_path.exists():

            missing_images += 1

print(f"Total Images        : {total_images}")
print(f"Total Labels        : {total_labels}")
print()

print(f"Missing Labels      : {missing_labels}")
print(f"Missing Images      : {missing_images}")
print(f"Corrupted Images    : {corrupted_images}")
print(f"Invalid Class IDs   : {invalid_class_ids}")
print(f"Invalid Boxes       : {invalid_boxes}")

print("=" * 60)

if (
    missing_labels == 0
    and missing_images == 0
    and corrupted_images == 0
    and invalid_class_ids == 0
    and invalid_boxes == 0
):
    print("✅ Dataset validation passed successfully!")
else:
    print("⚠️ Dataset contains issues that should be fixed.")