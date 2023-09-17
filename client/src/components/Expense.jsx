import React,{useEffect, useState} from 'react';
import axios from "axios";
import { Link ,useNavigate} from 'react-router-dom';



const Expense = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
  
    useEffect(() => {
      // Define fetchData function to fetch data
      const fetchData = async () => {
        try {
          const res = await axios.get('http://localhost:5001/');
          setProduct(res.data);
          console.log(res);
          console.log(product)
        } catch (error) {
          console.log(error);
        }
      };
  
      // Call fetchData when the component mounts
      fetchData();
    }, []);
  
    const handleDelete = async (id) => {
      console.log('delete');
      try {
        const res = await axios.delete(`http://localhost:5001/delete/${id}`);
        console.log(res);
        // Refetch data after deletion
        fetchData();
      } catch (error) {
        console.log(error);
      }
    };
  

    const fetchData = async () => {
        try {
          const res = await axios.get('http://localhost:5001/');
          setProduct(res.data);
          console.log(res);
          console.log(product)
        } catch (error) {
          console.log(error);
        }
      };
    return (
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Price</th>
                <th>Product</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {product.map((data, index) => (
                <tr key={index}>
                  <td>{data.price}</td>
                  <td>{data.product}</td>
                  <td>{data.category}</td>
                  <td>
                    <Link to={`/update/${data.id}`} className="btn btn-primary">
                      Update
                    </Link>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={(e) => handleDelete(data.id)}
                      
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Expense;