import React, { useState } from "react";
import "./login.css"; // Keeping the same CSS file
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";

const RegisterNewAdmin = () => {
  const url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
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
    if (!data.name || !data.email || !data.password) {
      toast.message("Please fill all the fields");
      return;
    }
    try {
      const response = await axios.post(`${url}/api/admin/create-admin`, data, {headers: {token: localStorage.getItem("token")}});
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/list"); // Redirect after registration
      } else {
        setError(response.data.message);
        toast.error(error);
      }
    } catch (err) {
      setError("Registration failed. Please try again.");
      toast.error(error);
    }
  };

  return (
    <div className="login-popup"> {/* This acts as the full page container */}
      <form onSubmit={handleSubmit} className="login-popup-container">
        <div className="login-popup-title">
          <h2>Register</h2>
          <img src={assets.cross_icon} alt="" onClick={() => navigate("/")} /> {/* Redirects instead of closing popup */}
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="login-popup-inputs">
          <input
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            placeholder="Your name"
            required
          />
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
        <button type="submit">Register</button>
        <div className="login-popup-condition">
        </div>
      </form>
    </div>
  );
};

export default RegisterNewAdmin;