import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/user';

function AdminProfile() {
  const ctx = useContext(UserContext)


  useEffect(() => {
    console.log(ctx)
  },[])

  return (
    <div className="container">
      <h2>Admin Profile</h2>
      <div>
        <p><strong>Name:</strong> {ctx.name}</p>
        <p><strong>Email:</strong> {ctx.email}</p>
        <p><strong>Username:</strong> {ctx.username}</p>
        {/* Add more admin details here as needed */}
      </div>
    </div>
  );
}

export default AdminProfile;
