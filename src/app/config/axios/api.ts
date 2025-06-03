import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { interceptors } from './interceptors';
import { API_CONFIG } from '@constants/app.config';

export const $api = (() => {
  return axios.create({
    baseURL: API_CONFIG.BASE_URL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });
})();

$api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

$api.interceptors.response.use(interceptors.onSuccess, interceptors.onError);
