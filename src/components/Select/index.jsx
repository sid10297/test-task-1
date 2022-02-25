import React from "react";
import "./index.css";

const Select = ({ name, options, onSelect, placeholder, defaultOption }) => {
  const selectOption = (event) => {
    const { name, value } = event.target;
    console.log(name, value, "=====");
    onSelect && onSelect({ name, value });
  };

  return (
    <select
      placeholder={placeholder}
      className='select'
      name={name}
      onChange={selectOption}
      defaultValue={defaultOption.value}>
      <option label={defaultOption.name} value={defaultOption.value} />

      {options.map((option) => (
        <option key={`${option.id}`} label={option.name} value={option.id} />
      ))}
    </select>
  );
};

export default Select;
