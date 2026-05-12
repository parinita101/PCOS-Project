import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav style={navbar}>
      <h2 style={logo}>PCOS Care</h2>

      <div style={navLinks}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              to="/dashboard"
              style={linkStyle}
            >
              Dashboard
            </Link>

            <Link
              to="/predict"
              style={linkStyle}
            >
              Predict
            </Link>

            <Link
              to="/cycle-tracker"
              style={linkStyle}
            >
              Cycle Tracker
            </Link>

            <Link
              to="/profile"
              style={linkStyle}
            >
              Profile
            </Link>

            <Link
              to="/history"
              style={linkStyle}
            >
              History
            </Link>

            <button
              onClick={handleLogout}
              style={logoutButton}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={linkStyle}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={linkStyle}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

const navbar = {
  backgroundColor: "#1e3a8a",
  color: "white",
  padding: "18px 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logo = {
  margin: 0,
};

const navLinks = {
  display: "flex",
  gap: "18px",
  alignItems: "center",
  flexWrap: "wrap",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
};

const logoutButton = {
  padding: "10px 16px",
  backgroundColor: "#dc2626",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Navbar;