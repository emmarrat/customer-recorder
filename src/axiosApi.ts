import axios from "axios";

const axiosApi = axios.create({
  baseURL: 'http://ec2-16-16-90-18.eu-north-1.compute.amazonaws.com/api/v1'
});

export default axiosApi;