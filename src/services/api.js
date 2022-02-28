import axios from "axios";

const apiManager = axios.create({
  baseURL: `http://178.63.13.157:8090`,
});

export default apiManager;
