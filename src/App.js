import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import the Home component
import Resid from './Resid'; // Import the Resid component
import TabMenu from './TabMenu'; // Import the TabMenu component

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
          <Route path="/" element={<Home />} />
          <Route path="/resid" element={<Resid />} />
          <Route path="/tabmenu" element={<TabMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
