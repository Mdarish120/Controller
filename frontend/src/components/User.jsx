import React,{useEffect, useState} from 'react';
import axios from "axios";
import { Link ,useNavigate} from 'react-router-dom';





const User = () => {

    const navigate=useNavigate();
const [user,setUser]=useState([]);

    useEffect(()=>{

    try {
        const fetch= async()=>{
            const res=await axios.get("http://localhost:5000/");
            setUser(res.data);
            console.log(res);
           };


           fetch();
        
    } catch (error) {

        console.log(error);
        
    }
        

       
  
  },[]);


const handleDelete= async (id)=>{
console.log("delte")
  
        try {
            const res=await axios.delete(`http://localhost:5000/delete/${id}`);
            console.log(res);
            fetchData();

        } catch (error) {
             
            console.log(error);
        }
       

   

}

const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/');
      setUser(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

 //s console.log(user);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
     <Link  to="/create" className="btn btn-success ">Add +</Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody> 
     {
        user.map((data,index)=>(
            <tr  key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td > <Link to={`/update/${data.id}`} className='btn btn-primary '  >Update</Link>
                      <button className='btn btn-danger ms-2' onClick={ (e)=>handleDelete(data.id)}>Delete</button>
                      
                      </td>
            </tr>
        ))
     }

        </tbody>
      </table>
    </div>
  </div>
  
  )
}

export default User