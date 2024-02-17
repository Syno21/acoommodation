import React, { useState } from 'react';
import { firestore, storage } from './firebase-config';
import './ResidenceForm.css';

const ResidenceForm = () => {
  const [residenceName, setResidenceName] = useState('');
  const [mainPicture, setMainPicture] = useState(null);
  const [mainPictureName, setMainPictureName] = useState('');
  const [mainPictureDescription, setMainPictureDescription] = useState('');
  const [featurePictures, setFeaturePictures] = useState({});
  const [error, setError] = useState('');

  const handleFileChange = (e, setPicture, setName) => {
    const file = e.target.files[0];
    setPicture(file);
    setName(file.name);
  };

  const handleDescriptionChange = (e) => {
    setMainPictureDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!residenceName || !mainPicture) {
      setError('Please fill out all required fields');
      return;
    }

    try {
      setError('');

      const uploadTasks = [];

      // Upload main picture to Firebase Storage with custom name
      const mainUploadTask = storage.ref(`Residence/${mainPictureName}`).put(mainPicture);
      uploadTasks.push(mainUploadTask);

      // Upload feature pictures to Firebase Storage with default names
      for (const feature in featurePictures) {
        const picture = featurePictures[feature];
        if (picture) {
          const featureUploadTask = storage.ref(`Residence/${picture.name}`).put(picture);
          uploadTasks.push(featureUploadTask);
        }
      }

      await Promise.all(uploadTasks);

      // Get main picture URL
      const mainPictureUrl = await storage.ref('Residence').child(mainPictureName).getDownloadURL();

      // Get feature picture URLs
      const features = {};
      for (const feature in featurePictures) {
        const picture = featurePictures[feature];
        if (picture) {
          const url = await storage.ref('Residence').child(picture.name).getDownloadURL();
          features[feature] = url;
        }
      }

      // Add data to Firestore
      await firestore.collection('residences').add({
        residenceName,
        mainPictureUrl,
        mainPictureDescription,
        features,
      });

      // Clear form fields
      setResidenceName('');
      setMainPicture(null);
      setMainPictureName('');
      setMainPictureDescription('');
      setFeaturePictures({});

    } catch (error) {
      console.error("Error uploading pictures or updating Firestore:", error);
      setError('Error uploading pictures or updating Firestore');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <label>Residence Name:</label>
      <input type="text" value={residenceName} onChange={(e) => setResidenceName(e.target.value)} />

      <label>Main Picture:</label>
      <input type="file" onChange={(e) => handleFileChange(e, setMainPicture, setMainPictureName)} />
      <input type="text" placeholder="Description" value={mainPictureDescription} onChange={handleDescriptionChange} />

      <label>Features:</label>

      {/* File inputs for feature pictures */}
      {['kitchen', 'bathrooms', 'tvRoom', 'studyRooms', 'lounges'].map((feature, index) => (
        <div key={index}>
          <label>{feature.charAt(0).toUpperCase() + feature.slice(1)} Picture:</label>
          <input type="file" onChange={(e) => handleFileChange(e, file => setFeaturePictures(prevState => ({ ...prevState, [feature]: file })), () => {})} />
        </div>
      ))}

      <button type="submit">Add Residence</button>
    </form>
  );
};

export default ResidenceForm;
