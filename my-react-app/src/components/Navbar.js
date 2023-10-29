import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function Navbar({ showLogout }) {
  const location = useLocation();
  // Define an array of paths where the Logout option should not appear
  const excludePaths = ['/about', '/login', '/', '/signup'];
  return (
<nav className="navbar navbar-expand-lg  bg-light justify-content-end">
<div className="container">
<Link to="/" className="navbar-brand brown-text">Quiz App</Link>
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
            {excludePaths.includes(location.pathname) ? (
<>
<li className="nav-item">
<Link to="/about" className="nav-link brown-text">About</Link>
</li>
<li className="nav-item">
<Link to="/login" className="nav-link brown-text">Login</Link>
</li>
<li className="nav-item">
<Link to="/signup" className="nav-link brown-text">Sign Up</Link>
</li>
</>
            ) : null}
            {showLogout ? (
<li className="nav-item">
<Link to="/login" className="nav-link brown-text">Logout</Link>
</li>
            ) : null}
</ul>
</div>
</div>
</nav>
  );
}
export default Navbar;


