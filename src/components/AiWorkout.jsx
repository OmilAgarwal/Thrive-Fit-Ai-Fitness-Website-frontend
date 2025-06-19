import React, { useState } from "react";
import "../components/AiWorkout.css"; // Use AI-specific CSS
import Navbar from "../components/Navbar"; // Import Navbar

export default function AiWorkout() {
  const [targetMuscle, setTargetMuscle] = useState("");
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setTargetMuscle(e.target.value);
  };

  // Fetch Workout Plan from API-Ninjas
  const fetchWorkoutPlan = async () => {
    setLoading(true);
    setWorkoutPlan(null);
    setError(null);

    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/exercises?muscle=${targetMuscle}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "V16vxBcXIlw/wv4r5Gu9rQ==L1sn3zJjqPGobJnJ", // Your API Key
          },
        }
      );

      if (!response.ok) {
        throw new Error("Unable to fetch data");
      }

      const data = await response.json();
      setWorkoutPlan(data.length > 0 ? data : "No exercises found for the selected muscle.");
    } catch (error) {
      setError("Unable to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-workout-container">
      {/* Navigation Bar */}
      <Navbar />

      <h1 className="workout-title">💪 Your AI-Powered Workout Plan 🚀</h1>

      {/* Form & Generate Button Section */}
      <div className="form-section">
        <div className="ai-workout-form">
          <label>🎯 Target Muscle:</label>
          <input
            type="text"
            name="targetMuscle"
            value={targetMuscle}
            onChange={handleChange}
            placeholder="e.g., Chest, Legs, Biceps"
            required
          />
        </div>

        {/* Generate Button */}
        <div className="ai-workout-button">
          <button className="workout-button" onClick={fetchWorkoutPlan}>
            🚀 Generate Workout Plan
          </button>
        </div>
      </div>

      {/* Workout Plan Output Box */}
      <div className="ai-workout-output">
        {loading ? (
          <p>⏳ Generating your workout...</p>
        ) : error ? (
          <p>❌ {error}</p>
        ) : workoutPlan && Array.isArray(workoutPlan) ? (
          <div className="workout-plan">
            <h2>🏋️ Your Personalized Workout Plan</h2>
            <ul>
              {workoutPlan.map((exercise, index) => (
                <li key={index}>
                  <strong>{exercise.name}</strong> - {exercise.type}  
                  <br />
                  <em>Equipment:</em> {exercise.equipment}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>💡 Enter a target muscle & hit "Generate" to get your workout plan!</p>
        )}
      </div>
    </div>
  );
}
