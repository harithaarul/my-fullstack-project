import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Login/Login.css"

export const Login = () => {

    const navigate = useNavigate();
  return (
  <>
<div className='fullpagelogin'>
      <div className="login-container">
      <div className="login-box">
        <div className="brand">
    <div className="logo-circle"></div>
    <div className="brand-text">
      <h4>Beast Forces</h4>
            <span>Gym</span>
   </div>
          
        </div>
        <h3 className="login-title">Login</h3>
    <input type="email" placeholder="Email" />
 <input type="password" placeholder="Password" />
   <p className="forgot" onClick={() => navigate("/forgot-password")}>
          forgot password?
 </p>
<button className="btn" onClick={()=>navigate("/dashboard")}>Login</button>
</div>
    </div>
</div>
  </>
  )
}
