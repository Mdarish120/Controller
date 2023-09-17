import db from "../models/index";

const Product=db.productInfo;
const User=db.userInfo;


export const createUserProduct= async(req,res)=>{
    
    const {name,price,type}=req.body;
      try {
          const data=await User.create({name:"Arish",email:"mdarish@gmail.com"});

          const productData=await Product.create({name,price,type,userId:data.id});
          res.status(201).json("adding scuccessfully..");
          
      } catch (error) {
           console.log(error);
      }
  
  }