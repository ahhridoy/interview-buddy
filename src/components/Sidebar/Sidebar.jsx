import React from "react";
import { NavLink } from "react-router-dom";
import { BsCalendarCheck } from "react-icons/bs";
import "./_Sidebar.scss";

const Sidebar = () => {
  return (
    <main id="sidebar">
      <div className="center mt-4">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className="text-decoration-none"
              activeClassName="active"
            >
              <BsCalendarCheck className="fs-5 text-light me-3" />
              <span className="text-light">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/book-interview"
              className="text-decoration-none"
              activeClassName="active"
            >
              <BsCalendarCheck className="fs-5 text-light me-3" />
              <span className="text-light">Book Interview</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buy-credits"
              className="text-decoration-none"
              activeClassName="active"
            >
              <BsCalendarCheck className="fs-5 text-light me-3" />
              <span className="text-light">Buy Credits</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-profile"
              className="text-decoration-none"
              activeClassName="active"
            >
              <BsCalendarCheck className="fs-5 text-light me-3" />
              <span className="text-light">My Profile</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Sidebar;
