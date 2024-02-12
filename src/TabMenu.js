// TabMenu.js
import React from 'react';
import { Link, Route, Routes, Outlet, useParams } from 'react-router-dom';

const Tab1 = () => {
  return <div>Content for Tab 1</div>;
};

const Tab2 = () => {
  return <div>Content for Tab 2</div>;
};

const Tab3 = () => {
  return <div>Content for Tab 3</div>;
};

const TabMenu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="tab1">Tab 1</Link>
          </li>
          <li>
            <Link to="tab2">Tab 2</Link>
          </li>
          <li>
            <Link to="tab3">Tab 3</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="tab1" element={<Tab1 />} />
        <Route path="tab2" element={<Tab2 />} />
        <Route path="tab3" element={<Tab3 />} />
        <Route path="/" element={<Outlet />} />
      </Routes>
    </div>
  );
};

export default TabMenu;
