import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import createToken from "../util/createJwtToken.js";


//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try{
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({success: false, message: "User doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({success: false, message: "Invalid credentials"})
        }

        const token = createToken(user._id);

        res.status(200).json({success: true, token})
    }catch(error){
        console.log(error);
        res.status(500).json({success: false, message: "Error"})
    }
}

//register user
const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    
    try{

        const exist = await userModel.findOne({email});

        if(exist){
            return res.status(400).json({success: false, message: "user already exist"})
        }
        
        // validation email format and strong password
        if(!validator.isEmail(email)){
            return res.status(400).json({success: false, message: "Please enter a valid email"})
        }
        
        if(password.length < 6){
            return res.status(400).json({success: false, message: "password must be larger than 8 digit"})
        }

        //hasing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id);

        res.status(200).json({
            success: true,
            token
        })

    }catch(error){
        console.log(error);
        res.status(400).json({success: false, message: "Error"})
    }
}

const getUserInfo = async (req, res) => {
    const {userId} = req.body;

    try{
        const user = await userModel.findOne({_id: userId});
        if(!user){
            res.status(404).json({success: false, message: "user not found with this id"});
            return;
        }

        res.status(200).json({success: true, user});
    }catch(e){
        console.log(e);
        res.json(400).json({success: false, message: "some error occured"});
    }
}

export {loginUser, registerUser, getUserInfo};