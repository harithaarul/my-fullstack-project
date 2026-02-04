

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ProfileDetails.css";
import { useLocation } from "react-router-dom";


export const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();


 
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setFormData(data);
      });
  }, [id]);
useEffect(() => {
  if (location.state?.edit) {
    setIsEditing(true);
  }
}, [location.state]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const handleEdit = () => {
    setFormData({ ...user }); 
    setIsEditing(true);
  };


  const handleSave = async () => {
    const res = await fetch(`http://127.0.0.1:8000/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
  setUser(formData);   
  setIsEditing(false);
  alert("Profile updated");
}
    
    else {
      alert("Update failed");
    }
  };


  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this profile?")) return;
    await fetch(`http://127.0.0.1:8000/users/${id}`, { method: "DELETE" });
    navigate("/registered");
  };

  if (!user || !formData) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">
          <h3>View profile</h3>
          <button className="back-btn" onClick={() => navigate("/registered")}>
            ← Back
          </button>
        </div>

        <div className="profile-avatar">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
          />
        </div>


        <h2 className="profile-name">
          {isEditing ? (
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          ) : (
            user.name
          )}
        </h2>

        <div className="profile-info">
          {[
            ["Age", "age"],
            ["Gender", "gender"],
            ["Contact Number", "phone"],
            ["City", "city"],
          ].map(([label, field]) => (
            <div key={field}>
              <p>{label}</p>
              {isEditing ? (
                <input
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              ) : (
                <h4>{user[field]}</h4>
              )}
            </div>
          ))}
        </div>

     
        <div className="profile-info boxed">
          <div className="info-box">
            <p>Duration</p>
            {isEditing ? (
              <input
                name="duration"
                value={formData.duration}
                onChange={handleChange}
              />
            ) : (
              <h4>{user.duration} Months</h4>
            )}
          </div>

          <div className="info-box">
            <p>Joining Date</p>
            {isEditing ? (
              <input
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
              />
            ) : (
              <h4>{user.joiningDate}</h4>
            )}
          </div>
        </div>

        <div className="profile-buttons">
          {isEditing ? (
            <>
              <button className="save-btn" onClick={handleSave}>Save</button>
              {/* <button className="back-btn" onClick={() => setIsEditing(false)}>
                Cancel
              </button> */}
              <button
  className="back-btn"
  onClick={() => {
    setFormData(user);  
    setIsEditing(false);
  }}
>
  Cancel
</button>

            </>
          ) : (
            <>
              <button className="edit-btn" onClick={handleEdit}>Edit</button>
              <button className="delete-btn" onClick={handleDelete}>
                <DeleteIcon /> Delete
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
