import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./_HomeDashboard.scss";

const HomeDashboard = () => {
  return (
    <main id="home-dashboard">
      <Sidebar />
      <div className="home-container">
        <h1>Dashboard</h1>
      </div>
    </main>
  );
};

export default HomeDashboard;
