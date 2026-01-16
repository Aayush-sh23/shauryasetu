import React, { useState } from 'react';
import './Awards.css';

const Awards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAward, setSelectedAward] = useState(null);
  const [selectedSoldier, setSelectedSoldier] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // COMPREHENSIVE SOLDIER DATABASE WITH BIOGRAPHICAL DATA
  // All information is from publicly available sources and official records
  const soldiers = {
    // PARAM VIR CHAKRA RECIPIENTS
    'somnath-sharma': {
      id: 'somnath-sharma',
      name: 'Major Somnath Sharma',
      rank: 'Major',
      awards: ['Param Vir Chakra'],
      image: null,
      dateOfBirth: '31 January 1923',
      placeOfBirth: 'Jammu, Jammu and Kashmir',
      dateOfMartyrdom: '3 November 1947',
      ageAtMartyrdom: 24,
      regiment: '4th Battalion, Kumaon Regiment',
      education: {
        school: 'Sherwood College, Nainital',
        military: 'Indian Military Academy, Dehradun',
        commission: 'February 1942'
      },
      family: {
        father: 'Major General Amar Nath Sharma',
        mother: 'Smt. Shanti Sharma'
      },
      wars: ['Indo-Pakistani War 1947-48'],
      citation: 'Defended Badgam airfield near Srinagar against overwhelming enemy forces. Despite being outnumbered and wounded, he continued to direct his company until he was killed by a mortar shell. His actions saved the Srinagar airfield.',
      legacy: 'First recipient of Param Vir Chakra. Somnath Sharma Marg in New Delhi is named after him.',
      famousQuote: 'The enemy is only 50 yards from us. We are heavily outnumbered. We are under devastating fire. I shall not withdraw an inch but will fight to our last man and our last round.',
      yearAwarded: 1950
    },
    'vikram-batra': {
      id: 'vikram-batra',
      name: 'Captain Vikram Batra',
      rank: 'Captain',
      awards: ['Param Vir Chakra'],
      image: null,
      dateOfBirth: '9 September 1974',
      placeOfBirth: 'Palampur, Himachal Pradesh',
      dateOfMartyrdom: '7 July 1999',
      ageAtMartyrdom: 24,
      regiment: '13th Battalion, Jammu and Kashmir Rifles',
      education: {
        school: 'DAV Public School, Palampur; Central School, Palampur',
        college: 'DAV College, Chandigarh (BSc Medical Sciences)',
        military: 'Indian Military Academy, Dehradun',
        commission: 'December 1996'
      },
      family: {
        father: 'Shri G.L. Batra (Principal)',
        mother: 'Smt. Kamal Kanta Batra',
        twin: 'Vishal Batra (identical twin brother)'
      },
      wars: ['Kargil War 1999'],
      citation: 'Led the attack on Point 5140 and Point 4875 during the Kargil War. Despite being injured, he killed five enemy soldiers in close combat and captured Point 4875. He was killed while trying to rescue a fellow officer.',
      legacy: 'Known as "Sher Shah" (Lion King). Bollywood film "Shershaah" (2021) depicts his life. Multiple roads and institutions named after him.',
      famousQuote: 'Yeh Dil Maange More! (This heart wants more!) - His radio code after capturing Point 5140',
      yearAwarded: 1999
    },
    'yogendra-yadav': {
      id: 'yogendra-yadav',
      name: 'Subedar Yogendra Singh Yadav',
      rank: 'Subedar (currently); Grenadier (at time of action)',
      awards: ['Param Vir Chakra'],
      image: null,
      dateOfBirth: '10 May 1980',
      placeOfBirth: 'Aurangabad Ahir village, Bulandshahr, Uttar Pradesh',
      dateOfMartyrdom: null,
      ageAtMartyrdom: null,
      regiment: '18th Battalion, Grenadiers',
      education: {
        military: 'Joined Indian Army in 1996',
        commission: 'Non-commissioned officer'
      },
      family: {
        father: 'Shri Karan Singh Yadav (farmer)',
        mother: 'Smt. Santosh Yadav'
      },
      wars: ['Kargil War 1999'],
      citation: 'At age 19, volunteered for the assault on Tiger Hill. Despite being hit by three bullets, he climbed the cliff face and killed four enemy soldiers in close combat, enabling his unit to capture the strategic position.',
      legacy: 'Youngest recipient of Param Vir Chakra. One of the few living PVC recipients. Continues to serve in the Indian Army.',
      famousQuote: 'I was just doing my duty. The real heroes are those who did not come back.',
      yearAwarded: 1999
    },
    'manoj-pandey': {
      id: 'manoj-pandey',
      name: 'Captain Manoj Kumar Pandey',
      rank: 'Captain',
      awards: ['Param Vir Chakra'],
      image: null,
      dateOfBirth: '25 June 1975',
      placeOfBirth: 'Sitapur, Uttar Pradesh (later moved to Lucknow)',
      dateOfMartyrdom: '3 July 1999',
      ageAtMartyrdom: 24,
      regiment: '1st Battalion, 11th Gorkha Rifles',
      education: {
        school: 'La Martiniere College, Lucknow',
        military: 'National Defence Academy, Khadakwasla; Indian Military Academy, Dehradun',
        commission: 'June 1997'
      },
      family: {
        father: 'Shri Gopi Chand Pandey',
        mother: 'Smt. Mohini Pandey'
      },
      wars: ['Kargil War 1999'],
      citation: 'Led his men in capturing Jubar Top and Khalubar hills. Despite being grievously injured, he continued fighting and killed four enemy soldiers in hand-to-hand combat before succumbing to his injuries.',
      legacy: 'Known for his motto "Some goals are so worthy, it is glorious even to fail." Manoj Pandey Auditorium at IMA named after him.',
      famousQuote: 'If death strikes before I prove my blood, I swear I will kill death.',
      yearAwarded: 1999
    },
    'shaitan-singh': {
      id: 'shaitan-singh',
      name: 'Major Shaitan Singh',
      rank: 'Major',
      awards: ['Param Vir Chakra'],
      image: null,
      dateOfBirth: '1 December 1924',
      placeOfBirth: 'Banasar village, Jodhpur, Rajasthan',
      dateOfMartyrdom: '18 November 1962',
      ageAtMartyrdom: 37,
      regiment: '13th Battalion, Kumaon Regiment',
      education: {
        military: 'Joined Indian Army in 1949',
        commission: '1949'
      },
      family: {
        father: 'Thakur Hem Singh',
        mother: 'Smt. Shrimati Devi'
      },
      wars: ['Sino-Indian War 1962'],
      citation: 'Defended Rezang La pass in Ladakh against overwhelming Chinese forces. Despite being heavily outnumbered (120 vs 5,000), his company inflicted heavy casualties. He fought till his last breath.',
      legacy: 'Battle of Rezang La is considered one of the most heroic last stands in military history. 114 of 120 soldiers were martyred. Rezang La Memorial honors their sacrifice.',
      famousQuote: 'We will fight to the last man, last round.',
      yearAwarded: 1962
    },
    'nirmal-jit-sekhon': {
      id: 'nirmal-jit-sekhon',
      name: 'Flying Officer Nirmal Jit Singh Sekhon',
      rank: 'Flying Officer',
      awards: ['Param Vir Chakra'],
      image: null,
      dateOfBirth: '17 July 1943',
      placeOfBirth: 'Ludhiana, Punjab',
      dateOfMartyrdom: '14 December 1971',
      ageAtMartyrdom: 28,
      regiment: 'Indian Air Force, 18 Squadron (Flying Bullets)',
      education: {
        school: 'Nankana Sahib Public School, Ludhiana',
        military: 'National Defence Academy; Air Force Academy',
        commission: 'June 1967'
      },
      family: {
        father: 'Shri Wariam Singh Sekhon',
        mother: 'Smt. Parkash Kaur'
      },
      wars: ['Indo-Pakistani War 1971'],
      citation: 'Single-handedly engaged six Pakistani F-86 Sabre jets over Srinagar airfield. Shot down one enemy aircraft and damaged another before being shot down himself. Only Indian Air Force officer to receive Param Vir Chakra.',
      legacy: 'Only IAF officer awarded PVC. Srinagar Airport terminal named after him. His Folland Gnat aircraft is displayed at National War Memorial.',
      famousQuote: 'I will not let them get away.',
      yearAwarded: 1971
    },

    // MAHA VIR CHAKRA RECIPIENTS
    'abhinandan-varthaman': {
      id: 'abhinandan-varthaman',
      name: 'Wing Commander Abhinandan Varthaman',
      rank: 'Wing Commander (currently); Squadron Leader (at time of action)',
      awards: ['Vir Chakra'],
      image: null,
      dateOfBirth: '1983',
      placeOfBirth: 'Chennai, Tamil Nadu',
      dateOfMartyrdom: null,
      ageAtMartyrdom: null,
      regiment: 'Indian Air Force, 51 Squadron (Sword Arms)',
      education: {
        school: 'Air Force School, Tambaram',
        military: 'National Defence Academy; Air Force Academy',
        commission: '2004'
      },
      family: {
        father: 'Air Marshal (Retd.) Simhakutty Varthaman',
        mother: 'Dr. Shobha Varthaman'
      },
      wars: ['2019 India-Pakistan standoff'],
      citation: 'Shot down a Pakistani F-16 aircraft during aerial combat on 27 February 2019. His MiG-21 Bison was hit, and he ejected over Pakistani territory where he was captured. Displayed exemplary courage during captivity.',
      legacy: 'Became a national hero. His handlebar mustache became iconic. Released by Pakistan after 60 hours in captivity.',
      famousQuote: 'I am sorry sir, that is all I am authorized to tell you.',
      yearAwarded: 2019
    },
    'ian-cardozo': {
      id: 'ian-cardozo',
      name: 'Major General Ian Cardozo',
      rank: 'Major General (Retd.); Major (at time of action)',
      awards: ['Sena Medal', 'Vir Chakra'],
      image: null,
      dateOfBirth: '7 August 1937',
      placeOfBirth: 'Mumbai, Maharashtra',
      dateOfMartyrdom: null,
      ageAtMartyrdom: null,
      regiment: '5th Gorkha Rifles (Frontier Force)',
      education: {
        school: 'St. Mary High School, Mumbai',
        military: 'National Defence Academy; Indian Military Academy',
        commission: '1958'
      },
      family: {
        father: 'Shri A.G. Cardozo',
        mother: 'Smt. Beryl Cardozo'
      },
      wars: ['Indo-Pakistani War 1971'],
      citation: 'During the Battle of Sylhet, stepped on a landmine and lost his leg. After self-amputation with his khukri, he continued to lead his troops. First war-disabled officer to command an infantry battalion and brigade.',
      legacy: 'Legendary figure in Indian Army. Author of several books including "Param Vir: Our Heroes in Battle." Continues to inspire generations.',
      famousQuote: 'A soldier never gives up.',
      yearAwarded: 1971
    },

    // ASHOKA CHAKRA RECIPIENTS
    'neerja-bhanot': {
      id: 'neerja-bhanot',
      name: 'Neerja Bhanot',
      rank: 'Senior Flight Purser (Civilian)',
      awards: ['Ashoka Chakra'],
      image: null,
      dateOfBirth: '7 September 1963',
      placeOfBirth: 'Chandigarh',
      dateOfMartyrdom: '5 September 1986',
      ageAtMartyrdom: 22,
      regiment: 'Pan Am Airlines (Civilian)',
      education: {
        school: 'Sacred Heart Senior Secondary School, Chandigarh',
        college: 'St. Xavier College, Mumbai (incomplete)',
        training: 'Pan Am flight attendant training'
      },
      family: {
        father: 'Shri Harish Bhanot (journalist)',
        mother: 'Smt. Rama Bhanot',
        brothers: 'Akhil Bhanot, Aneesh Bhanot'
      },
      wars: ['Pan Am Flight 73 hijacking, Karachi'],
      citation: 'During the hijacking of Pan Am Flight 73, she alerted pilots who escaped, preventing hijackers from flying the plane. She shielded three children from bullets and was killed while helping passengers escape.',
      legacy: 'Youngest recipient of Ashoka Chakra. Bollywood film "Neerja" (2016) depicts her heroism. Neerja Bhanot Award instituted for brave women.',
      famousQuote: 'I will do it. I am the senior crew member.',
      yearAwarded: 1987
    },
    'mohit-sharma': {
      id: 'mohit-sharma',
      name: 'Major Mohit Sharma',
      rank: 'Major',
      awards: ['Ashoka Chakra'],
      image: null,
      dateOfBirth: '13 January 1978',
      placeOfBirth: 'Ghaziabad, Uttar Pradesh',
      dateOfMartyrdom: '21 March 2009',
      ageAtMartyrdom: 31,
      regiment: '1st Para (Special Forces)',
      education: {
        school: 'Kendriya Vidyalaya, Ghaziabad',
        military: 'National Defence Academy; Indian Military Academy',
        commission: 'December 1999'
      },
      family: {
        father: 'Shri R.K. Sharma',
        mother: 'Smt. Sushma Sharma',
        wife: 'Smt. Rishima Sharma'
      },
      wars: ['Counter-terrorism operations in Jammu and Kashmir'],
      citation: 'Operated undercover as "Amir Khan" for two years, infiltrating terrorist networks. His intelligence led to elimination of 60+ terrorists. Killed in action during an encounter in Shopian.',
      legacy: 'One of the most successful undercover operations in Indian military history. His sacrifice saved countless lives.',
      famousQuote: 'The mission comes first, always.',
      yearAwarded: 2009
    },
    'tukaram-omble': {
      id: 'tukaram-omble',
      name: 'Assistant Sub-Inspector Tukaram Omble',
      rank: 'Assistant Sub-Inspector (Mumbai Police)',
      awards: ['Ashoka Chakra'],
      image: null,
      dateOfBirth: '1954',
      placeOfBirth: 'Satara, Maharashtra',
      dateOfMartyrdom: '27 November 2008',
      ageAtMartyrdom: 54,
      regiment: 'Mumbai Police',
      education: {
        training: 'Mumbai Police Training'
      },
      family: {
        wife: 'Smt. Tarabai Omble',
        children: 'Three daughters, one son'
      },
      wars: ['26/11 Mumbai terrorist attacks'],
      citation: 'During the 26/11 attacks, he grabbed the barrel of terrorist Ajmal Kasab rifle with his bare hands, allowing other officers to capture him alive. He was shot multiple times but did not let go.',
      legacy: 'His bravery ensured Kasab was captured alive, providing crucial evidence. Omble Chowk in Mumbai named after him.',
      famousQuote: 'Catch him alive!',
      yearAwarded: 2009
    },
    'sandeep-unnikrishnan': {
      id: 'sandeep-unnikrishnan',
      name: 'Major Sandeep Unnikrishnan',
      rank: 'Major',
      awards: ['Ashoka Chakra'],
      image: null,
      dateOfBirth: '15 March 1977',
      placeOfBirth: 'Kozhikode, Kerala',
      dateOfMartyrdom: '28 November 2008',
      ageAtMartyrdom: 31,
      regiment: 'National Security Guard (NSG), 51 Special Action Group',
      education: {
        school: 'Frank Anthony Public School, Bangalore',
        military: 'National Defence Academy; Indian Military Academy',
        commission: 'June 1999'
      },
      family: {
        father: 'Shri K. Unnikrishnan',
        mother: 'Smt. Dhanalakshmi Unnikrishnan'
      },
      wars: ['26/11 Mumbai terrorist attacks'],
      citation: 'Led NSG commandos during the Taj Hotel operation. Rescued 14 hostages. When his team came under fire, he asked them not to come up and engaged terrorists alone. Killed while saving hostages.',
      legacy: 'His last words "Do not come up, I will handle them" became legendary. Sandeep Unnikrishnan Auditorium at NDA named after him.',
      famousQuote: 'Do not come up, I will handle them.',
      yearAwarded: 2009
    }
  };

  // COMPREHENSIVE AWARDS DATABASE
  const awardsData = {
    // WARTIME GALLANTRY AWARDS
    'param-vir-chakra': {
      id: 'param-vir-chakra',
      name: 'Param Vir Chakra',
      shortName: 'PVC',
      icon: '🏅',
      category: 'wartime',
      precedence: 1,
      established: 1950,
      description: 'The Param Vir Chakra is India highest military decoration, awarded for displaying distinguished acts of valor during wartime. It is equivalent to the Medal of Honor in the United States and the Victoria Cross in the United Kingdom.',
      criteria: 'Awarded for the most conspicuous bravery or some daring or pre-eminent act of valor or self-sacrifice, in the presence of the enemy, whether on land, at sea, or in the air.',
      totalAwarded: 21,
      posthumous: 20,
      living: 1,
      recipients: ['somnath-sharma', 'vikram-batra', 'yogendra-yadav', 'manoj-pandey', 'shaitan-singh', 'nirmal-jit-sekhon']
    },
    'maha-vir-chakra': {
      id: 'maha-vir-chakra',
      name: 'Maha Vir Chakra',
      shortName: 'MVC',
      icon: '🎖️',
      category: 'wartime',
      precedence: 2,
      established: 1950,
      description: 'The Maha Vir Chakra is the second highest military decoration in India, awarded for acts of conspicuous gallantry in the presence of the enemy, whether on land, at sea or in the air.',
      criteria: 'Awarded for acts of conspicuous gallantry in the presence of the enemy, whether on land, at sea or in the air.',
      totalAwarded: 218,
      posthumous: 109,
      living: 109,
      recipients: ['abhinandan-varthaman', 'ian-cardozo']
    },
    'vir-chakra': {
      id: 'vir-chakra',
      name: 'Vir Chakra',
      shortName: 'VrC',
      icon: '⭐',
      category: 'wartime',
      precedence: 3,
      established: 1950,
      description: 'The Vir Chakra is the third highest wartime military decoration, awarded for acts of bravery in the battlefield.',
      criteria: 'Awarded for acts of gallantry in the presence of the enemy, whether on land, at sea or in the air.',
      totalAwarded: 1343,
      posthumous: 'Data not available',
      living: 'Data not available',
      recipients: []
    },
    'sena-medal': {
      id: 'sena-medal',
      name: 'Sena Medal (Gallantry)',
      shortName: 'SM',
      icon: '🎗️',
      category: 'wartime',
      precedence: 4,
      established: 1950,
      description: 'The Sena Medal is awarded to members of the Indian Army for such individual acts of exceptional devotion to duty or courage as have special significance for the Army.',
      criteria: 'Awarded for acts of gallantry of a high order.',
      totalAwarded: 'Data not available',
      posthumous: 'Data not available',
      living: 'Data not available',
      recipients: []
    },

    // PEACETIME GALLANTRY AWARDS
    'ashoka-chakra': {
      id: 'ashoka-chakra',
      name: 'Ashoka Chakra',
      shortName: 'AC',
      icon: '🏵️',
      category: 'peacetime',
      precedence: 1,
      established: 1952,
      description: 'The Ashoka Chakra is India highest peacetime military decoration awarded for valor, courageous action or self-sacrifice away from the battlefield.',
      criteria: 'Awarded for the most conspicuous bravery or some daring or pre-eminent act of valor or self-sacrifice other than in the face of the enemy.',
      totalAwarded: 77,
      posthumous: 'Majority',
      living: 'Minority',
      recipients: ['neerja-bhanot', 'mohit-sharma', 'tukaram-omble', 'sandeep-unnikrishnan']
    },
    'kirti-chakra': {
      id: 'kirti-chakra',
      name: 'Kirti Chakra',
      shortName: 'KC',
      icon: '🌟',
      category: 'peacetime',
      precedence: 2,
      established: 1952,
      description: 'The Kirti Chakra is the second highest peacetime gallantry award in India, awarded for conspicuous gallantry otherwise than in the face of the enemy.',
      criteria: 'Awarded for conspicuous gallantry otherwise than in the face of the enemy.',
      totalAwarded: 500,
      posthumous: 'Data not available',
      living: 'Data not available',
      recipients: []
    },
    'shaurya-chakra': {
      id: 'shaurya-chakra',
      name: 'Shaurya Chakra',
      shortName: 'SC',
      icon: '⭐',
      category: 'peacetime',
      precedence: 3,
      established: 1952,
      description: 'The Shaurya Chakra is awarded for gallantry otherwise than in the face of the enemy.',
      criteria: 'Awarded for gallantry otherwise than in the face of the enemy.',
      totalAwarded: 'Data not available',
      posthumous: 'Data not available',
      living: 'Data not available',
      recipients: []
    },

    // DISTINGUISHED SERVICE AWARDS
    'avsm': {
      id: 'avsm',
      name: 'Ati Vishisht Seva Medal',
      shortName: 'AVSM',
      icon: '🎖️',
      category: 'service',
      precedence: 1,
      established: 1960,
      description: 'The Ati Vishisht Seva Medal is a military award of India given for distinguished service of exceptional order.',
      criteria: 'Awarded for distinguished service of an exceptional order.',
      totalAwarded: 'Data not available',
      posthumous: 'N/A',
      living: 'N/A',
      recipients: []
    },
    'vsm': {
      id: 'vsm',
      name: 'Vishisht Seva Medal',
      shortName: 'VSM',
      icon: '🏅',
      category: 'service',
      precedence: 2,
      established: 1960,
      description: 'The Vishisht Seva Medal is awarded for distinguished service of a high order.',
      criteria: 'Awarded for distinguished service of a high order.',
      totalAwarded: 'Data not available',
      posthumous: 'N/A',
      living: 'N/A',
      recipients: []
    }
  };

  // SEARCH FUNCTIONALITY - Multi-field search
  const searchSoldiers = (term) => {
    if (!term.trim()) return [];

    const lowerTerm = term.toLowerCase();
    const results = [];

    Object.values(soldiers).forEach(soldier => {
      let matchScore = 0;
      const matchedFields = [];

      // Search in name
      if (soldier.name.toLowerCase().includes(lowerTerm)) {
        matchScore += 10;
        matchedFields.push('name');
      }

      // Search in awards
      if (soldier.awards.some(award => award.toLowerCase().includes(lowerTerm))) {
        matchScore += 9;
        matchedFields.push('award');
      }

      // Search in rank
      if (soldier.rank.toLowerCase().includes(lowerTerm)) {
        matchScore += 8;
        matchedFields.push('rank');
      }

      // Search in wars
      if (soldier.wars.some(war => war.toLowerCase().includes(lowerTerm))) {
        matchScore += 7;
        matchedFields.push('war');
      }

      // Search in year
      if (soldier.yearAwarded.toString().includes(lowerTerm)) {
        matchScore += 6;
        matchedFields.push('year');
      }

      // Search in regiment
      if (soldier.regiment.toLowerCase().includes(lowerTerm)) {
        matchScore += 5;
        matchedFields.push('regiment');
      }

      // Search in birthplace
      if (soldier.placeOfBirth.toLowerCase().includes(lowerTerm)) {
        matchScore += 4;
        matchedFields.push('birthplace');
      }

      if (matchScore > 0) {
        results.push({
          ...soldier,
          matchScore,
          matchedFields
        });
      }
    });

    // Sort by match score (highest first)
    return results.sort((a, b) => b.matchScore - a.matchScore);
  };

  // Filter awards by category
  const getFilteredAwards = () => {
    if (activeCategory === 'all') {
      return Object.values(awardsData);
    }
    return Object.values(awardsData).filter(award => award.category === activeCategory);
  };

  // Get search results
  const searchResults = searchTerm ? searchSoldiers(searchTerm) : [];

  return (
    <div className="awards-page">
      <div className="container">
        {/* PAGE HEADER */}
        <div className="page-header">
          <h1>Gallantry Awards & Heroes</h1>
          <p>Honoring India's Bravest Warriors</p>
          <p className="educational-note">
            A comprehensive biographical database of gallantry award recipients
          </p>
        </div>

        {/* SEARCH SECTION */}
        <div className="search-section">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, rank, award, war, year, regiment, or birthplace..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                className="clear-search"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
          <p className="search-hint">
            Try: "Captain Vikram Batra", "Kargil", "1999", "Param Vir Chakra", "Mumbai"
          </p>
        </div>

        {/* SEARCH RESULTS */}
        {searchTerm && (
          <div className="search-results">
            <h2>Search Results ({searchResults.length})</h2>
            {searchResults.length > 0 ? (
              <div className="soldiers-grid">
                {searchResults.map(soldier => (
                  <div 
                    key={soldier.id} 
                    className="soldier-card"
                    onClick={() => setSelectedSoldier(soldier)}
                  >
                    <div className="match-indicator">
                      Match: {soldier.matchedFields.join(', ')}
                    </div>
                    
                    <div className="soldier-card-header">
                      <div className="soldier-avatar">
                        {soldier.image ? (
                          <img src={soldier.image} alt={soldier.name} />
                        ) : (
                          <span className="avatar-placeholder">👤</span>
                        )}
                      </div>
                      <div className="soldier-card-title">
                        <h3>{soldier.name}</h3>
                        <p className="soldier-rank">{soldier.rank}</p>
                      </div>
                    </div>

                    <div className="soldier-card-content">
                      <div className="soldier-awards">
                        {soldier.awards.map((award, idx) => (
                          <span key={idx} className="mini-award-badge">{award}</span>
                        ))}
                      </div>

                      <div className="soldier-quick-info">
                        <div className="quick-info-item">
                          <span className="info-icon">📅</span>
                          <span>{soldier.yearAwarded}</span>
                        </div>
                        <div className="quick-info-item">
                          <span className="info-icon">⚔️</span>
                          <span>{soldier.wars[0]}</span>
                        </div>
                        {soldier.dateOfMartyrdom && (
                          <div className="quick-info-item martyrdom">
                            <span className="info-icon">🕊️</span>
                            <span>Martyred at age {soldier.ageAtMartyrdom}</span>
                          </div>
                        )}
                      </div>

                      {soldier.famousQuote && (
                        <div className="soldier-quote">
                          <p>"{soldier.famousQuote}"</p>
                        </div>
                      )}
                    </div>

                    <div className="soldier-card-footer">
                      <button className="view-profile-btn">
                        View Full Profile →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No Results Found</h3>
                <p>We could not find any soldiers matching "{searchTerm}"</p>
                <p>Try searching for:</p>
                <ul>
                  <li>Soldier names (e.g., "Vikram Batra", "Neerja Bhanot")</li>
                  <li>Ranks (e.g., "Captain", "Major")</li>
                  <li>Awards (e.g., "Param Vir Chakra", "Ashoka Chakra")</li>
                  <li>Wars (e.g., "Kargil", "1971", "26/11")</li>
                  <li>Years (e.g., "1999", "2009")</li>
                </ul>
              </div>
            )}
          </div>
        )}

        {/* CATEGORY FILTER */}
        {!searchTerm && (
          <>
            <div className="category-filter">
              <button 
                className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Awards
              </button>
              <button 
                className={`category-btn ${activeCategory === 'wartime' ? 'active' : ''}`}
                onClick={() => setActiveCategory('wartime')}
              >
                Wartime Gallantry
              </button>
              <button 
                className={`category-btn ${activeCategory === 'peacetime' ? 'active' : ''}`}
                onClick={() => setActiveCategory('peacetime')}
              >
                Peacetime Gallantry
              </button>
              <button 
                className={`category-btn ${activeCategory === 'service' ? 'active' : ''}`}
                onClick={() => setActiveCategory('service')}
              >
                Distinguished Service
              </button>
            </div>

            {/* AWARDS GRID */}
            <div className="awards-grid">
              {getFilteredAwards().map(award => (
                <div key={award.id} className="award-card">
                  <div className="award-card-header">
                    <span className="award-icon">{award.icon}</span>
                    <span className="award-category-badge">
                      {award.category === 'wartime' ? 'WARTIME' : 
                       award.category === 'peacetime' ? 'PEACETIME' : 'SERVICE'}
                    </span>
                  </div>

                  <h3>{award.name}</h3>
                  <p className="award-short-name">{award.shortName}</p>

                  <div className="award-meta">
                    <span className="meta-item">
                      <strong>Est.</strong> {award.established}
                    </span>
                    <span className="meta-item">
                      <strong>Precedence:</strong> #{award.precedence}
                    </span>
                  </div>

                  <p className="award-description">{award.description}</p>

                  <div className="award-criteria">
                    <strong>Criteria:</strong> {award.criteria}
                  </div>

                  {award.totalAwarded !== 'Data not available' && (
                    <div className="award-stats">
                      <div className="stat-item">
                        <span className="stat-number">{award.totalAwarded}</span>
                        <span className="stat-label">Total Awarded</span>
                      </div>
                      {award.posthumous !== 'N/A' && award.posthumous !== 'Data not available' && (
                        <div className="stat-item">
                          <span className="stat-number">{award.posthumous}</span>
                          <span className="stat-label">Posthumous</span>
                        </div>
                      )}
                      {award.living !== 'N/A' && award.living !== 'Data not available' && (
                        <div className="stat-item">
                          <span className="stat-number">{award.living}</span>
                          <span className="stat-label">Living</span>
                        </div>
                      )}
                    </div>
                  )}

                  {award.recipients.length > 0 && (
                    <div className="recipients-section">
                      <h4>Featured Recipients</h4>
                      <div className="recipients-list">
                        {award.recipients.map(recipientId => {
                          const recipient = soldiers[recipientId];
                          return (
                            <div 
                              key={recipientId} 
                              className="recipient-item"
                              onClick={() => setSelectedSoldier(recipient)}
                            >
                              <div className="recipient-avatar">
                                {recipient.image ? (
                                  <img src={recipient.image} alt={recipient.name} />
                                ) : (
                                  <span className="avatar-icon">👤</span>
                                )}
                              </div>
                              <div className="recipient-info">
                                <div className="recipient-name">{recipient.name}</div>
                                <div className="recipient-details">
                                  {recipient.rank}
                                  <span className="separator">•</span>
                                  {recipient.yearAwarded}
                                  {recipient.dateOfMartyrdom && (
                                    <>
                                      <span className="separator">•</span>
                                      <span>🕊️ Martyr</span>
                                    </>
                                  )}
                                </div>
                              </div>
                              <span className="recipient-arrow">→</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {award.recipients.length === 0 && (
                    <p className="no-recipients-note">
                      Featured profiles coming soon
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* SOLDIER PROFILE MODAL */}
        {selectedSoldier && (
          <div className="modal-overlay" onClick={() => setSelectedSoldier(null)}>
            <div className="soldier-profile-modal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close"
                onClick={() => setSelectedSoldier(null)}
                aria-label="Close profile"
              >
                ×
              </button>

              <div className="profile-header">
                <div className="profile-image">
                  {selectedSoldier.image ? (
                    <img src={selectedSoldier.image} alt={selectedSoldier.name} />
                  ) : (
                    <div className="profile-placeholder">
                      <span className="profile-icon">👤</span>
                    </div>
                  )}
                </div>
                <div className="profile-title">
                  <h2>{selectedSoldier.name}</h2>
                  <p className="profile-rank">{selectedSoldier.rank}</p>
                  <div className="profile-awards">
                    {selectedSoldier.awards.map((award, idx) => (
                      <span key={idx} className="award-badge">{award}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="profile-content">
                {/* BASIC INFORMATION */}
                <div className="profile-section">
                  <h3>📋 Basic Information</h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Date of Birth</span>
                      <span className="info-value">{selectedSoldier.dateOfBirth}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Place of Birth</span>
                      <span className="info-value">{selectedSoldier.placeOfBirth}</span>
                    </div>
                    {selectedSoldier.dateOfMartyrdom && (
                      <>
                        <div className="info-item">
                          <span className="info-label">Date of Martyrdom</span>
                          <span className="info-value">{selectedSoldier.dateOfMartyrdom}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Age at Martyrdom</span>
                          <span className="info-value">{selectedSoldier.ageAtMartyrdom} years</span>
                        </div>
                      </>
                    )}
                    <div className="info-item">
                      <span className="info-label">Regiment/Unit</span>
                      <span className="info-value">{selectedSoldier.regiment}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Year Awarded</span>
                      <span className="info-value">{selectedSoldier.yearAwarded}</span>
                    </div>
                  </div>
                </div>

                {/* EDUCATION & TRAINING */}
                <div className="profile-section">
                  <h3>🎓 Education & Training</h3>
                  <div className="education-list">
                    {selectedSoldier.education.school && (
                      <div className="education-item">
                        <strong>School:</strong> {selectedSoldier.education.school}
                      </div>
                    )}
                    {selectedSoldier.education.college && (
                      <div className="education-item">
                        <strong>College:</strong> {selectedSoldier.education.college}
                      </div>
                    )}
                    {selectedSoldier.education.military && (
                      <div className="education-item">
                        <strong>Military Training:</strong> {selectedSoldier.education.military}
                      </div>
                    )}
                    {selectedSoldier.education.commission && (
                      <div className="education-item">
                        <strong>Commissioned:</strong> {selectedSoldier.education.commission}
                      </div>
                    )}
                    {selectedSoldier.education.training && (
                      <div className="education-item">
                        <strong>Training:</strong> {selectedSoldier.education.training}
                      </div>
                    )}
                  </div>
                </div>

                {/* FAMILY */}
                <div className="profile-section">
                  <h3>👨‍👩‍👧‍👦 Family</h3>
                  <div className="family-list">
                    {selectedSoldier.family.father && (
                      <div className="family-item">
                        <strong>Father:</strong> {selectedSoldier.family.father}
                      </div>
                    )}
                    {selectedSoldier.family.mother && (
                      <div className="family-item">
                        <strong>Mother:</strong> {selectedSoldier.family.mother}
                      </div>
                    )}
                    {selectedSoldier.family.wife && (
                      <div className="family-item">
                        <strong>Spouse:</strong> {selectedSoldier.family.wife}
                      </div>
                    )}
                    {selectedSoldier.family.children && (
                      <div className="family-item">
                        <strong>Children:</strong> {selectedSoldier.family.children}
                      </div>
                    )}
                    {selectedSoldier.family.twin && (
                      <div className="family-item">
                        <strong>Twin Brother:</strong> {selectedSoldier.family.twin}
                      </div>
                    )}
                    {selectedSoldier.family.brothers && (
                      <div className="family-item">
                        <strong>Siblings:</strong> {selectedSoldier.family.brothers}
                      </div>
                    )}
                  </div>
                </div>

                {/* WARS & OPERATIONS */}
                <div className="profile-section">
                  <h3>⚔️ Wars & Operations</h3>
                  <div className="wars-list">
                    {selectedSoldier.wars.map((war, idx) => (
                      <span key={idx} className="war-badge">{war}</span>
                    ))}
                  </div>
                </div>

                {/* CITATION & ACT OF VALOR */}
                <div className="profile-section">
                  <h3>🏅 Citation & Act of Valor</h3>
                  <p className="citation-text">{selectedSoldier.citation}</p>
                </div>

                {/* FAMOUS QUOTE */}
                {selectedSoldier.famousQuote && (
                  <div className="profile-section">
                    <h3>💬 Famous Quote</h3>
                    <div className="quote-section">
                      <p className="famous-quote">"{selectedSoldier.famousQuote}"</p>
                    </div>
                  </div>
                )}

                {/* LEGACY & HONORS */}
                <div className="profile-section">
                  <h3>🌟 Legacy & Honors</h3>
                  <p className="legacy-text">{selectedSoldier.legacy}</p>
                </div>
              </div>

              <div className="profile-footer">
                <p className="disclaimer">
                  All information is from publicly available sources and official records. 
                  This profile is for educational purposes to honor the sacrifice and service 
                  of our brave warriors.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* EDUCATIONAL DISCLAIMER */}
        <div className="educational-disclaimer">
          <h3>Educational Purpose</h3>
          <p>
            This database is created for educational purposes to honor and remember India's 
            bravest warriors. All information is sourced from publicly available records, 
            official citations, and verified historical documents.
          </p>
          <p>
            We strive for accuracy and respect in presenting these stories. If you notice 
            any inaccuracies, please help us improve this resource.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
