import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const userId =
        localStorage.getItem("userId");

      const res = await axios.get(
        `https://pcos-backend-b4qf.onrender.com/api/predictions/${userId}`
      );

      setHistory(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const chartData = history.map(
    (item, index) => ({
      name: `Test ${index + 1}`,
      result: item.result,
    })
  );

  const totalTests = history.length;

  const highRiskCount = history.filter(
    (item) => item.result === 1
  ).length;

  const lowRiskCount =
    totalTests - highRiskCount;

  const highRiskPercent = totalTests
    ? (
        (highRiskCount / totalTests) *
        100
      ).toFixed(1)
    : 0;

  const lowRiskPercent = totalTests
    ? (
        (lowRiskCount / totalTests) *
        100
      ).toFixed(1)
    : 0;

  return (
    <div style={container}>
      <h1 style={heading}>
        Prediction History
      </h1>

      {history.length === 0 ? (
        <p style={emptyText}>
          No prediction history found.
        </p>
      ) : (
        <>
          <div style={statsContainer}>
            <div style={statCard}>
              <h3>High Risk</h3>
              <p style={riskValue}>
                {highRiskPercent}%
              </p>
            </div>

            <div style={statCard}>
              <h3>Low Risk</h3>
              <p style={safeValue}>
                {lowRiskPercent}%
              </p>
            </div>
          </div>

          <div style={chartContainer}>
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Risk Trend Analysis
            </h2>

            <ResponsiveContainer
              width="100%"
              height={320}
            >
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 1]} />
                <Tooltip
                  formatter={(value) =>
                    value === 1
                      ? "High Risk"
                      : "Low Risk"
                  }
                />
                <Line
                  type="monotone"
                  dataKey="result"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={historyGrid}>
            {history.map(
              (item, index) => (
                <div
                  key={item._id}
                  style={card}
                >
                  <h3>
                    Prediction #
                    {index + 1}
                  </h3>

                  <p>
                    <strong>
                      Date:
                    </strong>{" "}
                    {new Date(
                      item.createdAt
                    ).toLocaleString()}
                  </p>

                  <p>
                    <strong>
                      Result:
                    </strong>{" "}
                    {item.result === 1
                      ? "PCOS Risk Detected"
                      : "Low Risk"}
                  </p>
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

const container = {
  minHeight: "100vh",
  padding: "40px",
  background: "#f8fafc",
};

const heading = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#1e3a8a",
};

const emptyText = {
  textAlign: "center",
  fontSize: "18px",
};

const statsContainer = {
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  marginBottom: "30px",
  flexWrap: "wrap",
};

const statCard = {
  background: "white",
  padding: "25px",
  width: "220px",
  borderRadius: "16px",
  textAlign: "center",
  boxShadow:
    "0 8px 20px rgba(0,0,0,0.06)",
};

const riskValue = {
  fontSize: "34px",
  color: "#dc2626",
  fontWeight: "bold",
};

const safeValue = {
  fontSize: "34px",
  color: "#16a34a",
  fontWeight: "bold",
};

const chartContainer = {
  background: "white",
  padding: "30px",
  borderRadius: "18px",
  boxShadow:
    "0 8px 24px rgba(0,0,0,0.08)",
  marginBottom: "30px",
};

const historyGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
};

const card = {
  background: "white",
  padding: "22px",
  borderRadius: "16px",
  boxShadow:
    "0 8px 20px rgba(0,0,0,0.06)",
};

export default History;