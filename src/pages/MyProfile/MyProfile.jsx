import React from "react";
import EducationDetails from "../../components/EducationDetails/EducationDetails";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./_MyProfile.scss";

const MyProfile = () => {
  return (
    <main>
      <Navbar />
      <div id="my-profile">
        <Sidebar />
        <div className="my-profile-container bg-light">
          <h4 className="text-start text-dark ms-3 fs-2 my-4">My Profile</h4>
          <div className="py-4 px-4 my-3 mx-3 bg-white rounded border d-flex justify-content-between">
            <div>
              <strong>Account Details</strong>
              <div className="d-flex justify-content-between">
                <p>User ID</p>
                <p>42543</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Name</p>
                <p>Hridoy</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Email</p>
                <p>ahhridoyy28@gmail.com</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Phone</p>
                <p>+880 1318183476</p>
              </div>
            </div>
            <div className="d-flex">
              <div>
                <img src="/assets/man.png" alt="" className="w-50" />
                <p>
                  <a href="#">Change Picture</a>
                </p>
              </div>

              <div className="d-flex">
                <p className="me-5">
                  <a href="#">Change Picture</a>
                </p>
                <p>
                  <a href="#">Change Picture</a>
                </p>
              </div>
            </div>
          </div>

          <EducationDetails />
        </div>
      </div>
    </main>
  );
};

export default MyProfile;
