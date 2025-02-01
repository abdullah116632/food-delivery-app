import React, {useContext, useEffect, useState} from 'react'
import "./Profile.css";
import axios from 'axios';
import {toast} from "react-toastify";
import { redirect } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Profile = () => {

  const {url, token} = useContext(StoreContext);

    const [user, setUser] = useState({});

    const getProfileInfo = async () => {
        try{
            const response = await axios.get(`${url}/api/user`, {headers: {token}});
            if(!response.data.success){
                toast.error("some error occured");
                redirect("/");
            }else if (response.data.success){
                setUser(response.data.user);
            }
        }catch(e){
            toast.error("some error occured");
            redirect("/");
        }
    }

    useEffect(()=> {
        getProfileInfo();
    }, [token])

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">Your Profile information</h2>
        <p className="profile-info"><strong>Name:</strong> {user.name}</p>
        <p className="profile-info"><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default Profile;