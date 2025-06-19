import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Show an alert pop-up
    alert("✅ Thank you for your feedback!");

    // Reset the form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Reach out for any queries or support.</p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>ThriveFit@gmail.com</p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>+91 9877839364</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>123 Law Gate, , India</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
