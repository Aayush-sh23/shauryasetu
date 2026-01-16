import React, { useState } from 'react';
import './Career.css';

const Career = () => {
  const [selectedForce, setSelectedForce] = useState('army');
  const [selectedPath, setSelectedPath] = useState(null);
  const [expandedRank, setExpandedRank] = useState(null);

  // Force selector data
  const forces = [
    { id: 'army', name: 'Indian Army', icon: '🪖', color: '#4a5d23' },
    { id: 'navy', name: 'Indian Navy', icon: '⚓', color: '#003366' },
    { id: 'airforce', name: 'Indian Air Force', icon: '✈️', color: '#4682b4' },
    { id: 'coastguard', name: 'Indian Coast Guard', icon: '🚢', color: '#ff6600' },
    { id: 'capf', name: 'CAPF', icon: '🛡️', color: '#8b4513' }
  ];

  // Career paths for each force
  const careerPathsData = {
    army: [
      {
        id: 'nda-army',
        name: 'National Defence Academy (NDA)',
        icon: '🎓',
        category: 'Officer Entry',
        eligibility: '10+2 (Science/Arts/Commerce)',
        age: '16.5 - 19.5 years',
        duration: '3 years at NDA + 1 year at IMA',
        description: 'The premier tri-service academy for training officers for the Army, Navy, and Air Force. Cadets undergo rigorous academic, physical, and military training.',
        process: [
          'Written Exam (Mathematics & General Ability Test)',
          'SSB Interview (5 days - Psychological Tests, GTO, Interview)',
          'Medical Examination (Detailed medical tests)',
          'Merit List & Final Selection'
        ],
        examsPerYear: 2,
        nextExam: 'April & September',
        officialLink: 'https://www.upsc.gov.in'
      },
      {
        id: 'cds-army',
        name: 'Combined Defence Services (CDS)',
        icon: '🎯',
        category: 'Officer Entry',
        eligibility: 'Graduate (Any Stream)',
        age: '19 - 24 years (IMA), 19 - 25 years (OTA)',
        duration: '1 year at IMA/OTA',
        description: 'Entry for graduates to join as officers in the Indian Army through Indian Military Academy (IMA) or Officers Training Academy (OTA).',
        process: [
          'Written Exam (English, General Knowledge, Elementary Mathematics)',
          'SSB Interview (5 days)',
          'Medical Examination',
          'Final Merit List'
        ],
        examsPerYear: 2,
        nextExam: 'February & September',
        officialLink: 'https://www.upsc.gov.in'
      },
      {
        id: 'tes-army',
        name: 'Technical Entry Scheme (TES)',
        icon: '⚙️',
        category: 'Technical Entry',
        eligibility: '10+2 (PCM with 70%)',
        age: '16.5 - 19.5 years',
        duration: '4 years B.Tech + 1 year at IMA',
        description: 'Direct entry for technical graduates into the Army. Candidates complete B.Tech from designated colleges followed by military training.',
        process: [
          'Written Exam (Mathematics, Physics, Chemistry)',
          'SSB Interview',
          'Medical Examination',
          'B.Tech at designated colleges (CMC Pune, etc.)'
        ],
        examsPerYear: 1,
        nextExam: 'June',
        officialLink: 'https://joinindianarmy.nic.in'
      },
      {
        id: 'agniveer',
        name: 'Agniveer Scheme',
        icon: '🔥',
        category: 'Non-Officer Entry',
        eligibility: '10th/12th (varies by role)',
        age: '17.5 - 21 years (extended to 23 for first batch)',
        duration: '4 years service',
        description: 'Short service scheme for joining the Indian Army as soldiers. After 4 years, 25% are retained for regular service.',
        process: [
          'Online Registration',
          'Physical Fitness Test (1.6 km run, pull-ups, sit-ups)',
          'Written Exam (General Knowledge, Mathematics)',
          'Medical Examination'
        ],
        examsPerYear: 2,
        nextExam: 'Twice yearly',
        officialLink: 'https://joinindianarmy.nic.in'
      },
      {
        id: 'tgc-army',
        name: 'Technical Graduate Course (TGC)',
        icon: '🔧',
        category: 'Technical Entry',
        eligibility: 'B.E/B.Tech (Engineering)',
        age: '20 - 27 years',
        duration: '1 year at IMA',
        description: 'Direct entry for engineering graduates into technical branches of the Army.',
        process: [
          'SSB Interview (No written exam)',
          'Medical Examination',
          'Merit List based on SSB performance'
        ],
        examsPerYear: 2,
        nextExam: 'January & July',
        officialLink: 'https://joinindianarmy.nic.in'
      },
      {
        id: 'jag-army',
        name: 'Judge Advocate General (JAG)',
        icon: '⚖️',
        category: 'Specialized Entry',
        eligibility: 'LLB Degree',
        age: '21 - 27 years',
        duration: '1 year at OTA',
        description: 'Legal branch of the Indian Army. JAG officers provide legal advice and handle military law matters.',
        process: [
          'Preliminary Exam (Law subjects)',
          'SSB Interview',
          'Medical Examination'
        ],
        examsPerYear: 1,
        nextExam: 'May',
        officialLink: 'https://joinindianarmy.nic.in'
      },
      {
        id: 'aec-army',
        name: 'Army Education Corps (AEC)',
        icon: '📚',
        category: 'Specialized Entry',
        eligibility: 'Post Graduate (Any Stream)',
        age: '21 - 27 years',
        duration: '49 weeks at OTA',
        description: 'Educational branch responsible for training and education of Army personnel.',
        process: [
          'SSB Interview',
          'Medical Examination',
          'Merit List'
        ],
        examsPerYear: 1,
        nextExam: 'October',
        officialLink: 'https://joinindianarmy.nic.in'
      },
      {
        id: 'ssc-army',
        name: 'Short Service Commission (SSC)',
        icon: '⏱️',
        category: 'Officer Entry',
        eligibility: 'Graduate (varies by branch)',
        age: '19 - 25 years',
        duration: '10 years (extendable to 14)',
        description: 'Short service commission for officers. Option to apply for Permanent Commission after initial tenure.',
        process: [
          'SSB Interview',
          'Medical Examination',
          'Merit List'
        ],
        examsPerYear: 2,
        nextExam: 'January & July',
        officialLink: 'https://joinindianarmy.nic.in'
      }
    ],
    navy: [
      {
        id: 'nda-navy',
        name: 'National Defence Academy (NDA)',
        icon: '🎓',
        category: 'Officer Entry',
        eligibility: '10+2 (PCM)',
        age: '16.5 - 19.5 years',
        duration: '3 years at NDA + 1 year at INA',
        description: 'Tri-service academy training for Navy officers. After NDA, cadets join Indian Naval Academy (INA) at Ezhimala.',
        process: [
          'Written Exam (Mathematics & GAT)',
          'SSB Interview (5 days)',
          'Medical Examination (Navy standards)',
          'Merit List & Final Selection'
        ],
        examsPerYear: 2,
        nextExam: 'April & September',
        officialLink: 'https://www.upsc.gov.in'
      },
      {
        id: 'inet-navy',
        name: 'Indian Navy Entrance Test (INET)',
        icon: '📝',
        category: 'Officer Entry',
        eligibility: '10+2 (PCM with 70%)',
        age: '16.5 - 19.5 years',
        duration: '4 years B.Tech + 1 year at INA',
        description: 'Direct entry for technical officers. Candidates complete B.Tech at Indian Naval Academy followed by specialized training.',
        process: [
          'Written Exam (Physics, Chemistry, Mathematics)',
          'SSB Interview',
          'Medical Examination',
          'B.Tech at INA Ezhimala'
        ],
        examsPerYear: 1,
        nextExam: 'May',
        officialLink: 'https://www.joinindiannavy.gov.in'
      },
      {
        id: 'cds-navy',
        name: 'Combined Defence Services (CDS)',
        icon: '🎯',
        category: 'Officer Entry',
        eligibility: 'Graduate (Engineering for technical)',
        age: '19 - 24 years',
        duration: '1 year at INA',
        description: 'Graduate entry for Navy officers through CDS exam conducted by UPSC.',
        process: [
          'Written Exam (English, GK, Mathematics)',
          'SSB Interview',
          'Medical Examination',
          'Final Merit List'
        ],
        examsPerYear: 2,
        nextExam: 'February & September',
        officialLink: 'https://www.upsc.gov.in'
      },
      {
        id: 'ssc-navy',
        name: 'Short Service Commission (SSC)',
        icon: '⏱️',
        category: 'Officer Entry',
        eligibility: 'Graduate (varies by branch)',
        age: '19.5 - 25 years',
        duration: '10 years',
        description: 'Short service commission for Navy officers in various branches including Executive, Technical, and Logistics.',
        process: [
          'SSB Interview',
          'Medical Examination',
          'Merit List'
        ],
        examsPerYear: 2,
        nextExam: 'January & July',
        officialLink: 'https://www.joinindiannavy.gov.in'
      },
      {
        id: 'naic-navy',
        name: 'Naval Artificer Apprentice',
        icon: '🔧',
        category: 'Non-Officer Entry',
        eligibility: '10+2 (PCM with 60%)',
        age: '17 - 20 years',
        duration: '4 years training',
        description: 'Technical entry for sailors. Become artificers in various technical branches of the Navy.',
        process: [
          'Written Exam',
          'Physical Fitness Test',
          'Medical Examination'
        ],
        examsPerYear: 2,
        nextExam: 'February & August',
        officialLink: 'https://www.joinindiannavy.gov.in'
      },
      {
        id: 'mr-navy',
        name: 'Matric Recruit (MR)',
        icon: '⚓',
        category: 'Non-Officer Entry',
        eligibility: '10th Pass',
        age: '17 - 20 years',
        duration: '22 weeks basic training',
        description: 'Entry for sailors in various non-technical branches of the Navy.',
        process: [
          'Written Exam',
          'Physical Fitness Test',
          'Medical Examination'
        ],
        examsPerYear: 2,
        nextExam: 'February & August',
        officialLink: 'https://www.joinindiannavy.gov.in'
      }
    ],
    airforce: [
      {
        id: 'nda-airforce',
        name: 'National Defence Academy (NDA)',
        icon: '🎓',
        category: 'Officer Entry',
        eligibility: '10+2 (PCM)',
        age: '16.5 - 19.5 years',
        duration: '3 years at NDA + 1.5 years at AFA',
        description: 'Tri-service academy training for Air Force officers. After NDA, cadets join Air Force Academy (AFA) at Dundigal.',
        process: [
          'Written Exam (Mathematics & GAT)',
          'SSB Interview (5 days)',
          'PABT (Pilot Aptitude Battery Test)',
          'Medical Examination (Flying/Ground Duty)',
          'Merit List & Final Selection'
        ],
        examsPerYear: 2,
        nextExam: 'April & September',
        officialLink: 'https://www.upsc.gov.in'
      },
      {
        id: 'afcat',
        name: 'Air Force Common Admission Test (AFCAT)',
        icon: '✈️',
        category: 'Officer Entry',
        eligibility: 'Graduate (varies by branch)',
        age: '20 - 24 years (Flying), 20 - 26 years (Ground Duty)',
        duration: '1.5 years at AFA (Flying), 1 year (Ground Duty)',
        description: 'Primary entry for graduate officers in Flying, Technical, and Ground Duty branches.',
        process: [
          'Written Exam (General Awareness, Verbal, Numerical, Reasoning)',
          'EKT (Engineering Knowledge Test for Technical)',
          'AFSB Interview (5 days)',
          'PABT (for Flying branch)',
          'Medical Examination'
        ],
        examsPerYear: 2,
        nextExam: 'February & August',
        officialLink: 'https://careerindianairforce.cdac.in'
      },
      {
        id: 'cds-airforce',
        name: 'Combined Defence Services (CDS)',
        icon: '🎯',
        category: 'Officer Entry',
        eligibility: 'Graduate (Engineering for Technical)',
        age: '19 - 24 years',
        duration: '1.5 years at AFA',
        description: 'Graduate entry for Air Force officers through CDS exam conducted by UPSC.',
        process: [
          'Written Exam (English, GK, Mathematics)',
          'AFSB Interview',
          'PABT (for Flying)',
          'Medical Examination',
          'Final Merit List'
        ],
        examsPerYear: 2,
        nextExam: 'February & September',
        officialLink: 'https://www.upsc.gov.in'
      },
      {
        id: 'ncc-airforce',
        name: 'NCC Special Entry',
        icon: '🎖️',
        category: 'Officer Entry',
        eligibility: 'Graduate with NCC Air Wing C Certificate',
        age: '19 - 25 years',
        duration: '1 year at AFA',
        description: 'Special entry for NCC Air Wing cadets with C Certificate. Direct SSB interview without written exam.',
        process: [
          'AFSB Interview (No written exam)',
          'Medical Examination',
          'Merit List'
        ],
        examsPerYear: 2,
        nextExam: 'January & July',
        officialLink: 'https://careerindianairforce.cdac.in'
      },
      {
        id: 'airmen',
        name: 'Airmen (Group X & Y)',
        icon: '🔧',
        category: 'Non-Officer Entry',
        eligibility: '10+2 (PCM for X, Any stream for Y)',
        age: '17 - 21 years',
        duration: '1 year training',
        description: 'Technical (Group X) and Non-Technical (Group Y) entry for airmen in various trades.',
        process: [
          'Online Exam (Physics, Mathematics, English, Reasoning)',
          'Physical Fitness Test',
          'Adaptability Test',
          'Medical Examination'
        ],
        examsPerYear: 2,
        nextExam: 'January & July',
        officialLink: 'https://careerindianairforce.cdac.in'
      },
      {
        id: 'agniveer-vayu',
        name: 'Agniveer Vayu',
        icon: '🔥',
        category: 'Non-Officer Entry',
        eligibility: '10+2 (PCM/Any stream)',
        age: '17.5 - 21 years',
        duration: '4 years service',
        description: 'Short service scheme for joining the Indian Air Force. After 4 years, selected candidates retained for regular service.',
        process: [
          'Online Exam',
          'Physical Fitness Test',
          'Medical Examination'
        ],
        examsPerYear: 2,
        nextExam: 'Twice yearly',
        officialLink: 'https://careerindianairforce.cdac.in'
      }
    ],
    coastguard: [
      {
        id: 'cg-assistant-commandant',
        name: 'Assistant Commandant (General Duty)',
        icon: '🚢',
        category: 'Officer Entry',
        eligibility: 'Graduate (Any Stream)',
        age: '21 - 25 years',
        duration: '1 year at INA Ezhimala',
        description: 'Officer entry for General Duty branch. Responsible for ship operations, navigation, and maritime law enforcement.',
        process: [
          'Written Exam (Mathematics, Physics, Chemistry, English)',
          'SSB Interview',
          'Medical Examination',
          'Final Merit List'
        ],
        examsPerYear: 2,
        nextExam: 'February & August',
        officialLink: 'https://www.joinindiancoastguard.gov.in'
      },
      {
        id: 'cg-technical',
        name: 'Assistant Commandant (Technical)',
        icon: '⚙️',
        category: 'Technical Entry',
        eligibility: 'B.E/B.Tech (Engineering)',
        age: '21 - 25 years',
        duration: '1 year training',
        description: 'Technical officer entry for engineering graduates. Responsible for ship machinery and technical operations.',
        process: [
          'SSB Interview (No written exam)',
          'Medical Examination',
          'Merit List'
        ],
        examsPerYear: 2,
        nextExam: 'February & August',
        officialLink: 'https://www.joinindiancoastguard.gov.in'
      },
      {
        id: 'cg-pilot',
        name: 'Assistant Commandant (Pilot)',
        icon: '🚁',
        category: 'Officer Entry',
        eligibility: 'Graduate with Physics & Mathematics at 10+2',
        age: '21 - 25 years',
        duration: '2 years flying training',
        description: 'Pilot entry for Coast Guard aviation. Fly helicopters and fixed-wing aircraft for maritime surveillance.',
        process: [
          'Written Exam',
          'PABT (Pilot Aptitude Battery Test)',
          'SSB Interview',
          'Medical Examination (Flying standards)'
        ],
        examsPerYear: 2,
        nextExam: 'February & August',
        officialLink: 'https://www.joinindiancoastguard.gov.in'
      },
      {
        id: 'cg-navik',
        name: 'Navik (General Duty & Domestic Branch)',
        icon: '⚓',
        category: 'Non-Officer Entry',
        eligibility: '10+2 (Any Stream)',
        age: '18 - 22 years',
        duration: '26 weeks training',
        description: 'Entry for sailors in Coast Guard ships. Responsible for ship operations and maintenance.',
        process: [
          'Written Exam',
          'Physical Fitness Test',
          'Medical Examination'
        ],
        examsPerYear: 2,
        nextExam: 'February & August',
        officialLink: 'https://www.joinindiancoastguard.gov.in'
      },
      {
        id: 'cg-yantrik',
        name: 'Yantrik (Technical)',
        icon: '🔧',
        category: 'Technical Entry',
        eligibility: '10+2 (PCM with 60%)',
        age: '18 - 22 years',
        duration: '1 year training',
        description: 'Technical entry for sailors. Responsible for ship machinery, electrical systems, and technical maintenance.',
        process: [
          'Written Exam (Mathematics, Physics, Chemistry)',
          'Physical Fitness Test',
          'Medical Examination'
        ],
        examsPerYear: 2,
        nextExam: 'February & August',
        officialLink: 'https://www.joinindiancoastguard.gov.in'
      }
    ],
    capf: [
      {
        id: 'capf-ac',
        name: 'Assistant Commandant (CAPF)',
        icon: '🛡️',
        category: 'Officer Entry',
        eligibility: 'Graduate (Any Stream)',
        age: '20 - 25 years',
        duration: '1 year training at respective academies',
        description: 'Officer entry for Central Armed Police Forces (CRPF, BSF, CISF, ITBP, SSB) through UPSC exam.',
        process: [
          'Written Exam (Paper I: General Ability, Paper II: General Studies)',
          'Physical Efficiency Test (PET)',
          'Medical Examination',
          'Final Merit List'
        ],
        examsPerYear: 1,
        nextExam: 'August',
        officialLink: 'https://www.upsc.gov.in'
      },
      {
        id: 'crpf-constable',
        name: 'CRPF Constable (GD)',
        icon: '👮',
        category: 'Non-Officer Entry',
        eligibility: '10th/12th Pass',
        age: '18 - 23 years (extended for reserved categories)',
        duration: '9 months training',
        description: 'Entry for constables in Central Reserve Police Force. Responsible for internal security and law enforcement.',
        process: [
          'Computer Based Test (CBT)',
          'Physical Efficiency Test (PET)',
          'Physical Standard Test (PST)',
          'Medical Examination'
        ],
        examsPerYear: 1,
        nextExam: 'Announced by SSC',
        officialLink: 'https://ssc.nic.in'
      },
      {
        id: 'bsf-constable',
        name: 'BSF Constable (GD)',
        icon: '🚨',
        category: 'Non-Officer Entry',
        eligibility: '10th/12th Pass',
        age: '18 - 23 years',
        duration: '9 months training',
        description: 'Entry for constables in Border Security Force. Guard India\'s borders with Pakistan and Bangladesh.',
        process: [
          'Computer Based Test (CBT)',
          'Physical Efficiency Test (PET)',
          'Physical Standard Test (PST)',
          'Medical Examination'
        ],
        examsPerYear: 1,
        nextExam: 'Announced by SSC',
        officialLink: 'https://ssc.nic.in'
      },
      {
        id: 'cisf-constable',
        name: 'CISF Constable (GD)',
        icon: '🏢',
        category: 'Non-Officer Entry',
        eligibility: '10th/12th Pass',
        age: '18 - 23 years',
        duration: '9 months training',
        description: 'Entry for constables in Central Industrial Security Force. Protect critical infrastructure and government installations.',
        process: [
          'Computer Based Test (CBT)',
          'Physical Efficiency Test (PET)',
          'Physical Standard Test (PST)',
          'Medical Examination'
        ],
        examsPerYear: 1,
        nextExam: 'Announced by SSC',
        officialLink: 'https://ssc.nic.in'
      },
      {
        id: 'itbp-constable',
        name: 'ITBP Constable (GD)',
        icon: '🏔️',
        category: 'Non-Officer Entry',
        eligibility: '10th/12th Pass',
        age: '18 - 23 years',
        duration: '9 months training',
        description: 'Entry for constables in Indo-Tibetan Border Police. Guard India\'s border with China in high-altitude areas.',
        process: [
          'Computer Based Test (CBT)',
          'Physical Efficiency Test (PET)',
          'Physical Standard Test (PST)',
          'Medical Examination'
        ],
        examsPerYear: 1,
        nextExam: 'Announced by SSC',
        officialLink: 'https://ssc.nic.in'
      },
      {
        id: 'ssb-constable',
        name: 'SSB Constable (GD)',
        icon: '🗻',
        category: 'Non-Officer Entry',
        eligibility: '10th/12th Pass',
        age: '18 - 23 years',
        duration: '9 months training',
        description: 'Entry for constables in Sashastra Seema Bal. Guard India\'s border with Nepal and Bhutan.',
        process: [
          'Computer Based Test (CBT)',
          'Physical Efficiency Test (PET)',
          'Physical Standard Test (PST)',
          'Medical Examination'
        ],
        examsPerYear: 1,
        nextExam: 'Announced by SSC',
        officialLink: 'https://ssc.nic.in'
      }
    ]
  };

  // Officer ranks with detailed information
  const ranksData = {
    army: [
      {
        name: 'Field Marshal',
        level: 10,
        insignia: '⭐⭐⭐⭐⭐',
        yearsOfService: 'Honorary Rank',
        description: 'Highest rank in the Indian Army, awarded only in exceptional circumstances. Only two officers have held this rank.',
        responsibilities: 'Ceremonial and honorary position',
        notableHolders: 'Field Marshal Sam Manekshaw, Field Marshal K. M. Cariappa'
      },
      {
        name: 'General',
        level: 9,
        insignia: '⭐⭐⭐⭐',
        yearsOfService: '35-40 years',
        description: 'Chief of Army Staff (COAS) and Army Commanders hold this rank.',
        responsibilities: 'Overall command of the Indian Army or Army Commands',
        typicalPath: 'NDA/IMA → 35+ years of distinguished service'
      },
      {
        name: 'Lieutenant General',
        level: 8,
        insignia: '⭐⭐⭐',
        yearsOfService: '30-35 years',
        description: 'Corps Commanders and Principal Staff Officers at Army HQ.',
        responsibilities: 'Command of Corps (50,000-70,000 troops) or key staff positions',
        typicalPath: 'NDA/IMA → 30+ years with command experience'
      },
      {
        name: 'Major General',
        level: 7,
        insignia: '⭐⭐',
        yearsOfService: '25-30 years',
        description: 'Divisional Commanders and senior staff officers.',
        responsibilities: 'Command of Division (15,000-20,000 troops)',
        typicalPath: 'NDA/IMA → 25+ years with brigade command'
      },
      {
        name: 'Brigadier',
        level: 6,
        insignia: '⭐',
        yearsOfService: '20-25 years',
        description: 'Brigade Commanders and senior staff appointments.',
        responsibilities: 'Command of Brigade (3,000-5,000 troops)',
        typicalPath: 'NDA/IMA → 20+ years with battalion command'
      },
      {
        name: 'Colonel',
        level: 5,
        insignia: '🦅',
        yearsOfService: '15-20 years',
        description: 'Senior staff officers and commanding officers of large units.',
        responsibilities: 'Staff appointments at Brigade/Division level',
        typicalPath: 'NDA/IMA → 15+ years with company/battalion command'
      },
      {
        name: 'Lieutenant Colonel',
        level: 4,
        insignia: '🦅',
        yearsOfService: '13-15 years',
        description: 'Commanding Officers of battalions (700-1000 troops).',
        responsibilities: 'Command of Battalion or Second-in-Command',
        typicalPath: 'NDA/IMA → 13 years with company command'
      },
      {
        name: 'Major',
        level: 3,
        insignia: '⭐',
        yearsOfService: '6-13 years',
        description: 'Company Commanders (120-150 troops) and staff officers.',
        responsibilities: 'Command of Company or staff appointments',
        typicalPath: 'NDA/IMA → 6 years with platoon command'
      },
      {
        name: 'Captain',
        level: 2,
        insignia: '⭐⭐',
        yearsOfService: '2-6 years',
        description: 'Platoon Commanders and junior staff officers.',
        responsibilities: 'Command of Platoon (30-40 troops)',
        typicalPath: 'NDA/IMA → 2 years as Lieutenant'
      },
      {
        name: 'Lieutenant',
        level: 1,
        insignia: '⭐',
        yearsOfService: '0-2 years',
        description: 'Entry-level commissioned officer rank.',
        responsibilities: 'Platoon Commander or staff officer',
        typicalPath: 'Fresh from NDA/IMA/OTA'
      }
    ],
    navy: [
      {
        name: 'Admiral of the Fleet',
        level: 10,
        insignia: '⚓⚓⚓⚓⚓',
        yearsOfService: 'Honorary Rank',
        description: 'Highest rank in the Indian Navy, never awarded yet.',
        responsibilities: 'Ceremonial and honorary position',
        notableHolders: 'None yet'
      },
      {
        name: 'Admiral',
        level: 9,
        insignia: '⚓⚓⚓⚓',
        yearsOfService: '35-40 years',
        description: 'Chief of Naval Staff (CNS) and Fleet Commanders.',
        responsibilities: 'Overall command of the Indian Navy',
        typicalPath: 'NDA/INA → 35+ years of distinguished service'
      },
      {
        name: 'Vice Admiral',
        level: 8,
        insignia: '⚓⚓⚓',
        yearsOfService: '30-35 years',
        description: 'Flag Officer Commanding-in-Chief of Naval Commands.',
        responsibilities: 'Command of Naval Commands (Western, Eastern, Southern)',
        typicalPath: 'NDA/INA → 30+ years with command experience'
      },
      {
        name: 'Rear Admiral',
        level: 7,
        insignia: '⚓⚓',
        yearsOfService: '25-30 years',
        description: 'Flag Officers commanding fleets and naval bases.',
        responsibilities: 'Command of Fleet or Naval Base',
        typicalPath: 'NDA/INA → 25+ years with ship command'
      },
      {
        name: 'Commodore',
        level: 6,
        insignia: '⚓',
        yearsOfService: '20-25 years',
        description: 'Senior officers commanding squadrons or naval stations.',
        responsibilities: 'Command of Squadron or Naval Station',
        typicalPath: 'NDA/INA → 20+ years with ship command'
      },
      {
        name: 'Captain',
        level: 5,
        insignia: '⚓⚓⚓',
        yearsOfService: '15-20 years',
        description: 'Commanding Officers of major warships (destroyers, frigates).',
        responsibilities: 'Command of major warship or staff appointments',
        typicalPath: 'NDA/INA → 15+ years with ship experience'
      },
      {
        name: 'Commander',
        level: 4,
        insignia: '⚓⚓',
        yearsOfService: '10-15 years',
        description: 'Commanding Officers of smaller warships or Executive Officers of major ships.',
        responsibilities: 'Command of corvette/submarine or XO of major ship',
        typicalPath: 'NDA/INA → 10 years with department head experience'
      },
      {
        name: 'Lieutenant Commander',
        level: 3,
        insignia: '⚓',
        yearsOfService: '6-10 years',
        description: 'Department Heads on warships.',
        responsibilities: 'Head of department (Weapons, Engineering, etc.)',
        typicalPath: 'NDA/INA → 6 years as Lieutenant'
      },
      {
        name: 'Lieutenant',
        level: 2,
        insignia: '⚓⚓',
        yearsOfService: '2-6 years',
        description: 'Watch-keeping officers and junior department officers.',
        responsibilities: 'Officer of the Watch, junior department officer',
        typicalPath: 'NDA/INA → 2 years as Sub Lieutenant'
      },
      {
        name: 'Sub Lieutenant',
        level: 1,
        insignia: '⚓',
        yearsOfService: '0-2 years',
        description: 'Entry-level commissioned officer rank.',
        responsibilities: 'Under training, junior watch-keeping duties',
        typicalPath: 'Fresh from NDA/INA'
      }
    ],
    airforce: [
      {
        name: 'Marshal of the Air Force',
        level: 10,
        insignia: '✈️✈️✈️✈️✈️',
        yearsOfService: 'Honorary Rank',
        description: 'Highest rank in the Indian Air Force, awarded only once.',
        responsibilities: 'Ceremonial and honorary position',
        notableHolders: 'Marshal of the Air Force Arjan Singh'
      },
      {
        name: 'Air Chief Marshal',
        level: 9,
        insignia: '✈️✈️✈️✈️',
        yearsOfService: '35-40 years',
        description: 'Chief of Air Staff (CAS).',
        responsibilities: 'Overall command of the Indian Air Force',
        typicalPath: 'NDA/AFA → 35+ years of distinguished service'
      },
      {
        name: 'Air Marshal',
        level: 8,
        insignia: '✈️✈️✈️',
        yearsOfService: '30-35 years',
        description: 'Air Officer Commanding-in-Chief of Commands.',
        responsibilities: 'Command of Air Commands (Western, Eastern, etc.)',
        typicalPath: 'NDA/AFA → 30+ years with command experience'
      },
      {
        name: 'Air Vice Marshal',
        level: 7,
        insignia: '✈️✈️',
        yearsOfService: '25-30 years',
        description: 'Senior Air Staff Officers at Air HQ and Command HQ.',
        responsibilities: 'Senior staff appointments or Air Base command',
        typicalPath: 'NDA/AFA → 25+ years with squadron command'
      },
      {
        name: 'Air Commodore',
        level: 6,
        insignia: '✈️',
        yearsOfService: '20-25 years',
        description: 'Station Commanders and senior staff officers.',
        responsibilities: 'Command of Air Base or senior staff position',
        typicalPath: 'NDA/AFA → 20+ years with squadron command'
      },
      {
        name: 'Group Captain',
        level: 5,
        insignia: '🦅',
        yearsOfService: '15-20 years',
        description: 'Wing Commanders and senior staff officers.',
        responsibilities: 'Command of Wing or staff appointments',
        typicalPath: 'NDA/AFA → 15+ years with squadron command'
      },
      {
        name: 'Wing Commander',
        level: 4,
        insignia: '🦅',
        yearsOfService: '13-15 years',
        description: 'Squadron Commanders (12-18 aircraft).',
        responsibilities: 'Command of Squadron',
        typicalPath: 'NDA/AFA → 13 years with flight command'
      },
      {
        name: 'Squadron Leader',
        level: 3,
        insignia: '⭐',
        yearsOfService: '6-13 years',
        description: 'Flight Commanders (4-6 aircraft) and staff officers.',
        responsibilities: 'Command of Flight or staff appointments',
        typicalPath: 'NDA/AFA → 6 years as Flying Officer'
      },
      {
        name: 'Flight Lieutenant',
        level: 2,
        insignia: '⭐⭐',
        yearsOfService: '3-6 years',
        description: 'Experienced pilots and junior staff officers.',
        responsibilities: 'Operational flying duties, junior staff work',
        typicalPath: 'NDA/AFA → 3 years as Flying Officer'
      },
      {
        name: 'Flying Officer',
        level: 1,
        insignia: '⭐',
        yearsOfService: '0-3 years',
        description: 'Entry-level commissioned officer rank.',
        responsibilities: 'Under training, operational flying duties',
        typicalPath: 'Fresh from NDA/AFA'
      }
    ],
    coastguard: [
      {
        name: 'Director General',
        level: 9,
        insignia: '⚓⚓⚓⚓',
        yearsOfService: '35-40 years',
        description: 'Head of the Indian Coast Guard.',
        responsibilities: 'Overall command of the Indian Coast Guard',
        typicalPath: 'INA → 35+ years of distinguished service'
      },
      {
        name: 'Additional Director General',
        level: 8,
        insignia: '⚓⚓⚓',
        yearsOfService: '30-35 years',
        description: 'Senior officers at Coast Guard HQ.',
        responsibilities: 'Senior staff appointments at HQ',
        typicalPath: 'INA → 30+ years with command experience'
      },
      {
        name: 'Inspector General',
        level: 7,
        insignia: '⚓⚓',
        yearsOfService: '25-30 years',
        description: 'Regional Commanders.',
        responsibilities: 'Command of Coast Guard Region',
        typicalPath: 'INA → 25+ years with ship command'
      },
      {
        name: 'Deputy Inspector General',
        level: 6,
        insignia: '⚓',
        yearsOfService: '20-25 years',
        description: 'District Commanders and senior staff officers.',
        responsibilities: 'Command of Coast Guard District',
        typicalPath: 'INA → 20+ years with ship command'
      },
      {
        name: 'Commandant',
        level: 5,
        insignia: '⚓⚓⚓',
        yearsOfService: '15-20 years',
        description: 'Commanding Officers of major ships.',
        responsibilities: 'Command of major Coast Guard ship',
        typicalPath: 'INA → 15+ years with ship experience'
      },
      {
        name: 'Deputy Commandant',
        level: 4,
        insignia: '⚓⚓',
        yearsOfService: '10-15 years',
        description: 'Commanding Officers of smaller ships or Executive Officers.',
        responsibilities: 'Command of patrol vessel or XO of major ship',
        typicalPath: 'INA → 10 years with department head experience'
      },
      {
        name: 'Assistant Commandant',
        level: 3,
        insignia: '⚓',
        yearsOfService: '0-10 years',
        description: 'Junior officers on ships and staff appointments.',
        responsibilities: 'Watch-keeping, department duties',
        typicalPath: 'Fresh from INA or direct entry'
      }
    ],
    capf: [
      {
        name: 'Director General',
        level: 9,
        insignia: '⭐⭐⭐',
        yearsOfService: '35-40 years',
        description: 'Head of respective CAPF (CRPF, BSF, CISF, ITBP, SSB).',
        responsibilities: 'Overall command of the force',
        typicalPath: 'UPSC CAPF → 35+ years of distinguished service'
      },
      {
        name: 'Additional Director General',
        level: 8,
        insignia: '⭐⭐',
        yearsOfService: '30-35 years',
        description: 'Senior officers at Force HQ.',
        responsibilities: 'Senior staff appointments at HQ',
        typicalPath: 'UPSC CAPF → 30+ years with command experience'
      },
      {
        name: 'Inspector General',
        level: 7,
        insignia: '⭐',
        yearsOfService: '25-30 years',
        description: 'Sector/Frontier Commanders.',
        responsibilities: 'Command of Sector/Frontier',
        typicalPath: 'UPSC CAPF → 25+ years with battalion command'
      },
      {
        name: 'Deputy Inspector General',
        level: 6,
        insignia: '🦅',
        yearsOfService: '20-25 years',
        description: 'Range/Zone Commanders.',
        responsibilities: 'Command of Range/Zone',
        typicalPath: 'UPSC CAPF → 20+ years with company command'
      },
      {
        name: 'Commandant',
        level: 5,
        insignia: '🦅',
        yearsOfService: '15-20 years',
        description: 'Battalion Commanders.',
        responsibilities: 'Command of Battalion (800-1000 personnel)',
        typicalPath: 'UPSC CAPF → 15+ years with company command'
      },
      {
        name: 'Second-in-Command',
        level: 4,
        insignia: '⭐',
        yearsOfService: '13-15 years',
        description: 'Deputy to Battalion Commander.',
        responsibilities: 'Second-in-Command of Battalion',
        typicalPath: 'UPSC CAPF → 13 years with company command'
      },
      {
        name: 'Assistant Commandant',
        level: 3,
        insignia: '⭐',
        yearsOfService: '0-13 years',
        description: 'Company Commanders and staff officers.',
        responsibilities: 'Command of Company (100-120 personnel)',
        typicalPath: 'Fresh from UPSC CAPF exam'
      }
    ]
  };

  // Training academies
  const academiesData = {
    army: [
      {
        name: 'National Defence Academy (NDA)',
        location: 'Khadakwasla, Pune, Maharashtra',
        icon: '🎓',
        established: '1954',
        duration: '3 years',
        description: 'Premier tri-service academy training cadets for Army, Navy, and Air Force.',
        curriculum: 'Academic degree (BA/BSc), Military training, Physical fitness, Leadership development',
        intake: '~400 cadets per course (twice yearly)',
        website: 'https://www.nda.nic.in'
      },
      {
        name: 'Indian Military Academy (IMA)',
        location: 'Dehradun, Uttarakhand',
        icon: '🏛️',
        established: '1932',
        duration: '1 year (Gentlemen Cadets), 49 weeks (SSC)',
        description: 'Premier training academy for Army officers.',
        curriculum: 'Military tactics, Weapon training, Physical fitness, Leadership, Field exercises',
        intake: '~1,500 cadets per year',
        website: 'https://www.ima-dehradun.gov.in'
      },
      {
        name: 'Officers Training Academy (OTA)',
        location: 'Chennai, Tamil Nadu',
        icon: '🎖️',
        established: '1963',
        duration: '49 weeks',
        description: 'Training academy for Short Service Commission officers.',
        curriculum: 'Military training, Weapon handling, Tactics, Physical fitness',
        intake: '~500 cadets per course (twice yearly)',
        website: 'https://www.otachennai.gov.in'
      }
    ],
    navy: [
      {
        name: 'Indian Naval Academy (INA)',
        location: 'Ezhimala, Kerala',
        icon: '⚓',
        established: '2009',
        duration: '4 years (B.Tech), 1 year (Graduate)',
        description: 'Premier training academy for Navy officers.',
        curriculum: 'Naval operations, Navigation, Engineering, Seamanship, Leadership',
        intake: '~300 cadets per year',
        website: 'https://www.indiannavy.nic.in'
      },
      {
        name: 'INS Chilka',
        location: 'Odisha',
        icon: '🚢',
        established: '1980',
        duration: '22 weeks',
        description: 'Basic training establishment for sailors.',
        curriculum: 'Basic seamanship, Naval traditions, Physical fitness, Weapon training',
        intake: '~2,000 sailors per year',
        website: 'https://www.indiannavy.nic.in'
      }
    ],
    airforce: [
      {
        name: 'Air Force Academy (AFA)',
        location: 'Dundigal, Hyderabad, Telangana',
        icon: '✈️',
        established: '1969',
        duration: '1.5 years (Flying), 1 year (Ground Duty)',
        description: 'Premier training academy for Air Force officers.',
        curriculum: 'Flying training, Aeronautics, Tactics, Leadership, Physical fitness',
        intake: '~300 cadets per year',
        website: 'https://www.careerindianairforce.cdac.in'
      },
      {
        name: 'Air Force Technical College (AFTC)',
        location: 'Bangalore, Karnataka',
        icon: '🔧',
        established: '1949',
        duration: '4 years',
        description: 'Technical training for Air Force officers.',
        curriculum: 'Engineering, Aeronautics, Technical systems, Military training',
        intake: '~100 cadets per year',
        website: 'https://www.careerindianairforce.cdac.in'
      }
    ],
    coastguard: [
      {
        name: 'Indian Naval Academy (INA)',
        location: 'Ezhimala, Kerala',
        icon: '⚓',
        established: '2009',
        duration: '1 year',
        description: 'Coast Guard officers train at INA alongside Navy officers.',
        curriculum: 'Naval operations, Navigation, Maritime law, Seamanship, Leadership',
        intake: '~50 Coast Guard cadets per year',
        website: 'https://www.indiannavy.nic.in'
      },
      {
        name: 'Coast Guard Academy',
        location: 'Kochi, Kerala',
        icon: '🚢',
        established: '1998',
        duration: '26 weeks (Navik), 1 year (Yantrik)',
        description: 'Training establishment for Coast Guard personnel.',
        curriculum: 'Maritime operations, Search and rescue, Law enforcement, Seamanship',
        intake: '~500 personnel per year',
        website: 'https://www.indiancoastguard.gov.in'
      }
    ],
    capf: [
      {
        name: 'National Police Academy (NPA)',
        location: 'Hyderabad, Telangana',
        icon: '🎓',
        established: '1948',
        duration: '1 year',
        description: 'Training academy for IPS and CAPF officers.',
        curriculum: 'Law enforcement, Leadership, Physical fitness, Weapon training, Investigation',
        intake: '~200 officers per year',
        website: 'https://npa.gov.in'
      },
      {
        name: 'CRPF Academy',
        location: 'Gurugram, Haryana',
        icon: '👮',
        established: '1959',
        duration: '44 weeks',
        description: 'Training academy for CRPF officers.',
        curriculum: 'Internal security, Crowd control, Counter-insurgency, Leadership',
        intake: '~150 officers per year',
        website: 'https://crpf.gov.in'
      },
      {
        name: 'BSF Academy',
        location: 'Tekanpur, Madhya Pradesh',
        icon: '🚨',
        established: '1965',
        duration: '44 weeks',
        description: 'Training academy for BSF officers.',
        curriculum: 'Border management, Counter-infiltration, Leadership, Weapon training',
        intake: '~150 officers per year',
        website: 'https://bsf.gov.in'
      }
    ]
  };

  const currentCareerPaths = careerPathsData[selectedForce] || [];
  const currentRanks = ranksData[selectedForce] || [];
  const currentAcademies = academiesData[selectedForce] || [];

  return (
    <div className="career-page">
      <div className="container">
        <div className="page-header">
          <h1>Defence Career Pathways</h1>
          <p>Explore comprehensive career opportunities across all Indian Defence Forces</p>
          <p className="career-note">Choose your force and discover the path to serve the nation</p>
        </div>

        {/* Force Selector */}
        <div className="force-selector">
          {forces.map(force => (
            <button
              key={force.id}
              className={`force-btn ${selectedForce === force.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedForce(force.id);
                setSelectedPath(null);
                setExpandedRank(null);
              }}
              style={{
                borderColor: selectedForce === force.id ? force.color : '#ccc',
                backgroundColor: selectedForce === force.id ? force.color : 'white',
                color: selectedForce === force.id ? 'white' : force.color
              }}
            >
              <span className="force-icon">{force.icon}</span>
              <span className="force-name">{force.name}</span>
            </button>
          ))}
        </div>

        {/* Career Paths Section */}
        <div className="career-paths-section">
          <h2>Career Entry Paths</h2>
          <p className="section-description">
            Multiple entry routes available for {forces.find(f => f.id === selectedForce)?.name}
          </p>
          <div className="career-paths-grid">
            {currentCareerPaths.map(path => (
              <div
                key={path.id}
                className={`career-card ${selectedPath === path.id ? 'selected' : ''}`}
                onClick={() => setSelectedPath(selectedPath === path.id ? null : path.id)}
              >
                <div className="career-card-header">
                  <div className="career-icon">{path.icon}</div>
                  <div className="career-category">{path.category}</div>
                </div>
                <h3>{path.name}</h3>
                <div className="career-quick-info">
                  <div className="info-item">
                    <strong>📚 Eligibility:</strong> {path.eligibility}
                  </div>
                  <div className="info-item">
                    <strong>🎂 Age:</strong> {path.age}
                  </div>
                  <div className="info-item">
                    <strong>⏱️ Duration:</strong> {path.duration}
                  </div>
                  <div className="info-item">
                    <strong>📅 Exams/Year:</strong> {path.examsPerYear}
                  </div>
                </div>
                <p className="career-description">{path.description}</p>

                {selectedPath === path.id && (
                  <div className="career-details">
                    <h4>Selection Process</h4>
                    <ol className="process-list">
                      {path.process.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                    <div className="career-footer">
                      <div className="next-exam">
                        <strong>Next Exam:</strong> {path.nextExam}
                      </div>
                      <a
                        href={path.officialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="official-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Official Website →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Officer Ranks Section */}
        <div className="ranks-section">
          <h2>Officer Ranks & Progression</h2>
          <p className="section-description">
            Career progression path in {forces.find(f => f.id === selectedForce)?.name}
          </p>
          <div className="ranks-ladder">
            {currentRanks.map((rank, index) => (
              <div
                key={index}
                className={`rank-item ${expandedRank === index ? 'expanded' : ''}`}
                onClick={() => setExpandedRank(expandedRank === index ? null : index)}
              >
                <div className="rank-header">
                  <div className="rank-level">{rank.level}</div>
                  <div className="rank-main">
                    <div className="rank-name">{rank.name}</div>
                    <div className="rank-insignia">{rank.insignia}</div>
                  </div>
                  <div className="rank-years">{rank.yearsOfService}</div>
                </div>

                {expandedRank === index && (
                  <div className="rank-details">
                    <p className="rank-description">{rank.description}</p>
                    <div className="rank-info-grid">
                      <div className="rank-info-item">
                        <strong>Responsibilities:</strong>
                        <p>{rank.responsibilities}</p>
                      </div>
                      {rank.typicalPath && (
                        <div className="rank-info-item">
                          <strong>Typical Path:</strong>
                          <p>{rank.typicalPath}</p>
                        </div>
                      )}
                      {rank.notableHolders && (
                        <div className="rank-info-item">
                          <strong>Notable Holders:</strong>
                          <p>{rank.notableHolders}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Training Academies Section */}
        <div className="academies-section">
          <h2>Training Academies</h2>
          <p className="section-description">
            Premier training institutions for {forces.find(f => f.id === selectedForce)?.name}
          </p>
          <div className="academies-grid">
            {currentAcademies.map((academy, index) => (
              <div key={index} className="academy-card">
                <div className="academy-icon">{academy.icon}</div>
                <h3>{academy.name}</h3>
                <div className="academy-location">📍 {academy.location}</div>
                <div className="academy-meta">
                  <span className="academy-established">Est. {academy.established}</span>
                  <span className="academy-duration">⏱️ {academy.duration}</span>
                </div>
                <p className="academy-description">{academy.description}</p>
                <div className="academy-details">
                  <div className="academy-detail-item">
                    <strong>Curriculum:</strong>
                    <p>{academy.curriculum}</p>
                  </div>
                  <div className="academy-detail-item">
                    <strong>Annual Intake:</strong>
                    <p>{academy.intake}</p>
                  </div>
                </div>
                <a
                  href={academy.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academy-link"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Assessment Checklist */}
        <div className="checklist-section card">
          <h2>Is Defence Career Right for You?</h2>
          <p className="section-description">Self-assessment checklist for aspiring defence personnel</p>
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
            <label className="checklist-item">
              <input type="checkbox" />
              <span>Are you ready for frequent transfers and postings?</span>
            </label>
            <label className="checklist-item">
              <input type="checkbox" />
              <span>Can you work effectively in a hierarchical structure?</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;