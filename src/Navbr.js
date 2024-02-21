import React, { useState } from "react";
import { NavLink, Link, Route, Routes, Outlet, useParams} from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbr.css";

const Navbr = () => {

    const [showNav, setShowNav] = useState(false)

    const toggleNavItems = () => {
        setShowNav(!showNav)
    }
    return(
        <nav className="navbar">
      <div className="container">
        <div className="logo">
          
        </div>
        <div className="menu-icon" onClick={toggleNavItems}>
            <IoMenu />
        </div>
        <div className={`nav-elements  ${showNav && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={toggleNavItems}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/Resid" onClick={toggleNavItems}>Residences</NavLink>
            </li>
            <li>
              <NavLink to="/TabMenu" onClick={toggleNavItems}></NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/ResidenceForm">Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}

export default Navbr;