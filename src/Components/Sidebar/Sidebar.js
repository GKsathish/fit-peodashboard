// // src/components/Sidebar.js
// import React from 'react';
// import './Sidebar.css';

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <div className="logo">🍔</div>
//       <nav>
//         <ul>
//           <li>🏠 Dashboard</li>
//           <li>📋 Orders</li>
//           <li>📊 Analytics</li>
//           <li>🛠 Settings</li>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isVisible }) => {
  return (
    // <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
          <div className="sidebar">

      <div className="logo">Logo</div>
      <nav>
        <ul>
        <li>🏠 Dashboard</li>
          <li>📋 Orders</li>
          <li>📊 Analytics</li>
          <li>🛠 Settings</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
