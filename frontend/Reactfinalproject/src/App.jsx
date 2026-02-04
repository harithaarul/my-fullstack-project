import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GetStarted } from './GetStarted/GetStarted'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Login } from './GetStarted/Login/Login'
import { ForgotPassword } from './GetStarted/ForgetPassword/ForgotPassword'
import { Otp } from './GetStarted/OTP/OTP'
import { ResetPassword } from './GetStarted/ResetPassword/ResetPassword'
import { Mainpage } from './MainPage/Mainpage'
import { Dashboard } from './MainPage/Dashboard/Dashboard'
import { ProfileDetails } from './MainPage/ProfileDetails/ProfileDetails'
import Registered from './MainPage/ViewRegistered/ViewRegistered'
import { Logout } from './MainPage/Logout/Logout'
import { AccountExpired } from './MainPage/AccountExpired/AccountExpired'
import NewRegister from './MainPage/NewRegister/NewRegister'
import  PaymentHistory  from './MainPage/PaymentHistory/PaymentHistory'



function App() {
  return (
    <>
<BrowserRouter>
<Routes>
   <Route  path="/" element={<GetStarted/>}/>
  <Route path="/login" element={<Login />} />
  <Route path="/forgot-password" element={<ForgotPassword/>} />
  <Route path="/otp" element={<Otp/>}/>
  <Route path="/reset-password" element={<ResetPassword/>}/>

        <Route  element={<Mainpage/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/profile/:id" element={<ProfileDetails/>} />
 <Route path="/payments" element={<PaymentHistory/>}/>
       <Route path="registered" element={<Registered />} />
       {/* <Route path="/view-registered" element={<Registered />} />
<Route path="/profile/:index" element={<ProfileDetails />} /> */}

        
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/newregister' element={<NewRegister/>}/>
        </Route>
        <Route path="/accountexpired" element={<AccountExpired/>}/>
       
</Routes>
</BrowserRouter>

{/* <Mainpage/>*/}
    </>
  )
}
export default App
