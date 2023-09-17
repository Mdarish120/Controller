
import db from "../models/index.js";

const User=db.userInfo;

export const getUser= async(req,res)=>{
  
    try {
          const user=await User.findAll({});
          res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}

export const createUser= async(req,res)=>{
    
  const {name,email}=req.body;
    try {
        const data=await User.create({name,email});
        res.status(201).json("adding scuccessfully..");
        
    } catch (error) {
         console.log(error);
    }

}


export const updateUser= async (req,res)=>{
    const {name,email}=req.body;
    const {id}=req.params;
     
    try { 

        const data=await User.update({name,email},{where:{id:id}});
        res.status(200).json(data);
        
    } catch (error) {
        
    }

  
  }

  export const deleteUser= async(req,res)=>{
  const {id }=req.params;
    
  await User.destroy({where:{id:id}});
  res.status(200).json("deleted Successfully...")
  
  }