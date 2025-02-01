import React, { useContext, useState } from "react";
import "./login.css"; // Keeping the same CSS file
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";

const Login = ({setIsLoggedIn}) => {
  const url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!data.email || !data.password){
      toast.message("Please fill all the field")
      return;
    }
    try {
      const response = await axios.post(`${url}/api/admin/login`, data);
      console.log(response)
      if (response.data.success) {
        // setToken(response.data.token);
        setIsLoggedIn(true);
        localStorage.setItem("token", response.data.token);
        navigate("/list"); // Redirect after login
      } else {
        setError(response.data.message);
        toast.error(error);
      }
    } catch (err) {
      
      setError("Invalid credentials. Please try again.");
      toast.error(error)
    }
  };

  return (
    <div className="login-popup"> {/* This acts as the full page container */}
      <form onSubmit={handleSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2>Login</h2>
          <img src={assets.cross_icon} alt="" onClick={() => navigate("/")} /> {/* Redirects instead of closing popup */}
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="login-popup-inputs">
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
        <div className="login-popup-condition">
        </div>
      </form>
    </div>
  );
};

export default Login;
