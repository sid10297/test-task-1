import apiManager from "../services/api"

export const getProjects = () => apiManager.get('mock-api/api/projects');