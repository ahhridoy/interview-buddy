import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./_HomeDashboard.scss";

const HomeDashboard = () => {
  return (
    <main>
      <Navbar />
      <div id="home-dashboard">
        <Sidebar />
        <div className="home-container">
          <h1>Dashboard</h1>
        </div>
      </div>
    </main>
  );
};

export default HomeDashboard;
