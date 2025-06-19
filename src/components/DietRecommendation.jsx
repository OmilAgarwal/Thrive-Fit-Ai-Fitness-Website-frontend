import React, { useState } from 'react';
import './DietRecommendation.css'; // Import the CSS file

const DietRecommendation = () => {
  const [foodQuery, setFoodQuery] = useState('');
  const [dietRecommendations, setDietRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // List of predefined food options
  const predefinedFoods = [
    'Brisket',
    'Fries',
    'Salad',
    'Chicken Breast',
    'Rice',
    'Burger',
    'Basta',
    'Bizza',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const api_url = `https://api.api-ninjas.com/v1/nutrition?query=${foodQuery}`;
    try {
      const response = await fetch(api_url, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'D1oaGfZ2J2VJuvqWknytpA==pVssx3BhIlqf6MPO',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDietRecommendations(data);
      } else {
        setError('Error fetching data');
      }
    } catch (error) {
      setError('An error occurred');
    }
    setLoading(false);
  };

  return (
    <div className="diet-container">
      <h1 className="diet-title">AI-Powered Diet Recommendations 🍽️</h1>

      {/* Form for food query */}
      <form className="diet-form" onSubmit={handleSubmit}>
        <label htmlFor="foodQuery">Enter food or choose from suggestions:</label>

        {/* Custom Input Field with Predefined Food Suggestions */}
        <input
          type="text"
          id="foodQuery"
          name="foodQuery"
          value={foodQuery}
          onChange={(e) => setFoodQuery(e.target.value)}
          placeholder="e.g., 1lb brisket and fries"
          list="food-suggestions"
        />

        {/* Data list for predefined food options */}
        <datalist id="food-suggestions">
          {predefinedFoods.map((food, index) => (
            <option key={index} value={food} />
          ))}
        </datalist>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Loading...' : 'Get Recommendations'}
        </button>
      </form>

      {/* Error Message Display */}
      {error && <div className="error-message">{error}</div>}

      {/* Results Section */}
      {dietRecommendations && (
        <div className="results-container">
          {dietRecommendations.map((item, index) => (
            <div key={index} className="result-card">
              <h3>{item.name}</h3>
              <p>Calories: {item.calories} kcal</p>
              <p>Protein: {item.protein_g} g</p>
              <p>Fat: {item.fat_total_g} g</p>
              <p>Carbohydrates: {item.carbohydrates_total_g} g</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DietRecommendation;
