import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [logoutPopup, setLogoutPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear(); // Clear session
    setLogoutPopup(true); // Show success popup
    setTimeout(() => {
      setLogoutPopup(false);
      navigate("/auth"); // Redirect to login
    }, 1500);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">Thrive Fit</div>

        <ul className="navbar-links">
          <li><Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>Dashboard</Link></li>
          <li><Link to="/workout" className={location.pathname === "/workout" ? "active" : ""}>Workouts</Link></li>
          <li><Link to="/nutrition-tracking" className={location.pathname === "/nutrition-tracking" ? "active" : ""}>Nutrition</Link></li>
          <li><Link to="/community" className={location.pathname === "/community" ? "active" : ""}>Community</Link></li>
          <li><Link to="/coaching" className={location.pathname === "/coaching" ? "active" : ""}>Coaching</Link></li>
          <li><Link to="/progress" className={location.pathname === "/progress" ? "active" : ""}>Progress</Link></li>
        </ul>

        {/* ✅ Logout Button on Right */}
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </nav>

      {/* ✅ Logout Popup */}
      {logoutPopup && (
        <div className="logout-popup">
          <p>✅ Successfully Logged Out!</p>
        </div>
      )}
    </>
  );
}
