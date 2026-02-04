
import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PaymentIcon from "@mui/icons-material/Payment";
import LogoutIcon from "@mui/icons-material/Logout";
import "./MainPage.css";

export const Mainpage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="app-wrapper">

      <div className="top-header">
        <div className="logo-circle"></div>
        <h2>Beast Forces</h2>
      </div>
      <div className="body-wrapper">
    
        <aside className="sidebar">
          <button
            className={`menu-btn ${
              location.pathname.includes("dashboard") ? "active" : ""
            }`}
            onClick={() => navigate("/dashboard")}
          >
            <DashboardIcon />
            Dashboard
          </button>

          <button
            className={`menu-btn ${
              location.pathname.includes("registered") ? "active" : ""
            }`}
            onClick={() => navigate("/registered")}
          >
            <ListAltIcon />
            View Registered
          </button>

          <button
            className={`menu-btn ${
              location.pathname.includes("payments") ? "active" : ""
            }`}
            onClick={() => navigate("/payments")}
          >
            <PaymentIcon />
            Payment History
          </button>

          <div className="logout-btn" onClick={() => navigate("/logout")}>
            <LogoutIcon />
            Logout
          </div>
        </aside>

     
        <main className="content">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};



