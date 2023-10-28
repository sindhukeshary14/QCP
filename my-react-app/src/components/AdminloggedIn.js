import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/user";
import axios from 'axios';

function AdminLoggedIn() {
  const ctx = useContext(UserContext);
  const fetchUserDetails = async () => {
    axios
      .get(`/api/admin-profile?username=${ctx.username}&role=${ctx.role}`)
      .then((response) => {
        console.log(response.data); // Handle the response data as needed
        ctx.setEmail(response.data.email);
        ctx.setName(response.data.name);
      })
      .catch((error) => {
        console.error(error); // Handle any errors that may occur
      });
  };

  useEffect(() => {
    fetchUserDetails();
  },[])
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/admin-profile" className="navbar-brand">
            Profile
          </Link>
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
                <Link to="/admin-profile" className="nav-link">
                  Welcome, {ctx.username}!
                </Link>
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


// import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import UserContext from "../context/user";
// import axios from 'axios';


// function AdminLoggedIn() {
//   const ctn = useContext(UserContext);
//   const fetchUserDetails = async () => {
//     axios
//       .get(`/api/user-profile?username=${ctn.username}&role=${ctn.role}`)
//       .then((response) => {
//         console.log(response.data); // Handle the response data as needed
//         ctn.setEmail(response.data.email);
//         ctn.setName(response.data.name);
//       })
//       .catch((error) => {
//         console.error(error); // Handle any errors that may occur
//       });
//   };

//   useEffect(() => {
//     fetchUserDetails();
//   },[])
  
//   const tests = [
//     { id: 1, title: "test1", description: "Description of Test 1" },
//     { id: 2, title: "test2", description: "Description of Test 2" },
//     { id: 3, title: "test3", description: "Description of Test 3" },
//     { id: 4, title: "test4", description: "Description of Test 4" },
//     { id: 5, title: "test5", description: "Description of Test 5" },
//     { id: 6, title: "test6", description: "Description of Test 6" },
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
//                 <Link to="/user-profile" className="nav-link">Welcome, {ctn.username}!</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="container">
//         <h3>Create Tests</h3>
//         <div className="row">
//           {tests.map((test) => (
//             <div key={test.id} className="col-md-4">
//               <div className="card mb-4">
//                 <div className="card-body">
//                   <h5 className="card-title">{test.title}</h5>
//                   <p className="card-text">{test.description}</p>
//                   <Link to={`/QuizForm/${test.id}?testName=${test.title}`} className="btn btn-primary">
//                     Create Test</Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default AdminLoggedIn;


