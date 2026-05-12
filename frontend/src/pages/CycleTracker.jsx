import { useState } from "react";

function CycleTracker() {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [nextDate, setNextDate] = useState("");

  const calculateNextPeriod = () => {
    if (!lastPeriod || !cycleLength) {
      alert("Please fill all fields");
      return;
    }

    const startDate = new Date(lastPeriod);
    startDate.setDate(
      startDate.getDate() + parseInt(cycleLength)
    );

    setNextDate(startDate.toDateString());
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Cycle Tracker</h1>

        <label style={label}>Last Period Date</label>
        <input
          type="date"
          value={lastPeriod}
          onChange={(e) => setLastPeriod(e.target.value)}
          style={input}
        />

        <label style={label}>Cycle Length (days)</label>
        <input
          type="number"
          placeholder="28"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
          style={input}
        />

        <button onClick={calculateNextPeriod} style={button}>
          Predict Next Cycle
        </button>

        {nextDate && (
          <div style={resultBox}>
            <h3>Next Expected Period</h3>
            <p style={dateText}>{nextDate}</p>
          </div>
        )}
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
  width: "450px",
  background: "white",
  padding: "40px",
  borderRadius: "18px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};

const title = {
  textAlign: "center",
  marginBottom: "25px",
  color: "#1e3a8a",
};

const label = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "600",
  color: "#334155",
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  boxSizing: "border-box",
};

const button = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
};

const resultBox = {
  marginTop: "25px",
  padding: "20px",
  background: "#eff6ff",
  borderRadius: "12px",
  textAlign: "center",
};

const dateText = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#2563eb",
};

export default CycleTracker;