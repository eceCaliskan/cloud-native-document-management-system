# Carbon and Cost Aware Document Management System

[![Angular](https://img.shields.io/badge/Frontend-Angular-red)]()
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-green)]()
[![Docker](https://img.shields.io/badge/Containerization-Docker-blue)]()
[![GCS](https://img.shields.io/badge/Storage-Google%20Cloud%20Storage-yellow)]()
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-lightgrey)]()

A scalable, cloud-native **Document Management System** designed for modern engineering projects.
The system solves challenges of duplication, version inconsistencies, limited accessibility, and poor collaboration found in traditional local/intranet-based document management.

Based on the research paper, 
Yu, J. (2024) ‘Design and implementation of Engineering Document Management
Information System’, Proceedings of the 2024 5th International Conference on Big Data
Economy and Information Management, pp. 136–142. Available at:
https://doi.org/10.1145/3724154.3724177.

---

## 🚀 **Key Features**

* **Cloud Document Storage (GCS):** Centralized, globally accessible storage.
* **Cost-Aware & Carbon-Aware Region Selection:**

  * *Cost-aware* → chooses low-cost data centers
  * *Carbon-aware* → chooses low-emission / renewable-powered regions
* **Secure Role-Based Access** using Firebase Authentication
* **Modern UI** built with Angular, Angular Material & Bootstrap
* **FastAPI Backend** with auto-generated Swagger docs
* **Dockerized Deployment** (frontend + backend images)
* **CI/CD Pipeline** through GitHub Actions

---

## 🏗️ **Tech Stack**

| Layer          | Technology                           |
| -------------- | ------------------------------------ |
| Frontend       | Angular, Angular Material, Bootstrap |
| Backend        | FastAPI (Python)                     |
| Authentication | Firebase Auth                        |
| Storage        | Google Cloud Storage                 |
| DevOps         | Docker, GitHub Actions               |

---

## 📦 **Installation**

### **Backend (FastAPI)**

Generate Firebase Project -> Settings -> Service Accounts -> Private Key, download the file and put it in the backend folder

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

API Docs → [http://localhost:8000/docs](http://localhost:8000/docs)

---

### **Frontend (Angular)**

```bash
cd frontend
npm install
ng serve
```

App → [http://localhost:4200/](http://localhost:4200/)

---

### **Docker (Full App)**

```bash
docker-compose up --build
```

---

## 🔧 **Environment Variables**

Create a `environment.ts` file in frontend/src folder:

```ini
export const FirebaseConfig={
        apiKey: your-api-key,
        authDomain: your-auth-domain,
        projectId: your-project-id,
        storageBucket: your-storage-bucket,
        messagingSenderId: your-sender-id,
        appId: your-app-id,
        measurementId: your-measurement-id
      }
```

---

## 📘 **References**

* Husain et al., 2023
* Yu, 2024
* Hyun et al., 2024



