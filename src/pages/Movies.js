import React from 'react';
import './Movies.css';

const Movies = () => {
  const movies = [
    {
      id: 1,
      title: 'Border (1997)',
      year: '1997',
      basedOn: 'Battle of Longewala, 1971 Indo-Pak War',
      icon: '🎬',
      realStory: 'The Battle of Longewala was fought on December 4-5, 1971, where 120 Indian soldiers defended against 2,000 Pakistani soldiers and 45 tanks.',
      dramatization: 'The movie adds emotional subplots, songs, and dramatizes certain battle sequences for cinematic effect.',
      historicalContext: 'This battle was a crucial victory during the 1971 war that led to the creation of Bangladesh.',
      keyFacts: [
        'Major Kuldip Singh Chandpuri led the defense',
        'Indian Air Force played crucial role with Hunter aircraft',
        'Only 2 Indian casualties vs 200+ Pakistani casualties',
        'Battle lasted approximately 6 hours'
      ]
    },
    {
      id: 2,
      title: 'LOC Kargil (2003)',
      year: '2003',
      basedOn: 'Kargil War, 1999',
      icon: '🎬',
      realStory: 'The Kargil War was fought between May-July 1999 when Pakistani forces infiltrated Indian territory in the Kargil district.',
      dramatization: 'The film depicts multiple real operations but condenses timelines and adds dramatic elements.',
      historicalContext: 'India successfully recaptured all infiltrated positions. The war resulted in international condemnation of Pakistan.',
      keyFacts: [
        '527 Indian soldiers martyred',
        'Operation Vijay successfully recaptured peaks',
        '4 Param Vir Chakras awarded',
        'First televised war in Indian history'
      ]
    },
    {
      id: 3,
      title: 'Lakshya (2004)',
      year: '2004',
      basedOn: 'Kargil War, 1999',
      icon: '🎬',
      realStory: 'Fictional story set against the backdrop of the Kargil War, focusing on a young officer\'s journey.',
      dramatization: 'While the war setting is real, the main character and his personal journey are fictional.',
      historicalContext: 'Accurately portrays the challenges of high-altitude warfare and the determination of Indian forces.',
      keyFacts: [
        'Filmed at actual Kargil locations',
        'Realistic portrayal of military training',
        'Depicts the harsh terrain and weather conditions',
        'Shows the psychological transformation of soldiers'
      ]
    },
    {
      id: 4,
      title: 'Uri: The Surgical Strike (2019)',
      year: '2019',
      basedOn: '2016 Uri Attack and Surgical Strikes',
      icon: '🎬',
      realStory: 'On September 18, 2016, militants attacked an Indian Army base in Uri, killing 19 soldiers. India conducted surgical strikes across LoC in response.',
      dramatization: 'The film dramatizes the planning and execution of the surgical strikes with added action sequences.',
      historicalContext: 'The surgical strikes marked a significant shift in India\'s military response strategy.',
      keyFacts: [
        'Surgical strikes conducted on September 29, 2016',
        'Multiple terrorist launch pads destroyed',
        'Operation conducted across Line of Control',
        'Demonstrated India\'s resolve against terrorism'
      ]
    },
    {
      id: 5,
      title: 'Shershaah (2021)',
      year: '2021',
      basedOn: 'Captain Vikram Batra, Kargil War',
      icon: '🎬',
      realStory: 'Biography of Captain Vikram Batra, PVC, who played a crucial role in recapturing Point 5140 and Point 4875 during Kargil War.',
      dramatization: 'While based on real events, the film adds romantic subplots and dramatizes certain battle sequences.',
      historicalContext: 'Captain Batra\'s famous words "Yeh Dil Maange More" became iconic. He was posthumously awarded Param Vir Chakra.',
      keyFacts: [
        'Martyred at age 24 on July 7, 1999',
        'Successfully recaptured Point 4875',
        'Known for his fearless leadership',
        'His twin brother joined the Army in his honor'
      ]
    }
  ];

  return (
    <div className="movies-page">
      <div className="container">
        <div className="page-header">
          <h1>Movies Inspired by Real Events</h1>
          <p>Understanding the difference between cinema and history</p>
        </div>

        <div className="disclaimer-box">
          <h3>⚠️ Important Note</h3>
          <p>
            Movies are artistic interpretations and not complete historical records. 
            While inspired by real events, they often include dramatization, fictional elements, 
            and creative liberties for entertainment purposes.
          </p>
        </div>

        <div className="movies-list">
          {movies.map(movie => (
            <div key={movie.id} className="movie-card card">
              <div className="movie-header">
                <div className="movie-icon">{movie.icon}</div>
                <div className="movie-title-section">
                  <h3>{movie.title}</h3>
                  <p className="movie-year">{movie.year}</p>
                  <p className="based-on">Based on: {movie.basedOn}</p>
                </div>
              </div>

              <div className="movie-content">
                <div className="content-section real">
                  <h4>✓ What's Real</h4>
                  <p>{movie.realStory}</p>
                </div>

                <div className="content-section dramatized">
                  <h4>🎬 What's Dramatized</h4>
                  <p>{movie.dramatization}</p>
                </div>

                <div className="content-section context">
                  <h4>📚 Historical Context</h4>
                  <p>{movie.historicalContext}</p>
                </div>

                <div className="key-facts">
                  <h4>Key Facts</h4>
                  <ul>
                    {movie.keyFacts.map((fact, index) => (
                      <li key={index}>{fact}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;