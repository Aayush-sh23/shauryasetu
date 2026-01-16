import React, { useState, useEffect } from 'react';
import './IntroScreen.css';

const IntroScreen = ({ onSkip }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSkip();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => {
      onSkip();
    }, 500);
  };

  return (
    <div className={`intro-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="intro-content">
        <div className="intro-emblem">
          <div className="star">★</div>
        </div>
        <h1 className="intro-title">ShauryaSetu</h1>
        <p className="intro-subtitle">शौर्य सेतु</p>
        <p className="intro-tagline">Bridge to Valor</p>
        <div className="intro-description">
          <p>A respectful journey through the history,</p>
          <p>values, and stories of the Indian Army</p>
        </div>
        <button className="skip-btn" onClick={handleSkip}>
          Skip Introduction →
        </button>
      </div>
      <div className="intro-footer">
        <p>An educational platform • Not affiliated with Indian Army or Government of India</p>
      </div>
    </div>
  );
};

export default IntroScreen;