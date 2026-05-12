import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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
      const res = await axios.post(
        "https://pcos-backend-b4qf.onrender.com/api/users/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  };

  return (
    <div style={container}>
      <div style={leftSection}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>PCOS Care</h1>
        <p style={{ fontSize: "20px", maxWidth: "500px" }}>
          Track symptoms, predict PCOS risk, monitor menstrual cycles,
          and manage your reproductive health intelligently.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={card}>
        <h2>Welcome Back</h2>

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
          Login
        </button>

        <p>
          New user? <Link to="/register">Register</Link>
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

export default Login;