import apiManager from "../services/api"

export const getGateways = () => apiManager.get('mock-api/api/gateways');