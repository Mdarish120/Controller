import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Home = () => {
  const [message, setmessage] = useState('');
  const [data, setData] = useState(null);



  useEffect(()=>{
    const fetchData = async () => {
        try {
          const res = await axios.get('http://localhost:3000/');
          console.log('Response from server:', res); // Log the entire response
          setData(res.data); // Set the data in state
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
  },[]);

const navigate=useNavigate();

 let count=0;




 

console.log(data);
  const handleSubmit =  (e) => {
    e.preventDefault();
count++;
    console.log(count);
    // Add authentication logic here (e.g., sending a request to a backend API)
    console.log(`username`,message);

    const data={
        message:message,
        username:localStorage.getItem("username")
    }
    
  

const send = async () => {
    try {
      const response = await axios.post("http://localhost:3000/loginData", data);
      console.log("Response from server:", response.data);
         setmessage("");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  
  // Call the send function to initiate the POST request
  send();

     
  };

  return (
    <div className="login-container"> {/* Apply a CSS class to the container */}
      <h2>Chat</h2>
      <form onSubmit={handleSubmit}>
    
          <label htmlFor="message">Message:</label>
          <input
            type="name"
            id="message"
            name="message"
            value={message}
            onChange={(e)=>setmessage(e.target.value)}
            required
          />
  
       
        <div>
          <button type="submit">Send</button>
        </div>
      </form>

      <ul>
        { data=== null?"Loading": data.map((item, index) => (
          <li key={index}>{`${item.username}  ${item.message}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
