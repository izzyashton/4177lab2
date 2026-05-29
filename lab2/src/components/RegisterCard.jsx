import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function RegisterCard() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validate() {
    const e = {};

    if (formData.fullName.trim().length < 2) {
      e.fullName = "Please enter your full name";
    }

    if (!formData.email.includes("@")) {
      e.email = "Invalid email address";
    }

    if (formData.password.length < 6) {
      e.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      e.confirmPassword = "Passwords do not match";
    }

    return e;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Account Created:", formData);

    navigate("/dashboard");
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1 className="logo">TenantTrails</h1>

        <p className="auth-subtitle">
          Create your account to submit reviews and comments.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-field">
            <label>Full name</label>

            <input
              type="text"
              name="fullName"
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
            />

            {errors.fullName && (
              <span className="error">
                {errors.fullName}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-field">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="error">
                {errors.email}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="form-field">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={handleChange}
            />

            {errors.password && (
              <span className="error">
                {errors.password}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="form-field">
            <label>Confirm password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            {errors.confirmPassword && (
              <span className="error">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="primary-btn full-width">
            Create Account
          </button>
        </form>

        <p className="small-text">
          Already have an account?
          <span
            className="auth-link"
            onClick={() => navigate("/login")}
          >
            {" "}
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterCard;