// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="Search" className="search-input" />
      <div className="header-icons">
        <i className="icon">🔔</i>
        <i className="icon">💌</i>
        <i className="icon">👤</i>
      </div>
    </header>
  );
};

export default Header;
