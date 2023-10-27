// // Navbar.js
// import React from 'react';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
//       <div className="container">
//         <a className="navbar-brand" href="#">Quiz App</a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="/about">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/login">Login</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/signup">Sign Up</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
      <div className="container">
        <Link to="/" className="navbar-brand">Quiz App</Link> {/* Use Link component */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link> {/* Use Link component */}
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link> {/* Use Link component */}
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">Sign Up</Link> {/* Use Link component */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
