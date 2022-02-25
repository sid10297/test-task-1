import React from "react";
import "./index.css";
import BarChart from "../../assets/images/Sidebar/BarChart.svg";
import CreditCard from "../../assets/images/Sidebar/CreditCard.svg";
import More from "../../assets/images/Sidebar/More.svg";
import PieChart from "../../assets/images/Sidebar/PieChart.svg";
import Logout from "../../assets/images/Sidebar/Logout.svg";

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
      <img src={BarChart} alt='Bar Chart' />
      <img src={CreditCard} alt='Credit Card' />
      <img src={More} alt='More' />
      <img src={PieChart} alt='Pie Chart' />
      <img src={Logout} alt='Logout' />
    </div>
  );
};

export default Sidebar;
