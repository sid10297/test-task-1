import React, { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import "./index.css";
import NoReports from "../../assets/images/Reports/NoReports.svg";
import { getProjects } from "../../apis/project";
import { getGateways } from "../../apis/gateway";
import ReportDetails from "../../components/ReportDetails";
import { FIRST_SCREEN_MESSAGE, NO_REPORTS_FOUND } from "../../Constants";

const NoReportsFound = () => {
  return (
    <div className='no_reports_container'>
      <p className='text_center heading'>No Reports</p>
      <p className='text_center subtext'>{NO_REPORTS_FOUND}</p>
      <img
        className='no_reports_image'
        src={NoReports}
        alt='No reports found'
      />
    </div>
  );
};

const EmptyForm = () => {
  return (
    <div className='no_reports_container'>
      <p className='text_center heading'>Welcome</p>
      <p className='text_center subtext'>{FIRST_SCREEN_MESSAGE}</p>
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
  const [reportParams, setReportParams] = useState(null);
  const [project, setProject] = useState(null);
  const [gateway, setGateway] = useState(null);
  const [projects, setProjects] = useState(null);
  const [gateways, setGateways] = useState(null);

  useEffect(() => {
    if (reportParams !== null) {
      getProjectDetails();
      getGatewayDetails();
    }
  }, [reportParams]);

  const getProjectDetails = async () => {
    try {
      const res = await getProjects();
      res.data.data.map((project) => {
        if (project.projectId === reportParams.projectId) {
          return setProject(project);
        } else {
          return setProjects(res.data.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getGatewayDetails = async () => {
    try {
      const res = await getGateways();
      res.data.data.map((gateway) => {
        if (gateway.gatewayId === reportParams.gatewayId) {
          return setGateway(gateway);
        } else {
          return setGateways(res.data.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getReportData = (reportData, params) => {
    setReport(reportData);
    setReportParams(params);
  };
  return (
    <div className='reports_container'>
      <SectionHeader getReportData={getReportData} />
      {report === null && <EmptyForm />}
      {report && report.length === 0 && <NoReportsFound />}
      {report && report.length > 0 && (
        <ReportDetails
          reportParams={reportParams}
          gateway={gateway}
          project={project}
          report={report}
          projects={projects}
          gateways={gateways}
        />
      )}
    </div>
  );
};

export default Reports;
