import axios from "axios";

const baseUrl = "http://localhost:8000";

const get = (slug) => {
  const request = axios.get(`${baseUrl}/api/f/generate/${slug}/`);
  return request.then((response) => response.data);
};

export default {
  get,
};
