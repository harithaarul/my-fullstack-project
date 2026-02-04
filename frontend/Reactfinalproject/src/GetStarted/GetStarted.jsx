import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../GetStarted/GetStarted.css"
import Brightness1Icon from '@mui/icons-material/Brightness1';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const GetStarted = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='container'>
     <p className='topicon'><Brightness1Icon/>  &nbsp; &nbsp; &nbsp; BEAST FORCE</p>
     <div className="getstarted-box">
      <div className="box">
   <div>
   
   <h1 className='get'>Get Ready</h1><br />
      <p className='shape'>Shape your body</p>
        
     “The harder you work and the more prepared you are<br/> 
     for something,
      you’re going to be able to persevere <br/> through anything.”
          <br /><br />
     <button className="bttn" onClick={() => navigate("/login")}>
                  Get Started
          </button>
          
        </div>
         <div className='icons'><FacebookRoundedIcon/><GoogleIcon/><InstagramIcon/><WhatsAppIcon/></div>
      </div>
     
    </div>
   </div>
    </>
  )
}
