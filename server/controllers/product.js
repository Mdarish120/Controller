
import db from "../models/index.js";

const Product=db.products;

export const getProduct= async(req,res)=>{
  
    try {
          const user=await Product.findAll({});
          res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}

export const createProduct= async(req,res)=>{
    
  const {price,product,category}=req.body;
    try {
        const data=await Product.create({price,product,category});
        res.status(201).json("adding scuccessfully..");
        
    } catch (error) {
         console.log(error);
    }

}


export const updateProduct= async (req,res)=>{
    const {price,product,category}=req.body;
    const {id}=req.params;
     
    try { 

        const data=await Product.update({price,product,category},{where:{id:id}});
        res.status(200).json(data);
        
    } catch (error) {
        
    }

  
  }

  export const deleteProduct= async(req,res)=>{
  const {id }=req.params;
    
  await Product.destroy({where:{id:id}});
  res.status(200).json("deleted Successfully...")
  
  }