import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import the Home component
import Resid from './Resid'; // Import the Resid component
import TabMenu from './TabMenu'; // Import the TabMenu component
import ResidenceForm from './ResidenceForm';


function App() {
  return(
    <Router>
      <Nava />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resid" element={<Resid />} />
          <Route path="/tabmenu" element={<TabMenu />} />
          <Route path="/residenceForm" element={<ResidenceForm />} />
        </Routes>
      </main>
    </Router>
  );
  
}

export default App;
