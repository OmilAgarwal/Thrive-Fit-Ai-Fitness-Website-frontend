import React, { useState } from "react";
import "../components/Profile.css";
import profilePic from "../assets/logo.png"; // Replace with actual image path

export default function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`profile-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Profile Header */}
      <div className="profile-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h2>John Doe</h2>
        <p>johndoe@example.com</p>
      </div>

      {/* Bio Section */}
      <div className="profile-bio">
        <h3>Bio</h3>
        <p>Fitness enthusiast | AI-powered workout planner | Health & Nutrition Advocate</p>
      </div>

      {/* Fitness Stats */}
      <div className="profile-stats">
        <div className="stat-box">
          <h4>Workouts Completed</h4>
          <p>120</p>
        </div>
        <div className="stat-box">
          <h4>Calories Burned</h4>
          <p>15,400 kcal</p>
        </div>
        <div className="stat-box">
          <h4>Achievements</h4>
          <p>🏅 Gold Member</p>
        </div>
      </div>

      {/* Settings & Preferences */}
      <div className="profile-settings">
        <h3>Settings</h3>
        <button className="profile-button">Change Password</button>
        <button className="profile-button">Update Goals</button>
        <button className="profile-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}
