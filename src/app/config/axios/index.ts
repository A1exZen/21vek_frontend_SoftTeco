import axios from 'axios';
import Cookies from 'js-cookie';
import { interceptors } from './interceptors';
import { API_CONFIG } from '@constants/app.config';

export const $api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

$api.interceptors.request.use(async (config) => {
  const accessToken = Cookies.get('accessToken');
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

$api.interceptors.response.use(interceptors.onSuccess, interceptors.onError);
