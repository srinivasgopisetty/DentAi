from pathlib import Path
import cv2

DATASET = Path("datasets/Dental_Xray_Dataset")

image_dirs = [
    DATASET / "train/images",
    DATASET / "valid/images",
    DATASET / "test/images"
]

widths = []
heights = []

print("=" * 60)
print("IMAGE RESOLUTION ANALYSIS")
print("=" * 60)

for folder in image_dirs:

    for image_path in folder.iterdir():

        img = cv2.imread(str(image_path))

        if img is None:
            print(f"Could not read: {image_path.name}")
            continue

        h, w = img.shape[:2]

        widths.append(w)
        heights.append(h)

print(f"Total Images : {len(widths)}")
print()

print(f"Minimum Width  : {min(widths)}")
print(f"Maximum Width  : {max(widths)}")
print(f"Average Width  : {sum(widths)/len(widths):.2f}")
print()

print(f"Minimum Height : {min(heights)}")
print(f"Maximum Height : {max(heights)}")
print(f"Average Height : {sum(heights)/len(heights):.2f}")

print("=" * 60)