import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Profile from "./components/Profile";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import Workout from "./components/Workout";
import AiWorkout from "./components/AiWorkout";
import VideoTutorials from "./components/VideoTutorials";
import GamifiedChallenges from "./components/GamifiedChallenges";
import ChallengeProgress from "./components/ChallengeProgress";
import Community from "./components/Community";
import NutritionTracking from "./components/NutritionTracking";
import MealPlanner from "./components/MealPlanner";
import CalorieTracking from "./components/CalorieTracking";
import DietRecommendations from "./components/DietRecommendation" // ✅ Import Calorie Tracking
import Coaching from "./components/Coaching";
import Progress from "./components/Progress"; //hello

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/ai-workout" element={<AiWorkout />} />
          <Route path="/video-tutorials" element={<VideoTutorials />} />
          <Route path="/gamified-challenges" element={<GamifiedChallenges />} />
          <Route path="/challenge-progress/:challengeId" element={<ChallengeProgress />} />
          <Route path="/community" element={<Community />} />
          <Route path="/nutrition-tracking" element={<NutritionTracking />} />
          <Route path="/meal-planner" element={<MealPlanner />} />
          <Route path="/calorie-tracking" element={<CalorieTracking />} /> {/* ✅ Added Calorie Tracking */}
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/diet-recommendations" element={<DietRecommendations />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
