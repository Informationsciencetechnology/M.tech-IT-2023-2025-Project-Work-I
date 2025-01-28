import React from 'react';
import { useLocation } from 'react-router-dom';
import './user.css';

const User = () => {
  const location = useLocation();
  const userInfo = location.state || {
    name: 'Guest',
    email: 'guest@example.com',
    location: 'Unknown',
    membership: 'Guest',
    phValue: 'Not available', // Default pH value
    soilMoisture: 'Not available', // Default soil moisture
  };

  // Helper function to calculate dates
  const getDate = (daysAgo) => {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  // Activities with dynamic dates
  const activities = [
    { title: 'Checked Soil Moisture', date: getDate(0) }, // Today
    { title: 'Analyzed pH Levels', date: getDate(1) },    // Yesterday
    { title: 'Updated Irrigation Schedule', date: getDate(7) }, // 7 days ago
  ];

  return (
    <div className="user-container">
      <div className="user-header">
        <h1 className="user-name">{userInfo.name}</h1>
        <p className="user-location">User</p>
      </div>

      <div className="user-details">
        <div className="user-info">
          <h2>Profile Information</h2>
          <p><strong>Last Recorded pH Value:</strong> {userInfo.phValue}</p>
          <p><strong>Last Recorded Soil Moisture:</strong> {userInfo.soilMoisture} %</p>
        </div>

        <div className="user-activities">
          <h2>Recent Activities</h2>
          <ul>
            {activities.map((activity, index) => (
              <li key={index} className="activity-item">
                <p className="activity-title">{activity.title}</p>
                <p className="activity-date">{activity.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
