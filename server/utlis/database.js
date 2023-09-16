const mysql=require("mysql2");

const pool=mysql.createPool({
    hots:"localhost",
    user:"root",
    database:"user",
    password:"Arish123@"
})


module.exports=pool.promise();