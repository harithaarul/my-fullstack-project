import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../ForgetPassword/ForgetPassword.css"

export const ForgotPassword = () => {

    const navigate = useNavigate();

  const handleSend = () => {
    navigate("/otp");
  };
  return (
   <>
    <div className='fpfullpage'>
     <div className="forgot-container">
      <div className="forgot-card">
        <div className="logo-section">
          <div className="logo-circle"></div>
          <h2>Beast Forces <br /> Gym</h2>
        </div>
        <h3>Forgot Your Password ?</h3>
        <p>Enter your Email below to receive your OTP</p>
        <input type="email" placeholder="Email" className="input-field" />
        <button className="send-btn" onClick={handleSend}>Send</button>
      </div>
    </div>
    </div>
    </>
  )
}
