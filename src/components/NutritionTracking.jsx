import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "../components/NutritionTracking.css";
import Navbar from "../components/Navbar";

export default function NutritionTracking() {
  return (
    <div className="nutrition-container">
      <Navbar />
      <h1 className="nutrition-title">🥗 Nutrition & Diet Tracking 🍎</h1>

      <div className="nutrition-content">
        {/* Meal Planning & Recipes */}
        <div className="nutrition-box">
          <h2>📋 Meal Planning & Recipes</h2>
          <p>Plan your meals with healthy and delicious recipes tailored to your goals.</p>
          <Link to="/meal-planner" className="nutrition-button">Explore Meals</Link>
        </div>

        {/* Calorie & Macro Tracking */}
        <div className="nutrition-box">
          <h2>🔥 Calorie & Macro Tracking</h2>
          <p>Track your daily calorie intake and macronutrient breakdown.</p>
          <Link to="/calorie-tracking" className="nutrition-button">Start Tracking</Link>
        </div>

        {/* AI-Based Diet Recommendations */}
        <div className="nutrition-box">
          <h2>🤖 AI-Based Diet Recommendations</h2>
          <p>Get personalized diet plans based on your fitness goals and preferences.</p>
          <Link to="/diet-recommendations" className="nutrition-button">Get Recommendations</Link>
        </div>
      </div>
    </div>
  );
}
