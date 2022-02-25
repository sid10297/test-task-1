import React from "react";
import "./index.css";

const Button = ({ variant, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={variant ? variant : "primary"}>
      {label}
    </button>
  );
};

export default Button;
