// Resid.js
import React, { useState , useEffect  } from 'react';
import './Resid.css'; // Import the new CSS file

// Import your images
import res1Image from './res1.jpg';
import res2Image from './res2.jpg';
import res3Image from './res3.jpg';
import res4Image from './res4.jpg';
import res5Image from './res5.jpg';


const residencesData = [
  {
    name: 'Grand Logde',
    description: 'A sleek and modern residence with stunning views.',
    imageUrl: res1Image,
  },
  {
    name: 'Poynton House',
    description: 'Charming cottage surrounded by nature for a tranquil living experience.',
    imageUrl: res2Image,
  },
  {
    name: 'Lonsdale Hotel',
    description: 'Spacious loft in the heart of the city with contemporary design.',
    imageUrl: res3Image,
  },
  {
    name: '120 Clarance',
    description: 'Charming cottage surrounded by nature for a tranquil living experience.',
    imageUrl: res4Image,
  },
  {
    name: 'Floradine',
    description: 'Spacious loft in the heart of the city with contemporary design.',
    imageUrl: res5Image,
  },
 
];

const Resid = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % residencesData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + residencesData.length) % residencesData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="resid-container">
      <h1>Welcome to Resid</h1>
      <div className="residences-slider">
        {residencesData.map((residence, index) => (
          <div
            key={index}
            className={`residence-card ${index === activeIndex ? 'active' : ''}`}
          >
            <img
              src={residence.imageUrl}
              alt={residence.name}
            />
            <div className="residence-card-content">
              <h2>{residence.name}</h2>
              <p>{residence.description}</p>
            </div>
          </div>
        ))}
        <div className="slider-buttons-container">
          <button className="slider-button prev" onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>
          <button className="slider-button next" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resid;