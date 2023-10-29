import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserContext from '../context/user';
 
function Login() {
  const navigate = useNavigate(); 
  const ctx=useContext(UserContext)
 
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
    ctx.setUsername(username)
    ctx.setRole(role);
    console.log(ctx.username)
 
    // Send a POST request to your Flask login API
    axios.post('http://localhost:5000/api/login', { username, password, role })
      .then(response => {
        // alert("Login successful");
 
        // Redirect to the appropriate dashboard based on the user's role
        if (role === 'admin') {
          navigate('/admin-logged-in');
        } else if (role === 'user') {
          navigate('/user-logged-in');
        }
      })
      .catch(error => {
        alert("Login failed: " + error.message);
      });
  }
 
  return (
<div className='login-body'>
<div className='row'>
<h2 className="brown-text">Login</h2>
<div className='col col-md-6'>
<div className='form1'>
<form onSubmit={handleSubmit}>
<div className="form-group">
<input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username or Email"
          className="form-control input-hover"
        />
</div>
<div className="form-group">
<input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="form-control input-hover"
        />
</div>
<div className="form-group">
<select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          className="form-control input-hover"
>
<option value="user">User</option>
<option value="admin">Admin</option>
</select>
</div>
<button type="submit" className="sb-bttn">Login</button>
</form>
<br></br>
<br></br>
<br></br>
<p>Don't have an account? <Link to="/signup">Signup</Link></p>
</div>
</div>
<div className='col col-md-6'>
<img src="https://t3.ftcdn.net/jpg/05/14/83/12/360_F_514831273_DcgvCZTlBw2Bgd7umMpNsJJn4qxT7g9s.jpg" />
</div>
</div>
</div>
      );
    }
 
 
export default Login;
