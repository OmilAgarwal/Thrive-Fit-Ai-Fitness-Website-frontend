import React from "react";
import Navbar from "../components/Navbar";
import "./Coaching.css";

export default function Coaching() {
  const userEmail = "admin@example.com"; // Later, replace with dynamic user email

  const handleBooking = () => {
    // Open the booking link in a new tab
    window.open("https://doodle.com/bp/abcdsonali/thrivefit", "_blank");
  };

  return (
    <div className="coaching-container">
      <Navbar />
      <h1 className="coaching-title">📅 Book Your Free 15-Minute Consultation</h1>

      <div className="coaching-content">
        <p className="coaching-description">
          Get a personalized fitness consultation with our expert coaches.
          Learn about our plans and find the best fit for your fitness journey!
        </p>

        <div className="booking-box">
          <h2>🎯 Free 15-Minute Consultation</h2>
          <p>Discuss your goals and get expert advice.</p>
          <button className="coaching-button" onClick={handleBooking}>
            Book Now
          </button>
        </div>

        <div className="plans-section">
          <h2>💪 Explore Our Coaching Plans</h2>
          <div className="plans">
            <div className="plan-card">
              <h3>Basic Plan</h3>
              <p>✔ Weekly Check-ins<br/>✔ General Fitness Guidance</p>
              <button className="plan-button">View Details</button>
            </div>

            <div className="plan-card">
              <h3>Pro Plan</h3>
              <p>✔ Personalized Training Plans<br/>✔ Diet & Nutrition Support</p>
              <button className="plan-button">View Details</button>
            </div>

            <div className="plan-card">
              <h3>Elite Plan</h3>
              <p>✔ 1-on-1 Coaching<br/>✔ AI-Based Progress Tracking</p>
              <button className="plan-button">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
