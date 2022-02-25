import React from "react";
import "./index.css";

const Button = ({ variant, label, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={variant ? variant : "primary"}>
      {label}
    </button>
  );
};

export default Button;
