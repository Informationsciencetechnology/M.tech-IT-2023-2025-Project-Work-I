import React from 'react';
import './blog.css';

const Blog = () => {
  // Example project statistics, can be dynamic in the future
  const stats = {
    totalIrrigationTime: '1200 hours',
    totalWaterSaved: '15,000 liters',
    avgSoilMoisture: '65%',
    avgPHValue: '6.8',
  };

  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1>Smart Irrigation System Blog</h1>
        <p className="blog-description">Explore how our smart irrigation system is transforming agriculture by optimizing water usage and improving soil health.</p>
      </header>

      <section className="blog-content">
        <div className="intro">
          <h2>Why Smart Irrigation?</h2>
          <p>Smart irrigation is revolutionizing the way we manage water resources in agriculture. By using real-time data from soil moisture sensors and pH meters, our system automates irrigation schedules and fertilization, ensuring optimal crop growth while conserving water.</p>
        </div>

        <div className="stats">
          <h3>Project Statistics</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <h4>Total Irrigation Time</h4>
              <p>{stats.totalIrrigationTime}</p>
            </div>
            <div className="stat-item">
              <h4>Total Water Saved</h4>
              <p>{stats.totalWaterSaved}</p>
            </div>
            <div className="stat-item">
              <h4>Average Soil Moisture</h4>
              <p>{stats.avgSoilMoisture}</p>
            </div>
            <div className="stat-item">
              <h4>Average pH Value</h4>
              <p>{stats.avgPHValue}</p>
            </div>
          </div>
        </div>

        <div className="benefits">
          <h3>Benefits of Smart Irrigation</h3>
          <ul>
            <li>Water Conservation: Reduces water wastage by delivering precise amounts of water based on soil moisture levels.</li>
            <li>Improved Crop Yield: Ensures plants receive the optimal amount of water, promoting better growth.</li>
            <li>Cost Savings: Reduces water and energy costs by automating irrigation and fertilization.</li>
            <li>Environmental Impact: Helps in sustaining water resources and reducing water consumption across farms.</li>
          </ul>
        </div>

        <footer className="blog-footer">
          <p>© 2025 Smart Irrigation System | All Rights Reserved</p>
        </footer>
      </section>
    </div>
  );
};

export default Blog;
