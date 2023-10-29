import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

function ProfileUser() {
  const ctn = useContext(UserContext)


  useEffect(() => {
    console.log(ctn)
  },[])

  return (
    <div className="container">
    <div className='my'>
      <img className='imgpro' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png "></img>
        <h2 className='admin'>User Profile</h2>
        <p><strong>Name:</strong> {ctn.name}</p>
        <p><strong>Email:</strong> {ctn.email}</p>
        <p><strong>Username:</strong> {ctn.username}</p>
        
       
      </div>
      
      
    </div>
  );
}

export default ProfileUser;