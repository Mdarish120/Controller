import {db} from "../utils/db.js";

export const getUser=(_,res)=>{
    const query="SELECT * FROM  USERINFO";
    db.query(query,(err,data)=>{
        if(err){
            return res.json(err);
        }

        return res.status(200).json(data);
    })
}

export const createUser=(req,res)=>{
    
  const {name,email}=req.body;
    const query="INSERT INTO userinfo(`name`,`email`) VALUES(?)";

    const values=[
        name,email
    ]
    db.query(query,[values],(err)=>{
        if(err) return res.json(err);

        return res.status(200).json("User is created Successfully..")
    })

}


export const updateUser=(req,res)=>{
    const {name,email}=req.body;
    const {id}=req.params;
    const query="UPDATE userInfo SET `name`=? ,`email`=? WHERE `id`=?";
    const values=[name,email];

    db.query(query,[...values,id], (err)=>{
        if(err) return res.json(err);
        return res.status(200).json("Updated Successfully..");
    })

  
  }

  export const deleteUser=(req,res)=>{
   const query="DELETE FROM userInfo WHERE `id`=?"

   db.query(query,[req.params.id],(err)=>{

    if(err) return res.json(err);
     return res.status(200).json("Successfully Deleted..")
   })
  
  }