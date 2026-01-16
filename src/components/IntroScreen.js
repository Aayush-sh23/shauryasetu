import React, { useEffect, useRef } from 'react';
import './IntroScreen.css';

const IntroScreen = ({ onSkip }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Auto-play background music on mount
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Low volume (30%)
      audioRef.current.play().catch(error => {
        // Handle autoplay restrictions in some browsers
        console.log('Autoplay prevented:', error);
      });
    }

    // Cleanup: Stop music when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleSkip = () => {
    // Stop music immediately when user clicks Enter
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onSkip();
  };

  return (
    <div className="intro-screen">
      {/* Background Music - Instrumental Only */}
      <audio 
        ref={audioRef} 
        loop
        preload="auto"
      >
        {/* 
          Note: Add your instrumental patriotic music file here
          Recommended: Soft tabla/flute instrumental, 15-30 seconds loop
          Format: MP3 or OGG for browser compatibility
          
          Example:
          <source src="/audio/intro-music.mp3" type="audio/mpeg" />
          <source src="/audio/intro-music.ogg" type="audio/ogg" />
        */}
        <source src="/audio/intro-patriotic-instrumental.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="intro-content">
        <div className="intro-logo">🇮🇳</div>
        <h1 className="intro-title">ShauryaSetu</h1>
        <p className="intro-subtitle">शौर्य सेतु - वीरता का सेतु</p>
        <p className="intro-tagline">Bridge to Valor</p>
        <button className="intro-button" onClick={handleSkip}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;