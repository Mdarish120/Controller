import express from "express";
import {getProduct,createProduct,updateProduct,deleteProduct} from "../controllers/product.js";

const router=express.Router();

router.get("/",getProduct);
router.post("/create",createProduct);
router.put("/update/:id",updateProduct);
router.delete("/delete/:id",deleteProduct);

export default router;