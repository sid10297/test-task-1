import React from "react";
import hamburger_menu from "../../assets/images/Group.svg";
import "./index.css";

const HamburgerMenu = () => {
  return (
    <div className='hamburger_menu'>
      <img src={hamburger_menu} alt='hamburger_menu' />
    </div>
  );
};

export default HamburgerMenu;
