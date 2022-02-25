import apiManager from "../services/api";

export const createReport = (params) =>
  apiManager.post("mock-api/api/report", params);
