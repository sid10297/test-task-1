export const amountForProject = (report, pId) => {
  const filteredProjects = report.filter(
    (_report) => _report.projectId === pId
  );
  const totalAmountForFilteredProjects = filteredProjects.reduce(
    (result, proj) => result + proj.amount,
    0
  );
  return totalAmountForFilteredProjects.toFixed(2);
};

export const amountForGateway = (report, gId) => {
  const filteredGateways = report.filter(
    (_report) => _report.gatewayId === gId
  );
  const totalAmountForFilteredGateways = filteredGateways.reduce(
    (result, proj) => result + proj.amount,
    0
  );
  return totalAmountForFilteredGateways.toFixed(2);
};
