import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://rozos-media.me/api", // Laravel API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
