import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./_BuyCredits.scss";

const BuyCredits = () => {
   return (
      <main id='buy-credits'>
         <Sidebar />
         <div className="buy-credits-container">
            <h1>Buy Credits</h1>
         </div>
      </main>
   );
};

export default BuyCredits;