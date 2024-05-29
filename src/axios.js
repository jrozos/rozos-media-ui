import axios from "axios";

const apiClient = axios.create({
  // baseURL: "https://rozos-media.me/api", // Laravel API base URL
  baseURL: "https://app.rozosmedia.com/api", // Laravel API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
