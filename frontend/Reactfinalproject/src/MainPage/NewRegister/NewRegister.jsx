


import React, { useState } from "react";
import "./NewRegister.css";
import { useNavigate } from "react-router-dom";

const NewRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    city: "",
    joiningDate: "",
    duration: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {
    if (!formData.name || !formData.age || !formData.gender || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          age: Number(formData.age),
          duration: Number(formData.duration)
        })
      });

      if (res.ok) {
        alert(" Registered Successfully");
        navigate("/registered");
      } else {
        alert(" Registration Failed");
      }
    } catch {
      alert("Backend not running");
    }
  };

  return (
    <div className="register-page">
      <button className="btnssss" onClick={() => navigate(-1)}>← Back</button>

      <h2 className="title">Registration Form</h2>

      <div className="register-container">
        <div className="form-box">
          <input name="name" placeholder="Full Name" className="age" onChange={handleChange} />
          <input name="age" type="number" placeholder="Age" className="age" onChange={handleChange} />

          <select name="gender" className="optio" onChange={handleChange}>
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input name="phone" placeholder="Phone Number" className="age" onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" className="age" onChange={handleChange} />
          <input name="city" placeholder="City" className="age" onChange={handleChange} />
          <input name="joiningDate" type="date" className="age" onChange={handleChange} />
          <input name="duration" type="number" placeholder="Duration (months)" className="age" onChange={handleChange} />

          <button className="submit-btn" onClick={handleRegister}>Register</button>
        </div>

        <div className="photo-box">
          <div className="camera-icon">cam</div>
          <button className="photo-btn">Take Photo</button>
        </div>
      </div>
    </div>
  );
};

export default NewRegister;











