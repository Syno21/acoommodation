import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import the Home component
import Resid from './Resid'; // Import the Resid component
import ResidenceForm from './ResidenceForm';
import Landing from './Landing';
import Nava from './Navbr'


function App() {
  return(
    <Router>
      <Nava />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Search" element={<Home />} />
          <Route path="/resid" element={<Resid />} />
          <Route path="/residenceForm" element={<ResidenceForm />} />
          
        </Routes>
      </main>
    </Router>
  );
  
}

export default App;
