import React, { useState } from 'react';
import './Wars.css';

const Wars = () => {
  const [selectedWar, setSelectedWar] = useState(null);

  const wars = [
    {
      id: 1,
      name: 'Indo-Pakistani War of 1947-1948',
      year: '1947-1948',
      location: 'Jammu and Kashmir',
      duration: '14 months',
      background: 'Conflict over the princely state of Jammu and Kashmir following partition.',
      outcome: 'Ceasefire with UN intervention. India retained two-thirds of Kashmir.',
      casualties: 'Approximately 1,500 Indian soldiers',
      awards: 'Multiple gallantry awards including first Param Vir Chakra',
      icon: '🏔️'
    },
    {
      id: 2,
      name: 'Sino-Indian War',
      year: '1962',
      location: 'Aksai Chin and NEFA (now Arunachal Pradesh)',
      duration: '1 month',
      background: 'Border dispute between India and China over Aksai Chin and McMahon Line.',
      outcome: 'Chinese victory. China retained Aksai Chin.',
      casualties: 'Approximately 1,400 Indian soldiers killed',
      awards: 'Param Vir Chakra to Major Shaitan Singh (posthumous)',
      icon: '⛰️'
    },
    {
      id: 3,
      name: 'Indo-Pakistani War of 1965',
      year: '1965',
      location: 'Punjab, Rajasthan, Kashmir',
      duration: '17 days',
      background: 'Pakistan\'s Operation Gibraltar aimed to infiltrate Kashmir.',
      outcome: 'Stalemate. Tashkent Agreement signed.',
      casualties: 'Approximately 3,000 Indian soldiers',
      awards: 'Multiple Param Vir Chakras including to Abdul Hamid',
      icon: '🛡️'
    },
    {
      id: 4,
      name: 'Indo-Pakistani War of 1971',
      year: '1971',
      location: 'East Pakistan (now Bangladesh)',
      duration: '13 days',
      background: 'Bangladesh Liberation War. India intervened to support Bengali independence.',
      outcome: 'Decisive Indian victory. Creation of Bangladesh. 93,000 Pakistani soldiers surrendered.',
      casualties: 'Approximately 3,800 Indian soldiers',
      awards: 'Multiple Param Vir Chakras. Largest military surrender since WWII.',
      icon: '🇯🇵'
    },
    {
      id: 5,
      name: 'Kargil War',
      year: '1999',
      location: 'Kargil district, Jammu and Kashmir',
      duration: '2 months',
      background: 'Pakistani infiltration into Indian territory across the Line of Control.',
      outcome: 'Indian victory. All infiltrators pushed back.',
      casualties: 'Approximately 527 Indian soldiers',
      awards: '4 Param Vir Chakras including to Captain Vikram Batra',
      icon: '🏔️'
    }
  ];

  return (
    <div className="wars-page">
      <div className="container">
        <div className="page-header">
          <h1>Wars After Independence</h1>
          <p>Understanding India\'s military history through documented conflicts</p>
        </div>

        <div className="timeline">
          {wars.map(war => (
            <div key={war.id} className="timeline-item">
              <div className="timeline-marker">
                <span className="war-icon">{war.icon}</span>
              </div>
              <div 
                className={`war-card card ${selectedWar === war.id ? 'expanded' : ''}`}
                onClick={() => setSelectedWar(selectedWar === war.id ? null : war.id)}
              >
                <div className="war-header">
                  <h3>{war.name}</h3>
                  <span className="war-year">{war.year}</span>
                </div>
                
                <div className="war-quick-info">
                  <div className="info-badge">
                    <strong>Location:</strong> {war.location}
                  </div>
                  <div className="info-badge">
                    <strong>Duration:</strong> {war.duration}
                  </div>
                </div>

                {selectedWar === war.id && (
                  <div className="war-details">
                    <div className="detail-section">
                      <h4>Background</h4>
                      <p>{war.background}</p>
                    </div>
                    
                    <div className="detail-section">
                      <h4>Outcome</h4>
                      <p>{war.outcome}</p>
                    </div>
                    
                    <div className="detail-section">
                      <h4>Casualties</h4>
                      <p>{war.casualties}</p>
                    </div>
                    
                    <div className="detail-section">
                      <h4>Gallantry Awards</h4>
                      <p>{war.awards}</p>
                    </div>
                  </div>
                )}
                
                <button className="expand-btn">
                  {selectedWar === war.id ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wars;