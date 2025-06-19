import React from "react";
import { Link } from "react-router-dom";
import "../components/Workout.css";
import Navbar from "../components/Navbar";

export default function Workout() {
  return (
    <div className="workout-container">
      <Navbar />

      <h1 className="workout-title">Workout & Training Modules</h1>

      <div className="workout-content">
        {/* AI-Powered Workout Box */}
        <div className="workout-box">
          <h2>AI-Powered Personalized Workout Plans</h2>
          <Link to="/ai-workout" className="workout-button">Ready to Begin</Link>
        </div>

        {/* Video Tutorials & Live Sessions Box */}
        <div className="workout-box">
          <h2>Video Tutorials & Live Sessions</h2>
          <p>Learn proper form and techniques from experts through videos and live sessions.</p>
          <Link to="/video-tutorials" className="workout-button">Let’s Go</Link>
        </div>

        {/* Gamified Challenges & Rewards Box */}
        <div className="workout-box">
          <h2>Gamified Challenges & Rewards</h2>
          <p>Participate in fitness challenges and earn rewards for completing milestones.</p>
          <Link to="/gamified-challenges" className="workout-button">Start</Link> {/* New Start Button */}
        </div>
      </div>
    </div>
  );
}
