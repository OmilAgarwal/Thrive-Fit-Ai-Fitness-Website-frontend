import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import "./AuthPage.css";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/bg.png";
import AuthNavbar from "./AuthNavbar";

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSignup, setIsSignup] = useState(new URLSearchParams(location.search).get("signup") === "true");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setIsSignup(new URLSearchParams(location.search).get("signup") === "true");
  }, [location.search]);

  const handleAuthRequest = async (url, bodyData) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();
      if (data.success) {
        // Store the token, email, and name in localStorage
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userEmail", data.email);
        localStorage.setItem("userName", data.name); // Storing the user's name

        navigate("/dashboard");

        // Clear input fields after successful login/signup
        setFullName("");
        setEmail("");
        setPassword("");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Server not responding. Please try again later.");
    }
  };

  const handleLogin = () => {
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    handleAuthRequest("http://localhost:5000/auth", { email, password });
  };

  const handleSignup = () => {
    setError("");
    if (!fullName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    handleAuthRequest("http://localhost:5000/signup", { name: fullName, email, password });
  };

  return (
    <>
      <AuthNavbar />
      <div
        className="auth-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="auth-box"
        >
          <img src={logo} alt="Meta Fit Logo" className="auth-logo" />
          <h2 className="auth-title">{isSignup ? "Create Account" : "Welcome Back"}</h2>
          <p className="auth-subtext">
            {isSignup ? "Join Meta Fit and track your progress" : "Log in to continue your fitness journey"}
          </p>

          <div className="auth-inputs">
            {isSignup && (
              <input
                type="text"
                placeholder="Full Name"
                className="auth-input"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="auth-button"
            onClick={isSignup ? handleSignup : handleLogin}
          >
            {isSignup ? "Sign Up" : "Login"}
          </motion.button>

          <div className="auth-divider">
            <div className="divider-line"></div>
            <p className="divider-text">OR</p>
            <div className="divider-line"></div>
          </div>

          <div className="auth-social-buttons">
            <button className="social-button">
              <FaGoogle size={24} /> Google
            </button>
            <button className="social-button">
              <FaFacebook size={24} /> Facebook
            </button>
          </div>

          <p className="auth-footer">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button onClick={() => navigate(`/auth?signup=${!isSignup}`)} className="toggle-auth-mode">
              {isSignup ? "Log In" : "Sign Up"}
            </button>
          </p>
        </motion.div>
      </div>
    </>
  );
}
