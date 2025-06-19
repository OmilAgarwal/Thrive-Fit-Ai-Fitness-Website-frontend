import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Progress.css";

export default function Progress() {
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("");
  const [savedWeight, setSavedWeight] = useState("");
  const [savedGoal, setSavedGoal] = useState("");
  const [workouts, setWorkouts] = useState([
    { date: "2025-04-17", type: "Cardio", duration: "30 mins", calories: 250 },
    { date: "2025-04-17", type: "Strength Training", duration: "45 mins", calories: 350 },
  ]);

  const [currentDate, setCurrentDate] = useState("");

  const weightRanges = [
    "40-45 kg", "45-50 kg", "50-55 kg", "55-60 kg", "60-65 kg",
    "65-70 kg", "70-75 kg", "75-80 kg", "80-85 kg", "85-90 kg",
    "90-95 kg", "95-100 kg", "100-105 kg", "105-110 kg", "110-115 kg",
    "115-120 kg", "120-125 kg", "125-130 kg", "130-135 kg", "135-140 kg",
  ];

  const fitnessGoals = [
    "Lose 5kg in 2 months", "Run 5km without stopping", "Gain 3kg of muscle",
    "Workout 4 times per week", "Reach 15% body fat", "Increase bench press to 80kg",
    "Cycle 50km per week", "Master 30-minute yoga flow", "Drink 3L of water daily",
    "Sleep 8 hours consistently",
  ];

  useEffect(() => {
    const fetchCurrentDate = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        const data = await response.json();
        const today = data.datetime.split("T")[0];
        setCurrentDate(today);
      } catch (error) {
        console.error("Error fetching current date:", error);
      }
    };

    // Load saved data from localStorage
    const savedW = localStorage.getItem("savedWeight");
    const savedG = localStorage.getItem("savedGoal");
    if (savedW) setSavedWeight(savedW);
    if (savedG) setSavedGoal(savedG);

    fetchCurrentDate();
  }, []);

  const handleWeightUpdate = () => {
    if (weight) {
      setSavedWeight(weight);
      localStorage.setItem("savedWeight", weight);
      alert(`✅ Weight updated to: ${weight}`);
      setWeight(""); // Reset input after update
    } else {
      alert("❗ Please select a weight range.");
    }
  };

  const handleGoalUpdate = () => {
    if (goal) {
      setSavedGoal(goal);
      localStorage.setItem("savedGoal", goal);
      alert(`🎯 Goal saved: ${goal}`);
      setGoal(""); // Reset input after update
    } else {
      alert("❗ Please select a fitness goal.");
    }
  };

  return (
    <div className="progress-container">
      <Navbar />
      <h1 className="progress-title">📊 Progress Tracking & Analytics 🏋️</h1>

      <div className="progress-sections">
        {/* Weight Tracking */}
        <div className="progress-box">
          <h2>⚖️ Weight & Body Measurements</h2>
          <p>Track your weight and body stats over time.</p>
          <select
            value={weight || savedWeight}
            onChange={(e) => setWeight(e.target.value)}
            className="progress-select"
          >
            <option value="">{savedWeight || "Select Weight Range"}</option>
            {weightRanges.map((range, index) => (
              <option key={index} value={range}>{range}</option>
            ))}
          </select>
          <button className="progress-button" onClick={handleWeightUpdate}>Update</button>
        </div>

        {/* Workout Logs */}
        <div className="progress-box">
          <h2>📅 Workout Logs</h2>
          <p>View your recent workouts and track calories burned.</p>
          <ul className="workout-list">
            {workouts.map((workout, index) => (
              <li key={index}>
                <strong>{workout.date === currentDate ? "Today" : workout.date}:</strong>
                {` ${workout.type} - ${workout.duration} (${workout.calories} kcal)`}
              </li>
            ))}
          </ul>
        </div>

        {/* Goal Setting */}
        <div className="progress-box">
          <h2>🎯 Set Your Fitness Goals</h2>
          <p>Define goals and track your performance.</p>
          <select
            value={goal || savedGoal}
            onChange={(e) => setGoal(e.target.value)}
            className="progress-select"
          >
            <option value="">{savedGoal || "Select Fitness Goal"}</option>
            {fitnessGoals.map((goalText, index) => (
              <option key={index} value={goalText}>{goalText}</option>
            ))}
          </select>
          <button className="progress-button" onClick={handleGoalUpdate}>Save Goal</button>
        </div>
      </div>
    </div>
  );
}
