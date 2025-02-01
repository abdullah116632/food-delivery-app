import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import Add from "./pages/Add/Add";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Auth/Login";
import RegisterNewAdmin from "./components/Auth/registerNewAdmin";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);


  useEffect(() => {
    async function loadData() {
      if(localStorage.getItem("token")){
        setIsLoggedIn(true);
        setToken(localStorage.getItem("token"))
      }
    }
    loadData()
  },[])

  return (
    <div>
      <ToastContainer />
      {isLoggedIn ? (
        <>
          <Navbar />
          <hr />
          <div className="app-content">
            <Sidebar />
            <Routes>
              <Route path="*" element={<Navigate to="/list" />} />
              <Route path="/list" element={<List />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/add" element={<Add />} />
              <Route path="/register-new-admin" element={<RegisterNewAdmin />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
