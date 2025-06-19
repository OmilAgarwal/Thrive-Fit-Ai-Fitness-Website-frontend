import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Dashboard.css";
import Navbar from "../components/Navbar";
import Feedback from "../components/Feedback";
import Contact from "../components/Contact";
import videoFile1 from "../assets/v1.mp4";
import videoFile2 from "../assets/v2.mp4";
import workoutImage from "../assets/w.png";
import nutritionImage from "../assets/n.png";
import communityImage from "../assets/cm.png";
import coachingImage from "../assets/c.png";
import progressImage from "../assets/p.png";

export default function Dashboard() {
  const [news, setNews] = useState({ title: "Loading latest fitness & health news...", link: "#" });
  const [currentVideo, setCurrentVideo] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [dayName, setDayName] = useState("");
  const navigate = useNavigate();

  const videos = [videoFile1, videoFile2];

  const workoutSchedule = {
    Monday: "Upper Body Strength Training — Focus on chest, shoulders, triceps, and upper back using compound exercises like bench press, shoulder press, and rows.",
    Tuesday: "Cardio & Core — High-intensity interval training (HIIT) and core strengthening with exercises like mountain climbers, planks, and Russian twists.",
    Wednesday: "Lower Body Strength Training — Target quads, hamstrings, glutes, and calves with squats, lunges, and deadlifts.",
    Thursday: "HIIT Session — Short bursts of intense effort followed by rest, using bodyweight moves like burpees, jump squats, and sprints to burn fat.",
    Friday: "Full Body Functional Training — Improve mobility, stability, and strength with kettlebells, resistance bands, and bodyweight circuits.",
    Saturday: "Yoga & Mobility — Stretch and recover with yoga flows, foam rolling, and breathing techniques for improved flexibility and balance.",
    Sunday: "Rest Day 🧘‍♂️ — Allow your muscles to recover and focus on hydration, light walking, or meditation.",
  };

  useEffect(() => {
    const now = new Date();
    const options = { weekday: 'long' };
    const today = now.toLocaleDateString('en-US', options);
    setDayName(today);
  }, []);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(videoInterval);
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_72567a5012c8c77bbd80ef17f8315397a720e&q=fitness%20and%20health&country=in&language=en&category=education,food,health,sports,technology"
      );
      if (!response.ok) throw new Error("Failed to fetch news");

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setNews({
          title: data.results[randomIndex].title || "Latest health & fitness news...",
          link: data.results[randomIndex].link || "#",
        });
      }
    } catch (error) {
      setNews({ title: "Failed to load news.", link: "#" });
    }
  };

  useEffect(() => {
    fetchNews();
    const newsInterval = setInterval(fetchNews, 10000);
    return () => clearInterval(newsInterval);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "FWRuSG62ud190odzCIhDg";
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />

      <div className="video-section">
        <video autoPlay loop muted key={currentVideo} className="dashboard-video">
          <source src={videos[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-dots">
          {videos.map((_, index) => (
            <span key={index} className={`dot ${index === currentVideo ? "active" : ""}`}></span>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h3>
          Thrive Fit is where innovation meets fitness, offering AI-powered personalized workout
          plans, interactive tutorials,<br /> and expert coaching to help you reach your goals.
          From tailored training to smart nutrition tracking,<br /> we provide everything you need
          to transform your fitness journey.<br /> Join our thriving community and take your
          performance to the next level!
        </h3>
      </div>

      <div className="content-section">
        <div className="dashboard-box workouts-box">
          <h2>Workout</h2>
          <p>Today is <strong>{dayName}</strong></p>
          <p>Plan: <em>{workoutSchedule[dayName] || "No workout available"}</em></p>
          <button className="dashboard-button" onClick={() => navigate("/ai-workout")}>
            Start AI Workout
          </button>
        </div>

        <div className="dashboard-box progresss-box">
          <h2>Progress</h2>
          <p>Your weight and fitness goals are unique to you. Consistency is key to achieving them.</p>
          <div className="progress-graph">
            💥 *"The body achieves what the mind believes. Your only limit is you."*
          </div>
          <button className="dashboard-button" onClick={() => navigate("/progress")}>
            View Progress Details
          </button>
        </div>

        <div className="dashboard-box news-box">
          <h2>Fitness & Health News</h2>
          <p>
            <a href={news.link} target="_blank" rel="noopener noreferrer" className="news-link">
              {news.title}
            </a>
          </p>
        </div>
      </div>

      {[{
        title: "Workout",
        img: workoutImage,
        desc: "AI-powered personalized workout plans to enhance your training efficiency. Includes interactive tutorials and tracking features.",
        reverse: false,
      }, {
        title: "Nutrition",
        img: nutritionImage,
        desc: "Track calories and macros while accessing customized diet plans. AI-based meal planning ensures a balanced and healthy diet.",
        reverse: true,
      }, {
        title: "Community",
        img: communityImage,
        desc: "Join challenges, connect with fitness partners, and engage in leaderboards to stay motivated throughout your fitness journey.",
        reverse: false,
      }, {
        title: "Coaching",
        img: coachingImage,
        desc: "Book a free session with certified trainers and explore various coaching plans to get professional fitness guidance.",
        reverse: true,
      }, {
        title: "Progress",
        img: progressImage,
        desc: "Track your performance with analytics, view progress graphs, and get insights to optimize your workouts and achieve goals.",
        reverse: false,
      }].map((section, index) => (
        <div key={index} className={`info-section ${section.reverse ? "reverse" : ""}`}>
          <img src={section.img} alt={section.title} className="info-image" />
          <div className="info-content">
            <h2 className="info-title">{section.title}</h2>
            <p className="info-desc">{section.desc}</p>
          </div>
        </div>
      ))}

      <Feedback />
      <Contact />

      {chatOpen && (
        <div className="chatbot-container">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/FWRuSG62ud190odzCIhDg"
            width="100%"
            style={{ height: "100%", minHeight: "700px" }}
            frameBorder="0"
            title="Chatbot"
          ></iframe>
        </div>
      )}
    </div>
  );
}
