import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/ChallengeProgress.css";
import Navbar from "../components/Navbar";

export default function ChallengeProgress() {
  const { challengeId } = useParams();
  const totalDays = challengeId === "push-up" ? 7 : 30;

  const [progress, setProgress] = useState(Array(totalDays).fill(false));

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch(`http://yourserver.com/get_progress.php?challengeId=${challengeId}`);
        const data = await response.json();
        if (data.success) {
          setProgress(data.progress);
        }
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    fetchProgress();
  }, [challengeId]);

  const handleCheck = (index) => {
    // Allow checking only Day 1 or already completed days
    if (index === 0 || progress[index]) {
      return;
    }
  };

  return (
    <div className="challenge-progress-container">
      <Navbar />
      <h1 className="progress-title">Challenge Progress</h1>
      <p className="progress-subtitle">Track your progress for {challengeId.replace(/-/g, " ")}</p>

      <div className="progress-grid">
        {progress.map((completed, index) => (
          <label key={index} className={`progress-day ${completed ? "completed" : ""}`}>
            <input 
              type="checkbox" 
              checked={index === 0 || completed} 
              onChange={() => handleCheck(index)} 
              disabled={index === 0 || completed} 
            />
            Day {index + 1}
          </label>
        ))}
      </div>
    </div>
  );
}
