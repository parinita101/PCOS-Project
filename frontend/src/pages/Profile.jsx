import { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    age: "",
    height: "",
    weight: "",
    bmi: "",
  });

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch(
        `https://pcos-backend-b4qf.onrender.com/api/profile/${userId}`
      );

      const data = await res.json();

      if (data) {
        setProfile(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const calculateBMI = () => {
    const heightInMeters =
      profile.height / 100;

    const bmi = (
      profile.weight /
      (heightInMeters * heightInMeters)
    ).toFixed(2);

    setProfile({
      ...profile,
      bmi,
    });
  };

  const saveProfile = async () => {
    try {
      await fetch(
        "https://pcos-backend-b4qf.onrender.com/api/profile",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            userId,
            ...profile,
          }),
        }
      );

      alert("Profile saved");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1>My Profile</h1>

        <input
          name="age"
          placeholder="Age"
          value={profile.age}
          onChange={handleChange}
          style={input}
        />

        <input
          name="height"
          placeholder="Height (cm)"
          value={profile.height}
          onChange={handleChange}
          style={input}
        />

        <input
          name="weight"
          placeholder="Weight (kg)"
          value={profile.weight}
          onChange={handleChange}
          style={input}
        />

        <button
          onClick={calculateBMI}
          style={button}
        >
          Calculate BMI
        </button>

        <input
          value={profile.bmi}
          placeholder="BMI"
          readOnly
          style={input}
        />

        <button
          onClick={saveProfile}
          style={saveButton}
        >
          Save Profile
        </button>
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
};

const card = {
  width: "420px",
  background: "white",
  padding: "40px",
  borderRadius: "18px",
  boxShadow:
    "0 8px 24px rgba(0,0,0,0.08)",
};

const input = {
  width: "100%",
  padding: "14px",
  marginBottom: "16px",
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
  marginBottom: "15px",
  cursor: "pointer",
};

const saveButton = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default Profile;