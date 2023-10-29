import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

function AdminProfile() {
  const ctx = useContext(UserContext)


  useEffect(() => {
    console.log(ctx)
  },[])

  return (
    <div className="container">
    <div className='my'>
      <img className='imgpro' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png "></img>
        <h2 className='admin'>Admin Profile</h2>
        <p><strong>Name:</strong> {ctx.name}</p>
        <p><strong>Email:</strong> {ctx.email}</p>
        <p><strong>Username:</strong> {ctx.username}</p>
        
      </div>
      
      
    </div>
  );
}

export default AdminProfile;
