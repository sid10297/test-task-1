import axios from "axios";

const apiManager = axios.create({
  baseURL: process.env.BASE_URL,
});

export default apiManager;



