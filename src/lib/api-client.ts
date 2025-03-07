import Axios, { InternalAxiosRequestConfig } from 'axios';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    // Set the Accept header
    config.headers.Accept = 'application/json';

    // Set the language header
    const language = 'en';
    config.headers['Accept-Language'] = language;

    // Set the Authorization header
    // const token = localStorage.getItem('token');
    // config.headers['Authorization'] = token ? `Token ${token}` : '';
  }

  config.withCredentials = true;
  return config;
}

// API instance
export const api = Axios.create({ baseURL: process.env.API_URL });

// Apply the request and response interceptors
api.interceptors.request.use(authRequestInterceptor);
