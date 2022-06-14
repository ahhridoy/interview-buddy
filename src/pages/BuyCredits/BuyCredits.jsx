import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./_BuyCredits.scss";

const BuyCredits = () => {
  return (
    <main>
      <Navbar />
      <div id="buy-credits">
        <Sidebar />
        <div className="buy-credits-container">
          <h1>Buy Credits</h1>
        </div>
      </div>
    </main>
  );
};

export default BuyCredits;
