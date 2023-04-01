import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'http://ec2-13-50-244-5.eu-north-1.compute.amazonaws.com/api/v1/'
});

export default axiosApi;