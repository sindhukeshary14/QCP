import React, { useState, useEffect } from 'react';

function ProfileAdmin() {
  // Sample admin data (you can replace this with actual admin data)
  const [adminData, setAdminData] = useState({
    name: 'Admin Name',
    email: 'admin@example.com',
    username: 'admin123',
    // Add more admin details as needed
  });

  // You can use the useEffect hook to fetch admin data from an API if needed
  // useEffect(() => {
  //   fetchAdminDataFromAPI()
  //     .then((data) => {
  //       setAdminData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching admin data:', error);
  //     });
  // }, []);

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

export default ProfileAdmin;