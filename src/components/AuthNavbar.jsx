import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthNavbar.css";

export default function AuthNavbar() {
  const navigate = useNavigate();

  // Placeholder: Replace with actual authentication logic
  const isAuthenticated = false; // Change this based on actual login state

  // Redirect function
  const handleNavigation = (e, path) => {
    e.preventDefault(); // Prevent default link action
    if (isAuthenticated) {
      navigate(path); // Allow navigation if logged in
    } else {
      navigate("/"); // Redirect to AuthPage if not logged in
    }
  };

  return (
    <nav className="auth-navbar">
      {/* Meta Fit Text Instead of Logo */}
      <div className="auth-navbar-title">Thrive Fit</div>

      {/* Navigation Links */}
      <ul className="auth-navbar-links">
        <li><Link to="#" onClick={(e) => handleNavigation(e, "/dashboard")}>Dashboard</Link></li>
        <li><Link to="#" onClick={(e) => handleNavigation(e, "/workout")}>Workouts</Link></li>
        <li><Link to="#" onClick={(e) => handleNavigation(e, "/nutrition-tracking")}>Nutrition</Link></li>
        <li><Link to="#" onClick={(e) => handleNavigation(e, "/community")}>Community</Link></li>
        <li><Link to="#" onClick={(e) => handleNavigation(e, "/coaching")}>Coaching</Link></li>
        <li><Link to="#" onClick={(e) => handleNavigation(e, "/progress")}>Progress</Link></li>
      </ul>

      {/* Sign Up Button (No Styling Change) */}
      <div className="auth-navbar-signup">
        <Link to="/auth?signup=true" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
}
