import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import Resid from './Resid'; 
import TabMenu from './TabMenu';
import Nava from './Navbr';


function App() {
  return(
    <Router>
      <Nava />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resid" element={<Resid />} />
          <Route path="/tabmenu" element={<TabMenu />} />
        </Routes>
      </main>
    </Router>
  );
  
}

export default App;
