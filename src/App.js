import React, { useState, useEffect } from 'react';
import './App.css';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Articles from './pages/Articles';
import AIAssistant from './pages/AIAssistant';
import Career from './pages/Career';
import Movies from './pages/Movies';
import Awards from './pages/Awards';
import Wars from './pages/Wars';
import Donate from './pages/Donate';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('shauryaSetuUser');
    if (userData) {
      setUser(JSON.parse(userData));
      setIsLoggedIn(true);
    }
  }, []);

  const handleSkipIntro = () => {
    setShowIntro(false);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('shauryaSetuUser', JSON.stringify(userData));
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('shauryaSetuUser');
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'articles':
        return <Articles user={user} />;
      case 'ai-assistant':
        return <AIAssistant user={user} />;
      case 'career':
        return <Career />;
      case 'movies':
        return <Movies />;
      case 'awards':
        return <Awards />;
      case 'wars':
        return <Wars />;
      case 'donate':
        return <Donate />;
      case 'login':
        return <Login onLogin={handleLogin} setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  if (showIntro) {
    return <IntroScreen onSkip={handleSkipIntro} />;
  }

  return (
    <div className="App">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        user={user}
        onLogout={handleLogout}
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;