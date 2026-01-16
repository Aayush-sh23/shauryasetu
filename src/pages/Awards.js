import React, { useState } from 'react';
import './Awards.css';

const Awards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAward, setSelectedAward] = useState(null);

  const awards = [
    {
      id: 1,
      name: 'Param Vir Chakra',
      icon: '🏅',
      description: 'India\'s highest military decoration awarded for acts of conspicuous gallantry in the presence of the enemy.',
      recipients: [
        { name: 'Major Somnath Sharma', year: '1947', war: 'Indo-Pak War 1947' },
        { name: 'Captain Vikram Batra', year: '1999', war: 'Kargil War' },
        { name: 'Subedar Yogendra Singh Yadav', year: '1999', war: 'Kargil War' }
      ]
    },
    {
      id: 2,
      name: 'Maha Vir Chakra',
      icon: '🎖️',
      description: 'Second highest military decoration awarded for acts of conspicuous gallantry.',
      recipients: [
        { name: 'Major Ralengnao Khathing', year: '1950', war: 'Indo-Pak War 1947-48' },
        { name: 'Wing Commander Abhinandan Varthaman', year: '2019', war: 'Balakot Airstrike' }
      ]
    },
    {
      id: 3,
      name: 'Vir Chakra',
      icon: '⭐',
      description: 'Third highest wartime gallantry award presented for acts of bravery on the battlefield.',
      recipients: [
        { name: 'Major Shaitan Singh', year: '1962', war: 'Sino-Indian War' },
        { name: 'Flight Lieutenant Nirmal Jit Singh Sekhon', year: '1971', war: 'Indo-Pak War 1971' }
      ]
    },
    {
      id: 4,
      name: 'Ashoka Chakra',
      icon: '🏵️',
      description: 'Highest peacetime gallantry award for bravery, courageous action, or self-sacrifice away from the battlefield.',
      recipients: [
        { name: 'Neerja Bhanot', year: '1987', war: 'Peacetime' },
        { name: 'Major Mohit Sharma', year: '2009', war: 'Counter-terrorism' }
      ]
    }
  ];

  const filteredAwards = awards.filter(award =>
    award.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    award.recipients.some(r => r.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="awards-page">
      <div className="container">
        <div className="page-header">
          <h1>Gallantry Awards</h1>
          <p>Honoring acts of exceptional bravery and sacrifice</p>
        </div>

        <div className="search-section">
          <input
            type="text"
            placeholder="Search by award name or soldier name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="awards-grid">
          {filteredAwards.map(award => (
            <div key={award.id} className="award-card card">
              <div className="award-icon">{award.icon}</div>
              <h3>{award.name}</h3>
              <p className="award-description">{award.description}</p>
              
              <div className="recipients-section">
                <h4>Notable Recipients</h4>
                {award.recipients.map((recipient, index) => (
                  <div key={index} className="recipient-item">
                    <div className="recipient-name">{recipient.name}</div>
                    <div className="recipient-details">
                      <span>{recipient.year}</span>
                      <span className="separator">•</span>
                      <span>{recipient.war}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedAward(award)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredAwards.length === 0 && (
          <div className="no-results">
            <p>No awards found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Awards;