import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ShauryaSetu</h3>
            <p>A free educational platform bridging civilians with the history, values, and human stories of the Indian Army.</p>
          </div>
          
          <div className="footer-section">
            <h4>Important Notice</h4>
            <p className="disclaimer-text">
              ShauryaSetu is an independent educational platform. All information is sourced from publicly available records. 
              This platform is not affiliated with the Indian Army or Government of India.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Educational Purpose</h4>
            <p>This platform provides historical and educational content only. No sensitive operational or tactical information is shared.</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 ShauryaSetu • Built with respect and reverence • All content for educational purposes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;