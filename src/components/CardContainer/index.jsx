import React from "react";
import "./index.css";

const CardContainer = ({ children }) => {
  return <div className={`card_container`}>{children}</div>;
};

export default CardContainer;
