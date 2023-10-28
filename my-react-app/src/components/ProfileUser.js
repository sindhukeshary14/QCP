import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/user';

function ProfileUser() {
  const ctn = useContext(UserContext)


  useEffect(() => {
    console.log(ctn)
  },[])

  return (
    <div className="container">
      <h2>User Profile</h2>
      <div>
        <p><strong>Name:</strong> {ctn.name}</p>
        <p><strong>Email:</strong> {ctn.email}</p>
        <p><strong>Username:</strong> {ctn.username}</p>
      </div>
    </div>
  );
}

export default ProfileUser;