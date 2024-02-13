// RouterPage.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import App from './App'; // Create Home.js for the home page
import Resid from './Resid'; 
import TabMenu from './TabMenu';

const RouterPage = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">App</Link>
            </li>
            <li>
              <Link to="/resid">Resid</Link>
            </li>
            <li>
              <Link to="/tabmenu">TabMenu</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/app" exact component={App} />
          <Route path="/resid" component={Resid} />
          <Route path="/tabmenu" component={TabMenu} />
          </Routes>
      </div>
    </Router>
  );
};

export default RouterPage;
