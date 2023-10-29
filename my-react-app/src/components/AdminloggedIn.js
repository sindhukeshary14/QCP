
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
          <Link to="/admin-profile" className="navbar-brand brown-text">
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
              <Link to="/admin-profile" className="nav-link brown-text" style={{ fontSize: '25px' ,}}>
                     Welcome, {ctx.username}!
              </Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="admin-head brown-text">
      <h2>Welcome, Admin!</h2>
      </div>
      <div className="admin-dashboard">
      

        <div className="admin-1">
          <h3 className="admin-title">Admin Dashboard</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to="/create-quiz" className="cb-bttn">
                Create Quiz
              </Link>
            </li>
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminLoggedIn;




