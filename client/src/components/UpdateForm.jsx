import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate ,useParams} from 'react-router-dom';

const UpdateForm = () => {

    const {id}=useParams();
const navigate=useNavigate();
    const [price,setPrice]=useState();
    const [product,setProduct]=useState("");
    const [category,setCategory]=useState("");


    const handleChange=(e)=>{
      e.preventDefault();
   
     try {
        const send= async()=>{

            const res=await axios.put(`http://localhost:5001/update/${id}`,{price,product,category});
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
        <label href="">Price</label>
        <input  type='number' placeholder='Enter Price' onChange={(e)=>setPrice(e.target.value)} className='form-control'/>
        
     </div>
     <div className='mb-2'>
        <label href="">Product</label>
        <input  type='text' placeholder=' Enter Product'  onChange={(e)=>setProduct(e.target.value)} className='form-control'/>
        
     </div>
     <div className='mb-2'>
        <label href="">Category</label>
        <input  type='text' placeholder=' Enter Category'  onChange={(e)=>setCategory(e.target.value)} className='form-control'/>
        
     </div>
     <button className='btn btn-success'>Update</button>
     </form>
    </div>
  </div>
  )
}

export default UpdateForm;