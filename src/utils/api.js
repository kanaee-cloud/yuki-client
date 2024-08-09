import axios from "axios";

const API_URL = "https://server-yuki.vercel.app/api/auth";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const uploadProfilePic = (formData) => {
  return apiClient.post("/upload-profile-pic", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default apiClient;
