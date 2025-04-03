import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import gmtlftimg from "../assets/4719B2EA-A2D5-4D08-88E5-60867A395BE3.jpeg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Added password state
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // Basic email format validation
  };

  const handleSignupClick = () => {
    navigate("/Signup"); // Route to signup page
  };

  const handleNextClick = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (password.length < 6) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (valid) {
      setLoading(true); // Show loader
      setTimeout(() => {
        navigate("/Signup");
      }, 2000);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        
        <div className="login-left">
          <img src={gmtlftimg} alt="Graduation" />
        </div>

        <div className="login-right">
          <div className="login-logo">
            <img src="your-logo-path.png" alt="Logo" />
          </div>
          <h2 className="login-title">GreatMinds Technology</h2>
          <p className="login-subtitle">From Learners To Tech Leaders!</p>

          <div className="login-input">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? "error-input" : ""}
              placeholder="Enter your email"
            />
            {emailError && <p className="error-message">Invalid email format.</p>}
          </div>

         
          <div className="login-input">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? "error-input" : ""}
              placeholder="Enter your password (min 6 characters)"
            />
            {passwordError && <p className="error-message">Password must be at least 6 characters.</p>}
          </div>

          <button className="login-button" onClick={handleNextClick} disabled={loading}>
            {loading ? <div className="loader"></div> : "Next"}
          </button>

          <p className="signup" onClick={handleSignupClick}>New User?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
