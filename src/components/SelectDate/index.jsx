import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

import "./index.css";

const SelectDate = ({
  label,
  name,
  onSelect,
  date,
  minDate = null,
  maxDate = new Date(),
}) => {
  const [selectedDate, setSelectedDate] = useState(date ?? null);

  const onChange = (date) => {
    console.log(date);
    setSelectedDate(date);
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    onSelect && onSelect({ name, value: formattedDate });
  };

  return (
    <ReactDatePicker
      className='date_picker'
      dateFormat={"yyyy-MM-dd"}
      name={name}
      placeholderText={label}
      minDate={minDate}
      maxDate={maxDate}
      selected={selectedDate}
      onChange={onChange}
      autoComplete={"off"}
    />
  );
};

export default SelectDate;
