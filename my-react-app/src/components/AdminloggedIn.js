// // AdminLoggedIn.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function AdminLoggedIn() {
//   return (
//     <div>
//       <h2>Welcome, Admin!</h2>
//       <div>
//         <h3>Admin Dashboard</h3>
//         <ul>
//           <li>
//             <Link to="/create-quiz">Create Quiz</Link> 
//           </li>
//           <li>
//             <Link to="/view-quiz">View Quizzes</Link> {/* Link to a page where you view quizzes */}
//           </li>
//           {/* Add more admin options here as needed */}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default AdminLoggedIn;

// import React from 'react';
// import { Link } from 'react-router-dom';

// function AdminLoggedIn() {
//   return (
//     <div>
//       <h2>Welcome, Admin!</h2>
//       <div>
//         <h3>Admin Dashboard</h3>
//         <ul>
//           <li>
//             <Link to="/create-quiz">Create Quiz</Link> 
//           </li>
//           <li>
//             <Link to="/view-quiz">View Quizzes</Link>
//           </li>
//           {/* Add a link to the Admin Profile page */}
//           <li>
//             <Link to="/admin-profile">Admin Profile</Link>
//           </li>
//           {/* Add more admin options here as needed */}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default AdminLoggedIn;

import React from 'react';
import { Link } from 'react-router-dom';

function AdminLoggedIn() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/user-profile" className="navbar-brand">Profile</Link>
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
                <Link to="/user-profile" className="nav-link">Welcome, User!</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2>Welcome, Admin!</h2>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Admin Dashboard</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to="/create-quiz" className="btn btn-primary">
                Create Quiz
              </Link>
            </li>
            <li className="list-group-item">
            <Link to="/view-quiz" className="btn btn-secondary">
                View Quizzes
              </Link>
            </li>
            {/* Add more admin options here as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminLoggedIn;
