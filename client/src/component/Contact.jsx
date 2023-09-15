import React, { useState } from 'react';
import axios from "axios";
import "./style.css";

import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState('');
  const [email,setEmail]=useState("");

const navigate=useNavigate();

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., sending a request to a backend API)
  const data={
    name:name,
    email:email
  }
    
const send = async () => {
  try {
    const response = await axios.post("http://localhost:3000/info/contact", data);
    console.log("Response from server:", response.data);
     navigate("/success");
  } catch (error) {
    console.error("Error sending data:", error);
  }
};

// Call the send function to initiate the POST request
send();

  
     
  };

  return (
    <div className="login-container"> {/* Apply a CSS class to the container */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
    
          <label htmlFor="username">Username:</label>
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

<label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
       
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
