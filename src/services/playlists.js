import axios from "axios";

const baseUrl = "http://localhost:8000";

const get = (slug) => {
  // const request = axios.get(`${baseUrl}/api/f/generate/${slug}/`);
  const request = axios.get("http://10.102.1.43:8000/tracks");
  return request.then((response) => response.data);
};

export default {
  get,
};
