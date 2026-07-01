# 🦷 DentAI Dataset Analysis Report

## Overview

This report summarizes the analysis and validation of the dental X-ray dataset used for training the DentAI object detection model.

---

## Dataset Statistics

| Category | Count |
|----------|------:|
| Training Images | 753 |
| Validation Images | 215 |
| Test Images | 107 |
| **Total Images** | **1075** |

---

## Image Resolution

| Metric | Value |
|--------|------:|
| Minimum Width | 640 px |
| Maximum Width | 640 px |
| Average Width | 640 px |
| Minimum Height | 640 px |
| Maximum Height | 640 px |
| Average Height | 640 px |

**Observation:**  
All images have a fixed resolution of **640 × 640 pixels**, making them suitable for YOLO training without additional resizing.

---

## Class Distribution

| Class | Objects |
|--------|--------:|
| Cavity | 576 |
| Fillings | 5239 |
| Impacted Tooth | 428 |
| Implant | 1784 |
| **Total Objects** | **8027** |

**Observation:**  
The dataset is imbalanced. The **Fillings** class dominates, while **Impacted Tooth** and **Cavity** appear much less frequently.

---

## Bounding Box Analysis

| Metric | Value |
|--------|-------:|
| Total Bounding Boxes | 8027 |
| Average Width | 0.0472 |
| Average Height | 0.1757 |
| Average Area | 0.0084 |
| Smallest Area | 0.000012 |
| Largest Area | 0.028564 |

**Observation:**  
Most annotations correspond to relatively small objects, which is typical in panoramic dental X-ray datasets.

---

## Dataset Validation

| Check | Status |
|------|:------:|
| Missing Labels | ✅ 0 |
| Missing Images | ✅ 0 |
| Corrupted Images | ✅ 0 |
| Invalid Class IDs | ✅ 0 |
| Invalid Bounding Boxes | ✅ 0 |

**Result:**  
The dataset passed all validation checks successfully.

---

## Sample Visualization

Random samples were visualized with bounding boxes to verify annotation quality before training.

Location:

```
outputs/samples/
```

---

## Conclusion

The dataset is clean, correctly annotated, and ready for YOLO object detection training.

The only notable issue is class imbalance, which will be monitored during model training and evaluation.

---

**Report Generated During Sprint 2 — Dataset Analysis**