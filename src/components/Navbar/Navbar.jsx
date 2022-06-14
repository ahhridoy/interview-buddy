import React from "react";
import "./_Navbar.scss";

const Navbar = () => {
  return (
    <main id="navbar">
      <div className="d-flex justify-content-between">
        <div className="logo">
          <img src="/assets/logo.png" alt="" />
        </div>
        <div className="content">
          <div className="me-3">
            <p>My Credits</p>
          </div>
          <div className="me-3">
            <p className="px-5 bg-warning count">0</p>
          </div>
          <div className="me-3">
            <p>Notifications</p>
          </div>
          <div className="me-3">
            <p>Name</p>
          </div>
          <div className="profile-img">
            <img src="/assets/man.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
