import React, { useState } from 'react';
import "./style.css";

import { useNavigate } from "react-router-dom";


const Home = () => {

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
      <h2>Welcome to the Home Page</h2>
      <button> <a href="/contact">Conctact</a></button>
       
    </div>
  );
}

export default Home