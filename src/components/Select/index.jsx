import React from "react";
import "./index.css";

const Select = ({ select_name, select_id, option_value, option_label }) => {
  return (
    <select className='select' name={select_name} id={select_id}>
      <option value={option_value}>{option_label}</option>
    </select>
  );
};

export default Select;
