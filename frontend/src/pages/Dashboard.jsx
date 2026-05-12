import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [predictions, setPredictions] =
    useState([]);

  useEffect(() => {
    fetchPredictions();
  }, []);

  const fetchPredictions = async () => {
    try {
      const userId =
        localStorage.getItem("userId");

      const res = await axios.get(
        `https://pcos-backend-b4qf.onrender.com/api/predictions/${userId}`
      );

      setPredictions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const total =
    predictions.length;

  const highRisk =
    predictions.filter(
      (item) => item.result === 1
    ).length;

  const lowRisk =
    total - highRisk;

  return (
    <div style={container}>
      <h1 style={title}>
        My Dashboard
      </h1>

      <div style={statsRow}>
        <div style={statCard}>
          <h3>Total Tests</h3>
          <p style={statNumber}>
            {total}
          </p>
        </div>

        <div style={statCard}>
          <h3>High Risk</h3>
          <p
            style={{
              ...statNumber,
              color: "#dc2626",
            }}
          >
            {highRisk}
          </p>
        </div>

        <div style={statCard}>
          <h3>Low Risk</h3>
          <p
            style={{
              ...statNumber,
              color: "#16a34a",
            }}
          >
            {lowRisk}
          </p>
        </div>
      </div>

      <div style={topSection}>
        <Link
          to="/predict"
          style={button}
        >
          New Prediction
        </Link>

        <Link
          to="/history"
          style={button}
        >
          History
        </Link>

        <Link
          to="/profile"
          style={button}
        >
          Profile
        </Link>
      </div>

      <h2 style={subtitle}>
        Recent Predictions
      </h2>

      <div style={cardContainer}>
        {predictions.map((item) => (
          <div
            key={item._id}
            style={card}
          >
            <h3>
              {item.result === 1
                ? "High Risk"
                : "Low Risk"}
            </h3>

            <p>
              Risk Score:{" "}
              {item.probability || 0}%
            </p>

            <p>Age: {item.age}</p>
            <p>
              Weight: {item.weight} kg
            </p>

            <small>
              {new Date(
                item.createdAt
              ).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  padding: "40px",
  background: "#f8fafc",
};

const title = {
  fontSize: "36px",
  color: "#1e3a8a",
  marginBottom: "25px",
};

const statsRow = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  marginBottom: "30px",
};

const statCard = {
  background: "white",
  padding: "25px",
  borderRadius: "16px",
  width: "220px",
  boxShadow:
    "0 8px 20px rgba(0,0,0,0.06)",
};

const statNumber = {
  fontSize: "32px",
  fontWeight: "bold",
};

const topSection = {
  display: "flex",
  gap: "15px",
  marginBottom: "25px",
};

const button = {
  padding: "14px 24px",
  backgroundColor: "#2563eb",
  color: "white",
  textDecoration: "none",
  borderRadius: "10px",
};

const subtitle = {
  marginBottom: "20px",
};

const cardContainer = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(260px,1fr))",
  gap: "20px",
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "14px",
  boxShadow:
    "0 6px 18px rgba(0,0,0,0.08)",
};

export default Dashboard;