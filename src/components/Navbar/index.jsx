import React from "react";
import BrandLogo from "../BrandLogo";
import HamburgerMenu from "../HamburgerMenu";
import UserProfile from "../UserProfile";
import "./index.css";

const Navbar = () => {
  return (
    <div className='nav_container'>
      <div className='nav_left_wrapper'>
        <BrandLogo />
        <HamburgerMenu />
      </div>
      <div className='nav_right_wrapper'>
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;
