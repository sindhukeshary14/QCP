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
<div className='row'>
<h2 className='brown-text'>SignUp</h2>
<div className='col col-md-6'>
<div className='form1'>
<form onSubmit={this.handleSubmit}>
<div className="form-group">
<input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name"
              className="form-control input-hover"
            />
</div>
<div className="form-group">
<input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="Email"
              className="form-control input-hover"
            />
</div>
<div className="form-group">
<input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="Username"
              className="form-control input-hover"
            />
</div>
<div className="form-group">
<input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Password"
              className="form-control input-hover"
            />
</div>
<div className="form-group">
<input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
              placeholder="Confirm Password"
              className="form-control input-hover"
            />
</div>
<div className="form-group">
<select
              name="role"
              value={this.state.role}
              onChange={this.handleInputChange}
              className="form-control input-hover"
>
<option value="user">User</option>
<option value="admin">Admin</option>
</select>
</div><br></br>
<button type="submit" className="sb-bttn">Sign Up</button>
</form>
<br></br>
<br></br>
<br></br>
<p>Already have an account? <Link to="/login">Login</Link></p> {/* Add this Link */}
</div>
</div>
<div className='col col-md-6'>
<img src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" />
</div>
</div>
    );
  }
}
 
export default Signup;






