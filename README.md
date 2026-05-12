# PCOS Prediction Web Application

A full-stack MERN + Machine Learning web application that predicts the likelihood of Polycystic Ovary Syndrome (PCOS) based on user symptoms and health inputs.

## Live Demo

Frontend: https://pcos-frontend-m100.onrender.com  
Backend API: https://pcos-backend-b4qf.onrender.com

---

## Features

- User Authentication (Register/Login)
- PCOS Risk Prediction using ML model
- Prediction History Dashboard
- Risk Statistics & Charts
- User Profile Management
- Cycle Tracker
- Downloadable PDF Health Report
- MongoDB Database Integration
- Responsive UI

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Recharts
- CSS / Inline Styling

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

### Machine Learning
- Python
- Flask
- Scikit-learn
- Joblib
- Random Forest Classifier

### Deployment
- Render
- MongoDB Atlas

---

## Project Structure

```bash
new_pcos_project/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── ml-service/
│   ├── app.py
│   ├── model.pkl
│   └── requirements.txt
│
└── README.md
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

---

## Backend Setup

```bash
cd backend
npm install
npm start
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## ML Service Setup

```bash
cd ml-service
pip install -r requirements.txt
python app.py
```

---

## API Endpoints

### Authentication
- POST `/api/auth/register`
- POST `/api/auth/login`

### Predictions
- POST `/predict`
- POST `/api/predictions`
- GET `/api/predictions/:userId`

### Profile
- GET `/api/profile/:id`
- PUT `/api/profile/:id`

---



---

## Future Improvements

- Doctor recommendations
- Diet plan suggestions
- Appointment booking
- Email PDF reports
- Advanced analytics dashboard

---

## Author

Parinita Vishwakarma

GitHub: https://github.com/parinita101

---

## Disclaimer

This project is for educational purposes only and should not replace professional medical advice or diagnosis.