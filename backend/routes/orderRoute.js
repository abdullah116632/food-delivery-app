import express from "express";
import authMiddleware from "../middleware/auth.js"
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from "../controllers/orderController.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const orderRoute = express.Router();

orderRoute.post("/place", authMiddleware, placeOrder);
orderRoute.post("/verify",authMiddleware, verifyOrder);
orderRoute.post("/userorders", authMiddleware, userOrders);
orderRoute.get("/list", verifyAdmin, listOrders);
orderRoute.post("/status", verifyAdmin, updateStatus);

export default orderRoute;