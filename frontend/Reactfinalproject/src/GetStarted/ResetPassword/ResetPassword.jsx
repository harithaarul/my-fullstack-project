import React from "react";
import { useNavigate } from "react-router-dom";
import "../ResetPassword/ResetPassword.css"


export const ResetPassword=()=> {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/login");
  };

  return (
    
    <>
    <div className="resetfullpage">
     <div className="reset-container">
      <div className="reset-box">
        <div className="logo-section">
          <div className="logo-circle"></div>
          <div className="logo-text">
            <h2>Beast Forces</h2>
            <h2>Gym</h2>
          </div>
        </div>

        <h3 className="reset-title">Reset Password</h3>
        <p className="reset-subtitle">
          Enter your new password below,<br />
          we are just being extra safe
        </p>

        <input
          type="password"
          placeholder="Enter your password"
          className="input-field"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-field"
        />

        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
    </div>
  </>
  );
}