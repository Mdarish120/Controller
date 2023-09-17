import express from "express";

import userProductRoute from "./routes/userProuct.js";

const app=express();

app.use(express.json());


app.use("/",userProductRoute);

app.listen(5000);
console.log(5000);