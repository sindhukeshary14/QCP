// import React, { useState } from 'react';
// import axios from 'axios';


// function Login() {

//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',
//     role: 'user', // Default to user role
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password, role } = formData;

//     // Send a POST request to your Flask login API
//     axios.post('http://localhost:5000/api/login', { username, password, role})
//       .then(response => {
//         alert("Login successful");
        
//         // Optionally, you can navigate to the user's dashboard or perform other actions
//       })
//       .catch(error => {
//         alert("Login failed: " + error.message);
//       });
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleInputChange}
//             placeholder="Username"
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             placeholder="Password"
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <select
//             name="role"
//             value={formData.role}
//             onChange={handleInputChange}
//             className="form-control"
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
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

  // ... rest of the component remains the same
  return (
    <div className='row'>
    <h2>Login</h2>
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
          className="form-control "
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="form-control "
        />
      </div>
      <div className="form-group">
        <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          className="form-control "
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
    </div>
    <div className='col col-md-6'>
    
      <img src="https://t3.ftcdn.net/jpg/05/14/83/12/360_F_514831273_DcgvCZTlBw2Bgd7umMpNsJJn4qxT7g9s.jpg" />
    
    </div>
  </div>
      );
    }


export default Login;
