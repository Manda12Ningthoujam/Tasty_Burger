import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LoginSignUp.css";
import User from "../../assets/loginsignup/03 Login Signup React Assets/Assets/person.png";
import UserPW from "../../assets/loginsignup/03 Login Signup React Assets/Assets/password.png";
import UserEmail from "../../assets/loginsignup/03 Login Signup React Assets/Assets/email.png";
import { FaCheckCircle } from "react-icons/fa";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [signUpSuccess, setSignUpSuccess] = useState(false); // New state for success message
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateSignUp = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "*Name is required.";
    if (!formData.email) newErrors.email = "*Email is required.";
    if (!formData.password) newErrors.password = "*Password is required.";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "*Please confirm your password.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "*Passwords do not match.";

    return newErrors;
  };

  const handleSignUp = () => {
    const newErrors = validateSignUp();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSignUpSuccess(true); // Show success message
      setTimeout(() => {
        setSignUpSuccess(false); // Hide success message after 3 seconds
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        setAction("Login");
      }, 2000);
    }
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "*Email is required.";
    if (!formData.password) newErrors.password = "*Password is required.";
    return newErrors;
  };

  const handleLogin = () => {
    const newErrors = validateLogin();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate("/"); 
    }
  };

  return (
    <div className="body-container">
      {/* Success message at the top */}
      {signUpSuccess && (
        <div className="success-message-container">
          <FaCheckCircle className="success-icon" />
          <span>Sign Up Successful!</span>
        </div>
      )}

      <div className="login-container">
        <div className="header">
          <div className="text">{action}</div>
        </div>
        <form className="inputs" onSubmit={(e) => e.preventDefault()}>
          {action === "Login" ? null : (
            <div className="input">
              <img src={User} alt="" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              
            </div>
          )}
          {errors.name && (
                <div className="error-message">{errors.name}</div>
              )}

          <div className="input">
            <img src={UserEmail} alt="" />
            <input
              type="email"
              placeholder="Email Id"
              autoComplete="off"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            
          </div>
          {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}

          <div className="input">
            <img src={UserPW} alt="" />
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            
          </div>
          {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}

          {action === "Login" ? null : (
            <div className="input">
              <img src={UserPW} alt="" />
              <input
                type="password"
                placeholder="Confirm Password"
                autoComplete="off"
                name="confirmPassword"
                id="confirm_password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              
            </div>
          )}
          {errors.confirmPassword && (
                <div className="error-message">{errors.confirmPassword}</div>
              )}
        </form>
        {action === "Sign Up" ? null : (
          <div className="forgot-pw">
            Forgot Password? <span>Click Here!</span>
          </div>
        )}

        <div className="submit-container">
          {/* Sign Up Button */}
          {action === "Login" ? (
            <div
              className="submit gray"
              onClick={() => {
                setAction("Sign Up");
                setErrors({});
              }}
            >
              Sign Up
            </div>
          ) : (
            <div
              className="submit"
              onClick={handleSignUp}
            >
              Sign Up
            </div>
          )}

          {/* Login Button */}
          {action === "Sign Up" ? (
            <div
              className="submit gray"
              onClick={() => {
                setAction("Login");
                setErrors({});
              }}
            >
              Login
            </div>
          ) : (
            <div className="submit" onClick={handleLogin}>
              Login
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;




