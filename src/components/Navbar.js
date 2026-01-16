import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage, isLoggedIn, user, onLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'articles', label: 'Articles' },
    { id: 'ai-assistant', label: 'AI Assistant' },
    { id: 'career', label: 'Career' },
    { id: 'awards', label: 'Awards' },
    { id: 'wars', label: 'Wars' },
    { id: 'movies', label: 'Movies' },
    { id: 'donate', label: 'Support' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-brand" onClick={() => handleNavClick('home')}>
          <span className="brand-icon">★</span>
          <span className="brand-name">ShauryaSetu</span>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          
          {isLoggedIn ? (
            <div className="user-menu">
              <span className="user-name">{user?.name || user?.mobile}</span>
              <button className="btn btn-secondary" onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button 
              className="btn btn-primary"
              onClick={() => handleNavClick('login')}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;