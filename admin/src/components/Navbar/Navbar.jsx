import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom"; 
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";

const Navbar = ({setToken, setIsLoggedIn}) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setToken("");
    navigate("/login")
  }
  
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <div className="right-nav">
        <FaUserShield className="profile" />
        <div className="menu-button">
          <PiDotsThreeOutlineVerticalBold className="menu" />
          <ul className="nav-profile-dropdown">
            <li onClick={() => navigate("/register-new-admin")}>
              <MdAdminPanelSettings className="icon" />
              <p>Create new Admin</p>
            </li>
            <hr />
            <li onClick={logout}>
            <RiLogoutCircleRFill />
            <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
