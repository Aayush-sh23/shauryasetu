import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, setCurrentPage }) => {
  const [loginMethod, setLoginMethod] = useState('mobile');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [name, setName] = useState('');

  const handleSendOtp = () => {
    if (loginMethod === 'mobile' && mobile.length === 10) {
      setShowOtp(true);
      alert('OTP sent! (Demo: Use any 6 digits)');
    } else if (loginMethod === 'email' && email.includes('@')) {
      setShowOtp(true);
      alert('OTP sent to your email! (Demo: Use any 6 digits)');
    } else {
      alert('Please enter valid details');
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6 && name.trim()) {
      const userData = {
        name: name,
        mobile: loginMethod === 'mobile' ? mobile : null,
        email: loginMethod === 'email' ? email : null,
        loginDate: new Date().toISOString()
      };
      onLogin(userData);
    } else {
      alert('Please enter valid OTP and name');
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-container">
          <div className="login-card card">
            <div className="login-header">
              <h2>Welcome to ShauryaSetu</h2>
              <p>Login to access personalized features</p>
            </div>

            <div className="login-method-toggle">
              <button
                className={`method-btn ${loginMethod === 'mobile' ? 'active' : ''}`}
                onClick={() => {
                  setLoginMethod('mobile');
                  setShowOtp(false);
                }}
              >
                Mobile Number
              </button>
              <button
                className={`method-btn ${loginMethod === 'email' ? 'active' : ''}`}
                onClick={() => {
                  setLoginMethod('email');
                  setShowOtp(false);
                }}
              >
                Email
              </button>
            </div>

            {!showOtp ? (
              <div className="login-form">
                {loginMethod === 'mobile' ? (
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                      className="form-input"
                    />
                  </div>
                ) : (
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                    />
                  </div>
                )}
                <button className="btn btn-primary full-width" onClick={handleSendOtp}>
                  Send OTP
                </button>
              </div>
            ) : (
              <div className="login-form">
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Enter OTP</label>
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="form-input"
                  />
                </div>
                <button className="btn btn-primary full-width" onClick={handleVerifyOtp}>
                  Verify & Login
                </button>
                <button className="btn btn-secondary full-width" onClick={() => setShowOtp(false)}>
                  Change Number/Email
                </button>
              </div>
            )}

            <div className="login-benefits">
              <h4>Benefits of Login</h4>
              <ul>
                <li>✓ Bookmark your favorite articles</li>
                <li>✓ Save career roadmaps</li>
                <li>✓ Access AI assistant history</li>
                <li>✓ Personalized recommendations</li>
              </ul>
            </div>

            <div className="guest-access">
              <p>Want to explore first?</p>
              <button 
                className="btn btn-secondary"
                onClick={() => setCurrentPage('home')}
              >
                Continue as Guest
              </button>
            </div>
          </div>

          <div className="login-info">
            <div className="info-card card">
              <h3>Why Login?</h3>
              <p>
                Create an account to unlock personalized features and save your progress 
                as you explore the rich history and information about the Indian Army.
              </p>
            </div>
            <div className="info-card card">
              <h3>Your Privacy</h3>
              <p>
                We only collect basic information needed for your account. 
                Your data is stored securely and never shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;