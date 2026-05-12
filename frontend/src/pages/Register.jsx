import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
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
      await axios.post("https://pcos-backend-b4qf.onrender.com/api/auth/register", form);

      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  return (
    <div style={container}>
      <div style={leftSection}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Join PCOS Care
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "500px" }}>
          Start your personalized PCOS tracking journey and receive
          AI-powered health insights.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={card}>
        <h2>Create Account</h2>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          style={input}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={input}
        />

        <button type="submit" style={button}>
          Register
        </button>

        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "60px",
  background:
    "linear-gradient(135deg, #eff6ff 0%, #f8fafc 50%, #dbeafe 100%)",
  flexWrap: "wrap",
  gap: "40px",
};

const leftSection = {
  flex: 1,
  minWidth: "300px",
  color: "#1e3a8a",
};

const card = {
  flex: 1,
  minWidth: "320px",
  maxWidth: "450px",
  background: "white",
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "16px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
  boxSizing: "border-box",
};

const button = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Register;