import axios from "axios";

const baseUrl = "http://10.102.26.141:8000";

const get = () => {
  const request = axios.get(`${baseUrl}/tracks`);
  return request.then((response) => response.data);
};

export default {
  get,
};
