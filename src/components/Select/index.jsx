import React from "react";
import "./index.css";

const Select = ({ name, options, onSelect }) => {
  const selectOption = (event) => {
    const {name, value} = event.target;
    onSelect && onSelect({name, value})
  };

  return (
    <select className='select' name={name} onChange={selectOption}>
      {options.map((option) => (
        <option key={`${option.id}`} label={option.name} value={option.id} />
      ))}
    </select>
  );
};

export default Select;
