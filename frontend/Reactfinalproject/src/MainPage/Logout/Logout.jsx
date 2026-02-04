import React from 'react'
import "../Logout/Logout.css"
import { useNavigate } from 'react-router-dom'

export const Logout = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='logoutcontainer'>

    <div className='line'>Are you sure you want <br/>to logout?</div><br/>
    <div className='twobtn'><button className='logoutbtn'  onClick={() => navigate('/')} >logout</button>&nbsp;&nbsp;&nbsp;&nbsp;<button className='cancelbtn'>cancel</button></div>
    </div>
    </>
  )
}
