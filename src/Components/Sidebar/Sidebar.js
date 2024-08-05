// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">🍔</div>
      <nav>
        <ul>
          <li>🏠 Dashboard</li>
          <li>📋 Orders</li>
          <li>📊 Analytics</li>
          <li>🛠 Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
