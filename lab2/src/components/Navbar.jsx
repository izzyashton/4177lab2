import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";


function Navbar() {
  
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">TenantTrails</div>

      <div className="nav-actions">
        <button onClick={() => navigate("/login")} className="text-btn">Sign In</button>
        <button className="primary-btn" onClick={() => navigate("/register")}>Get Started</button>      
      </div>
    </nav>
  );
}

export default Navbar;