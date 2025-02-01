import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const foodRouter = express.Router();

//image storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb)=>{
        console.log("middleware called")
        return (cb(null, `${Date.now()}${file.originalname}`))
    }
})

const upload = multer({storage: storage})

foodRouter.post("/add",verifyAdmin, upload.single("image"), addFood);
foodRouter.get("/list", listFood);  // this route is using both admin and normal user , no need to protect.
foodRouter.post("/remove", verifyAdmin, removeFood);





export default foodRouter;