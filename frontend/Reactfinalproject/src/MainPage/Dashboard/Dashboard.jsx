
import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { useLocation, useNavigate } from "react-router-dom";
import RestoreIcon from '@mui/icons-material/Restore';
import EditIcon from "@mui/icons-material/Edit";

export const Dashboard = () => {
  const [showExpired, setShowExpired] = useState(false);
  const [showExpireText, setShowExpireText] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDatePopup, setShowDatePopup] = useState(false);
  

  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  const expiredAccounts = [
    {
      id: 1,
      name: "Haritha",
      age: "24",
      gender: "Female",
      phone: "9876543210",
      city: "Kumbakonam",
      duration: "6 Months",
      joiningDate: "11-05-2024",
      expired: "5-10-2025",
      expiredTill: "5 days",
      expiredDate: "01-11-2025",
      renewal: "",
    },
    {
      id: 2,
      name: "Gayathri",
      age: "26",
      gender: "Female",
      phone: "9123456789",
      city: "Chennai",
      duration: "3 Months",
      joiningDate: "04-03-2024",
      expired: "5-10-2025",
      expiredTill: "2 days",
      expiredDate: "05-11-2025",
      renewal: "",
    },
  ];

  const handleRenewClick = (user) => {
    setSelectedUser(user);
    setShowConfirm(true);
  };

  const handleConfirmRenew = () => {
    setShowConfirm(false);
    setShowDatePopup(true);
  };

  const handleCancelRenew = () => {
    setShowConfirm(false);
    setSelectedUser(null);
  };

  const handleDateSubmit = () => {
    setShowDatePopup(false);
    setSelectedUser(null);
  };

  return (
    <>
      <div className="dashboard-wrapper">
        <div className="top-section">
          <button
            className="new-register-btn"
            onClick={() => navigate("/newregister")}
          >
            + New Register
          </button>

          <div className="status-container">
     
            <div
              className="status-box green"
              onClick={() => {
                setShowExpireText(true);
                setShowExpired(false);
              }}
              style={{ cursor: "pointer" }}
            >
              Accounts are going to expire within 3 days
            </div>

         
            <div
              className="status-box red"
              onClick={() => {
                setShowExpired(true);
                setShowExpireText(false);
              }}
              style={{ cursor: "pointer" }}
            >
              Accounts Expired
            </div>
          </div>
        </div>

       
        {showExpireText && (
          <div className="expired-table-section">
            <h4>Accounts are going to expire within 3 days</h4>
          </div>
        )}

      
        {showExpired && !selectedUser && (
          <div className="expired-table-section">
            <h4>Accounts Expired</h4>

            <div className="table-container">
              <table className="expired-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Phone No</th>
                    <th>Joining Date</th>
                    <th>Expired</th>
                    <th>Renewal</th>
                    <th>Edit</th>
                  </tr>
                </thead>

                <tbody>
                  {expiredAccounts.map((acc, index) => (
                    <tr key={acc.id}>
                      <td>{index + 1}</td>
                      <td style={{ cursor: "pointer" }}>
                        <PersonOutlineRoundedIcon
                          onClick={() =>
                            navigate("/profile/id", { state: acc })
                          }
                          style={{ fontSize: "28px", color: "#232d3f" }}
                        />
                      </td>
                      <td>{acc.name}</td>
                      <td>{acc.phone}</td>
                      <td>{acc.joiningDate}</td>
                      <td>{acc.expired}</td>
                      <td>
                        {/* <button
                          className="renew-btn"
                          onClick={() => handleRenewClick(acc)}
                        >
                          {acc.renewal}
                        </button> */}
                        <RestoreIcon  onClick={() => handleRenewClick(acc)}/>
                          {acc.renewal}
                      </td>
                      <td><EditIcon/></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

       
        {showConfirm && (
          <div className="popup-overlay">
            <div className="popup-box">
              <p>Are you sure you want to renewal?</p>
              <div className="popup-buttons">
                <button onClick={handleConfirmRenew}>Sure</button>
                <button onClick={handleCancelRenew}>Cancel</button>
              </div>
            </div>
          </div>
        )}

       
        {showDatePopup && (
          <div className="popup-overlay">
            <div className="popup-box">
              <div className="form-group">
                <label>
                  <b>Duration</b>
                </label>
                <select defaultValue="6 months">
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>12 months</option>
                </select>
              </div>

              <div className="form-group">
                <label>Joining Date</label>
                <input type="text" placeholder="DD/MM/YYYY" />
              </div>

              <div className="form-group">
                <label>Expired Date</label>
                <input type="text" placeholder="DD/MM/YYYY" />
              </div>

              <button onClick={handleDateSubmit}>Okay</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};







