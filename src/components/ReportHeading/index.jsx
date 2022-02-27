import React from "react";

const ReportHeading = ({ reportParams, gateway, project }) => {
  return (
    <div className='report_heading'>
      {reportParams?.projectId.length === 0 &&
        reportParams?.gatewayId.length === 0 && (
          <p>All Projects | All Gateways</p>
        )}
      {reportParams?.projectId.length === 0 &&
        reportParams?.gatewayId.length > 0 && (
          <p>All Projects | {gateway?.name && gateway.name}</p>
        )}
      {reportParams?.projectId.length > 0 &&
        reportParams?.gatewayId.length > 0 && (
          <p>
            {project?.name && project.name} | {gateway?.name && gateway.name}
          </p>
        )}
      {reportParams?.projectId.length > 0 &&
        reportParams?.gatewayId.length === 0 && (
          <p>{project?.name && project.name} | All Gateways</p>
        )}
    </div>
  );
};

export default ReportHeading;
