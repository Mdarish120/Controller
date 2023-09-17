import express from "express";
import cors from "cors";
import productRoute from "./routes/product.js";


const app=express();

app.use(express.json());
app.use(cors());

app.use("/",productRoute);

app.listen(5001);
console.log(5001);