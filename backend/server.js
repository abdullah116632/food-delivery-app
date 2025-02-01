import express from "express";
import cors from "cors";
import "dotenv/config"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";
import adminRouter from "./routes/adminRoute.js";


//app config
const app = express()
const port = process.env.PORT || 4000;


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// db connection
connectDB();


//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRoute);
app.use("/api/admin", adminRouter);


// app.get("/", (req, res)=>{
//     res.send("api working")
// })

app.listen(port, ()=> {
    console.log(`server started on http://localhost:${port}`)
})