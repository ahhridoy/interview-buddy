import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./_MyProfile.scss";

const MyProfile = () => {
  return (
    <main>
      <Navbar />
      <div id="my-profile">
        <Sidebar />
        <div className="my-profile-container">
          <h1>My Profile</h1>
        </div>
      </div>
    </main>
  );
};

export default MyProfile;
