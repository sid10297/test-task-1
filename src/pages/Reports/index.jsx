import React, { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import "./index.css";
import NoReports from "../../assets/images/Reports/NoReports.svg";

const NoReportsFound = () => {
  return (
    <div className='no_reports_container'>
      <p className='text_center heading'>No Reports</p>
      <p className='text_center subtext'>
        Currently you have no data for the reports to be generated. <br /> Once
        you start generating traffic through Balance application <br /> the
        reports will be shown.
      </p>
      <img
        className='no_reports_image'
        src={NoReports}
        alt='No reports found'
      />
    </div>
  );
};

const Reports = () => {
  const [report, setReport] = useState(null);

  const getReportData = (reportData) => {
    setReport(reportData);
  };
  return (
    <div className='reports_container'>
      <SectionHeader getReportData={getReportData} />
      {report && report.length === 0 && <NoReportsFound />}
    </div>
  );
};

export default Reports;
