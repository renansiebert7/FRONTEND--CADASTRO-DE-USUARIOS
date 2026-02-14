import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://node-backend-cadastro-de-usuarios-1.onrender.com',
});

export default api;

