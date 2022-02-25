import React from "react";
import "./index.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SelectDate = ({label}) => {
  return (
    <ReactDatePicker className='date_picker' placeholderText={label} />
  );
};

export default SelectDate;
