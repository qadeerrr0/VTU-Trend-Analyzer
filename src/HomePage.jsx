// src/components/HomePageV2/HomePage.jsx
import React, { useState } from 'react';
import './HomePage.css'; // We will create this CSS file next

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const popularSubjects = ['BCS501 (SEPM)', 'BCS502 (CN)', 'BCS503 (TOC)', 'BCS504 (DBMS)'];

  const handleSearch = (query) => {
    // In a real app, this would navigate to the analysis dashboard for the query
    alert(`Analyzing trends for: ${query || 'All Subjects'}`);
    // Example: window.location.href = `/analyzer/${query}`;
  };

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">VTU Analytics</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><button className="nav-login-btn">Login</button></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Decode VTU Question Papers<br /> &amp; Predict High-Yield Topics</h1>
        <p className="hero-subtitle">Your AI-Powered Companion for Smarter Exam Preparation.</p>

        {/* Search Bar */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter Subject Code (e.g., BCS501) or Subject Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchTerm)}
          />
          <button onClick={() => handleSearch(searchTerm)}>Analyze Trends</button>
        </div>

        {/* Quick Subject Suggestions */}
        <div className="quick-subjects">
          <span>Quick Picks:</span>
          {popularSubjects.map((sub) => (
            <button key={sub} onClick={() => handleSearch(sub)}>{sub}</button>
          ))}
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Use VTU Trend Analyzer?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Module-Wise Weightage</h3>
            <p>Instantly visualize the marks distribution across all five modules from past question papers.</p>
          </div>
          <div className="feature-card">
            <h3>Most Repeated Questions</h3>
            <p>Identify the exact questions that appear frequently, helping you prioritize your study time.</p>
          </div>
          <div className="feature-card">
            <h3>Syllabus vs. Paper Trend</h3>
            <p>Compare official syllabus topics with actual exam question patterns to spot hidden gaps.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 VTU Question Paper Trend Analyzer | Mini-Project Team</p>
      </footer>
    </div>
  );
};

export default HomePage;