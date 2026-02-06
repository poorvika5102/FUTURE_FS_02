# 📌 Mini CRM – Client Lead Management System

A full-stack **Mini CRM (Client Lead Management System)** built to manage client leads generated from website contact forms. This project demonstrates real-world business workflow handling using modern web technologies.

---

## 🚀 Features

- Add new client leads  
- View all leads in a dashboard  
- Update lead status (New → Contacted → Converted)  
- Add follow-up notes for each lead  
- Simple admin login protection  
- Full-stack integration (Frontend + Backend + Database)

---

## 🛠 Tech Stack

**Frontend:** React.js  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Other Tools:** Axios, Git, GitHub

---

## 🧩 Project Structure

```
mini-crm/
│
├── client/        # React frontend
│   ├── src/
│   └── public/
│
└── server/        # Node + Express backend
    ├── models/
    ├── routes/
    └── server.js
```

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/poorvika5102/FUTURE_FS_02.git
cd FUTURE_FS_02
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the **server** folder:

```
MONGO_URI=your_mongodb_connection_string
```

Start backend:

```bash
npm start
```

Server runs at: **http://localhost:5000**

---

### 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm start
```

Frontend runs at: **http://localhost:3000**

---

## 🔐 Admin Login Credentials

```
Username: admin
Password: 1234
```

---

## 🎯 Learning Outcomes

This project helped in understanding:

- CRUD operations in real applications  
- Frontend ↔ Backend API integration  
- Database schema design  
- Business workflow implementation  
- Building portfolio-ready full-stack projects

---

## 💼 Project Purpose

This Mini CRM simulates how businesses track and manage potential clients from website inquiries — making it a practical, job-ready full-stack application.
