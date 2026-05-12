import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SymptomForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    age: "",
    weight: "",
    cycleLength: "",
    weightGain: "",
    hairGrowth: "",
    pimples: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: ML prediction
      const res = await axios.post(
        "https://pcos-backend-b4qf.onrender.com/predict",
        {
          age: Number(form.age),
          weight: Number(form.weight),
          cycleLength: Number(
            form.cycleLength
          ),
          weightGain: Number(
            form.weightGain
          ),
          hairGrowth: Number(
            form.hairGrowth
          ),
          pimples: Number(form.pimples),
        }
      );

      // Save prediction result locally
      localStorage.setItem(
        "predictionResult",
        JSON.stringify(res.data)
      );

      // Step 2: Save to MongoDB
      const saveRes = await axios.post(
  "https://pcos-backend-b4qf.onrender.com/api/predictions",
  {
    userId:
      localStorage.getItem(
        "userId"
      ),
    result: res.data.prediction,
    probability:
      res.data.probability,
    age: Number(form.age),
    weight: Number(form.weight),
    cycleLength: Number(
      form.cycleLength
    ),
  }
);

      console.log(
        "Prediction saved:",
        saveRes.data
      );

      navigate("/result");
    } catch (error) {
      console.log(
        "Prediction error:",
        error
      );
      alert("Prediction failed");
    }
  };

  return (
    <div style={container}>
      <form
        style={card}
        onSubmit={handleSubmit}
      >
        <h2 style={title}>
          PCOS Prediction Assessment
        </h2>

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          style={input}
          required
        />

        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={form.weight}
          onChange={handleChange}
          style={input}
          required
        />

        <input
          type="number"
          name="cycleLength"
          placeholder="Cycle Length (days)"
          value={form.cycleLength}
          onChange={handleChange}
          style={input}
          required
        />

        <select
          name="weightGain"
          value={form.weightGain}
          onChange={handleChange}
          style={input}
          required
        >
          <option value="">
            Weight Gain
          </option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <select
          name="hairGrowth"
          value={form.hairGrowth}
          onChange={handleChange}
          style={input}
          required
        >
          <option value="">
            Hair Growth
          </option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <select
          name="pimples"
          value={form.pimples}
          onChange={handleChange}
          style={input}
          required
        >
          <option value="">
            Pimples
          </option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <button
          type="submit"
          style={button}
        >
          Predict
        </button>
      </form>
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
  width: "430px",
  borderRadius: "18px",
  boxShadow:
    "0 8px 24px rgba(0,0,0,0.08)",
};

const title = {
  textAlign: "center",
  marginBottom: "25px",
  color: "#1e3a8a",
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "16px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  boxSizing: "border-box",
  fontSize: "15px",
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

export default SymptomForm;