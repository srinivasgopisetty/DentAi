# 🦷 DentAI

**AI-Powered Dental X-ray Analysis & Clinical Decision Support System**

DentAI is a full-stack AI-powered web application that assists in the analysis of panoramic dental X-ray images using deep learning. The system detects common dental conditions, provides AI-assisted educational recommendations, visualizes detections with bounding boxes, and generates professional PDF reports.

> **Disclaimer:** DentAI is intended for educational and research purposes only. It is **not** a substitute for professional dental diagnosis or clinical judgment.

---

## ✨ Features

* AI-powered panoramic dental X-ray analysis
* YOLO11 object detection
* Detection of:

  * Dental Cavities
  * Dental Fillings
  * Dental Implants
  * Impacted Teeth
* Confidence scores for every detection
* Detection overlay viewer
* Educational treatment recommendations
* Professional PDF clinical report generation
* Modern responsive dashboard
* REST API built with FastAPI
* Deployment-ready architecture

---

## 📸 Screenshots

* Home Dashboard
  <img width="1918" height="971" alt="image" src="https://github.com/user-attachments/assets/520c892c-54cf-4f33-abbd-bae81d9c7ef9" />

* Upload Interface
  <img width="782" height="720" alt="image" src="https://github.com/user-attachments/assets/d6bc5b2b-0753-4265-bda2-6b694b95dfc9" />

* Detection Viewer
  <img width="702" height="816" alt="image" src="https://github.com/user-attachments/assets/8a874a38-e675-4cbb-9def-1c994747b89d" />

* AI Findings Panel
  <img width="710" height="597" alt="image" src="https://github.com/user-attachments/assets/1432513f-4837-4a35-bad9-2d58056a8ba9" />

* Generated PDF Report
  <img width="990" height="721" alt="image" src="https://github.com/user-attachments/assets/a337877e-e6af-4b2c-bcae-a89c3f81e091" />


---

## 🏗️ Architecture

```text
                React + Vite Frontend
                        │
                        ▼
              FastAPI REST API Backend
                        │
                        ▼
             YOLO11 Object Detection Model
                        │
                        ▼
        Recommendation & Localization Engine
                        │
                        ▼
              Professional PDF Report
```

---

## 🛠️ Technology Stack

### Artificial Intelligence

* YOLO11
* PyTorch
* Ultralytics
* OpenCV
* NumPy

### Backend

* FastAPI
* Uvicorn
* Pydantic

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Hot Toast
* Lucide React

### Report Generation

* ReportLab

### Deployment

* Render (Backend)
* Vercel (Frontend)

---

## 📂 Project Structure

```text
DentAI
│
├── backend
│   ├── app
│   ├── assets
│   ├── uploads
│   └── reports
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── README.md
├── requirements.txt
└── .gitignore
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/srinivasgopisetty/DentAI.git
cd DentAI
```

### Backend

```bash
python -m venv .venv
```

Windows

```bash
.venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run backend

```bash
uvicorn backend.app.main:app --reload
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint                   | Description               |
| ------ | -------------------------- | ------------------------- |
| GET    | `/api/v1/health`           | Health Check              |
| GET    | `/api/v1/model`            | Model Information         |
| POST   | `/api/v1/predict`          | Analyze Dental X-ray      |
| GET    | `/api/v1/reports/{report}` | Download Generated Report |

---

## 🧠 AI Model

Current model:

* YOLO11
* Object Detection
* Panoramic Dental X-rays

Supported classes:

* Cavity
* Fillings
* Implant
* Impacted Tooth

---

## 📄 PDF Report

DentAI automatically generates a professional clinical report containing:

* Patient image name
* AI findings
* Confidence scores
* Clinical descriptions
* Educational recommendations
* Summary of detected conditions

---

## 🚀 Current Status

**Version:** 1.0

Completed:

* Full-stack web application
* AI inference pipeline
* Detection visualization
* Recommendation engine
* PDF report generation
* Modern dashboard
* Deployment-ready architecture

---

## 🗺️ Future Improvements

* Additional dental conditions
* Tooth numbering system
* Segmentation models
* Multi-language reports
* User authentication
* Patient history
* Cloud storage
* Explainable AI visualizations

---

## 👨‍💻 Author

**Srinivas Gopisetty**

B.Tech Student

Aspiring Machine Learning Engineer

---

## 📄 License

This project is developed for educational, research, and portfolio purposes.

DentAI should not be used as a replacement for professional dental diagnosis.
