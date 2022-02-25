import React from "react";
import SectionHeaderForm from "../SectionHeaderForm";
import SectionHeaderInfo from "../SectionHeaderInfo";
import "./index.css";

const SectionHeader = () => {
  return (
    <div className='section_header_container'>
      <SectionHeaderInfo />
      <SectionHeaderForm />
    </div>
  );
};

export default SectionHeader;
