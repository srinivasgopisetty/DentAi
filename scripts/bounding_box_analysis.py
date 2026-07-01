from pathlib import Path

DATASET = Path("datasets/Dental_Xray_Dataset")

label_dirs = [
    DATASET / "train/labels",
    DATASET / "valid/labels",
    DATASET / "test/labels"
]

areas = []
widths = []
heights = []

print("=" * 60)
print("BOUNDING BOX ANALYSIS")
print("=" * 60)

for folder in label_dirs:

    for label_file in folder.glob("*.txt"):

        with open(label_file, "r") as f:

            for line in f:

                values = line.strip().split()

                if len(values) != 5:
                    continue

                _, _, _, w, h = map(float, values)

                widths.append(w)
                heights.append(h)
                areas.append(w * h)

print(f"Total Bounding Boxes : {len(areas)}")
print()

print(f"Average Width  : {sum(widths)/len(widths):.4f}")
print(f"Average Height : {sum(heights)/len(heights):.4f}")
print(f"Average Area   : {sum(areas)/len(areas):.4f}")
print()

print(f"Smallest Area  : {min(areas):.6f}")
print(f"Largest Area   : {max(areas):.6f}")

print("=" * 60)