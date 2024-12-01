import React, { useState } from "react";
import "./stateupdate.css";

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile Updated: ${JSON.stringify(profile, null, 2)}`);
  };

  return (
    <div className="main-container">
      <h1>State Update in Object</h1>
      <h4>
        Explanation: the state refers to data that determines the component’s
        rendering and behavior. When the state changes, React re-renders the
        component to reflect those changes. When you manage an object in state,
        it’s important to understand how to properly update it, as direct
        mutation of the object (modifying it directly without creating a copy)
        will not trigger re-renders and may lead to unexpected behavior.
      </h4>
      <div className="profile-task-container">
        <h1 className="profile-task-title">Update Profile</h1>
        <form onSubmit={handleSubmit} className="profile-task-form">
          <label className="profile-task-label">Name:</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="profile-task-input-email"
          />

          <label className="profile-task-label">Email:</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="profile-task-input-email"
          />

          <label className="profile-task-label">Age:</label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
            className="profile-task-input-age"
          />

          <button type="submit" className="profile-task-submit-btn">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
