import React, { useCallback, useState } from "react";
import CardContainer from "../CardContainer";
import "./index.css";

const ReportsTable = ({ report, projects, gateways, gateway, project }) => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [selectedGatewayId, setSelectedGatewayId] = useState(null);
  // const [amount, setAmount] = useState(null);
  console.log(report);
  console.log(projects);
  console.log(gateways);
  // _project.projectId === _report.projectId

  const amountForProject = (pId) => {
    const filteredProjects = report.filter(
      (_report) => _report.projectId === pId
    );
    const totalAmountForFilteredProjects = filteredProjects.reduce(
      (result, proj) => result + proj.amount,
      0
    );
    return totalAmountForFilteredProjects.toFixed(2);
  };

  const amountForGateway = (gId) => {
    const filteredGateways = report.filter(
      (_report) => _report.gatewayId === gId
    );
    const totalAmountForFilteredGateways = filteredGateways.reduce(
      (result, proj) => result + proj.amount,
      0
    );
    return totalAmountForFilteredGateways.toFixed(2);
  };

  return (
    <CardContainer>
      {projects &&
        gateways &&
        projects?.map((_project) => {
          return (
            <div key={`${_project.projectId}-project_header`}>
              <CardContainer>
                <div
                  id={_project.projectId}
                  className='project_heading'
                  onClick={() =>
                    setSelectedProjectId(
                      selectedProjectId === _project.projectId
                        ? null
                        : _project.projectId
                    )
                  }>
                  <p>{_project.name}</p>
                  <p>{amountForProject(_project.projectId)} USD</p>
                </div>
                <div
                  className={`collapse_body ${selectedProjectId} === ${_project.projectId} ? "show" : "hide"`}>
                  {selectedProjectId === _project.projectId && (
                    <tr className='collapse_col'>
                      <th className='table_data'>Date</th>
                      <th className='table_data'>Gateway</th>
                      <th className='table_data'>Transaction ID</th>
                      <th className='table_data'>Amount</th>
                    </tr>
                  )}
                  {report?.map((_report) => {
                    if (
                      selectedProjectId === _project.projectId &&
                      _report.projectId === selectedProjectId
                    )
                      return (
                        <tr className='collapse_col' key={_report.paymentId}>
                          <td className='table_data'>{_report.created}</td>
                          {gateways.map((_gateway) => {
                            if (_report.gatewayId === _gateway.gatewayId) {
                              return (
                                <td className='table_data'>{_gateway.name}</td>
                              );
                            }
                          })}
                          <td className='table_data'>{_report.paymentId}</td>
                          <td className='table_data'>{_report.amount} USD</td>
                        </tr>
                      );
                  })}
                </div>
              </CardContainer>
            </div>
          );
        })}
      {projects &&
        gateway &&
        projects?.map((_project) => {
          return (
            <div key={_project.projectId}>
              <CardContainer>
                <div
                  id={_project.projectId}
                  className='project_heading'
                  onClick={() =>
                    setSelectedProjectId(
                      selectedProjectId === _project.projectId
                        ? null
                        : _project.projectId
                    )
                  }>
                  <p>{_project.name}</p>
                  <p>{amountForProject(_project.projectId)} USD</p>
                </div>

                <div
                  className={`collapse_body ${selectedProjectId} === ${_project.projectId} ? "show" : "hide"`}>
                  {selectedProjectId === _project.projectId && (
                    <tr className='collapse_col'>
                      <th className='table_data'>Date</th>
                      <th className='table_data'>Transaction ID</th>
                      <th className='table_data'>Amount</th>
                    </tr>
                  )}
                  {report?.map((_report) => {
                    if (
                      selectedProjectId === _project.projectId &&
                      _report.projectId === selectedProjectId
                    )
                      return (
                        <tr className='collapse_col' key={_report.paymentId}>
                          <td className='table_data'>{_report.created}</td>
                          <td className='table_data'>{_report.paymentId}</td>
                          <td className='table_data'>{_report.amount} USD</td>
                        </tr>
                      );
                  })}
                </div>
              </CardContainer>
            </div>
          );
        })}
      {project && gateway && (
        <div>
          <tr className='collapse_col'>
            <th className='table_data'>Date</th>
            <th className='table_data'>Transaction ID</th>
            <th className='table_data'>Amount</th>
          </tr>
          {report?.map((_report) => {
            return (
              <tr className='collapse_col' key={_report.paymentId}>
                <td className='table_data'>{_report.created}</td>
                <td className='table_data'>{_report.paymentId}</td>
                <td className='table_data'>{_report.amount} USD</td>
              </tr>
            );
          })}
        </div>
      )}

      {project &&
        gateways &&
        gateways?.map((_gateway) => {
          return (
            <>
              <CardContainer>
                <div
                  id={_gateway.gatewayId}
                  className='project_heading'
                  onClick={() =>
                    setSelectedGatewayId(
                      selectedGatewayId === _gateway.gatewayId
                        ? null
                        : _gateway.gatewayId
                    )
                  }>
                  <p>{_gateway.name}</p>
                  <p>{amountForGateway(_gateway.gatewayId)} USD</p>
                </div>

                <div
                  className={`collapse_body ${selectedGatewayId} === ${_gateway.gatewayId} ? "show" : "hide"`}>
                  {selectedGatewayId === _gateway.gatewayId && (
                    <tr className='collapse_col'>
                      <th className='table_data'>Date</th>
                      <th className='table_data'>Transaction ID</th>
                      <th className='table_data'>Amount</th>
                    </tr>
                  )}

                  {report?.map((_report) => {
                    if (
                      selectedGatewayId === _gateway.gatewayId &&
                      _report.gatewayId === selectedGatewayId
                    )
                      return (
                        <tr className='collapse_col'>
                          <td className='table_data'>{_report.created}</td>
                          <td className='table_data'>{_report.paymentId}</td>
                          <td className='table_data'>{_report.amount} USD</td>
                        </tr>
                      );
                  })}
                </div>
              </CardContainer>
            </>
          );
        })}
    </CardContainer>
  );
};

export default ReportsTable;
