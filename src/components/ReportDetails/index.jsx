import React, { useEffect, useState } from "react";
import { amountForGateway, amountForProject } from "../../common/utility";
import CardContainer from "../CardContainer";
import Charts from "../PieChart";
import ReportHeading from "../ReportHeading";
import ReportsTable from "../ReportsTable";
import "./index.css";

// Utility

const ReportDetails = ({
  reportParams,
  gateway,
  project,
  report,
  projects,
  gateways,
}) => {
  const [chartData, setChartData] = useState(null);
  const reportAmount = report.map((_report) => _report.amount);
  const sum = reportAmount.reduce(function (acc, val) {
    return acc + val;
  }, 0);

  useEffect(() => {
    if (
      report === null ||
      report?.length === 0 ||
      projects === null ||
      projects?.length === 0 ||
      (reportParams?.projectId.length === 0 &&
        reportParams?.gatewayId.length === 0) ||
      (reportParams?.projectId.length > 0 && reportParams?.gatewayId.length > 0)
    ) {
      return;
    }
    if (
      reportParams?.projectId.length === 0 &&
      reportParams?.gatewayId.length > 0
    ) {
      const projectsChartData = projects.map((_project) => ({
        name: _project.name,
        value: parseInt(amountForProject(report, _project.projectId)),
      }));
      setChartData(projectsChartData);
    }
    if (
      reportParams?.projectId.length > 0 &&
      reportParams?.gatewayId.length === 0
    ) {
      const gatewayChartData = gateways.map((_gateway) => ({
        name: _gateway.name,
        value: parseInt(amountForGateway(report, _gateway.gatewayId)),
      }));
      setChartData(gatewayChartData);
    }
  }, [report, projects, gateway, gateways, project, reportParams]);
  console.log(reportParams, "params");
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
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
                setChartData={setChartData}
              />
            )}

          {reportParams?.projectId.length > 0 &&
            reportParams?.gatewayId.length > 0 && (
              <ReportsTable
                report={report}
                gateway={gateway}
                project={project}
              />
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
      </div>
      <div style={{ flex: "1" }}>
        {(chartData?.length > 0 &&
          reportParams?.projectId.length === 0 &&
          reportParams?.gatewayId.length > 0) ||
          (reportParams?.projectId.length > 0 &&
            reportParams?.gatewayId.length === 0 && (
              <Charts chartData={chartData} />
            ))}
      </div>
    </div>
  );
};

export default ReportDetails;
