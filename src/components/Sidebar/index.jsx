import React from "react";
import "./index.css";
import sidebarIconOne from "../../assets/images/Sidebar/Layer 1.svg";
import sidebarIconTwo from "../../assets/images/Sidebar/Layer 1 (1).svg";
import sidebarIconThree from "../../assets/images/Sidebar/Layer 1 (2).svg";
import sidebarIconFour from "../../assets/images/Sidebar/Layer 1 (3).svg";
import sidebarIconFive from "../../assets/images/Sidebar/Layer 1 (4).svg";

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
      <img src={sidebarIconOne} alt='icon_one' />
      <img src={sidebarIconTwo} alt='icon_one' />
      <img src={sidebarIconThree} alt='icon_one' />
      <img src={sidebarIconFour} alt='icon_one' />
      <img src={sidebarIconFive} alt='icon_one' />
    </div>
  );
};

export default Sidebar;
