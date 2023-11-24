// Axios import
import axios from 'axios';



// API URL
const BASE_URL =  'https://dummyjson.com/'

// Axios configuration
axios.defaults.withCredentials = true;
export const API_SERVICE =  axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 900000
});
