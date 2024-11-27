import express from "express";
import authMiddleware from "../middleware/auth.js"
import { listOrders, placeOrder, userOrders, verifyOrder } from "../controllers/orderController.js";

const orderRoute = express.Router();

orderRoute.post("/place", authMiddleware, placeOrder);
orderRoute.post("/verify", verifyOrder);
orderRoute.post("/userorders", authMiddleware, userOrders);
orderRoute.get("/list", listOrders)

export default orderRoute;