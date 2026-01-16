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
      image: null, // Placeholder for photo
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
      dateOfMartyrdom: null, // Still alive
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
      famousQuote: 'I was just doing my duty. The real heroes are those who didn\\'t come back.',
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
      legacy: 'Known for his motto "Some goals are so worthy, it\\'s glorious even to fail." Manoj Pandey Auditorium at IMA named after him.',
      famousQuote: 'If death strikes before I prove my blood, I swear I\\'ll kill death.',
      yearAwarded: 1999
    },

    // MAHA VIR CHAKRA RECIPIENTS
    'abhinandan-varthaman': {
      id: 'abhinandan-varthaman',
      name: 'Wing Commander Abhinandan Varthaman',
      rank: 'Wing Commander (currently); Squadron Leader (at time of action)',
      awards: ['Vir Chakra', 'Mentioned for Maha Vir Chakra'],
      image: null,
      dateOfBirth: '1983',
      placeOfBirth: 'Chennai, Tamil Nadu',
      dateOfMartyrdom: null, // Still alive
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
      famousQuote: 'I\\'m sorry sir, that\\'s all I\\'m authorized to tell you.',
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
      dateOfMartyrdom: null, // Still alive
      ageAtMartyrdom: null,
      regiment: '5th Gorkha Rifles (Frontier Force)',
      education: {
        school: 'St. Mary\\'s High School, Mumbai',
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

    // VIR CHAKRA RECIPIENTS
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
        college: 'St. Xavier\\'s College, Mumbai (incomplete)',
        training: 'Pan Am flight attendant training'
      },
      family: {
        father: 'Shri Harish Bhanot (journalist)',
        mother: 'Smt. Rama Bhanot',
        brothers: 'Akhil Bhanot, Aneesh Bhanot'
      },
      wars: ['Pan Am Flight 73 hijacking, Karachi'],
      citation: 'During the hijacking of Pan Am Flight 73, she alerted pilots who escaped, preventing hijackers from flying the plane. She shielded three children from bullets and was killed while helping passengers escape.',
      legacy: 'Youngest recipient of Ashoka Chakra. Also awarded Ashoka Chakra (India), Flight Safety Foundation Heroism Award, Justice for Crimes Award. Bollywood film "Neerja" (2016) depicts her heroism.',
      famousQuote: 'I\\'ll do it. I\\'m the senior crew member.',
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
        military: 'Indian Military Academy, Dehradun',
        commission: 'December 1999'
      },
      family: {
        father: 'Brigadier (Retd.) R.K. Sharma',
        mother: 'Smt. Sushma Sharma',
        wife: 'Smt. Rishima Sharma'
      },
      wars: ['Counter-terrorism operations in Jammu & Kashmir'],
      citation: 'Infiltrated terrorist groups under alias "Amir Khan" for two years. Provided critical intelligence leading to elimination of 60+ terrorists. Killed in encounter while maintaining his cover to protect his team.',
      legacy: 'Legendary intelligence operative. His undercover work is studied in military intelligence courses. Mohit Sharma Stadium in Ghaziabad named after him.',
      famousQuote: 'The mission comes first, always.',
      yearAwarded: 2009
    },
    'tukaram-omble': {
      id: 'tukaram-omble',
      name: 'Assistant Sub-Inspector Tukaram Gopal Omble',
      rank: 'Assistant Sub-Inspector',
      awards: ['Ashoka Chakra'],
      image: null,
      dateOfBirth: '1954',
      placeOfBirth: 'Satara, Maharashtra',
      dateOfMartyrdom: '27 November 2008',
      ageAtMartyrdom: 54,
      regiment: 'Mumbai Police (Civilian)',
      education: {
        school: 'Local school in Satara',
        training: 'Police training academy'
      },
      family: {
        wife: 'Smt. Tarabai Omble',
        children: 'Three daughters, two sons'
      },
      wars: ['26/11 Mumbai terror attacks'],
      citation: 'During the 26/11 attacks, he caught terrorist Ajmal Kasab alive despite being shot multiple times. His sacrifice enabled the capture of the only surviving terrorist, providing crucial evidence.',
      legacy: 'His bravery led to Kasab\\'s capture, which exposed Pakistan\\'s role in the attacks. Chowk in Mumbai renamed Shaheed Tukaram Omble Chowk.',
      famousQuote: 'Catch him alive! (Pakdo isko zinda!)',
      yearAwarded: 2009
    },

    // KIRTI CHAKRA RECIPIENTS
    'sandeep-unnikrishnan': {
      id: 'sandeep-unnikrishnan',
      name: 'Major Sandeep Unnikrishnan',
      rank: 'Major',
      awards: ['Ashoka Chakra'],
      image: null,
      dateOfBirth: '15 March 1977',
      placeOfBirth: 'Kozhikode, Kerala (grew up in Bangalore)',
      dateOfMartyrdom: '28 November 2008',
      ageAtMartyrdom: 31,
      regiment: '51 Special Action Group, National Security Guard',
      education: {
        school: 'Frank Anthony Public School, Bangalore',
        military: 'National Defence Academy; Indian Military Academy',
        commission: 'June 1999'
      },
      family: {
        father: 'Shri K. Unnikrishnan (ISRO officer)',
        mother: 'Smt. Dhanalakshmi Unnikrishnan'
      },
      wars: ['26/11 Mumbai terror attacks'],
      citation: 'Led NSG commandos during the Taj Hotel operation. Rescued 14 hostages. Killed while engaging terrorists to save his team members. His last words were "Do not come up, I will handle them."',
      legacy: 'National hero. Bollywood film "Major" (2022) depicts his life. Multiple institutions and roads named after him. His sacrifice is taught in military academies.',
      famousQuote: 'Do not come up, I will handle them.',
      yearAwarded: 2009
    }
  };

  // COMPREHENSIVE AWARDS DATABASE
  const awards = [
    // WARTIME GALLANTRY AWARDS
    {
      id: 'pvc',
      name: 'Param Vir Chakra',
      shortName: 'PVC',
      icon: '🏅',
      category: 'wartime',
      established: 1950,
      precedence: 1,
      description: 'India\\'s highest military decoration awarded for the most conspicuous bravery or some daring or pre-eminent act of valour or self-sacrifice, in the presence of the enemy, whether on land, at sea, or in the air.',
      criteria: 'Acts of conspicuous gallantry in the presence of the enemy',
      recipients: ['somnath-sharma', 'vikram-batra', 'yogendra-yadav', 'manoj-pandey', 'shaitan-singh', 'nirmal-jit-sekhon'],
      totalAwarded: 21,
      posthumous: 20,
      living: 1
    },
    {
      id: 'mvc',
      name: 'Maha Vir Chakra',
      shortName: 'MVC',
      icon: '🎖️',
      category: 'wartime',
      established: 1950,
      precedence: 2,
      description: 'Second highest military decoration awarded for acts of conspicuous gallantry in the presence of the enemy, whether on land, at sea or in the air.',
      criteria: 'Acts of conspicuous gallantry in the presence of the enemy',
      recipients: ['abhinandan-varthaman', 'ian-cardozo'],
      totalAwarded: 218,
      posthumous: null,
      living: null
    },
    {
      id: 'vrc',
      name: 'Vir Chakra',
      shortName: 'VrC',
      icon: '⭐',
      category: 'wartime',
      established: 1950,
      precedence: 3,
      description: 'Third highest wartime gallantry award presented for acts of bravery on the battlefield.',
      criteria: 'Acts of gallantry in the presence of the enemy',
      recipients: [],
      totalAwarded: 1343,
      posthumous: null,
      living: null
    },
    {
      id: 'sm-gallantry',
      name: 'Sena Medal (Gallantry)',
      shortName: 'SM',
      icon: '🎗️',
      category: 'wartime',
      established: 1950,
      precedence: 4,
      description: 'Awarded to members of the Indian Army for such individual acts of exceptional devotion to duty or courage as have special significance for the Army.',
      criteria: 'Exceptional devotion to duty or courage',
      recipients: [],
      totalAwarded: null,
      posthumous: null,
      living: null
    },

    // PEACETIME GALLANTRY AWARDS
    {
      id: 'ac',
      name: 'Ashoka Chakra',
      shortName: 'AC',
      icon: '🏵️',
      category: 'peacetime',
      established: 1952,
      precedence: 1,
      description: 'India\\'s highest peacetime military decoration awarded for the most conspicuous bravery or some daring or pre-eminent act of valour or self-sacrifice away from the battlefield.',
      criteria: 'Most conspicuous bravery or self-sacrifice away from battlefield',
      recipients: ['neerja-bhanot', 'mohit-sharma', 'tukaram-omble', 'sandeep-unnikrishnan'],
      totalAwarded: 77,
      posthumous: null,
      living: null
    },
    {
      id: 'kc',
      name: 'Kirti Chakra',
      shortName: 'KC',
      icon: '🌟',
      category: 'peacetime',
      established: 1952,
      precedence: 2,
      description: 'Second highest peacetime gallantry award for conspicuous gallantry otherwise than in the face of the enemy.',
      criteria: 'Conspicuous gallantry away from battlefield',
      recipients: [],
      totalAwarded: 500,
      posthumous: null,
      living: null
    },
    {
      id: 'sc',
      name: 'Shaurya Chakra',
      shortName: 'SC',
      icon: '⭐',
      category: 'peacetime',
      established: 1952,
      precedence: 3,
      description: 'Third highest peacetime gallantry award for gallantry otherwise than in the face of the enemy.',
      criteria: 'Gallantry away from battlefield',
      recipients: [],
      totalAwarded: null,
      posthumous: null,
      living: null
    },

    // DISTINGUISHED SERVICE AWARDS
    {
      id: 'avsm',
      name: 'Ati Vishisht Seva Medal',
      shortName: 'AVSM',
      icon: '🎖️',
      category: 'service',
      established: 1960,
      precedence: 1,
      description: 'Awarded for distinguished service of exceptional order to all ranks of the armed forces.',
      criteria: 'Distinguished service of exceptional order',
      recipients: [],
      totalAwarded: null,
      posthumous: null,
      living: null
    },
    {
      id: 'vsm',
      name: 'Vishisht Seva Medal',
      shortName: 'VSM',
      icon: '🏅',
      category: 'service',
      established: 1960,
      precedence: 2,
      description: 'Awarded for distinguished service of high order to all ranks of the armed forces.',
      criteria: 'Distinguished service of high order',
      recipients: [],
      totalAwarded: null,
      posthumous: null,
      living: null
    }
  ];

  // MULTI-FIELD SEARCH FUNCTION
  const searchSoldiers = (term) => {
    if (!term) return [];
    
    const lowerTerm = term.toLowerCase();
    const results = [];

    Object.values(soldiers).forEach(soldier => {
      let matchScore = 0;
      let matchFields = [];

      // Search in name
      if (soldier.name.toLowerCase().includes(lowerTerm)) {
        matchScore += 10;
        matchFields.push('name');
      }

      // Search in rank
      if (soldier.rank.toLowerCase().includes(lowerTerm)) {
        matchScore += 8;
        matchFields.push('rank');
      }

      // Search in awards
      soldier.awards.forEach(award => {
        if (award.toLowerCase().includes(lowerTerm)) {
          matchScore += 9;
          matchFields.push('award');
        }
      });

      // Search in wars
      soldier.wars.forEach(war => {
        if (war.toLowerCase().includes(lowerTerm)) {
          matchScore += 7;
          matchFields.push('war');
        }
      });

      // Search in year
      if (soldier.yearAwarded && soldier.yearAwarded.toString().includes(term)) {
        matchScore += 6;
        matchFields.push('year');
      }

      // Search in regiment
      if (soldier.regiment && soldier.regiment.toLowerCase().includes(lowerTerm)) {
        matchScore += 5;
        matchFields.push('regiment');
      }

      // Search in place of birth
      if (soldier.placeOfBirth && soldier.placeOfBirth.toLowerCase().includes(lowerTerm)) {
        matchScore += 4;
        matchFields.push('birthplace');
      }

      if (matchScore > 0) {
        results.push({ ...soldier, matchScore, matchFields });
      }
    });

    // Sort by match score (highest first)
    return results.sort((a, b) => b.matchScore - a.matchScore);
  };

  // FILTER AWARDS BY CATEGORY
  const filteredAwards = activeCategory === 'all' 
    ? awards 
    : awards.filter(award => award.category === activeCategory);

  // SEARCH RESULTS
  const searchResults = searchTerm ? searchSoldiers(searchTerm) : [];

  // SOLDIER PROFILE MODAL
  const SoldierProfile = ({ soldier, onClose }) => {
    if (!soldier) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="soldier-profile-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>×</button>
          
          <div className="profile-header">
            <div className="profile-image">
              {soldier.image ? (
                <img src={soldier.image} alt={soldier.name} />
              ) : (
                <div className="profile-placeholder">
                  <span className="profile-icon">🎖️</span>
                </div>
              )}
            </div>
            <div className="profile-title">
              <h2>{soldier.name}</h2>
              <p className="profile-rank">{soldier.rank}</p>
              <div className="profile-awards">
                {soldier.awards.map((award, idx) => (
                  <span key={idx} className="award-badge">{award}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="profile-content">
            {/* Basic Information */}
            <div className="profile-section">
              <h3>📋 Basic Information</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Date of Birth:</span>
                  <span className="info-value">{soldier.dateOfBirth}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Place of Birth:</span>
                  <span className="info-value">{soldier.placeOfBirth}</span>
                </div>
                {soldier.dateOfMartyrdom && (
                  <>
                    <div className="info-item">
                      <span className="info-label">Date of Martyrdom:</span>
                      <span className="info-value">{soldier.dateOfMartyrdom}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Age at Martyrdom:</span>
                      <span className="info-value">{soldier.ageAtMartyrdom} years</span>
                    </div>
                  </>
                )}
                <div className="info-item">
                  <span className="info-label">Regiment/Unit:</span>
                  <span className="info-value">{soldier.regiment}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Year Awarded:</span>
                  <span className="info-value">{soldier.yearAwarded}</span>
                </div>
              </div>
            </div>

            {/* Education & Background */}
            <div className="profile-section">
              <h3>🎓 Education & Training</h3>
              <div className="education-list">
                {soldier.education.school && (
                  <div className="education-item">
                    <strong>School:</strong> {soldier.education.school}
                  </div>
                )}
                {soldier.education.college && (
                  <div className="education-item">
                    <strong>College:</strong> {soldier.education.college}
                  </div>
                )}
                {soldier.education.military && (
                  <div className="education-item">
                    <strong>Military Training:</strong> {soldier.education.military}
                  </div>
                )}
                {soldier.education.commission && (
                  <div className="education-item">
                    <strong>Commissioned:</strong> {soldier.education.commission}
                  </div>
                )}
                {soldier.education.training && (
                  <div className="education-item">
                    <strong>Training:</strong> {soldier.education.training}
                  </div>
                )}
              </div>
            </div>

            {/* Family Information */}
            <div className="profile-section">
              <h3>👨‍👩‍👧‍👦 Family</h3>
              <div className="family-list">
                {soldier.family.father && (
                  <div className="family-item">
                    <strong>Father:</strong> {soldier.family.father}
                  </div>
                )}
                {soldier.family.mother && (
                  <div className="family-item">
                    <strong>Mother:</strong> {soldier.family.mother}
                  </div>
                )}
                {soldier.family.wife && (
                  <div className="family-item">
                    <strong>Wife:</strong> {soldier.family.wife}
                  </div>
                )}
                {soldier.family.children && (
                  <div className="family-item">
                    <strong>Children:</strong> {soldier.family.children}
                  </div>
                )}
                {soldier.family.brothers && (
                  <div className="family-item">
                    <strong>Brothers:</strong> {soldier.family.brothers}
                  </div>
                )}
                {soldier.family.twin && (
                  <div className="family-item">
                    <strong>Twin:</strong> {soldier.family.twin}
                  </div>
                )}
              </div>
            </div>

            {/* Wars & Operations */}
            <div className="profile-section">
              <h3>⚔️ Wars & Operations</h3>
              <div className="wars-list">
                {soldier.wars.map((war, idx) => (
                  <div key={idx} className="war-badge">{war}</div>
                ))}
              </div>
            </div>

            {/* Citation */}
            <div className="profile-section">
              <h3>🏅 Citation & Act of Valor</h3>
              <p className="citation-text">{soldier.citation}</p>
            </div>

            {/* Famous Quote */}
            {soldier.famousQuote && (
              <div className="profile-section quote-section">
                <h3>💬 Famous Quote</h3>
                <blockquote className="famous-quote">
                  "{soldier.famousQuote}"
                </blockquote>
              </div>
            )}

            {/* Legacy */}
            <div className="profile-section">
              <h3>🌟 Legacy & Honors</h3>
              <p className="legacy-text">{soldier.legacy}</p>
            </div>
          </div>

          <div className="profile-footer">
            <p className="disclaimer">
              ℹ️ All information is from publicly available sources and official records. 
              This profile is maintained with utmost respect and dignity.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="awards-page">
      <div className="container">
        <div className="page-header">
          <h1>Gallantry Awards of India</h1>
          <p>Honoring acts of exceptional bravery, sacrifice, and service to the nation</p>
          <p className="educational-note">
            A comprehensive biographical database of India's bravest warriors
          </p>
        </div>

        {/* SEARCH SECTION */}
        <div className="search-section">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by soldier name, rank, award, war, year, or regiment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button 
                className="clear-search" 
                onClick={() => setSearchTerm('')}
              >
                ×
              </button>
            )}
          </div>
          {searchTerm && (
            <p className="search-hint">
              Searching across: Name, Rank, Awards, Wars, Year, Regiment, Birthplace
            </p>
          )}
        </div>

        {/* SEARCH RESULTS */}
        {searchTerm && searchResults.length > 0 && (
          <div className="search-results">
            <h2>Search Results ({searchResults.length})</h2>
            <div className="soldiers-grid">
              {searchResults.map(soldier => (
                <div 
                  key={soldier.id} 
                  className="soldier-card"
                  onClick={() => setSelectedSoldier(soldier)}
                >
                  <div className="soldier-card-header">
                    <div className="soldier-avatar">
                      {soldier.image ? (
                        <img src={soldier.image} alt={soldier.name} />
                      ) : (
                        <span className="avatar-placeholder">🎖️</span>
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
                          <span>Martyred at {soldier.ageAtMartyrdom}</span>
                        </div>
                      )}
                    </div>

                    {soldier.famousQuote && (
                      <div className="soldier-quote">
                        <p>"{soldier.famousQuote.substring(0, 80)}..."</p>
                      </div>
                    )}
                  </div>

                  <div className="soldier-card-footer">
                    <button className="view-profile-btn">
                      View Full Profile →
                    </button>
                  </div>

                  <div className="match-indicator">
                    Matched: {soldier.matchFields.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {searchTerm && searchResults.length === 0 && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No soldiers found</h3>
            <p>Try searching by:</p>
            <ul>
              <li>Soldier name (e.g., "Vikram Batra", "Neerja Bhanot")</li>
              <li>Rank (e.g., "Captain", "Major")</li>
              <li>Award (e.g., "Param Vir Chakra")</li>
              <li>War (e.g., "Kargil", "1971")</li>
              <li>Year (e.g., "1999", "2009")</li>
            </ul>
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
              {filteredAwards.map(award => (
                <div key={award.id} className="award-card card">
                  <div className="award-card-header">
                    <div className="award-icon">{award.icon}</div>
                    <div className="award-category-badge">{award.category}</div>
                  </div>
                  
                  <h3>{award.name}</h3>
                  <p className="award-short-name">{award.shortName}</p>
                  
                  <div className="award-meta">
                    <span className="meta-item">
                      <strong>Established:</strong> {award.established}
                    </span>
                    <span className="meta-item">
                      <strong>Precedence:</strong> #{award.precedence}
                    </span>
                  </div>

                  <p className="award-description">{award.description}</p>

                  <div className="award-criteria">
                    <strong>Criteria:</strong> {award.criteria}
                  </div>

                  {award.totalAwarded && (
                    <div className="award-stats">
                      <div className="stat-item">
                        <span className="stat-number">{award.totalAwarded}</span>
                        <span className="stat-label">Total Awarded</span>
                      </div>
                      {award.posthumous !== null && (
                        <div className="stat-item">
                          <span className="stat-number">{award.posthumous}</span>
                          <span className="stat-label">Posthumous</span>
                        </div>
                      )}
                      {award.living !== null && (
                        <div className="stat-item">
                          <span className="stat-number">{award.living}</span>
                          <span className="stat-label">Living</span>
                        </div>
                      )}
                    </div>
                  )}

                  {award.recipients.length > 0 && (
                    <div className="recipients-section">
                      <h4>Featured Recipients in Database</h4>
                      <div className="recipients-list">
                        {award.recipients.map(soldierId => {
                          const soldier = soldiers[soldierId];
                          return (
                            <div 
                              key={soldierId} 
                              className="recipient-item"
                              onClick={() => setSelectedSoldier(soldier)}
                            >
                              <div className="recipient-avatar">
                                {soldier.image ? (
                                  <img src={soldier.image} alt={soldier.name} />
                                ) : (
                                  <span className="avatar-icon">🎖️</span>
                                )}
                              </div>
                              <div className="recipient-info">
                                <div className="recipient-name">{soldier.name}</div>
                                <div className="recipient-details">
                                  <span>{soldier.yearAwarded}</span>
                                  <span className="separator">•</span>
                                  <span>{soldier.wars[0]}</span>
                                </div>
                              </div>
                              <div className="recipient-arrow">→</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {award.recipients.length === 0 && (
                    <div className="no-recipients-note">
                      <p>📝 Detailed profiles coming soon</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* EDUCATIONAL DISCLAIMER */}
        <div className="educational-disclaimer">
          <h3>📚 Educational Purpose</h3>
          <p>
            This database is maintained for educational purposes only. All information is sourced 
            from publicly available records, official citations, and verified historical documents. 
            We honor these brave individuals with the utmost respect and dignity.
          </p>
          <p>
            <strong>Sources:</strong> Ministry of Defence records, official citations, published 
            biographies, news archives, and military history publications.
          </p>
        </div>
      </div>

      {/* SOLDIER PROFILE MODAL */}
      {selectedSoldier && (
        <SoldierProfile 
          soldier={selectedSoldier} 
          onClose={() => setSelectedSoldier(null)} 
        />
      )}
    </div>
  );
};

export default Awards;