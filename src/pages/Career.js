import React, { useState } from 'react';
import './Career.css';

const Career = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  const careerPaths = [
    {
      id: 'nda',
      name: 'National Defence Academy (NDA)',
      icon: '🎓',
      eligibility: '10+2 (Science/Arts/Commerce)',
      age: '16.5 - 19.5 years',
      duration: '3 years at NDA + 1 year at IMA/INA/AFA',
      description: 'The premier tri-service academy for training officers for the Army, Navy, and Air Force.',
      process: [
        'Written Exam (Mathematics & General Ability)',
        'SSB Interview (5 days)',
        'Medical Examination',
        'Merit List & Final Selection'
      ]
    },
    {
      id: 'cds',
      name: 'Combined Defence Services (CDS)',
      icon: '🎯',
      eligibility: 'Graduate (Any Stream)',
      age: '19 - 24 years',
      duration: '1 year at IMA/OTA',
      description: 'Entry for graduates to join as officers in the Indian Army.',
      process: [
        'Written Exam (English, GK, Mathematics)',
        'SSB Interview',
        'Medical Examination',
        'Final Merit List'
      ]
    },
    {
      id: 'technical',
      name: 'Technical Entry Scheme (TES)',
      icon: '⚙️',
      eligibility: '10+2 (PCM with 70%)',
      age: '16.5 - 19.5 years',
      duration: '4 years B.Tech + 1 year at IMA',
      description: 'Direct entry for technical graduates into the Army.',
      process: [
        'Written Exam',
        'SSB Interview',
        'Medical Examination',
        'B.Tech at designated colleges'
      ]
    },
    {
      id: 'agniveer',
      name: 'Agniveer Scheme',
      icon: '🔥',
      eligibility: '10th/12th (varies by role)',
      age: '17.5 - 21 years',
      duration: '4 years service',
      description: 'Short service scheme for joining the Indian Army.',
      process: [
        'Online Registration',
        'Physical Fitness Test',
        'Written Exam',
        'Medical Examination'
      ]
    }
  ];

  const ranks = [
    { name: 'Field Marshal', level: 10 },
    { name: 'General', level: 9 },
    { name: 'Lieutenant General', level: 8 },
    { name: 'Major General', level: 7 },
    { name: 'Brigadier', level: 6 },
    { name: 'Colonel', level: 5 },
    { name: 'Lieutenant Colonel', level: 4 },
    { name: 'Major', level: 3 },
    { name: 'Captain', level: 2 },
    { name: 'Lieutenant', level: 1 }
  ];

  return (
    <div className="career-page">
      <div className="container">
        <div className="page-header">
          <h1>Career in Indian Army</h1>
          <p>Explore different pathways to serve the nation</p>
        </div>

        <div className="career-paths">
          {careerPaths.map(path => (
            <div 
              key={path.id} 
              className={`career-card card ${selectedPath === path.id ? 'selected' : ''}`}
              onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
            >
              <div className="career-icon">{path.icon}</div>
              <h3>{path.name}</h3>
              <div className="career-quick-info">
                <div className="info-item">
                  <strong>Eligibility:</strong> {path.eligibility}
                </div>
                <div className="info-item">
                  <strong>Age:</strong> {path.age}
                </div>
                <div className="info-item">
                  <strong>Duration:</strong> {path.duration}
                </div>
              </div>
              <p>{path.description}</p>
              
              {selectedPath === path.id && (
                <div className="career-details">
                  <h4>Selection Process</h4>
                  <ol>
                    {path.process.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="ranks-section">
          <h2>Officer Ranks in Indian Army</h2>
          <p className="section-description">Progression path from Lieutenant to Field Marshal</p>
          <div className="ranks-ladder">
            {ranks.map((rank, index) => (
              <div key={index} className="rank-item">
                <div className="rank-level">{rank.level}</div>
                <div className="rank-name">{rank.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="checklist-section card">
          <h2>Is This Path Right for You?</h2>
          <div className="checklist">
            <label className="checklist-item">
              <input type="checkbox" />
              <span>Are you physically fit and willing to maintain high fitness standards?</span>
            </label>
            <label className="checklist-item">
              <input type="checkbox" />
              <span>Do you have strong leadership qualities and team spirit?</span>
            </label>
            <label className="checklist-item">
              <input type="checkbox" />
              <span>Are you prepared for a disciplined lifestyle?</span>
            </label>
            <label className="checklist-item">
              <input type="checkbox" />
              <span>Can you handle challenging situations under pressure?</span>
            </label>
            <label className="checklist-item">
              <input type="checkbox" />
              <span>Are you willing to serve in remote and difficult terrains?</span>
            </label>
            <label className="checklist-item">
              <input type="checkbox" />
              <span>Do you have a strong sense of duty towards the nation?</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;