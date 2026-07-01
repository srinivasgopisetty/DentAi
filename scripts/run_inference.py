from ultralytics import YOLO

# Load trained model
model = YOLO("runs/detect/dentai_v1/weights/best.pt")

print("=" * 60)
print("DentAI Model Loaded Successfully!")
print("=" * 60)

# Run prediction
results = model(
    source="datasets/Dental_Xray_Dataset/test/images",
    save=True,
    conf=0.25
)

print("\nPrediction Completed Successfully!")