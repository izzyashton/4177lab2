import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { useAuth } from "../context/AuthContext";

function AuthCard() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  
  function validate() {
    const e = {};
    if (!email.includes("@")) e.email = "Invalid email";
    if (password.length < 6) e.password = "Too short";
    return e;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setUser({email });
    navigate("/dashboard");
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1 className="logo">TenantTrails</h1>

        <p className="auth-subtitle">
          See what past tenants had to say, before you sign.
        </p>
        <form onSubmit={handleSubmit}>
            <div className = "form-field">
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="alex@dal.ca" />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className = "form-field">
                <label>Password</label>
                <input type="password"  value={password} onChange={e => setPassword(e.target.value)} />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit" className="primary-btn full-width">Sign In</button>
        </form>

        <p className="small-text">
          Don't have an account? <span>Create one</span>
        </p>

        <div className="demo-box">
          Demo: alex@dal.ca / password123
        </div>
      </div>
    </div>
  );
}

export default AuthCard;