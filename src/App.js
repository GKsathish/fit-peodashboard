// // src/App.js
// import React from 'react';
// import './App.css';
// import Header from './Components/Header/Header';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Dashboard from './Components/Dashboard/Dashboard';

// function App() {
//   return (
//     <div className="app">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <Dashboard />
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  // const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarVisible(!isSidebarVisible);
  // };

  return (
    <div className="app">
      {/* <Sidebar isVisible={isSidebarVisible} /> */}
      <Sidebar/>
      <div className="main-content">
        {/* <Header toggleSidebar={toggleSidebar} /> */}
        <Header/>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
