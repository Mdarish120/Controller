import express from "express";
import {getUser,createUser,updateUser,deleteUser} from "../controllers/user.js";

const router=express.Router();

router.get("/",getUser);
router.post("/create",createUser);
router.put("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);

export default router;