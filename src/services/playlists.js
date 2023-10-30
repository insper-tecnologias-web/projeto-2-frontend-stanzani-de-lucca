import axios from "axios";

const baseUrl = "http://localhost:3000";

const get = () => {
  const request = axios.get(`${baseUrl}/tracks`);
  return request.then((response) => response.data);
};

export default {
  get,
};
