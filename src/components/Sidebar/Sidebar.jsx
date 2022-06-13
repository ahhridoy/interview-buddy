import React from "react";
import { Link } from "react-router-dom";
import { BsCalendarCheck } from "react-icons/bs";
import "./_Sidebar.scss";

const Sidebar = () => {
  return (
    <main id="sidebar">
      <div className="top text-center py-3">
        <Link to="/" className="text-decoration-none">
          <img src="/assets/logo.png" alt="" />
        </Link>
      </div>
      <hr className="text-light" />
      <div className="center">
        <ul>
          <Link to="/dashboard" className="text-decoration-none">
            <li>
              <BsCalendarCheck className="fs-4 text-light me-3" />
              <span className="text-light">Dashboard</span>
            </li>
          </Link>
          <Link to="/book-interview" className="text-decoration-none">
            <li>
              <BsCalendarCheck className="fs-4 text-light me-3" />
              <span className="text-light">Book Interview</span>
            </li>
          </Link>
          <Link to="/buy-credits" className="text-decoration-none">
            <li>
              <BsCalendarCheck className="fs-4 text-light me-3" />
              <span className="text-light">Buy Credits</span>
            </li>
          </Link>
          <Link to="/my-profile" className="text-decoration-none">
            <li>
              <BsCalendarCheck className="fs-4 text-light me-3" />
              <span className="text-light">My Profile</span>
            </li>
          </Link>
        </ul>
      </div>
    </main>
  );
};

export default Sidebar;
