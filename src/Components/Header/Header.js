// // src/components/Header.js
// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <input type="text" placeholder="Search" className="search-input" />
//       <div className="header-icons">
//         <i className="icon">🔔</i>
//         <i className="icon">💌</i>
//         <i className="icon">👤</i>
//       </div>
//     </header>
//   );
// };

// export default Header;

// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <span className="menu-icon" onClick={toggleSidebar}>☰</span>
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      <div className="header-right">
        <span className="icon">🔔</span>
        <span className="icon">✉️</span>
        <span className="icon">👤</span>
      </div>
      
      
    </header>
  );
};

export default Header;
