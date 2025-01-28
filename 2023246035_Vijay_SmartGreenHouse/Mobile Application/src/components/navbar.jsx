import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="navbar">
        <h2 className="logo">
            Green Farming
        </h2>
        <div className="list">
            <Link to="/home">Home</Link>
            <Link to="/parameter">Parameter</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/user">User</Link>
        </div>
    </div>
  )
}

export default navbar