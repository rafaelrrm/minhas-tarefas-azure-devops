import axios from 'axios';

export const axiosBackendInstace = axios.create({
  baseURL: '/api',
  headers: {
    'Content-type': 'application/json',
  },
});
