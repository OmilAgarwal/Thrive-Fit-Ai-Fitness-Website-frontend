import React, { useState, useEffect } from "react";
import "./Feedback.css";
import user1 from "../assets/u1.png";
import user2 from "../assets/u1.png";
import user3 from "../assets/u1.png";
import user4 from "../assets/u1.png";
import user5 from "../assets/u1.png";
import user6 from "../assets/u1.png";

const feedbacks = [
  { name: "John Doe", rating: 5, feedback: "Amazing platform! My fitness journey has never been better.", img: user1 },
  { name: "Emma Smith", rating: 4, feedback: "The workout plans are fantastic and easy to follow!", img: user2 },
  { name: "Liam Johnson", rating: 5, feedback: "Love the nutrition tracking! Helps me stay on track.", img: user3 },
  { name: "Olivia Brown", rating: 5, feedback: "The community support is just what I needed for motivation.", img: user4 },
  { name: "Sophia Williams", rating: 4, feedback: "AI coaching is a game-changer! Highly recommend.", img: user5 },
  { name: "James Miller", rating: 5, feedback: "My progress has been incredible with this app!", img: user6 }
];

// Duplicate the feedback list for smooth looping
const extendedFeedbacks = [...feedbacks, ...feedbacks];

export default function Feedback() {
  const [startIndex, setStartIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => {
        if (prevIndex === feedbacks.length) {
          setTimeout(() => {
            setTransition(false);
            setStartIndex(0);
          }, 500);
          return feedbacks.length + 1;
        }
        setTransition(true);
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feedback-section">
      <h2>User Feedback</h2>
      <div className="feedback-container">
        <div
          className="feedback-slider"
          style={{
            transform: `translateX(-${startIndex * 25}%)`,
            transition: transition ? "transform 1s ease-in-out" : "none",
          }}
        >
          {extendedFeedbacks.map((fb, index) => (
            <div key={index} className="feedback-box">
              <img src={fb.img} alt={fb.name} className="feedback-image" />
              <h3>{fb.name}</h3>
              <div className="rating">{"⭐".repeat(fb.rating)}</div>
              <p>{fb.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
