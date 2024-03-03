import React, { useState } from "react";
import { NavLink, Link, Route, useLocation} from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbr.css";

const Navbr = () => {

  const location = useLocation();

  const hideHamburgerMenu = location.pathname === '/';

    const [showNav, setShowNav] = useState(false)

    const toggleNavItems = () => {
        setShowNav(!showNav)
    }
    return(
      
      <nav className="navbar">
        {!hideHamburgerMenu && (
      <div className="container">
        <div className="logo">
          
        </div>
        {!hideHamburgerMenu && (
        <div className="menu-icon" onClick={toggleNavItems}>
            <IoMenu />
        </div>
        )}
        <div className={`nav-elements  ${showNav && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={toggleNavItems}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/Search" onClick={toggleNavItems}>Search</NavLink>
            </li>
            <li>
              <NavLink to="/Resid" onClick={toggleNavItems}>Residences</NavLink>
            </li>
            
            <li>
              <NavLink to="/ResidenceForm" onClick={toggleNavItems}>Admin</NavLink>
            </li>
          </ul>
        </div>
      </div>
      )}
    </nav>
    );
}

export default Navbr;