import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      role: 'user', // Default to user role
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, username, password, confirmPassword, role } = this.state;

    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
    } else {
      // Prepare the user data
      const userData = {
        name,
        email,
        username,
        password,
        role,
      };

      // Send a POST request to your Flask API
      axios.post('http://localhost:5000/api/register', userData)
        .then(response => {
          alert("User registered successfully");
        })
        .catch(error => {
          alert("Registration failed: " + error.message);
        });
    }
  }

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="Username"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
              placeholder="Confirm Password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <select
              name="role"
              value={this.state.role}
              onChange={this.handleInputChange}
              className="form-control"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div><br></br>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form><br></br>
        <p>Already have an account? <Link to="/login">Login</Link></p> {/* Add this Link */}
      </div>
    );
  }
}

export default Signup;






