

import React, { useEffect, useState } from "react";
import "../ViewRegistered/ViewRegistered.css";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const ViewRegistered = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  const loadUsers = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to load users", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    await fetch(`http://127.0.0.1:8000/users/${id}`, {
      method: "DELETE",
    });

    alert("Profile deleted successfully");

    loadUsers(); 
  };

  return (
    <div className="registered-container">
      <h3 className="registered-title">View Registered</h3>

      <div className="table-container">
        <table className="expired-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Joining Date</th>
              <th>Duration</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  No records found
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>

            
                  <td>
                    <PersonOutlineRoundedIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`/profile/${user.id}`)}
                    />
                  </td>

                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.joiningDate}</td>
                  <td>{user.duration}</td>

                  <td>
                    <DeleteIcon
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleDelete(user.id)}
                    />
                  </td>

                  <td>
                   
                    <EditIcon
  style={{ cursor: "pointer" }}
  onClick={() => navigate(`/profile/${user.id}`, { state: { edit: true } })}
 />

                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewRegistered;



