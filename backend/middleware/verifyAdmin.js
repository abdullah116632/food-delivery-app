import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Middleware to verify token and admin status
export const verifyAdmin = async (req, res, next) => {
    try {
        const {token} = req.headers; // Get token from header
        if (!token) return res.status(401).json({ message: "No token, authorization denied!" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: "Access denied! Admins only." });
        }

        req.user = user; // Attach user to request
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token!" });
    }
};
