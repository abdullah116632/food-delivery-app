import express from "express";
import { loginUser, registerUser, getUserInfo } from "../controllers/userController.js";
import auth  from "./../middleware/auth.js"


const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/", auth, getUserInfo);

export default userRouter;