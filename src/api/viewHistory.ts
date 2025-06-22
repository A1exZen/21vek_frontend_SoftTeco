import { ViewedProduct } from '@models/product/api.ts';
import { $api } from '@app/config/axios/api.ts';
import { API_CONFIG } from '@/constants';
import { AxiosError } from 'axios';
import { ResponseError } from '@utils/ErrorHandler';

export const getViewHistory = async (): Promise<ViewedProduct[]> => {
  try {
    return await $api.get<ViewedProduct[], ViewedProduct[]>(
      `${API_CONFIG.ENDPOINTS.USER.ACTIONS}/view`);
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка при получении истории просмотра:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при получении истории просмотра',
    );
  }
};

export const addToViewHistory = async (productId: number): Promise<void> => {
  try {
    return await $api.post(
      `${API_CONFIG.ENDPOINTS.USER.ACTIONS}/view/${productId}`
    );
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка добавления в историю просмотров:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при добавлении в историю просмотров'
    );
  }
};