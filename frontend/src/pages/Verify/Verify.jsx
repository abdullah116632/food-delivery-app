import React, { useContext, useEffect } from 'react';
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId")
    const {url, token} = useContext(StoreContext)
    const navigate = useNavigate()

    const verifyPayment = async () => {
      try {
          const response = await axios.post(url + "/api/order/verify", { success, orderId }, {headers: {token}});
          if (response.data.success) {
              navigate("/myorders");
          } else {
              navigate("/");
          }
      } catch (error) {
          console.error("Error in verifyPayment:", error.response?.data || error.message);
      }
  };
  

    useEffect(()=> {
        if(token){
          verifyPayment()
        }
    },[token])

  return (
    <div className='verify'>
      <div className='spinner'></div>
    </div>
  );
}

export default Verify;
