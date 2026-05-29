import ApartmentCard from "../components/ApartmentCard";
import "../styles/dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const apartments = [
  {
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
    title: "The Marlstone",
    address: "5540 Spring Garden Rd · Spring Garden",
    rating: 5.0,
    tags: ["No AI summary yet"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118",
    title: "Park Victoria",
    address: "1496 Carlton St · South End",
    rating: 4.5,
    tags: ["Well maintained", "Quiet", "Expensive"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650",
    title: "Le Marchant Towers",
    address: "1585 Le Marchant St · West End",
    rating: 3.7,
    tags: ["Good location", "Parking limited", "Aging building"],
  },
];

function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="logo">TenantTrails</div>

        <input
          className="search"
          placeholder="Search apartments by address or neighbourhood..."
        />

        <div className="profile">{user?.email}</div>
        <button className="logout-btn" onClick={handleLogout}>Sign Out</button>
      </header>

      <main className="dashboard-content">
        <h1>Apartments in Halifax</h1>

        <div className="stats">
          <span>5 apartments</span>
          <span>13 reviews</span>
          <span>4 neighbourhoods</span>
        </div>

        <div className="cards-grid">
          {apartments.map((apartment, index) => (
            <ApartmentCard key={index} {...apartment} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
