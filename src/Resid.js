// Resid.js
import React from 'react';
import './Resid.css'; // Import the new CSS file

const residencesData = [
  {
    name: 'Modern Oasis',
    description: 'A sleek and modern residence with stunning views.',
    imageUrl: 'res1.jpg',
  },
  {
    name: 'Cozy Cottage',
    description: 'Charming cottage surrounded by nature for a tranquil living experience.',
    imageUrl: 'res1.jpg',
  },
  {
    name: 'Urban Loft',
    description: 'Spacious loft in the heart of the city with contemporary design.',
    imageUrl: 'res1.jpg',
  },
  // Add more residences as needed
];

const Resid = () => {
    return (
      <div className="resid-container">
        <h1>Welcome to Resid</h1>
        <div className="residences-grid">
          {residencesData.map((residence, index) => (
            <div key={index} className="residence-card">
              <img src={require(`./${residence.imageUrl}`).default} alt={residence.name} />
              <h2>{residence.name}</h2>
              <p>{residence.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Resid;
