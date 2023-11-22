// Axios import
import axios from 'axios';



// API URL
const BASE_URL =  'https://dummyjson.com/'

// Axios configuration
axios.defaults.withCredentials = true;
export default axios.create({
  baseURL: BASE_URL
});
