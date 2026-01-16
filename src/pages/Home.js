import React from 'react';
import './Home.css';

const Home = ({ setCurrentPage }) => {
  const features = [
    {
      title: 'Educational Articles',
      description: 'Explore well-researched articles about army life, regiments, traditions, and historical events.',
      icon: '📚',
      page: 'articles'
    },
    {
      title: 'AI Assistant',
      description: 'Get your questions answered about army structure, careers, training, and history.',
      icon: '🤖',
      page: 'ai-assistant'
    },
    {
      title: 'Career Guidance',
      description: 'Learn about joining the Indian Army through NDA, CDS, Technical Entry, and Agniveer schemes.',
      icon: '🎯',
      page: 'career'
    },
    {
      title: 'Gallantry Awards',
      description: 'Discover stories of bravery through Param Vir Chakra, Maha Vir Chakra, and other awards.',
      icon: '🏅',
      page: 'awards'
    },
    {
      title: 'Wars & History',
      description: 'Understand India\'s military history through documented wars and operations since independence.',
      icon: '⚔️',
      page: 'wars'
    },
    {
      title: 'Movies & Context',
      description: 'Explore movies inspired by real soldiers and wars, with historical context and facts.',
      icon: '🎬',
      page: 'movies'
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to ShauryaSetu</h1>
            <p className="hero-subtitle">शौर्य सेतु - Bridge to Valor</p>
            <p className="hero-description">
              A free educational platform that bridges civilians with the history, values, 
              and human stories of the Indian Army through respectful, curiosity-driven learning.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => setCurrentPage('articles')}>
                Explore Articles
              </button>
              <button className="btn btn-secondary" onClick={() => setCurrentPage('ai-assistant')}>
                Ask AI Assistant
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Explore Our Platform</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card card"
                onClick={() => setCurrentPage(feature.page)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              ShauryaSetu exists to build awareness, respect, and understanding of the Indian Army 
              through publicly available historical information presented in a structured, respectful, 
              and curiosity-driven way.
            </p>
            <div className="mission-points">
              <div className="mission-point">
                <span className="point-icon">✓</span>
                <span>Educational content based on verified sources</span>
              </div>
              <div className="mission-point">
                <span className="point-icon">✓</span>
                <span>No sensitive operational or tactical information</span>
              </div>
              <div className="mission-point">
                <span className="point-icon">✓</span>
                <span>Completely free and accessible to all</span>
              </div>
              <div className="mission-point">
                <span className="point-icon">✓</span>
                <span>Neutral, factual, and respectful presentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;