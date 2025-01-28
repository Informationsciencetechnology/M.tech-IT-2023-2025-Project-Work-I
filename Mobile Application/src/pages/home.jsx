import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || 'Guest'; // Fallback to 'Guest' if username is not provided

  const handleGetStarted = () => {
    navigate('/parameter');
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="hero-title">Welcome to Smart Irrigation System, {username}!</h1>
        <p className="hero-description">
          Optimize your agriculture with our automated irrigation and fertilization system. Track soil moisture, pH, and more!
        </p>
        <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </header>

      <section className="features">
        <div className="feature-item">
          <h2 className="feature-title">Automated Irrigation</h2>
          <p className="feature-description">
            Water your plants automatically based on soil moisture levels, ensuring optimal hydration.
          </p>
        </div>
        <div className="feature-item">
          <h2 className="feature-title">Real-Time Monitoring</h2>
          <p className="feature-description">
            Monitor soil conditions, pH, and other metrics through real-time data analytics.
          </p>
        </div>
        <div className="feature-item">
          <h2 className="feature-title">Sustainability Focused</h2>
          <p className="feature-description">
            Conserve water and improve crop yield with efficient resource management.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">© 2025 Smart Irrigation System | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
