import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate ,useParams} from 'react-router-dom';

const UpdateForm = () => {

    const {id}=useParams();
const navigate=useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");


    const handleChange=(e)=>{
      e.preventDefault();
   
     try {
        const send= async()=>{

            const res=await axios.put(`http://localhost:5000/update/${id}`,{email,name});
            console.log(res);
            navigate("/");
     
           }
     
           send();
        
     } catch (error) {
        
        console.log(error);
     }


    }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
    
     <form  onSubmit={handleChange}>
     <h2>Update User</h2>
     <div className='mb-2'>
        <label href="">Name</label>
        <input  type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} className='form-control'/>
        
     </div>
     <div className='mb-2'>
        <label href="">Email</label>
        <input  type='email' placeholder=' Enter Email'  onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
        
     </div>
     <button className='btn btn-success'>Update</button>
     </form>
    </div>
  </div>
  )
}

export default UpdateForm;