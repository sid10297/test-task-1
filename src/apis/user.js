import apiManager from "../services/api"

export const getUsers = () => apiManager.get('mock-api/api/users');