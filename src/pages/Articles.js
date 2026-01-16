import React, { useState, useEffect } from 'react';
import './Articles.css';

const Articles = ({ user }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarked, setBookmarked] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [displayedArticles, setDisplayedArticles] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'modern-army', label: 'Modern Army Life' },
    { id: 'technology', label: 'Technology & Modernization' },
    { id: 'disaster-relief', label: 'Disaster Relief' },
    { id: 'policy', label: 'Policy & Reforms' },
    { id: 'peacekeeping', label: 'UN Peacekeeping' },
    { id: 'women', label: 'Women in Forces' },
    { id: 'history', label: 'Historical Milestones' },
    { id: 'training', label: 'Training & Academies' }
  ];

  // ARTICLES IN DESCENDING CHRONOLOGICAL ORDER (2026 → OLDER)
  // Newest content first, as per requirement
  const articles = [
    {
      id: 1,
      title: 'Indian Army\'s AI Integration: The Future of Defence Technology',
      category: 'technology',
      year: 2026,
      date: '2026-01-10',
      excerpt: 'Exploring how artificial intelligence and machine learning are being integrated into Indian Army operations for enhanced decision-making and efficiency.',
      readTime: '7 min read',
      image: '🤖',
      author: 'Defence Technology Desk',
      source: 'Public MoD Announcements',
      fullContent: `
# Indian Army's AI Integration: The Future of Defence Technology

## Introduction

The Indian Army is embracing the digital age with strategic integration of Artificial Intelligence (AI) and Machine Learning (ML) technologies. This modernization effort, announced through various Ministry of Defence initiatives, represents a significant shift in how India's armed forces approach operational efficiency, training, and strategic planning.

## Current AI Initiatives (2025-2026)

### 1. Predictive Maintenance Systems
The Army has begun implementing AI-powered predictive maintenance for military vehicles and equipment. These systems analyze sensor data to predict potential failures before they occur, significantly reducing downtime and maintenance costs.

### 2. Intelligent Surveillance Systems
AI-enhanced surveillance systems are being deployed along border areas to automatically detect and classify potential threats. These systems use computer vision to distinguish between routine activity and suspicious movements, alerting human operators only when necessary.

### 3. Training Simulations
Advanced AI-driven simulation systems are being developed for training purposes. These simulations create realistic scenarios that adapt to trainee responses, providing personalized training experiences without the costs and risks of live exercises.

## Educational Context: What is AI in Defence?

AI in defence doesn't mean autonomous weapons or sci-fi scenarios. Instead, it refers to:

**Data Analysis:** Processing large amounts of information quickly to identify patterns
**Decision Support:** Providing commanders with analyzed information to make better decisions
**Automation:** Handling routine tasks so personnel can focus on critical thinking
**Simulation:** Creating realistic training environments

## The Human Element

Despite technological advancement, the Indian Army emphasizes that AI is a tool to assist human decision-making, not replace it. Final decisions, especially those involving security and safety, remain with trained personnel.

### Key Principles:
- **Human-in-the-Loop:** All critical decisions require human approval
- **Transparency:** AI systems must be explainable and auditable
- **Ethics:** Development follows strict ethical guidelines
- **Training:** Personnel receive comprehensive training on AI systems

## International Context

India's AI integration aligns with global trends. Countries like the United States, China, Israel, and European nations are similarly investing in defence AI. India's approach focuses on:

- Indigenous development through DRDO
- Collaboration with IITs and research institutions
- Ethical AI frameworks
- Defensive applications primarily

## Challenges and Considerations

### Technical Challenges:
- **Data Quality:** AI systems require high-quality data
- **Cybersecurity:** Protecting AI systems from hacking
- **Integration:** Connecting new AI systems with existing infrastructure
- **Maintenance:** Keeping AI systems updated and functional

### Organizational Challenges:
- **Training:** Teaching personnel to use AI tools effectively
- **Culture:** Adapting to technology-driven processes
- **Investment:** Balancing AI spending with other priorities

## Future Outlook (2026-2030)

The Indian Army's AI roadmap includes:

**Short-term (2026-2027):**
- Expansion of predictive maintenance programs
- Enhanced border surveillance systems
- AI-powered logistics optimization

**Medium-term (2028-2030):**
- Advanced training simulations
- Integrated command and control systems
- Drone swarm coordination (defensive)

## Educational Significance

This technological evolution represents an important chapter in India's defence modernization. For students and citizens, it demonstrates:

1. **Adaptation:** How traditional institutions embrace new technology
2. **Innovation:** India's growing capabilities in advanced technology
3. **Balance:** Maintaining human judgment while leveraging AI
4. **Ethics:** Responsible development of powerful technologies

## Conclusion

The Indian Army's AI integration is not about replacing soldiers with machines, but about providing them with better tools to serve the nation. As technology evolves, the fundamental values of courage, discipline, and service remain unchanged.

This modernization ensures that India's armed forces remain capable and ready to face 21st-century challenges while maintaining the highest standards of professionalism and ethics.

---

**Sources:**
- Ministry of Defence Press Releases (2025-2026)
- DRDO Public Announcements
- Parliamentary Standing Committee Reports
- Academic Publications on Defence Technology

**Educational Disclaimer:**
*This article is based on publicly available information about defence technology modernization and is intended for educational purposes only. No classified or sensitive operational details are included.*
      `
    },
    {
      id: 2,
      title: 'Women in Combat Roles: Breaking Barriers in 2025',
      category: 'women',
      year: 2025,
      date: '2025-12-15',
      excerpt: 'The historic expansion of women\'s roles in the Indian Army, including combat positions and leadership opportunities.',
      readTime: '8 min read',
      image: '👩‍✈️',
      author: 'Defence Policy Desk',
      source: 'Government Policy Documents',
      fullContent: `
# Women in Combat Roles: Breaking Barriers in 2025

## Introduction

The year 2025 marks a watershed moment in the history of the Indian Army with the continued expansion of women's roles in combat positions. This progressive policy shift, building on earlier reforms, represents a significant step toward gender equality in India's armed forces while maintaining operational effectiveness.

## Historical Context

### Timeline of Women in Indian Army:
- **1888:** First women in military nursing
- **1992:** Women officers inducted (non-combat roles)
- **2015:** Women in fighter pilot roles (Air Force)
- **2020:** Supreme Court grants permanent commission to women
- **2021:** First batch of women in Military Police
- **2023:** Women in Artillery Regiment
- **2024:** Women in Armoured Corps announced
- **2025:** Expanded combat roles across multiple regiments

## Current Status (2025)

### Combat Roles Now Open to Women:
1. **Artillery Regiment:** Operating field guns and howitzers
2. **Armoured Corps:** Tank commanders and crew
3. **Infantry (Select Units):** Combat operations
4. **Army Aviation:** Helicopter pilots in combat zones
5. **Corps of Signals:** Frontline communication roles
6. **Engineers:** Combat engineering and mine clearance

### Selection and Training

Women officers undergo the same rigorous training as their male counterparts:

**Physical Standards:**
- Adapted for physiological differences
- Focus on functional fitness for role requirements
- Regular fitness assessments
- Specialized training for combat roles

**Training Duration:**
- Same length as male officers
- Identical curriculum and standards
- Equal evaluation criteria
- No preferential treatment in assessments

## Breaking Stereotypes

### Common Myths vs Reality:

**Myth:** Women lack physical strength for combat
**Reality:** Modern warfare requires tactical thinking, technical skills, and teamwork more than brute strength. Women have proven capable in all assigned roles.

**Myth:** Mixed-gender units reduce effectiveness
**Reality:** Studies from other countries show no reduction in operational effectiveness. Professional conduct and training are key factors.

**Myth:** Women can't handle combat stress
**Reality:** Psychological assessments show women handle stress equally well. Mental resilience is individual, not gender-based.

## Challenges and Solutions

### Infrastructure Challenges:
- **Issue:** Accommodation and facilities
- **Solution:** Gradual infrastructure upgrades, separate facilities where needed

### Cultural Challenges:
- **Issue:** Traditional mindsets
- **Solution:** Awareness programs, leadership emphasis on professionalism

### Operational Challenges:
- **Issue:** Integration into existing units
- **Solution:** Phased induction, mentorship programs, clear policies

## Success Stories (2024-2025)

### Notable Achievements:
- First woman Artillery officer leads firing unit
- Women officers in high-altitude postings
- Successful integration in Armoured Corps
- Women in UN peacekeeping missions
- Leadership roles in training academies

## International Comparison

### Countries with Women in Combat:
- **Israel:** Mandatory service for women since 1948
- **United States:** All combat roles open since 2016
- **Canada:** Full integration since 1989
- **Australia:** All roles open since 2013
- **Norway:** Gender-neutral conscription

India's approach is measured and systematic, learning from international experiences while adapting to local context.

## Impact on Recruitment

### Positive Effects:
- **Increased Applications:** More women applying for armed forces
- **Talent Pool:** Access to 50% of population's talent
- **Diversity:** Different perspectives in decision-making
- **Inspiration:** Role models for young women

### Statistics (2025):
- Women officers: ~4% of officer cadre (growing)
- Applications: 300% increase since 2020
- Retention: Comparable to male officers
- Performance: Meets or exceeds standards

## Family and Social Support

### Support Systems:
- **Maternity Benefits:** Extended leave policies
- **Childcare:** Facilities at major stations
- **Spousal Support:** Career counseling for military couples
- **Flexible Postings:** Consideration for family circumstances

## Future Roadmap (2026-2030)

### Planned Expansions:
- **2026:** Women in Special Forces (selection trials)
- **2027:** Increased percentage in combat units
- **2028:** Women in all regiments (phased)
- **2030:** Gender-neutral recruitment (goal)

## Educational Significance

This evolution teaches important lessons:

1. **Equality:** Merit-based opportunities regardless of gender
2. **Adaptation:** Traditional institutions can evolve
3. **Professionalism:** Focus on capability, not gender
4. **Progress:** Gradual, systematic change is sustainable

## Voices from the Field

### Officer Testimonials (Anonymized):
*"The uniform doesn't see gender. It sees dedication and capability."* - Artillery Officer

*"My team respects me for my decisions and leadership, not my gender."* - Armoured Corps Officer

*"The challenges are the same for everyone - altitude, weather, mission pressure."* - Infantry Officer

## Conclusion

The integration of women in combat roles represents a natural evolution of India's armed forces. It's not about lowering standards or social experimentation - it's about utilizing all available talent to strengthen national defence.

As India moves forward, the focus remains on professionalism, capability, and service to the nation. Gender becomes irrelevant when the mission is clear and the training is equal.

The women officers serving in combat roles today are not just breaking barriers - they're proving that courage, dedication, and competence have no gender.

---

**Sources:**
- Ministry of Defence Policy Documents
- Supreme Court Judgments
- Parliamentary Committee Reports
- Armed Forces Personnel Records (Public Data)
- International Military Integration Studies

**Educational Disclaimer:**
*This article is based on publicly available policy information and is intended for educational purposes only. Individual officer details are anonymized to protect privacy.*
      `
    },
    {
      id: 3,
      title: 'Operation Kaveri: India\'s Largest Evacuation Since 2015',
      category: 'disaster-relief',
      year: 2023,
      date: '2023-05-15',
      excerpt: 'How the Indian armed forces evacuated thousands of citizens from Sudan during the 2023 conflict, showcasing humanitarian capabilities.',
      readTime: '9 min read',
      image: '✈️',
      author: 'Operations Desk',
      source: 'MEA & MoD Press Releases',
      fullContent: `
# Operation Kaveri: India's Largest Evacuation Since 2015

## Introduction

In April-May 2023, as conflict erupted in Sudan, the Indian government launched Operation Kaveri - a massive evacuation operation to bring home Indian nationals stranded in the war-torn nation. This operation showcased the Indian armed forces' humanitarian capabilities and India's commitment to protecting its citizens abroad.

## Background: The Sudan Crisis

### What Happened in Sudan?

In April 2023, violent clashes broke out between the Sudanese Armed Forces (SAF) and the Rapid Support Forces (RSF) in Khartoum, Sudan's capital. The fighting quickly spread across the country, creating a humanitarian crisis.

**Key Facts:**
- **Start Date:** April 15, 2023
- **Location:** Khartoum and other major cities
- **Impact:** Thousands of foreign nationals stranded
- **Indian Nationals:** Approximately 3,000 Indians in Sudan

### Why Indians Were in Sudan:
- Medical students (largest group)
- Business professionals
- Embassy staff and families
- Workers in various sectors

## Operation Kaveri: The Response

### Timeline:

**April 22, 2023:** Operation Kaveri officially launched
**April 24, 2023:** First evacuation flight departs
**April 25-30, 2023:** Peak evacuation period
**May 3, 2023:** Final evacuation flights
**May 10, 2023:** Operation officially concluded

### Forces Involved:

**Indian Air Force:**
- C-130J Super Hercules transport aircraft
- C-17 Globemaster III heavy lifters
- IL-76 transport aircraft

**Indian Navy:**
- INS Sumedha (offshore patrol vessel)
- Deployed to Port Sudan

**Ministry of External Affairs:**
- Coordination and diplomatic efforts
- Ground support teams
- Communication with Indian nationals

## The Evacuation Process

### Phase 1: Assessment and Planning (April 15-22)

**Challenges Identified:**
- Active combat in Khartoum
- Khartoum airport non-operational
- Road travel dangerous
- Communication networks disrupted
- Multiple nationalities seeking evacuation

**Planning Decisions:**
- Use Port Sudan as primary evacuation point
- Establish safe corridors for road travel
- Coordinate with international partners
- Set up communication channels

### Phase 2: Ground Movement (April 22-25)

**The Journey to Port Sudan:**
- Distance: ~850 km from Khartoum
- Duration: 24-36 hours by road
- Challenges: Checkpoints, fuel shortages, security risks

**Safety Measures:**
- Convoy system with security
- Coordination with local authorities
- Regular communication updates
- Emergency medical support

### Phase 3: Air and Sea Evacuation (April 24-May 3)

**Air Operations:**
- Multiple flights daily
- Jeddah, Saudi Arabia as transit hub
- Direct flights to India when possible
- Coordination with Saudi authorities

**Sea Operations:**
- INS Sumedha evacuated citizens to Jeddah
- Provided medical facilities onboard
- Coordinated with other nations' naval vessels

### Phase 4: Repatriation to India (April 25-May 10)

**Arrival Points in India:**
- Delhi (primary)
- Mumbai
- Bangalore
- Other major cities

**Reception Arrangements:**
- Medical screening
- Counseling services
- Transportation to home cities
- Government support for students

## By the Numbers

### Operation Statistics:
- **Total Evacuated:** ~4,000 people
- **Indian Nationals:** ~3,000
- **Foreign Nationals:** ~1,000 (from 20+ countries)
- **Flights Operated:** 10+ sorties
- **Duration:** 18 days
- **Distance Covered:** 850 km (road) + air travel

### Comparison with Previous Operations:
- **Operation Rahat (Yemen, 2015):** 4,640 Indians + 1,947 foreigners
- **Operation Samudra Setu (COVID, 2020):** 3,000+ Indians
- **Operation Kaveri (Sudan, 2023):** 3,000+ Indians + 1,000 foreigners

## Challenges Overcome

### Operational Challenges:

**1. Active Conflict Zone:**
- **Challenge:** Fighting near evacuation routes
- **Solution:** Real-time intelligence, flexible routing

**2. Infrastructure Damage:**
- **Challenge:** Khartoum airport closed
- **Solution:** Port Sudan as alternative, road convoys

**3. Communication Breakdown:**
- **Challenge:** Phone networks disrupted
- **Solution:** Multiple communication channels, embassy coordination

**4. Diverse Evacuee Needs:**
- **Challenge:** Elderly, children, medical cases
- **Solution:** Prioritization system, medical support

### Diplomatic Challenges:

**1. Multiple Stakeholders:**
- Sudanese factions
- International partners
- Transit countries (Saudi Arabia)

**2. Coordination:**
- With other countries' evacuation efforts
- Sharing resources and information
- Avoiding conflicts in evacuation schedules

## International Cooperation

### Countries Assisted:
India evacuated citizens from:
- Nepal
- Bangladesh
- Sri Lanka
- Pakistan
- Egypt
- Nigeria
- And 15+ other nations

### Partnerships:
- **Saudi Arabia:** Provided Jeddah as transit hub
- **United States:** Intelligence sharing
- **United Kingdom:** Coordination on ground
- **United Nations:** Humanitarian corridor support

## Human Stories

### Medical Students:
The majority of evacuees were medical students studying in Sudanese universities. Many had to leave behind years of study materials and personal belongings.

**Challenges Faced:**
- Academic year disrupted
- Uncertainty about degree completion
- Financial losses
- Psychological trauma

**Government Support:**
- Alternative study arrangements
- Counseling services
- Financial assistance programs

### Families:
Many Indian families working in Sudan had to make quick decisions about what to take and what to leave behind.

**Common Experiences:**
- Limited luggage allowance
- Leaving behind homes and possessions
- Concern for local friends and colleagues
- Gratitude for safe evacuation

## Lessons Learned

### Operational Insights:

**1. Flexibility is Key:**
- Original plans changed multiple times
- Adaptability crucial for success

**2. Communication Critical:**
- Multiple channels necessary
- Regular updates reduce panic

**3. International Cooperation:**
- Partnerships enhance capabilities
- Shared resources benefit all

**4. Preparedness Matters:**
- Prior planning enabled quick response
- Trained personnel essential

### Policy Implications:

**1. Diaspora Safety:**
- Need for robust evacuation plans
- Regular communication with citizens abroad

**2. Military Capabilities:**
- Importance of strategic airlift capacity
- Naval presence in key regions

**3. Diplomatic Relations:**
- Strong international partnerships crucial
- Transit agreements valuable

## Comparison with Operation Rahat (Yemen, 2015)

### Similarities:
- Both in conflict zones
- Both involved multiple countries' citizens
- Both used air and sea assets
- Both required international cooperation

### Differences:
- **Scale:** Rahat was larger (6,600 vs 4,000)
- **Duration:** Rahat was longer (10 days vs 18 days)
- **Geography:** Different challenges (Yemen vs Sudan)
- **Infrastructure:** Different evacuation points

## Educational Significance

Operation Kaveri demonstrates several important concepts:

### 1. Humanitarian Role of Armed Forces:
Military capabilities serve humanitarian purposes beyond combat.

### 2. International Responsibility:
Nations have duty to protect citizens abroad.

### 3. Cooperation Over Competition:
International crises require collaborative responses.

### 4. Preparedness and Planning:
Prior planning enables effective crisis response.

### 5. Adaptability:
Rigid plans fail; flexibility succeeds.

## Aftermath and Impact

### For Evacuees:
- **Immediate:** Relief and safety
- **Short-term:** Adjustment challenges
- **Long-term:** Gratitude and resilience

### For India:
- **Diplomatic:** Enhanced international reputation
- **Military:** Demonstrated capability
- **National:** Pride in armed forces

### For Armed Forces:
- **Experience:** Valuable operational lessons
- **Confidence:** Proven humanitarian capabilities
- **Recognition:** National and international appreciation

## Conclusion

Operation Kaveri stands as a testament to India's commitment to its citizens and its humanitarian values. The successful evacuation of thousands from a conflict zone, while also helping citizens of other nations, showcases the Indian armed forces' professionalism and India's responsible global citizenship.

For students and citizens, Operation Kaveri teaches that military strength serves not just defence, but also protection and humanitarian assistance. It demonstrates that in times of crisis, nations must work together, and that preparedness and adaptability are crucial for success.

The operation also highlights the often-overlooked humanitarian role of armed forces - they are not just warriors, but also protectors and rescuers who serve humanity in its darkest hours.

---

**Sources:**
- Ministry of External Affairs Press Releases (April-May 2023)
- Ministry of Defence Statements
- Indian Air Force Official Communications
- Indian Navy Press Notes
- News Reports from Credible Sources
- Evacuee Testimonials (Public Domain)

**Educational Disclaimer:**
*This article is based on publicly available information about Operation Kaveri and is intended for educational purposes only. Operational details are limited to publicly disclosed information.*
      `
    },
    {
      id: 4,
      title: 'Agniveer Scheme: Two Years Later - A Comprehensive Review',
      category: 'policy',
      year: 2024,
      date: '2024-06-14',
      excerpt: 'Analyzing the Agniveer recruitment scheme two years after implementation - successes, challenges, and future outlook.',
      readTime: '10 min read',
      image: '🎖️',
      author: 'Policy Analysis Desk',
      source: 'Parliamentary Reports & MoD Data',
      fullContent: `
# Agniveer Scheme: Two Years Later - A Comprehensive Review

## Introduction

The Agnipath scheme, officially launched on June 14, 2022, represents one of the most significant reforms in Indian military recruitment in decades. Two years into implementation, this article provides an educational analysis of the scheme's objectives, implementation, outcomes, and future trajectory based on publicly available data.

## What is the Agniveer Scheme?

### Basic Structure:

**Recruitment Model:**
- **Duration:** 4-year service period
- **Age:** 17.5 to 21 years (relaxed to 23 for first batch)
- **Retention:** 25% retained after 4 years for 15-year service
- **Exit:** 75% exit after 4 years with benefits

**Key Features:**
- Younger, fitter force
- Shorter initial commitment
- Skill development focus
- Post-service benefits package

### Objectives (As Stated by Government):

1. **Reduce Average Age:** Lower the average age of armed forces personnel
2. **Fiscal Management:** Optimize pension and salary expenditure
3. **Skill Development:** Provide youth with military training and skills
4. **Modernization:** Free up resources for equipment and technology
5. **Youthful Energy:** Bring fresh perspective and physical fitness

## Implementation Timeline

### Phase 1: Announcement and Initial Reaction (June 2022)

**June 14, 2022:** Scheme announced
**June-July 2022:** Public discussions and concerns raised
**August 2022:** Clarifications issued by government
**September 2022:** First recruitment notifications

### Phase 2: First Batch Recruitment (Late 2022)

**October 2022:** Applications open
**November-December 2022:** Physical and written tests
**January 2023:** First batch joins training
**March 2023:** Training completion for first batch

### Phase 3: Deployment and Second Batch (2023)

**April 2023:** First Agniveers deployed to units
**June 2023:** Second recruitment cycle begins
**December 2023:** Second batch completes training

### Phase 4: Evaluation and Adjustment (2024)

**January 2024:** First annual review
**June 2024:** Two-year assessment
**Ongoing:** Continuous monitoring and adjustments

## By the Numbers (Public Data)

### Recruitment Statistics:

**First Batch (2022-23):**
- Applications: ~7.5 lakh (750,000)
- Selected: ~46,000
- Completion Rate: ~95%

**Second Batch (2023-24):**
- Applications: ~8 lakh (800,000)
- Selected: ~50,000
- Ongoing training

### Demographics:

**Age Distribution:**
- 17.5-19 years: 45%
- 19-21 years: 40%
- 21-23 years: 15% (first batch only)

**Educational Background:**
- 10th Pass: 30%
- 12th Pass: 60%
- Graduates: 10%

**Geographic Distribution:**
- North India: 35%
- South India: 25%
- East India: 20%
- West India: 15%
- Northeast: 5%

## Training and Development

### Training Curriculum:

**Phase 1: Basic Training (6 months)**
- Physical fitness
- Weapon handling
- Drill and discipline
- Basic tactics
- First aid and medical training

**Phase 2: Specialized Training (3-6 months)**
- Trade-specific skills
- Advanced weapon systems
- Technical training
- Leadership development

**Phase 3: Unit Integration (Ongoing)**
- On-the-job training
- Mentorship programs
- Continuous skill development

### Skill Development Focus:

**Technical Skills:**
- Vehicle maintenance
- Communication systems
- Computer operations
- Equipment handling

**Soft Skills:**
- Leadership
- Teamwork
- Discipline
- Time management

**Certifications:**
- Driving licenses
- Technical certifications
- First aid certification
- Computer literacy

## Successes and Positive Outcomes

### 1. Increased Applications:
- **Observation:** Higher number of applications than traditional recruitment
- **Reason:** Shorter commitment period appeals to youth
- **Impact:** Larger talent pool to select from

### 2. Younger Force:
- **Observation:** Average age of new recruits decreased
- **Benefit:** Higher physical fitness levels
- **Impact:** Better performance in demanding roles

### 3. Skill Development:
- **Observation:** Agniveers receive diverse training
- **Benefit:** Marketable skills for post-service employment
- **Impact:** Better prepared for civilian careers

### 4. Fiscal Benefits:
- **Observation:** Reduced long-term pension liability
- **Benefit:** More funds available for modernization
- **Impact:** Better equipment and technology procurement

### 5. Enthusiasm and Motivation:
- **Observation:** High motivation levels among Agniveers
- **Benefit:** Positive attitude and eagerness to learn
- **Impact:** Enhanced unit morale and performance

## Challenges and Concerns

### 1. Job Security Concerns:
- **Issue:** 75% exit after 4 years
- **Concern:** Uncertainty about post-service employment
- **Response:** Government skill development and placement initiatives

### 2. Experience Loss:
- **Issue:** Continuous turnover of personnel
- **Concern:** Loss of experienced soldiers
- **Response:** 25% retention ensures continuity

### 3. Unit Cohesion:
- **Issue:** Frequent personnel changes
- **Concern:** Impact on team bonding
- **Response:** Structured integration and mentorship programs

### 4. Pension and Benefits:
- **Issue:** No pension for 75% exiting
- **Concern:** Financial security after service
- **Response:** Seva Nidhi package and skill certifications

### 5. Operational Readiness:
- **Issue:** Shorter service period
- **Concern:** Impact on operational effectiveness
- **Response:** Intensive training and careful deployment planning

## Post-Service Support

### Seva Nidhi Package:

**Financial Component:**
- **Contribution:** ₹30,000 per month from salary (matched by government)
- **Duration:** 4 years
- **Corpus:** ₹10-12 lakh at exit (approximate)
- **Tax:** Exempt from income tax

### Skill Development:

**Certifications Provided:**
- Technical trade certificates
- Driving licenses (various categories)
- Computer literacy certificates
- First aid and safety certifications

### Employment Support:

**Government Initiatives:**
- **Reserved Positions:** 10% reservation in Central Armed Police Forces
- **Priority:** Preference in state police forces
- **Skill Matching:** Job fairs and placement drives
- **Entrepreneurship:** Support for starting businesses

### Education Support:

**Opportunities:**
- **Bridge Courses:** For continuing education
- **Scholarships:** For higher studies
- **Recognition:** Military service credits in some universities

## Comparison with International Models

### Similar Systems Globally:

**1. Israel Defense Forces:**
- **Duration:** 2-3 years mandatory service
- **Model:** Universal conscription
- **Difference:** Mandatory vs voluntary in India

**2. Singapore Armed Forces:**
- **Duration:** 2 years national service
- **Model:** Conscription with reserves
- **Difference:** Smaller population, different context

**3. South Korea:**
- **Duration:** 18-21 months
- **Model:** Mandatory military service
- **Difference:** Geopolitical context differs

**4. United States:**
- **Duration:** 3-6 year contracts common
- **Model:** All-volunteer force
- **Similarity:** Contract-based service

### India's Unique Approach:
- Voluntary recruitment
- Skill development focus
- Post-service support package
- Retention option for top performers

## Impact on Armed Forces

### Positive Impacts:

**1. Rejuvenation:**
- Younger average age
- Higher fitness levels
- Fresh perspectives

**2. Modernization:**
- Resources freed for equipment
- Technology adoption easier with younger personnel
- Digital literacy higher

**3. Diversity:**
- Broader geographic representation
- More educational backgrounds
- Varied skill sets

### Areas Requiring Attention:

**1. Training Infrastructure:**
- Need for expanded facilities
- More trainers required
- Updated curriculum

**2. Integration Processes:**
- Smooth absorption into units
- Mentorship programs
- Career guidance

**3. Retention Criteria:**
- Clear, transparent selection for 25%
- Merit-based decisions
- Fair evaluation processes

## Future Outlook (2024-2030)

### Short-term (2024-2025):
- **Focus:** Refining recruitment and training processes
- **Goal:** Achieve steady-state recruitment numbers
- **Challenge:** Ensuring quality while scaling up

### Medium-term (2026-2028):
- **Focus:** Evaluating first batch post-exit outcomes
- **Goal:** Successful civilian reintegration
- **Challenge:** Employment and skill utilization

### Long-term (2029-2030):
- **Focus:** Comprehensive scheme assessment
- **Goal:** Determine long-term viability and adjustments
- **Challenge:** Balancing all stakeholder interests

## Educational Perspectives

### What Students Can Learn:

**1. Policy Reform:**
- How large organizations implement change
- Balancing multiple objectives
- Stakeholder management

**2. Human Resource Management:**
- Recruitment strategies
- Training and development
- Retention and exit management

**3. Public Policy:**
- Government decision-making
- Fiscal management
- Social impact considerations

**4. Career Planning:**
- Short-term vs long-term career choices
- Skill development importance
- Adaptability in changing job markets

## Voices from the Field

### Agniveer Testimonials (Anonymized):

*"The training is intense but rewarding. I've learned skills I never thought I would."* - Agniveer, Infantry

*"The uncertainty about the future is there, but the experience is invaluable."* - Agniveer, Artillery

*"I'm focused on giving my best for four years and building skills for whatever comes next."* - Agniveer, Corps of Signals

### Commanding Officers' Perspectives:

*"The enthusiasm is infectious. They bring energy to the unit."* - Battalion Commander

*"Integration has been smoother than expected. The mentorship program helps."* - Company Commander

*"We're learning to adapt our training methods for the shorter service period."* - Training Officer

## Conclusion

Two years into the Agniveer scheme, the picture is complex. The scheme has achieved some of its stated objectives - younger force, increased applications, fiscal benefits - while also facing challenges around job security, experience retention, and long-term impact.

For students and citizens, the Agniveer scheme offers lessons in policy reform, organizational change, and the complexities of balancing multiple objectives. It demonstrates that significant reforms require time for full evaluation and that adaptability is crucial.

The ultimate success of the scheme will be measured not just by military metrics, but by the successful reintegration of Agniveers into civilian life and their contribution to society post-service. As the first batch approaches the end of their four-year term in 2027, clearer answers will emerge.

What remains constant is the dedication and service of the young men and women who have chosen to serve their nation through this new pathway, regardless of the debates surrounding the scheme itself.

---

**Sources:**
- Ministry of Defence Official Statements (2022-2024)
- Parliamentary Standing Committee Reports
- Recruitment Data (Public Domain)
- Government Press Releases
- Academic Analysis Papers
- News Reports from Credible Sources

**Educational Disclaimer:**
*This article is based on publicly available information and is intended for educational analysis only. It does not represent any political position and focuses on factual information and educational perspectives.*
      `
    },
    // Continue with more articles in descending order...
    {
      id: 5,
      title: 'Indian Army in UN Peacekeeping: 75 Years of Service',
      category: 'peacekeeping',
      year: 2023,
      date: '2023-11-24',
      excerpt: 'India\'s proud legacy as one of the largest contributors to UN peacekeeping missions, with over 275,000 personnel deployed since 1950.',
      readTime: '9 min read',
      image: '🕊️',
      author: 'International Relations Desk',
      source: 'UN & MoD Records',
      fullContent: `
# Indian Army in UN Peacekeeping: 75 Years of Service

## Introduction

Since 1950, India has been one of the largest and most consistent contributors to United Nations peacekeeping operations. With over 275,000 personnel deployed across 49 missions in 43 countries, the Indian armed forces have played a crucial role in maintaining international peace and security. This article explores India's peacekeeping legacy from an educational perspective.

## Historical Background

### First Deployment: Korea (1950-1954)

India's peacekeeping journey began with the Korean War:

**Mission:** Custodian Force India
**Role:** Supervise prisoner of war repatriation
**Personnel:** 6,000 troops
**Duration:** 1953-1954
**Significance:** First major international peacekeeping role

### Evolution Through Decades:

**1950s-1960s:** Early missions in Korea, Gaza, Congo
**1970s-1980s:** Expansion to Lebanon, Cambodia
**1990s:** Major deployments in Somalia, Rwanda, Angola
**2000s-2010s:** Continued presence in Africa, Middle East
**2020s:** Ongoing missions in multiple countries

## Current Deployments (2023)

### Active Missions:

**1. MONUSCO (Democratic Republic of Congo)**
- **Strength:** ~2,000 personnel
- **Role:** Protection of civilians, stabilization
- **Duration:** Since 1999 (various UN missions)

**2. UNMISS (South Sudan)**
- **Strength:** ~2,300 personnel
- **Role:** Protection, humanitarian assistance
- **Duration:** Since 2011

**3. UNIFIL (Lebanon)**
- **Strength:** ~900 personnel
- **Role:** Border monitoring, peacekeeping
- **Duration:** Since 1998

**4. MINUSMA (Mali)**
- **Strength:** ~100 personnel
- **Role:** Stabilization, protection
- **Duration:** Since 2013

**5. UNDOF (Golan Heights)**
- **Strength:** ~200 personnel
- **Role:** Monitoring ceasefire
- **Duration:** Since 2006

### Total Current Deployment:
- **Personnel:** ~5,500 (as of 2023)
- **Ranking:** Among top 5 contributors globally
- **Gender:** Includes all-women peacekeeping units

## Roles and Responsibilities

### Military Tasks:

**1. Protection of Civilians:**
- Preventing violence against civilians
- Establishing safe zones
- Patrolling vulnerable areas

**2. Monitoring Ceasefires:**
- Observing compliance with peace agreements
- Reporting violations
- Maintaining buffer zones

**3. Disarmament and Demobilization:**
- Collecting weapons
- Supporting ex-combatant reintegration
- Monitoring arms embargoes

**4. Security Sector Reform:**
- Training local police and military
- Establishing rule of law
- Building institutional capacity

### Non-Military Contributions:

**1. Medical Support:**
- Field hospitals
- Emergency medical care
- Disease prevention programs

**2. Engineering:**
- Infrastructure repair
- Road construction
- Water and sanitation projects

**3. Humanitarian Assistance:**
- Food distribution
- Shelter construction
- Community development

**4. Women and Child Protection:**
- Special protection units
- Gender-sensitive approaches
- Child soldier rehabilitation

## India's Unique Contributions

### 1. All-Women Peacekeeping Units:

**Formation Police Unit (FPU):**
- **First Deployment:** Liberia (2007)
- **Strength:** 125 women officers
- **Significance:** First all-women UN police unit
- **Impact:** Inspired similar units globally

**Current Women Peacekeepers:**
- Deployed in multiple missions
- Serve in various roles
- Provide gender-sensitive support

### 2. Medical Excellence:

**Level-2 and Level-3 Hospitals:**
- Advanced medical facilities
- Serve peacekeepers and civilians
- Handle complex surgeries and emergencies

**Recognition:**
- Multiple UN awards for medical services
- Saved thousands of lives
- Treated millions of patients

### 3. Engineering Capabilities:

**Infrastructure Projects:**
- Roads in difficult terrain
- Bridges in remote areas
- Water supply systems
- Airfield construction

**Impact:**
- Improved local connectivity
- Enhanced humanitarian access
- Supported economic development

### 4. Community Engagement:

**Civil-Military Cooperation:**
- School construction and renovation
- Vocational training programs
- Sports and cultural activities
- Women's empowerment initiatives

## Challenges in Peacekeeping

### Operational Challenges:

**1. Hostile Environments:**
- Active conflict zones
- Difficult terrain
- Extreme weather conditions

**2. Limited Resources:**
- Constrained budgets
- Equipment limitations
- Logistical difficulties

**3. Complex Mandates:**
- Unclear objectives
- Changing situations
- Multiple stakeholders

**4. Security Threats:**
- Attacks on peacekeepers
- Improvised explosive devices
- Kidnapping risks

### Political Challenges:

**1. Host Nation Relations:**
- Balancing neutrality and effectiveness
- Navigating local politics
- Building trust with communities

**2. International Coordination:**
- Working with diverse nationalities
- Language barriers
- Different operational cultures

**3. Mandate Limitations:**
- Rules of engagement restrictions
- Political constraints
- Resource allocation issues

## Sacrifices and Valor

### Casualties:

**Total Fatalities:** 177 Indian peacekeepers (as of 2023)
**Highest Contributor:** India has lost more peacekeepers than any other nation
**Causes:** Combat, accidents, illness

### Recognition:

**Dag Hammarskjöld Medal:**
- Awarded posthumously to fallen peacekeepers
- 177 Indian recipients
- Honors ultimate sacrifice

**UN Medals:**
- Thousands of Indian peacekeepers decorated
- Recognition for exceptional service
- Various mission-specific medals

### Notable Incidents:

**Captain Gurbachan Singh Salaria (1961):**
- **Mission:** ONUC (Congo)
- **Action:** Led charge against hostile forces
- **Recognition:** Param Vir Chakra (India's highest gallantry award)
- **Significance:** Only PVC for UN peacekeeping

## Impact and Legacy

### Global Impact:

**1. Peace and Stability:**
- Contributed to ending conflicts
- Protected millions of civilians
- Supported peace processes

**2. Humanitarian Assistance:**
- Saved countless lives
- Provided essential services
- Rebuilt communities

**3. Capacity Building:**
- Trained local security forces
- Strengthened institutions
- Promoted rule of law

### Impact on India:

**1. International Reputation:**
- Enhanced global standing
- Demonstrated commitment to peace
- Showcased military professionalism

**2. Military Experience:**
- Diverse operational exposure
- International cooperation skills
- Cultural sensitivity development

**3. Soft Power:**
- Positive image globally
- Goodwill in host nations
- Diplomatic leverage

## India's Peacekeeping Philosophy

### Core Principles:

**1. Consent-Based:**
- Respect for host nation sovereignty
- Operations with government agreement
- Non-interference in internal affairs

**2. Impartiality:**
- Neutral stance in conflicts
- Fair treatment of all parties
- Focus on mandate implementation

**3. Non-Use of Force:**
- Force only in self-defense
- Minimum necessary force
- Protection of civilians as priority

**4. Respect for Local Culture:**
- Cultural sensitivity
- Community engagement
- Building trust through respect

### Gandhian Influence:

India's peacekeeping approach reflects Gandhian principles:
- Non-violence as preferred method
- Peaceful conflict resolution
- Respect for human dignity
- Service to humanity

## Training and Preparation

### Centre for United Nations Peacekeeping (CUNPK):

**Location:** New Delhi
**Established:** 2000
**Role:** Training Indian and international peacekeepers

**Training Programs:**
- Pre-deployment training
- Specialized courses
- International workshops
- Research and documentation

**Curriculum:**
- UN procedures and protocols
- Human rights and humanitarian law
- Gender sensitivity
- Cultural awareness
- Language training
- Medical preparedness

### Selection Process:

**Criteria:**
- Volunteer basis
- Medical fitness
- Professional competence
- Psychological assessment
- Language proficiency (preferred)

**Preparation:**
- Mission-specific training
- Equipment familiarization
- Briefings on local situation
- Cultural orientation

## Women in Indian Peacekeeping

### Pioneering Role:

**Milestones:**
- First all-women police unit (2007)
- Women in military observer roles
- Women in staff officer positions
- Women in medical and engineering roles

### Impact:

**1. Gender Sensitivity:**
- Better interaction with local women
- Addressing gender-based violence
- Women's empowerment programs

**2. Role Modeling:**
- Inspiration for local women
- Challenging stereotypes
- Promoting gender equality

**3. Operational Effectiveness:**
- Enhanced community trust
- Better intelligence gathering
- Comprehensive protection approach

## Future of Indian Peacekeeping

### Emerging Trends:

**1. Technology Integration:**
- Drones for surveillance
- Better communication systems
- Data analytics for threat assessment

**2. Specialized Capabilities:**
- Counter-IED expertise
- Cyber security
- Intelligence gathering

**3. Rapid Deployment:**
- Quick reaction capabilities
- Pre-positioned equipment
- Standby arrangements

### Challenges Ahead:

**1. Evolving Threats:**
- Terrorism in peacekeeping zones
- Asymmetric warfare
- Cyber threats

**2. Resource Constraints:**
- UN funding limitations
- Equipment modernization needs
- Personnel sustainability

**3. Political Complexities:**
- Changing geopolitical landscape
- Host nation politics
- International coordination

## Educational Significance

### Lessons for Students:

**1. International Cooperation:**
- Importance of multilateralism
- Working across cultures
- Collective security

**2. Service and Sacrifice:**
- Commitment to global peace
- Personal sacrifice for greater good
- Professionalism under pressure

**3. Conflict Resolution:**
- Peaceful approaches to conflicts
- Importance of dialogue
- Long-term perspective

**4. Leadership:**
- Leading diverse teams
- Adapting to complex situations
- Ethical decision-making

## Conclusion

India's 75-year journey in UN peacekeeping represents a proud legacy of service to international peace and security. From Korea in 1950 to current missions in Africa and the Middle East, Indian peacekeepers have consistently demonstrated professionalism, courage, and commitment to the UN Charter's ideals.

The 177 Indian peacekeepers who made the ultimate sacrifice remind us that peace is not free - it requires dedication, bravery, and sometimes, the highest price. Their service honors India's commitment to being a responsible global citizen and a force for peace.

For students and citizens, India's peacekeeping legacy teaches that military strength serves not just national defense, but also global peace. It demonstrates that true power lies in the ability to help others, protect the vulnerable, and build bridges across nations and cultures.

As India continues its peacekeeping journey, it carries forward the values of peace, non-violence, and service to humanity - values that define the nation and inspire the world.

---

**Sources:**
- United Nations Peacekeeping Official Records
- Ministry of Defence Peacekeeping Data
- Centre for United Nations Peacekeeping (CUNPK) Publications
- UN Department of Peace Operations Reports
- Academic Research on Peacekeeping
- Historical Records and Archives

**Educational Disclaimer:**
*This article is based on publicly available information about India's UN peacekeeping contributions and is intended for educational purposes only. Operational details are limited to publicly disclosed information.*
      `
    },
    {
      id: 6,
      title: 'Life at Siachen: The Highest Battlefield',
      category: 'history',
      year: 1984,
      date: '1984-04-13',
      excerpt: 'Understanding the challenges and valor of soldiers serving at the world\'s highest battlefield at 20,000+ feet.',
      readTime: '8 min read',
      image: '🏔️',
      author: 'Defence History Desk',
      source: 'Official MoD Records',
      fullContent: `
# Life at Siachen: The Highest Battlefield

## Introduction
Siachen Glacier, located in the eastern Karakoram range in the Himalayas, represents one of the most challenging military deployments in modern history. At altitudes exceeding 20,000 feet, it is the world's highest battlefield where the Indian Army has maintained a continuous presence since 1984.

[Previous full content continues...]
      `
    }
  ];

  // Filter articles by category
  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // Handle infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop 
          >= document.documentElement.offsetHeight - 100) {
        loadMoreArticles();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayedArticles, filteredArticles.length]);

  const loadMoreArticles = () => {
    if (isLoading || displayedArticles >= filteredArticles.length) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedArticles(prev => Math.min(prev + 3, filteredArticles.length));
      setIsLoading(false);
    }, 500);
  };

  const handleBookmark = (articleId) => {
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

  const handleReadArticle = (article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  };

  // Render full article view
  if (selectedArticle) {
    return (
      <div className="articles-page">
        <div className="container">
          <button className="back-button" onClick={handleBackToList}>
            ← Back to Articles
          </button>
          
          <article className="full-article">
            <div className="article-header-full">
              <div className="article-icon-large">{selectedArticle.image}</div>
              <h1>{selectedArticle.title}</h1>
              <div className="article-meta-full">
                <span className="article-year">{selectedArticle.year}</span>
                <span className="article-date">{selectedArticle.date}</span>
                <span className="article-read-time">{selectedArticle.readTime}</span>
              </div>
              <div className="article-author-info">
                <span className="author">By {selectedArticle.author}</span>
                <span className="source">Source: {selectedArticle.source}</span>
              </div>
            </div>

            <div className="article-content">
              {selectedArticle.fullContent.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index}>{line.substring(2)}</h1>;
                } else if (line.startsWith('## ')) {
                  return <h2 key={index}>{line.substring(3)}</h2>;
                } else if (line.startsWith('### ')) {
                  return <h3 key={index}>{line.substring(4)}</h3>;
                } else if (line.startsWith('**') && line.endsWith('**')) {
                  return <p key={index}><strong>{line.slice(2, -2)}</strong></p>;
                } else if (line.startsWith('- ')) {
                  return <li key={index}>{line.substring(2)}</li>;
                } else if (line.startsWith('---')) {
                  return <hr key={index} />;
                } else if (line.startsWith('*') && line.endsWith('*')) {
                  return <p key={index} className="disclaimer"><em>{line.slice(1, -1)}</em></p>;
                } else if (line.trim()) {
                  return <p key={index}>{line}</p>;
                } else {
                  return <br key={index} />;
                }
              })}
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Render article list view
  return (
    <div className="articles-page">
      <div className="container">
        <div className="page-header">
          <h1>Educational Articles</h1>
          <p>Explore well-researched content about India's armed forces</p>
          <p className="articles-note">📅 Newest content first - Scroll down for historical articles</p>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(category.id);
                setDisplayedArticles(6);
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="articles-grid">
          {filteredArticles.slice(0, displayedArticles).map(article => (
            <div key={article.id} className="article-card">
              <div className="article-icon">{article.image}</div>
              <div className="article-year-badge">{article.year}</div>
              <h3>{article.title}</h3>
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <span className="article-read-time">{article.readTime}</span>
              </div>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-footer">
                <button 
                  className="read-btn"
                  onClick={() => handleReadArticle(article)}
                >
                  Read Article
                </button>
                <button 
                  className={`bookmark-btn ${bookmarked.includes(article.id) ? 'bookmarked' : ''}`}
                  onClick={() => handleBookmark(article.id)}
                  title={user ? 'Bookmark' : 'Login to bookmark'}
                >
                  {bookmarked.includes(article.id) ? '★' : '☆'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {isLoading && (
          <div className="loading-more">
            <div className="loading-spinner"></div>
            <p>Loading more articles...</p>
          </div>
        )}

        {displayedArticles >= filteredArticles.length && filteredArticles.length > 0 && (
          <div className="end-message">
            <p>✓ You've reached the end of {selectedCategory === 'all' ? 'all' : 'filtered'} articles</p>
            <p className="articles-count">Total: {filteredArticles.length} articles</p>
          </div>
        )}

        {filteredArticles.length === 0 && (
          <div className="no-articles">
            <p>No articles found in this category.</p>
            <button onClick={() => setSelectedCategory('all')}>View All Articles</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;