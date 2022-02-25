import React from "react";
import "./index.css";

const UserProfile = () => {
  return (
    <>
      <div className='user_profile'>
        <p className='user_initials'>JD</p>
      </div>
      <div className="user_name_wrapper" >
        <p className='user_name'>John Doe</p>
      </div>
    </>
  );
};

export default UserProfile;
