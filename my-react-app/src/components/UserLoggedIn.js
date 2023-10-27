// import React from 'react';
// import { Link } from 'react-router-dom';

// function UserLoggedIn() {
//   // Sample test data, you can fetch this data from an API or a database
//   const tests = [
//     { id: 1, title: "Test 1", description: "Description of Test 1" },
//     { id: 2, title: "Test 2", description: "Description of Test 2" },
//     // Add more test data as needed
//   ];

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//         <Link to="/user-profile" className="navbar-brand">Profile</Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link to="/user-profile" className="nav-link">Welcome, User!</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="container">
//         <h3>Available Tests</h3>
//         <div className="row">
//           {tests.map((test) => (
//             <div key={test.id} className="col-md-4">
//               <div className="card mb-4">
//                 <div className="card-body">
//                   <h5 className="card-title">{test.title}</h5>
//                   <p className="card-text">{test.description}</p>
//                   <Link to={`/take-test/${test.id}`}>
//                     <button className="btn btn-primary">Take Test</button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserLoggedIn;

import React from 'react';
import { Link } from 'react-router-dom';
function UserLoggedIn() {
  const tests = [
    { id: 1, title: "Test 1", description: "Description of Test 1" },
    { id: 2, title: "Test 2", description: "Description of Test 2" },
    // Add more test data as needed
  ];
  return (
    <div>
      {/* ... (existing code) */}
      <div className="container">
        <h3>Available Tests</h3>
        <div className="row">
          {tests.map((test) => (
            <div key={test.id} className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{test.title}</h5>
                  <p className="card-text">{test.description}</p>
                  <Link to={`/QuizForm/${test.id}`} className="btn btn-primary">
                    Take Test</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default UserLoggedIn;