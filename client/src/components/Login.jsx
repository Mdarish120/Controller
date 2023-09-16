import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setusername] = useState('');

const navigate=useNavigate();

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., sending a request to a backend API)
    console.log(`username`,username);
      localStorage.setItem("username",username);
      navigate("/");
     
  };

  return (
    <div className="login-container"> {/* Apply a CSS class to the container */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
    
          <label htmlFor="username">Username:</label>
          <input
            type="name"
            id="username"
            name="username"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            required
          />
  
       
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
