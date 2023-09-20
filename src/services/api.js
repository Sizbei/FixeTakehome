import axios from "axios";

const URL =
  "https://dcxgxxl3oym6r3wslpzpmrpac40fjebf.lambda-url.us-east-1.on.aws";

const apiClient = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
});

export const getRestaurants = function () {
  return apiClient.get(URL).then((res) => res.data);
};
