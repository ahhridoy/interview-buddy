import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./_MyProfile.scss";

const MyProfile = () => {
   return (
      <main id='my-profile'>
         <Sidebar />
         <div className="my-profile-container">
            <h1>My Profile</h1>
         </div>
      </main>
   );
};

export default MyProfile;