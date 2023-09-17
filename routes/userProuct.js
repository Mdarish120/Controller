import express from "express";
import {createUserProduct} from "../controllers/userProduct.js"

const router=express.Router();


router.post("/create",createUserProduct);


export default router;