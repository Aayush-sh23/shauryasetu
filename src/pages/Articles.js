import React, { useState } from 'react';
import './Articles.css';

const Articles = ({ user }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarked, setBookmarked] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'army-life', label: 'Army Life & Training' },
    { id: 'regiments', label: 'Regiments & Traditions' },
    { id: 'border', label: 'Border Service' },
    { id: 'disaster', label: 'Disaster Relief' },
    { id: 'history', label: 'Historical Milestones' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Life at Siachen: The Highest Battlefield',
      category: 'border',
      date: '2024-01-15',
      excerpt: 'Understanding the challenges and valor of soldiers serving at the world\'s highest battlefield at 20,000+ feet.',
      readTime: '8 min read',
      image: '🏔️',
      fullContent: `
# Life at Siachen: The Highest Battlefield

## Introduction
Siachen Glacier, located in the eastern Karakoram range in the Himalayas, represents one of the most challenging military deployments in modern history. At altitudes exceeding 20,000 feet, it is the world's highest battlefield where the Indian Army has maintained a continuous presence since 1984. This article examines the historical context and significance of this deployment from an educational perspective.

## Historical Background
The Siachen conflict began in April 1984 when the Indian Army launched Operation Meghdoot to secure the glacier. The operation was prompted by intelligence reports of Pakistani plans to occupy the region. The Karachi Agreement of 1949 and the Simla Agreement of 1972 had left the demarcation of this area ambiguous beyond a point called NJ9842.

**Key Timeline:**
- **April 13, 1984**: Operation Meghdoot launched
- **1984-1987**: Initial establishment of posts
- **1987-1999**: Consolidation and expansion of presence
- **2003-Present**: Continued deployment with improved logistics

## Role of the Indian Army (High-Level)
The Indian Army's presence at Siachen involves maintaining multiple high-altitude posts and ensuring territorial integrity. The deployment requires specialized training in mountain warfare, survival in extreme cold, and high-altitude acclimatization. Soldiers typically serve rotations of 90 days due to the extreme conditions.

The Army has established supply chains using helicopters and porters, medical facilities for altitude-related emergencies, and communication systems that function in sub-zero temperatures. The logistical challenge of maintaining human presence at such altitudes represents a significant organizational achievement.

## Key Outcomes & Impact
The Indian Army's presence at Siachen has resulted in:
- Territorial control of approximately 1,000 square miles of glacier
- Development of high-altitude warfare expertise
- Advancement in cold-weather equipment and survival techniques
- Establishment of the world's highest helipad at Sonam Post (21,000 feet)

However, the deployment has also resulted in significant challenges:
- More casualties from weather and altitude than combat
- Substantial financial costs for maintenance and supply
- Environmental concerns regarding the glacier ecosystem

## Lessons & Significance
**Military Perspective**: The ability to maintain human presence in extreme environments requires comprehensive planning, specialized equipment, and continuous logistical support.

**Human Endurance**: Soldiers adapt to conditions where temperatures drop to -60°C, oxygen levels are 50% of sea level, and winds exceed 100 mph.

**Technological Innovation**: The deployment has driven innovations in cold-weather gear, high-altitude medicine, and extreme-environment logistics.

**Civic Relevance**: Understanding Siachen helps citizens appreciate the challenges faced by soldiers in protecting territorial integrity and the resources required for such operations.

## Sources & References
This article is based on Indian Army official publications, Ministry of Defence annual reports, published books on Indian military history, declassified government documents, and academic research on high-altitude warfare.

---

*This article is based on publicly available historical information and is intended for educational purposes only.*
      `
    },
    {
      id: 2,
      title: 'The Gorkha Regiment: Legacy of Bravery',
      category: 'regiments',
      date: '2024-01-10',
      excerpt: 'Exploring the rich history and traditions of one of India\'s most decorated regiments.',
      readTime: '10 min read',
      image: '⚔️',
      fullContent: `
# The Gorkha Regiment: Legacy of Bravery

## Introduction
The Gorkha regiments of the Indian Army represent one of the most distinguished military traditions in modern history. Known for their courage, loyalty, and the iconic kukri knife, Gorkha soldiers have served with distinction in conflicts spanning two centuries. This article explores the historical development and significance of these regiments from an educational perspective.

## Historical Background
The term "Gorkha" derives from the hill town of Gorkha in Nepal, from where the Shah dynasty unified Nepal in the 18th century. The British East India Company first encountered Gorkha warriors during the Anglo-Nepalese War (1814-1816). Impressed by their fighting abilities, the British began recruiting Gorkhas into their army.

**Key Historical Milestones:**
- **1815**: First Gorkha units formed in British Indian Army
- **1947**: Division of Gorkha regiments between India and Britain after independence
- **Post-1947**: Indian Army retained six Gorkha rifle regiments
- **Present**: Gorkha regiments continue as integral part of Indian Army

## Structure and Organization
The Indian Army currently maintains several Gorkha rifle regiments:
- 1st Gorkha Rifles (The Malaun Regiment)
- 3rd Gorkha Rifles
- 4th Gorkha Rifles
- 5th Gorkha Rifles (Frontier Force)
- 8th Gorkha Rifles
- 9th Gorkha Rifles
- 11th Gorkha Rifles

Each regiment maintains distinct traditions while sharing common Gorkha heritage. Recruitment primarily occurs from Nepal and Gorkha communities in India.

## Notable Service and Contributions
Gorkha regiments have participated in major conflicts including:
- Both World Wars (earning numerous Victoria Crosses)
- Indo-Pakistani Wars (1947, 1965, 1971)
- Kargil War (1999)
- Counter-insurgency operations
- United Nations peacekeeping missions

The regiments have been awarded numerous gallantry honors, including multiple Param Vir Chakras, India's highest military decoration.

## Traditions and Culture
**The Kukri**: The curved Gorkha knife is both a practical tool and ceremonial symbol. According to tradition, once drawn, it must draw blood before being sheathed.

**Motto**: "Kayar Hunu Bhanda Marnu Ramro" (Better to die than be a coward)

**Recruitment**: Selection involves rigorous physical tests including the doko race, where candidates carry weighted baskets uphill.

**Festivals**: Dashain is the most important festival, celebrated with traditional ceremonies and animal sacrifices according to Hindu customs.

## Significance and Legacy
The Gorkha regiments demonstrate several important aspects:

**Military Excellence**: Consistent performance across diverse operational environments and conflicts.

**Cultural Integration**: Successful integration of Nepalese traditions within Indian military structure.

**Bilateral Relations**: Gorkha recruitment strengthens India-Nepal ties through shared military heritage.

**Professional Standards**: High standards of discipline, training, and operational effectiveness serve as benchmarks.

## Sources & References
This article is based on official Indian Army regimental histories, Ministry of Defence publications, academic research on military history, and published memoirs of Gorkha officers.

---

*This article is based on publicly available historical information and is intended for educational purposes only.*
      `
    },
    {
      id: 3,
      title: 'Operation Rahat: Humanitarian Mission in Yemen',
      category: 'disaster',
      date: '2024-01-05',
      excerpt: 'How the Indian Army evacuated thousands of civilians from war-torn Yemen in 2015.',
      readTime: '6 min read',
      image: '🚁',
      fullContent: `
# Operation Rahat: Humanitarian Mission in Yemen

## Introduction
Operation Rahat was a large-scale evacuation operation conducted by India in April 2015 to rescue Indian nationals and foreign citizens from Yemen during the Yemeni Civil War. The operation demonstrated India's capability to conduct complex humanitarian missions in conflict zones and reflected the country's commitment to protecting its citizens abroad.

## Historical Background
In March 2015, Yemen descended into civil war following the takeover of the capital Sanaa by Houthi rebels. A Saudi-led coalition began military operations, creating a humanitarian crisis. Thousands of Indian nationals, including workers, students, and their families, were stranded in various Yemeni cities.

**Timeline of Events:**
- **March 26, 2015**: Saudi-led coalition begins airstrikes
- **April 1, 2015**: Operation Rahat officially launched
- **April 1-11, 2015**: Main evacuation phase
- **Total Duration**: Approximately 10 days of intensive operations

## Operational Overview
The operation involved coordination between multiple Indian government agencies:
- Ministry of External Affairs (overall coordination)
- Indian Navy (sea evacuation)
- Indian Air Force (air evacuation)
- Indian Army (ground support and security assessment)

**Scale of Operation:**
- Ships deployed: INS Sumitra, INS Mumbai, INS Tarkash
- Aircraft used: Air India commercial flights, IAF C-17 Globemaster
- Evacuation points: Aden, Sanaa, Al Hudaydah
- Total evacuees: Over 4,640 Indians and 960 foreign nationals from 41 countries

## Challenges Faced
The operation encountered several significant challenges:

**Security Concerns**: Active conflict with airstrikes and ground fighting in multiple cities.

**Infrastructure Damage**: Damaged airports and ports with limited operational capacity.

**Communication**: Difficulty in locating and contacting stranded nationals.

**Logistics**: Coordinating multiple evacuation points simultaneously.

**International Coordination**: Working with various countries and local authorities.

## Key Outcomes
**Successful Evacuation**: All registered Indian nationals who wished to leave were evacuated.

**International Goodwill**: India evacuated citizens from 41 countries, including USA, UK, and several European and Asian nations.

**Operational Capability**: Demonstrated India's ability to conduct complex overseas operations.

**Diplomatic Success**: Enhanced India's image as a responsible regional power.

## Lessons and Significance
**Humanitarian Commitment**: The operation reinforced India's commitment to protecting its citizens abroad regardless of cost.

**Inter-Agency Coordination**: Successful coordination between military and civilian agencies.

**Regional Leadership**: India's willingness to help foreign nationals demonstrated regional leadership.

**Preparedness**: Highlighted importance of maintaining evacuation capabilities for crisis situations.

**Diaspora Relations**: Strengthened confidence of Indian diaspora in government support during emergencies.

## Comparative Context
Operation Rahat was one of several evacuation operations conducted by India:
- Operation Sukoon (Lebanon, 2006)
- Operation Safe Homecoming (Libya, 2011)
- Operation Maitri (Nepal earthquake, 2015)

Each operation has contributed to India's growing capability in humanitarian assistance and disaster relief.

## Sources & References
This article is based on Ministry of External Affairs press releases, Indian Navy and Air Force official statements, news reports from 2015, and government parliamentary records.

---

*This article is based on publicly available historical information and is intended for educational purposes only.*
      `
    },
    {
      id: 4,
      title: 'Training at NDA: Forging Future Leaders',
      category: 'army-life',
      date: '2023-12-28',
      excerpt: 'A detailed look at the rigorous training regimen at the National Defence Academy.',
      readTime: '12 min read',
      image: '🎓',
      fullContent: `
# Training at NDA: Forging Future Leaders

## Introduction
The National Defence Academy (NDA) in Khadakwasla, Pune, is India's premier tri-service military academy. Established in 1954, it is the first tri-service academy in the world, training cadets for the Indian Army, Navy, and Air Force. This article examines the training structure and educational philosophy of NDA from an academic perspective.

## Historical Background
The concept of a joint services academy was proposed in the 1940s to create a unified officer corps. The NDA was formally established on January 16, 1955, with the first batch of 370 cadets.

**Key Milestones:**
- **1949**: Concept proposed by a committee
- **1954**: NDA established at Khadakwasla
- **1955**: First batch commissioned
- **2022**: First batch of women cadets inducted

## Academic Structure
NDA offers a three-year undergraduate program affiliated with Jawaharlal Nehru University (JNU), New Delhi.

**Degree Programs:**
- Bachelor of Arts (BA)
- Bachelor of Science (BSc)
- Bachelor of Computer Science (BCS)

**Curriculum Components:**
- Academic studies (40%)
- Military training (30%)
- Physical training (20%)
- Extra-curricular activities (10%)

## Training Phases

### First Year (Basic Training)
Focus on adaptation and foundation:
- Basic military drill and discipline
- Physical conditioning
- Introduction to service traditions
- Academic foundation courses
- Swimming and water confidence

### Second Year (Intermediate Training)
Development of leadership skills:
- Advanced military training
- Weapon handling basics
- Map reading and navigation
- Outdoor training camps
- Service-specific introduction

### Third Year (Advanced Training)
Specialization and leadership:
- Advanced tactics (overview level)
- Leadership exercises
- Final term projects
- Service selection preparation
- Passing out parade preparation

## Physical Training Regimen
Physical fitness is a cornerstone of NDA training:

**Daily Routine:**
- Morning PT: 5:30 AM - 6:30 AM
- Sports: Afternoon sessions
- Obstacle courses
- Cross-country runs
- Swimming (mandatory proficiency)

**Sports Facilities:**
- Olympic-size swimming pool
- Athletics track
- Multiple sports fields
- Gymnasium
- Equestrian facilities

## Character Development
NDA emphasizes holistic development:

**Core Values:**
- Courage
- Integrity
- Loyalty
- Selfless service
- Honor

**Leadership Training:**
- Rotational leadership positions
- Team-based exercises
- Decision-making scenarios
- Peer evaluation systems

## Life at NDA

**Daily Schedule:**
- 0530: Wake up and PT
- 0730: Breakfast
- 0830-1300: Academic classes
- 1300: Lunch
- 1430-1730: Military training/Sports
- 1730-1900: Study period
- 1900: Dinner
- 2000-2230: Study/Free time
- 2300: Lights out

**Accommodation:**
- Squadron-based housing
- Shared rooms (2-4 cadets)
- Common facilities
- Mess halls for dining

## Selection and Entry
Entry to NDA is highly competitive:

**Eligibility:**
- Age: 16.5 to 19.5 years
- Education: 10+2 (Science for Air Force/Navy)
- Citizenship: Indian national
- Marital status: Unmarried

**Selection Process:**
1. Written examination (UPSC conducted)
2. SSB interview (5 days)
3. Medical examination
4. Final merit list

**Success Rate:** Approximately 0.5% of applicants are selected

## Post-NDA Training
After NDA, cadets proceed to:
- **Army**: Indian Military Academy (IMA), Dehradun - 1 year
- **Navy**: Indian Naval Academy (INA), Ezhimala - 1 year
- **Air Force**: Air Force Academy (AFA), Hyderabad - 1.5 years

## Significance and Impact
**Unified Officer Corps**: Creates bonds across services, facilitating joint operations.

**Academic Excellence**: Combines military training with university-level education.

**Leadership Development**: Produces officers with strong leadership foundations.

**National Integration**: Cadets from diverse backgrounds train together.

**International Recognition**: NDA is recognized globally as a premier military academy.

## Notable Alumni
NDA has produced numerous distinguished officers, including:
- Chiefs of Army, Navy, and Air Force
- Param Vir Chakra awardees
- Senior government officials
- International peacekeeping commanders

## Sources & References
This article is based on NDA official publications, UPSC examination guidelines, Ministry of Defence reports, and published accounts of NDA training.

---

*This article is based on publicly available historical information and is intended for educational purposes only.*
      `
    },
    {
      id: 5,
      title: '1971 War: The Birth of Bangladesh',
      category: 'history',
      date: '2023-12-20',
      excerpt: 'Understanding India\'s decisive military victory and its historical significance.',
      readTime: '15 min read',
      image: '📜',
      fullContent: `
# 1971 War: The Birth of Bangladesh

## Introduction
The Indo-Pakistani War of 1971 was a major armed conflict between India and Pakistan that resulted in the creation of Bangladesh. Lasting 13 days in December 1971, it was one of the shortest wars in history and led to the largest military surrender since World War II. This article examines the historical context, key events, and significance of this conflict from an educational perspective.

## Historical Background
The roots of the 1971 war lay in the political crisis in Pakistan following the 1970 general elections.

**Pre-War Context:**
- **1947**: Partition creates East and West Pakistan, separated by 1,000 miles of Indian territory
- **1952-1970**: Growing political and economic disparities between East and West Pakistan
- **December 1970**: Awami League wins majority in Pakistani elections
- **March 1971**: Pakistani military launches Operation Searchlight in East Pakistan
- **March 26, 1971**: Bangladesh declares independence

**Refugee Crisis:**
By November 1971, approximately 10 million refugees had fled to India from East Pakistan, creating a humanitarian and economic crisis.

## Key Events and Timeline

### Phase 1: Political Crisis (March-November 1971)
- **March 25, 1971**: Operation Searchlight begins
- **March 26, 1971**: Bangladesh independence declared
- **March-November**: Mukti Bahini (liberation forces) conduct guerrilla operations
- **April-November**: Refugee influx into India continues

### Phase 2: Military Buildup (November 1971)
- **November 21**: Indian forces begin positioning along borders
- **November 22-30**: Border skirmishes increase
- **December 3**: Pakistan launches preemptive airstrikes on Indian airfields

### Phase 3: Active Conflict (December 3-16, 1971)
- **December 3**: India officially enters the war
- **December 4-6**: Indian forces advance on multiple fronts
- **December 6**: India recognizes Bangladesh
- **December 8-14**: Encirclement of Dhaka
- **December 16**: Pakistani forces surrender in Dhaka

## Military Operations Overview

### Eastern Front
The Indian Army's Eastern Command, led by Lt. Gen. Jagjit Singh Aurora, conducted operations in East Pakistan.

**Key Objectives:**
- Rapid advance to Dhaka
- Minimize civilian casualties
- Prevent Pakistani reinforcements
- Support Mukti Bahini operations

**Major Operations:**
- Advance through multiple axes
- River crossings
- Airborne operations
- Naval blockade of East Pakistan ports

### Western Front
Operations on the western front aimed to:
- Defend Indian territory
- Engage Pakistani forces
- Prevent reinforcement of eastern front
- Capture strategic positions

## Key Outcomes

### Military Results
- **Duration**: 13 days of active conflict
- **Surrender**: 93,000 Pakistani military and civilian personnel
- **Territory**: Creation of independent Bangladesh
- **Casualties**: 
  - India: Approximately 3,800 military personnel
  - Pakistan: Approximately 9,000 military personnel
  - Bangladesh: Estimated 300,000-3,000,000 civilians (disputed figures)

### Political Outcomes
- **Bangladesh Independence**: Recognized internationally
- **Simla Agreement (1972)**: India and Pakistan agree to resolve disputes bilaterally
- **Prisoner Exchange**: Completed by 1974
- **Regional Dynamics**: Shift in South Asian power balance

## International Dimension
The war had significant international implications:

**United States**: Supported Pakistan, sent USS Enterprise to Bay of Bengal

**Soviet Union**: Supported India through Indo-Soviet Treaty of Peace, Friendship and Cooperation (1971)

**China**: Supported Pakistan diplomatically but did not intervene militarily

**United Nations**: Ceasefire resolutions passed but not implemented until after Pakistani surrender

## Gallantry Awards
The war resulted in numerous gallantry awards:
- **Param Vir Chakra**: 4 awarded (2 posthumous)
- **Maha Vir Chakra**: 15 awarded
- **Vir Chakra**: 69 awarded
- Numerous other decorations for bravery

## Lessons and Significance

### Military Perspective
- **Joint Operations**: Successful coordination between Army, Navy, and Air Force
- **Swift Victory**: Rapid military operations achieved objectives quickly
- **Humanitarian Considerations**: Efforts to minimize civilian casualties
- **Logistics**: Effective supply lines despite challenging terrain

### Political Significance
- **Self-Determination**: Support for democratic aspirations of Bengali people
- **Regional Stability**: Resolution of a major humanitarian crisis
- **International Relations**: Demonstrated India's military capability and regional influence

### Humanitarian Impact
- **Refugee Return**: Millions of refugees returned to newly independent Bangladesh
- **Reconstruction**: Beginning of nation-building in Bangladesh
- **War Crimes**: Later establishment of International Crimes Tribunal in Bangladesh

## Long-term Impact
The 1971 war had lasting effects:

**India-Bangladesh Relations**: Generally positive bilateral relationship

**India-Pakistan Relations**: Continued tensions but establishment of bilateral framework

**Military Doctrine**: Influenced Indian military planning and joint operations doctrine

**Regional Politics**: Changed power dynamics in South Asia

## Historical Assessment
Historians and military analysts have studied the 1971 war extensively:

**Strategic Success**: Achieved political and military objectives rapidly

**Humanitarian Intervention**: Debated as case study in international relations

**Military Innovation**: Use of combined arms and joint operations

**Diplomatic Complexity**: Balanced Cold War pressures with national interests

## Sources & References
This article is based on official Indian government records, Ministry of Defence publications, declassified documents, academic research on South Asian history, published military histories, and international relations scholarship.

---

*This article is based on publicly available historical information and is intended for educational purposes only.*
      `
    },
    {
      id: 6,
      title: 'Kargil War: Operation Vijay',
      category: 'history',
      date: '2023-12-15',
      excerpt: 'The story of courage and sacrifice during the 1999 Kargil conflict.',
      readTime: '14 min read',
      image: '🗻',
      fullContent: `
# Kargil War: Operation Vijay

## Introduction
The Kargil War, fought between May and July 1999, was an armed conflict between India and Pakistan in the Kargil district of Jammu and Kashmir. The conflict began when Pakistani forces and militants infiltrated across the Line of Control (LoC) and occupied strategic heights. India's military response, codenamed Operation Vijay, successfully recaptured all infiltrated positions. This article examines the conflict from a historical and educational perspective.

## Historical Background
The Kargil sector had been relatively quiet since the 1971 war, with both sides generally respecting the LoC.

**Pre-War Context:**
- **1998**: Both India and Pakistan conduct nuclear tests
- **February 1999**: Lahore Declaration signed, aimed at improving relations
- **Early 1999**: Pakistani forces begin infiltration (later discovered)
- **May 1999**: Indian Army discovers infiltration during routine patrol

**Strategic Importance:**
The infiltrated heights overlooked National Highway 1A, the vital supply route connecting Srinagar to Leh. Control of these positions could potentially cut off Indian forces in Siachen and eastern Ladakh.

## Discovery and Initial Response

### Detection
- **Early May 1999**: Local shepherds report suspicious activity
- **May 3, 1999**: Indian Army patrol discovers infiltration
- **May 5-10**: Extent of infiltration becomes clear
- **May 15**: Initial attempts to recapture positions begin

### Scale of Infiltration
Intelligence assessments revealed:
- Approximately 5,000 infiltrators
- Occupation of 130+ positions
- Depth of infiltration: 8-10 km across LoC
- Height advantage: Positions at 16,000-18,000 feet

## Operation Vijay: Military Response

### Phase 1: Assessment and Mobilization (May 15-25)
- Deployment of additional forces
- Intelligence gathering
- Planning of operations
- Establishment of supply lines

### Phase 2: Initial Operations (May 26-June 15)
**Key Battles:**
- **Tololing**: Captured June 13 after intense fighting
- **Tiger Hill**: Multiple attempts, finally captured July 4
- **Point 4875**: Captured by 13 JAK Rifles
- **Point 5140**: Captured by 13 JAK Rifles

### Phase 3: Final Operations (June 16-July 26)
- Systematic recapture of remaining positions
- Consolidation of captured heights
- Clearing operations
- Securing the LoC

## Challenges Faced

### Terrain
- High-altitude warfare (16,000-18,000 feet)
- Steep, rocky slopes
- Limited approach routes
- Extreme weather conditions

### Tactical Disadvantages
- Enemy held height advantage
- Well-fortified positions
- Limited artillery angles
- Difficult supply lines

### Operational Constraints
- Restriction to Indian side of LoC
- International pressure for restraint
- Need to minimize collateral damage
- Time pressure due to approaching winter

## Role of Armed Forces

### Indian Army
- Infantry battalions conducted assault operations
- Artillery provided fire support
- Engineers cleared mines and obstacles
- Medical corps operated at high altitudes

### Indian Air Force
- **Operation Safed Sagar**: Air support component
- Mirage 2000 aircraft used for precision strikes
- Helicopter operations for supply and evacuation
- First use of laser-guided bombs by IAF

### Indian Navy
- **Operation Talwar**: Naval mobilization
- Deployment in Arabian Sea
- Deterrent posture
- Protection of sea lanes

## Key Outcomes

### Military Results
- **Duration**: Approximately 60 days of intense combat
- **Territory**: All infiltrated positions recaptured
- **Casualties**:
  - India: 527 military personnel killed, 1,363 wounded
  - Pakistan: Estimated 700+ killed (disputed)
- **Aircraft Lost**: India - 2 (1 fighter, 1 helicopter); Pakistan - 1 (shot down by India)

### Strategic Outcomes
- Restoration of status quo ante on LoC
- International condemnation of infiltration
- Strengthening of India's position on Kashmir
- Demonstration of military capability

## Gallantry Awards
The Kargil War resulted in unprecedented gallantry recognition:

**Param Vir Chakra (4 awarded):**
- Captain Vikram Batra (posthumous)
- Lieutenant Manoj Kumar Pandey (posthumous)
- Grenadier Yogendra Singh Yadav
- Rifleman Sanjay Kumar

**Maha Vir Chakra**: 9 awarded
**Vir Chakra**: 52 awarded
**Numerous other decorations**: For bravery and service

## Notable Individuals

### Captain Vikram Batra, PVC
- Led successful assault on Point 5140
- Famous for "Yeh Dil Maange More" radio message
- Killed in action at Point 4875
- Age at martyrdom: 24 years

### Lieutenant Manoj Kumar Pandey, PVC
- Led assault on Khalubar Hills
- Continued fighting despite injuries
- Killed in action during final assault
- Age at martyrdom: 24 years

### Grenadier Yogendra Singh Yadav, PVC
- Youngest recipient of PVC (19 years)
- Climbed cliff face under fire
- Survived despite 15 bullet wounds
- Continues to serve in Indian Army

## International Dimension
The war had significant international implications:

**United States**: Pressured Pakistan to withdraw, President Clinton's intervention

**China**: Maintained neutrality, called for peaceful resolution

**G8 Summit**: Issued statement condemning infiltration

**International Media**: Extensive coverage, first "televised war" in South Asia

## Lessons and Significance

### Military Lessons
- **High-Altitude Warfare**: Refined tactics and equipment
- **Joint Operations**: Improved coordination between services
- **Intelligence**: Need for better surveillance of LoC
- **Logistics**: Challenges of supplying forces at extreme altitudes

### Strategic Implications
- **Nuclear Backdrop**: Conflict management under nuclear overhang
- **International Relations**: Importance of diplomatic support
- **Military Preparedness**: Need for constant vigilance
- **Technology**: Role of precision weapons and surveillance

### National Impact
- **Public Awareness**: Increased understanding of military challenges
- **Media Coverage**: First war extensively covered by Indian media
- **National Unity**: Surge in patriotic sentiment
- **Civil-Military Relations**: Enhanced public support for armed forces

## Commemoration
The Kargil War is commemorated annually:

**Kargil Vijay Diwas**: July 26, marking the end of operations

**War Memorials**: 
- Kargil War Memorial, Dras
- Amar Jawan Jyoti, India Gate, New Delhi
- Various regimental memorials

**Documentation**: Books, films, and documentaries preserve the history

## Long-term Impact

### India-Pakistan Relations
- Increased tensions in immediate aftermath
- Subsequent peace initiatives (Agra Summit 2001)
- Continued border management challenges
- Ceasefire agreement (2003)

### Military Reforms
- Modernization of equipment
- Improved surveillance systems
- Enhanced high-altitude warfare capabilities
- Better inter-service coordination mechanisms

### Policy Changes
- Review of intelligence mechanisms
- Strengthening of border infrastructure
- Enhanced monitoring of LoC
- Improved civil-military coordination

## Historical Assessment
Military historians and analysts have extensively studied the Kargil War:

**Tactical Success**: Effective military operations despite challenges

**Strategic Victory**: Achieved political and military objectives

**International Diplomacy**: Successful mobilization of international support

**Operational Innovation**: Adaptation to unique challenges of high-altitude warfare

## Sources & References
This article is based on official Indian government reports, Ministry of Defence publications, Kargil Review Committee Report, published military histories, academic research, and documented accounts of participants.

---

*This article is based on publicly available historical information and is intended for educational purposes only.*
      `
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const toggleBookmark = (articleId) => {
    if (!user) {
      alert('Please login to bookmark articles');
      return;
    }
    
    if (bookmarked.includes(articleId)) {
      setBookmarked(bookmarked.filter(id => id !== articleId));
    } else {
      setBookmarked([...bookmarked, articleId]);
    }
  };

  if (selectedArticle) {
    const article = articles.find(a => a.id === selectedArticle);
    return (
      <div className="articles-page">
        <div className="container">
          <button 
            className="btn btn-secondary back-btn"
            onClick={() => setSelectedArticle(null)}
          >
            ← Back to Articles
          </button>
          
          <article className="full-article">
            <div className="article-header-full">
              <div className="article-icon-large">{article.image}</div>
              <h1>{article.title}</h1>
              <div className="article-meta-full">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <div className="article-content-full">
              {article.fullContent.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={index}>{paragraph.substring(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={index}>{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index}>{paragraph.substring(4)}</h3>;
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index}><strong>{paragraph.slice(2, -2)}</strong></p>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index}>{paragraph.substring(2)}</li>;
                } else if (paragraph.trim() === '---') {
                  return <hr key={index} />;
                } else if (paragraph.trim().startsWith('*') && paragraph.trim().endsWith('*')) {
                  return <p key={index} className="disclaimer"><em>{paragraph.trim().slice(1, -1)}</em></p>;
                } else if (paragraph.trim()) {
                  return <p key={index}>{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="articles-page">
      <div className="container">
        <div className="page-header">
          <h1>Educational Articles</h1>
          <p>Explore well-researched content about the Indian Army</p>
        </div>

        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="articles-grid">
          {filteredArticles.map(article => (
            <div key={article.id} className="article-card card">
              <div className="article-image">{article.image}</div>
              <div className="article-content">
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <span className="article-read-time">{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="article-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSelectedArticle(article.id)}
                  >
                    Read Article
                  </button>
                  <button 
                    className={`bookmark-btn ${bookmarked.includes(article.id) ? 'bookmarked' : ''}`}
                    onClick={() => toggleBookmark(article.id)}
                  >
                    {bookmarked.includes(article.id) ? '★' : '☆'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="no-articles">
            <p>No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;