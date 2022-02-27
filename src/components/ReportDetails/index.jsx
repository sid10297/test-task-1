import React, { useState } from "react";
import CardContainer, { HalfCardContainer } from "../CardContainer";
import ReportHeading from "../ReportHeading";
import ReportsTable from "../ReportsTable";
import "./index.css";

const ReportDetails = ({
  reportParams,
  gateway,
  project,
  report,
  projects,
  gateways,
}) => {
  const reportAmount = report.map((_report) => _report.amount);
  const sum = reportAmount.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  return (
    <>
      <CardContainer>
        <ReportHeading
          reportParams={reportParams}
          gateway={gateway}
          project={project}
        />

        {reportParams?.projectId.length === 0 &&
          reportParams?.gatewayId.length === 0 && (
            <ReportsTable
              report={report}
              projects={projects}
              gateways={gateways}
            />
          )}

        {reportParams?.projectId.length === 0 &&
          reportParams?.gatewayId.length > 0 && (
            <ReportsTable
              report={report}
              projects={projects}
              gateway={gateway}
            />
          )}

        {reportParams?.projectId.length > 0 &&
          reportParams?.gatewayId.length > 0 && (
            <ReportsTable report={report} gateway={gateway} project={project} />
          )}

        {reportParams?.projectId.length > 0 &&
          reportParams?.gatewayId.length === 0 && (
            <ReportsTable
              report={report}
              project={project}
              gateways={gateways}
            />
          )}
      </CardContainer>
      <CardContainer>
        <div className='footer_total_amount'>
          <p className='total'>Total: {sum.toFixed(2)} USD</p>
        </div>
      </CardContainer>
    </>
  );
};

export default ReportDetails;
