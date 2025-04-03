import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import gmtlftimg from "../assets/4719B2EA-A2D5-4D08-88E5-60867A395BE3.jpeg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSignupClick = () => {
    if (email.trim() === "" || password.length < 6 || contact.length !== 10) {
      setError(true);
    } else {
      setError(false);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Left Section */}
        <div className="signup-left">
          <img src={gmtlftimg} alt="Graduation" />
        </div>

        {/* Right Section */}
        <div className="signup-right">
          <div className="signup-logo">
            <img src="your-logo-path.png" alt="Logo" />
          </div>
          <h2 className="signup-title">GreatMinds Technology</h2>
          <p className="signup-subtitle">From Learners To Tech Leaders!</p>

          {/* Email Input */}
          <div className="signup-input">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error ? "error-input" : ""}
              placeholder="Enter your email"
            />
            {error && <p className="error-message">Invalid email.</p>}
          </div>

          {/* Contact Number Input */}
          <div className="signup-input">
            <label>Contact Number</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className={error ? "error-input" : ""}
              placeholder="Enter your 10-digit contact number"
            />
            {error && <p className="error-message">Invalid contact number.</p>}
          </div>

          {/* Password Input */}
          <div className="signup-input">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error ? "error-input" : ""}
              placeholder="Enter your password (min 6 characters)"
            />
            {error && <p className="error-message">Invalid password.</p>}
          </div>

          {/* Show Password & Forgot Password */}
          <div className="show-password">
            <div>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label> Show Password</label>
            </div>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          {/* Signup Button */}
          <button className="signup-button" onClick={handleSignupClick}>
            Sign Up
          </button>

          <p className="login-text">
            Already have an account? <a href="/">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
