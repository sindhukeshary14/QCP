import React, { useState } from 'react';
import axios from 'axios';


function Login() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'user', // Default to user role
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, role } = formData;

    // Send a POST request to your Flask login API
    axios.post('http://localhost:5000/api/login', { username, password })
      .then(response => {
        alert("Login successful");
        
        // Optionally, you can navigate to the user's dashboard or perform other actions
      })
      .catch(error => {
        alert("Login failed: " + error.message);
      });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Username or Email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
