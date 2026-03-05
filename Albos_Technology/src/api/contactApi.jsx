import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000, // prevents infinite waiting
});

// interceptor (VERY USEFUL for debugging)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("AXIOS BACKEND ERROR:");
    console.error("Status:", error?.response?.status);
    console.error("Data:", error?.response?.data);
    console.error("Message:", error.message);
    return Promise.reject(error);
  }
);

export const sendContact = async (data) => {
  return API.post("/form/submit", JSON.stringify(data));
};