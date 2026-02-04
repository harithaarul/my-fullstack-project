import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Otp/Otp.css"
export const Otp= ()=> {
  const navigate = useNavigate();

  const handleSend = () => {
    navigate("/reset-password");
  };

  return (
    <>
    <div className='otpfullpage'>
     <div className="otp-container">
      <div className="otp-card">
        <div className="logo-section">
          <div className="logo-circle"></div>
          <div className="logo-text">
            <h2>Beast Forces</h2>
            <h2>Gym</h2>
          </div>
        </div>
        <h3 className="otp-title">Enter Your OTP</h3>

        <div className="otp-line-inputs">
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>

    <button className="otp-send-btn" onClick={handleSend}>Send</button>

        <p className="resend-text">Resend the OTP</p>
      </div>
    </div>
    </div>
    </>
  );
}