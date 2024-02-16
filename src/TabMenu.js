// TabMenu.js
import React from 'react';
import { Link, Route, Routes, Outlet, useParams } from 'react-router-dom';
import {firestore} from './firebase-config';

const TabMenu = () => {
 
    const collectionRef = firestore.collection('Res'); // Replace 'your_collection_name' with the actual collection name

    collectionRef.add({
      name: 'John Doe',
      age: 25,
      city: 'New York'
    })
    .then(docRef => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(error => {
      console.error('Error adding document: ', error);
    });
  

  return (
    <div>
      <h1>Your React Component</h1>
      <button onClick={TabMenu}>Add Document</button>
    </div>
  );
};

export default TabMenu;
