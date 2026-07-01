from pathlib import Path
from collections import Counter

# -----------------------------
# Dataset Configuration
# -----------------------------
DATASET_PATH = Path("datasets/Dental_Xray_Dataset")

CLASS_NAMES = {
    0: "Cavity",
    1: "Fillings",
    2: "Impacted Tooth",
    3: "Implant"
}

splits = ["train", "valid", "test"]

# -----------------------------
# Image Count
# -----------------------------
print("=" * 60)
print("DENTAI DATASET ANALYSIS")
print("=" * 60)

total_images = 0

for split in splits:

    image_path = DATASET_PATH / split / "images"

    image_count = (
        len(list(image_path.glob("*.jpg"))) +
        len(list(image_path.glob("*.png"))) +
        len(list(image_path.glob("*.jpeg")))
    )

    total_images += image_count

    print(f"{split.capitalize():<10}: {image_count} images")

print("-" * 60)
print(f"Total Images : {total_images}")

# -----------------------------
# Label Analysis
# -----------------------------
print("\n" + "=" * 60)
print("CLASS DISTRIBUTION")
print("=" * 60)

counter = Counter()
empty_labels = 0

for split in splits:

    label_folder = DATASET_PATH / split / "labels"

    for label_file in label_folder.glob("*.txt"):

        lines = label_file.read_text().splitlines()

        if len(lines) == 0:
            empty_labels += 1
            continue

        for line in lines:

            class_id = int(line.split()[0])
            counter[class_id] += 1

# Print counts

for class_id in sorted(CLASS_NAMES.keys()):
    print(f"{CLASS_NAMES[class_id]:<20}: {counter[class_id]}")

print("-" * 60)
print(f"Total Objects : {sum(counter.values())}")
print(f"Empty Label Files : {empty_labels}")