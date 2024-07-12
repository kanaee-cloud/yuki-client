

import axios from 'axios';

const API_URL = 'https://yuki-server.vercel.app/api/auth'; 

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
