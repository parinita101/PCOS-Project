import { useEffect, useState } from "react";
import ReportButton from "../components/ReportButton";

function Result() {
  const [result, setResult] =
    useState(null);

  useEffect(() => {
    const savedResult =
      localStorage.getItem(
        "predictionResult"
      );

    if (savedResult) {
      setResult(
        JSON.parse(savedResult)
      );
    }
  }, []);

  if (!result) {
    return (
      <div style={container}>
        <h2>No prediction data found</h2>
      </div>
    );
  }

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={heading}>
          Prediction Result
        </h1>

        {result.prediction === 1 ? (
          <>
            <h2 style={highRisk}>
              High Probability of PCOS
            </h2>

            <p style={text}>
              Based on your symptoms,
              there may be a higher
              risk of PCOS.
            </p>

            <ul style={list}>
              <li>
                Consult gynecologist
              </li>
              <li>
                Exercise regularly
              </li>
              <li>
                Healthy diet
              </li>
              <li>
                Track periods
              </li>
            </ul>
          </>
        ) : (
          <>
            <h2 style={lowRisk}>
              Low Probability of PCOS
            </h2>

            <p style={text}>
              Your symptoms indicate
              lower risk.
            </p>

            <ul style={list}>
              <li>
                Maintain balanced diet
              </li>
              <li>Sleep properly</li>
              <li>Stay active</li>
            </ul>
          </>
        )}

        <p style={probability}>
          Risk Score:{" "}
          {result.probability || 0}%
        </p>

        <ReportButton />
      </div>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f8fafc",
  padding: "20px",
};

const card = {
  background: "white",
  padding: "40px",
  width: "500px",
  borderRadius: "18px",
  boxShadow:
    "0 8px 24px rgba(0,0,0,0.08)",
};

const heading = {
  textAlign: "center",
  color: "#1e3a8a",
  marginBottom: "25px",
};

const highRisk = {
  color: "#dc2626",
  textAlign: "center",
};

const lowRisk = {
  color: "#16a34a",
  textAlign: "center",
};

const text = {
  textAlign: "center",
  marginTop: "15px",
  lineHeight: "1.6",
};

const list = {
  marginTop: "20px",
  lineHeight: "2",
};

const probability = {
  marginTop: "20px",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "18px",
};

export default Result;