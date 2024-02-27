import { useState } from 'react';
import { storage } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from './firebase-config';
import './ResidenceForm.css';

const ResidenceForm = () => {
  const [residenceName, setResidenceName] = useState('');
  const [residenceDescription, setResidenceDescription] = useState('');
  const [mainPicture, setMainPicture] = useState(null);
  const [mainPictureName, setMainPictureName] = useState('');
  const [mainPictureDescription, setMainPictureDescription] = useState('');
  const [additionalPictures, setAdditionalPictures] = useState({});
  const [error, setError] = useState('');

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    setter(file);
    // Set file name
    if (setter === setMainPicture) setMainPictureName(file.name);
  };

  const handleAdditionalFileChange = (e, roomName) => {
    const files = e.target.files;
    setAdditionalPictures(prevState => ({
      ...prevState,
      [roomName]: files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!residenceName || !mainPicture || !residenceDescription) {
      setError('Please fill out all required fields');
      return;
    }

    try {
      setError('');

      // Upload main picture to Firebase Storage
      const mainPictureRef = storage.ref(`Residence/${mainPictureName}`);
      await mainPictureRef.put(mainPicture);

      // Get main picture URL
      const mainPictureUrl = await mainPictureRef.getDownloadURL();

      // Upload additional pictures to Firebase Storage
      const additionalPictureUrls = {};
      for (const room in additionalPictures) {
        const pictures = additionalPictures[room];
        if (pictures) {
          additionalPictureUrls[room] = [];
          for (const picture of pictures) {
            const roomPictureRef = storage.ref(`Residence/${picture.name}`);
            await roomPictureRef.put(picture);
            const url = await roomPictureRef.getDownloadURL();
            additionalPictureUrls[room].push(url);
          }
        }
      }

      // Add data to Firestore
      await addDoc(collection(firestore, 'residences'), {
        residenceName,
        residenceDescription,
        mainPictureUrl,
        mainPictureDescription,
        additionalPictureUrls,
      });

      // Clear form fields
      setResidenceName('');
      setResidenceDescription('');
      setMainPicture(null);
      setMainPictureName('');
      setMainPictureDescription('');
      setAdditionalPictures({});

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

      <label>Residence Description:</label>
      <textarea value={residenceDescription} onChange={(e) => setResidenceDescription(e.target.value)} />

      <label>Main Picture:</label>
      <input type="file" onChange={(e) => handleFileChange(e, setMainPicture)} />
      <input type="text" placeholder="Description" value={mainPictureDescription} onChange={(e) => setMainPictureDescription(e.target.value)} />

      {/* Additional picture inputs */}
      {/* For simplicity, you can repeat this block for each additional picture */}
      {/* Replace 'Kitchen' with other room names as needed */}
      <label>Kitchen Pictures:</label>
      <input type="file" onChange={(e) => handleAdditionalFileChange(e, 'kitchen')} multiple />

      <label>Bathroom Pictures:</label>
      <input type="file" onChange={(e) => handleAdditionalFileChange(e, 'bathroom')} multiple />

      <label>TV Room Pictures:</label>
      <input type="file" onChange={(e) => handleAdditionalFileChange(e, 'tvRoom')} multiple />

      <label>Study Room Pictures:</label>
      <input type="file" onChange={(e) => handleAdditionalFileChange(e, 'studyRoom')} multiple />

      <button type="submit">Add Residence</button>
    </form>
  );
};

export default ResidenceForm;
