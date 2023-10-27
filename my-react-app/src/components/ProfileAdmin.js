// import React, { useState, useEffect } from 'react';

// function AdminProfile() {
//   // Sample admin data (you can replace this with actual admin data)
//   const [adminData, setAdminData] = useState({
//     name: 'Admin Name',
//     email: 'admin@example.com',
//     username: 'admin123',
//     // Add more admin details as needed
//   });

//   return (
//     <div className="container">
//       <h2>Admin Profile</h2>
//       <div>
//         <p><strong>Name:</strong> {adminData.name}</p>
//         <p><strong>Email:</strong> {adminData.email}</p>
//         <p><strong>Username:</strong> {adminData.username}</p>
//         {/* Add more admin details here as needed */}
//       </div>
//     </div>
//   );
// }

// export default AdminProfile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminProfile() {
  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
    username: '',
    // Add more admin details as needed
  });

  useEffect(() => {
    // Fetch admin data based on login credentials from your backend
    const loginData = {  // Replace with actual login data
      username: 'admin123',  // Provide the correct username
      password: 'adminPassword',  // Provide the correct password
      role: 'admin',  // Assuming you have a 'role' field to identify admins
    };

    // Make an API request to fetch the admin data based on login credentials
    axios.post('http://localhost:5000/api/admin-profile', loginData)
      .then(response => {
        setAdminData(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch admin data: " + error.message);
      });
  }, []);

  return (
    <div className="container">
      <h2>Admin Profile</h2>
      <div>
        <p><strong>Name:</strong> {adminData.name}</p>
        <p><strong>Email:</strong> {adminData.email}</p>
        <p><strong>Username:</strong> {adminData.username}</p>
        {/* Add more admin details here as needed */}
      </div>
    </div>
  );
}

export default AdminProfile;
