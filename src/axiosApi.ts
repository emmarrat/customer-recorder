import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'http://16.170.241.92/api/v1/'
});

export default axiosApi;