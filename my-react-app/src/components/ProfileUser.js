import React, { useState, useEffect } from 'react';

function ProfileUser() {
  // Sample user data (you can replace this with actual user data)
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    username: 'johndoe123',
    // Add more user details as needed
  });

  // You can use the useEffect hook to fetch user data from an API if needed
  // useEffect(() => {
  //   fetchUserDataFromAPI()
  //     .then((data) => {
  //       setUserData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user data:', error);
  //     });
  // }, []);

  return (
    <div className="container">
      <h2>User Profile</h2>
      <div>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Username:</strong> {userData.username}</p>
        {/* Add more user details here as needed */}
      </div>
    </div>
  );
}

export default ProfileUser;