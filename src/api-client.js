import axios from 'axios'; 

//api-clinet
const apiClient = axios.create({
  baseURL: 'https://api.github.com/gists/public'
});

export default apiClient;