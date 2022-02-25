import React from "react";
import SectionHeaderForm from "../SectionHeaderForm";
import SectionHeaderInfo from "../SectionHeaderInfo";
import "./index.css";

const SectionHeader = ({ getReportData }) => {
  return (
    <div className='section_header_container'>
      <SectionHeaderInfo />
      <SectionHeaderForm getReportData={getReportData} />
    </div>
  );
};

export default SectionHeader;
