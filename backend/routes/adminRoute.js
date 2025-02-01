import express from "express";
import { verifyAdmin } from "../middleware/verifyAdmin.js";
import { adminLogin, createAdmin } from "../controllers/adminController.js";


const adminRouter = express.Router();

adminRouter.post("/create-admin", verifyAdmin, createAdmin);
adminRouter.post("/login", adminLogin)


export default adminRouter;
