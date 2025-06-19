import React from "react";
import "../components/Community.css";
import Navbar from "../components/Navbar";

export default function Community() {
  // Redirect to Telegram fitness group
  const handleJoinGroup = () => {
    window.location.href = "https://t.me/your_telegram_fitness_group"; // Replace with actual Telegram group link
  };

  // Show alert if the user hasn't completed the gamified challenge
  const handleLeaderboard = () => {
    alert("⚠️ Complete your gamified challenge first to be in the leaderboard!");
  };

  // Show alert if no workout partners are available
  const handleFindPartner = () => {
    alert("❌ No workout partners available now. Check back later!");
  };

  return (
    <div className="community-container">
      <Navbar />
      <h1 className="community-title">🌍 Community & Engagement 🤝</h1>

      <div className="community-content">
        {/* Social Groups */}
        <div className="community-box">
          <h2>💬 Social Groups for Fitness Challenges</h2>
          <p>Join groups, share progress, and motivate others in fitness challenges.</p>
          <button className="community-button" onClick={handleJoinGroup}>
            Join a Group
          </button>
        </div>

        {/* Leaderboards */}
        <div className="community-box">
          <h2>🏆 Leaderboards & Achievements</h2>
          <p>Track your progress and compete with others for the top spot.</p>
          <button className="community-button" onClick={handleLeaderboard}>
            View Leaderboard
          </button>
        </div>

        {/* Workout Partner Matching */}
        <div className="community-box">
          <h2>🤝 Find a Workout Partner</h2>
          <p>Get matched with a fitness buddy to stay motivated and accountable.</p>
          <button className="community-button" onClick={handleFindPartner}>
            Find a Partner
          </button>
        </div>
      </div>
    </div>
  );
}
