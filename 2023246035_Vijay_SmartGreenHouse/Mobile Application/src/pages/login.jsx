import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // Mock user details (replace this with your actual user management logic)
  const userDetails = {
    JohnDoe: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      location: 'California, USA',
      membership: 'Premium Member',
      profilePic: 'https://via.placeholder.com/150',
    },
    JaneSmith: {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      location: 'Texas, USA',
      membership: 'Standard Member',
      profilePic: 'https://via.placeholder.com/150',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userDetails[username] || {
      name: username || 'Vijay',
      email: 'host@gmail.com',
      location: 'Unknown',
      membership: 'Premium',
      profilePic: 'https://via.placeholder.com/150',
    };
    navigate('/user', { state: user });
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-title">Smart Irrigation Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="username" className="input-label">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
