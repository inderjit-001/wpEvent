import axios from 'axios';

// Paste your valid token here
const JWT_TOKEN = import.meta.env.VITE_JWT_TOKEN;

const api = axios.create({
  baseURL: 'http://jobmanage.local/wp-json/all-events/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${JWT_TOKEN}`,
  },
});

export default api;
