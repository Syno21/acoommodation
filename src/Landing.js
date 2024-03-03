import './Landing.css'
import React, { useState } from 'react';
import { NavLink, Link, Route, Routes, Outlet, useParams} from "react-router-dom";
import './Navbr.css'



function App() {
  return(
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='btn'>
            <h1>
            <NavLink to=" " >Time tables</NavLink>
            </h1>
        </div>
        <br></br>
        <div className='btn'>
            <h1>
            <NavLink to="/Search" >Residences</NavLink>
            </h1>
        </div>
    </div>
  );
  
}

export default App;