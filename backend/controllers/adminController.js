import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import createToken from "../util/createJwtToken.js";

// Create a new admin (only accessible by existing admins)
export const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({success: false, message: "User already exists!" });

    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter a valid email" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({
          success: false,
          message: "password must be larger than 8 digit",
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new admin
    const adminUser = new User({
      name,
      email,
      password: hashedPassword,
      isAdmin: true, // Explicitly set as admin
    });

    const newAdmin = await adminUser.save();
    const token = createToken(newAdmin._id);

    res.status(200).json({
        message: "Admin created successfully!",
        success: true,
        token
    })

  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({success: false, message: "Invalid credentials!" });

    // Check if user is an admin
    if (!user.isAdmin) {
      return res
        .status(403)
        .json({success: false, message: "Access denied! Only admins can log in." });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({success: false, message: "Invalid credentials!" });

    // Generate JWT token with admin privileges
    const token = createToken(user._id)

    res.json({
      success: true,
      message: "Admin login successful",
      token,
    });
  } catch (error) {
    res.status(400).json({success: false, message: "Error"})
  }
};

