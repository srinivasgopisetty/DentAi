# 🦷 DentAI

> **AI-Powered Dental X-Ray Analysis & Clinical Decision Support System**

DentAI is an end-to-end AI-powered web application that assists dentists in analyzing panoramic dental X-ray images. It uses deep learning-based object detection to identify common dental findings and generates educational treatment recommendations along with professional PDF reports.

> **⚠️ Disclaimer:** DentAI is intended for educational and research purposes only. It is **not** a replacement for professional dental diagnosis or clinical judgment.

---

## ✨ Features

- 🦷 Detect dental cavities
- 🦷 Detect dental fillings
- 🦷 Detect dental implants
- 🦷 Detect impacted teeth
- 🤖 AI-powered clinical decision support
- 📄 Professional PDF report generation
- 📊 Detection confidence scores
- 🌐 Modern web interface
- 🚀 REST API for predictions
- ☁️ Cloud deployment

---

## 🛠️ Tech Stack

### Artificial Intelligence
- PyTorch
- Ultralytics YOLO
- OpenCV
- NumPy
- Pandas
- Scikit-learn

### Backend
- FastAPI
- Uvicorn

### Frontend
- Next.js
- React
- Tailwind CSS *(Coming Soon)*

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```text
DentAI/
│
├── ai/                 # AI training and inference
├── backend/            # FastAPI backend
├── frontend/           # Next.js frontend
├── configs/            # Configuration files
├── datasets/           # Training datasets
├── docs/               # Project documentation
├── models/             # Trained models
├── notebooks/          # Jupyter notebooks
├── outputs/            # Generated outputs
├── reports/            # PDF reports
├── scripts/            # Utility scripts
│
├── README.md
├── CHANGELOG.md
├── requirements.txt
└── .gitignore
```

---

## 📊 Dataset

Current Dataset:

- Dental X-Ray Dataset (YOLO Format)
- 4 Object Classes:
  - Cavity
  - Fillings
  - Impacted Tooth
  - Implant

Future versions will include additional publicly available dental X-ray datasets to improve model robustness.

---

## 🚀 Development Roadmap

- [x] Project Planning
- [x] Development Environment Setup
- [x] GPU Configuration
- [x] Dataset Collection
- [ ] Dataset Analysis
- [ ] Model Training
- [ ] Model Evaluation
- [ ] FastAPI Backend
- [ ] Next.js Frontend
- [ ] Treatment Recommendation Engine
- [ ] PDF Report Generation
- [ ] Cloud Deployment

---

## 💻 Local Setup

Clone the repository:

```bash
git clone https://github.com/srinivasgopisetty/DentAi.git
cd DentAi
```

Create a virtual environment:

```bash
python -m venv .venv
```

Activate the virtual environment:

### Windows

```bash
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## 📈 Current Status

🚧 **Under Active Development**

Current Phase:

**Sprint 2 — Dataset Analysis**

---

## 👨‍💻 Author

**Srinivas Gopisetty**

Bachelor of Technology (B.Tech)

Aspiring AI / Machine Learning Engineer

---

## ⭐ Project Goal

The objective of DentAI is to develop a production-ready AI-powered dental X-ray analysis system that demonstrates:

- Deep Learning
- Computer Vision
- Medical AI
- Full Stack Development
- REST API Development
- Cloud Deployment
- Software Engineering Best Practices

---

## 📜 License

This project is intended for educational and research purposes.