import React, { useState } from "react";
import "../components/MealPlanner.css";
import Navbar from "../components/Navbar";

const ingredientOptions = [
  "Chicken", "Beef", "Fish", "Tofu", "Eggs", "Rice", "Pasta", "Broccoli", "Spinach", "Tomatoes",
  "Cheese", "Lentils", "Beans", "Yogurt", "Milk", "Almonds", "Peanuts", "Oats", "Mushrooms", "Peppers",
  "Carrots", "Cucumber", "Zucchini", "Potatoes", "Garlic"
];

export default function MealPlanner() {
  const [mealType, setMealType] = useState("breakfast");
  const [calories, setCalories] = useState(1500);
  const [ingredient, setIngredient] = useState("Chicken");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchAttempted, setFetchAttempted] = useState(false); // ✅ New state to track fetch

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    setFetchAttempted(true); // ✅ Mark fetch as attempted

    try {
      const apiUrl = `https://api.api-ninjas.com/v1/recipe?query=${ingredient}`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { "X-Api-Key": "D1oaGfZ2J2VJuvqWknytpA==pVssx3BhIlqf6MPO" }
      });

      if (!response.ok) throw new Error("Failed to fetch recipes");

      const data = await response.json();
      setRecipes(data.slice(0, 8)); // Limit to only 8 results
    } catch (error) {
      setError("Failed to fetch recipes. Try again.");
      setRecipes([]); // Clear recipes if fetch failed
    }

    setLoading(false);
  };

  return (
    <div className="meal-planner-container">
      <Navbar />
      <h1 className="meal-planner-title">🥗 Meal Planning & Recipes 🍽️</h1>

      {/* Meal Filter Controls */}
      <div className="meal-form">
        <label className="meal-label">Meal Type:</label>
        <select value={mealType} onChange={(e) => setMealType(e.target.value)} className="meal-input">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>

        <label className="meal-label">Max Calories: {calories} kcal</label>
        <input
          type="range"
          min="500"
          max="2500"
          step="100"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
          className="calorie-slider"
        />

        <label className="meal-label">Select Main Ingredient:</label>
        <select value={ingredient} onChange={(e) => setIngredient(e.target.value)} className="meal-input">
          {ingredientOptions.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

        <button onClick={fetchRecipes} className="meal-button">Get Recipes</button>
      </div>

      {loading && <p className="loading">Loading recipes...</p>}
      {error && <p className="error">{error}</p>}

      <div className="recipes-container">
        {recipes.length > 0 && recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))}

        {/* ✅ Show "No recipes" message only after fetch attempt */}
        {!loading && fetchAttempted && recipes.length === 0 && !error && (
          <p>No recipes found for the selected ingredient.</p>
        )}
      </div>
    </div>
  );
}
