import matplotlib
matplotlib.use("Agg")
from pathlib import Path
from collections import Counter
import matplotlib.pyplot as plt

DATASET_PATH = Path("datasets/Dental_Xray_Dataset")

CLASS_NAMES = {
    0: "Cavity",
    1: "Fillings",
    2: "Impacted Tooth",
    3: "Implant"
}

counter = Counter()

for split in ["train", "valid", "test"]:

    label_folder = DATASET_PATH / split / "labels"

    for label_file in label_folder.glob("*.txt"):

        with open(label_file, "r") as f:

            for line in f:

                if line.strip():

                    class_id = int(line.split()[0])
                    counter[class_id] += 1

classes = [CLASS_NAMES[i] for i in sorted(CLASS_NAMES)]
counts = [counter[i] for i in sorted(CLASS_NAMES)]

plt.figure(figsize=(8, 5))
plt.bar(classes, counts)

plt.title("DentAI Dataset Class Distribution")
plt.xlabel("Class")
plt.ylabel("Number of Objects")

plt.tight_layout()

Path("outputs").mkdir(exist_ok=True)

plt.savefig("outputs/class_distribution.png", dpi=300)



print("Chart saved to outputs/class_distribution.png")