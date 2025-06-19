import React, { useState } from "react";
import "../components/CalorieTracking.css";
import Navbar from "../components/Navbar";

// Popular activity options
const activityOptions = [
  "running", "walking", "cycling", "swimming", "yoga", "weightlifting", 
  "hiking", "dancing", "jumping jacks", "skiing", "basketball", 
  "football", "tennis", "aerobics", "boxing", "rock climbing", "kayaking",
  "skateboarding", "surfing", "snowboarding"
];

export default function CalorieTracking() {
  const [activity, setActivity] = useState("skiing");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCalories = async () => {
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}`, {
        method: "GET",
        headers: {
          "X-Api-Key": "D1oaGfZ2J2VJuvqWknytpA==pVssx3BhIlqf6MPO"
        }
      });

      if (!response.ok) throw new Error("Failed to fetch calorie data");

      const data = await response.json();
      setResults(data.slice(0, 4)); // Limit to 4 results
    } catch (err) {
      setError("Error fetching data. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="ct-container">
      <Navbar />
      <h1 className="ct-title">🔥 Calorie & Macro Tracking</h1>

      <div className="ct-form">
        <label>Select an Activity:</label>
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          {activityOptions.map((item, index) => (
            <option key={index} value={item}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </option>
          ))}
        </select>

        <div className="ct-button-wrapper">
          <button onClick={fetchCalories} className="ct-button">Track Calories</button>
        </div>
      </div>

      {loading && <p style={{ color: "white" }}>Loading calorie data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="ct-results">
        {results.map((item, index) => (
          <div key={index} className="ct-result-card">
            <h3>{item.name}</h3>
            <p><strong>Calories per Hour:</strong> {item.calories_per_hour} kcal</p>
            <p><strong>Duration:</strong> {item.duration_minutes} mins</p>
            <p><strong>Total Calories Burned:</strong> {item.total_calories} kcal</p>
          </div>
        ))}
      </div>
    </div>
  );
}
