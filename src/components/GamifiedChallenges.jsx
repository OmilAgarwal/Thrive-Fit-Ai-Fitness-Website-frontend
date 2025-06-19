import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import "../components/GamifiedChallenges.css";
import Navbar from "../components/Navbar";

export default function GamifiedChallenges() {
  return (
    <div className="gamified-container">
      <Navbar />
      <h1 className="gamified-title">🏆 Gamified Challenges & Rewards 🎯</h1>

      <div className="challenges-content">
        {/* Challenge 1 */}
        <div className="challenge-box">
          <h2>🔥 7-Day Push-up Challenge</h2>
          <p>Complete 50 push-ups daily for a week and unlock a special reward!</p>
          <Link to="/challenge-progress/push-up" className="challenge-button">Start Challenge</Link> {/* ✅ Navigate to Challenge Progress */}
        </div>

        {/* Challenge 2 */}
        <div className="challenge-box">
          <h2>🏃 30-Day Running Streak</h2>
          <p>Run at least 1 km every day for 30 days to win exclusive rewards.</p>
          <Link to="/challenge-progress/running" className="challenge-button">Start Challenge</Link> {/* ✅ Navigate to Challenge Progress */}
        </div>

        {/* Updated Challenge 3 */}
        <div className="challenge-box">
          <h2>💧 30-Day Hydration Challenge</h2>
          <p>Drink at least 4 liters of water daily for 30 days and unlock a hydration badge!</p>
          <Link to="/challenge-progress/hydration" className="challenge-button">Start Challenge</Link> {/* ✅ Navigate to Challenge Progress */}
        </div>
      </div>
    </div>
  );
}
