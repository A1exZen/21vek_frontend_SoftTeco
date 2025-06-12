import { $api } from '@/app/config/axios/api';
import { Category, HeaderCategoryResponse } from '@models/category/api.ts';
import { AxiosError } from 'axios';
import { ResponseError } from '@utils/ErrorHandler';
import { API_CONFIG } from '@/constants';

export const getAllCategories = async (
  sort: number = 0,
): Promise<Category[]> => {
  try {
    const response = await $api.get<Category[]>(
      `${API_CONFIG.ENDPOINTS.CATEGORY.GET_ALL}/{sort_int}?sort=${sort}`,
    );
    console.log('Ответ от API:', response);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка запроса:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при получении категорий',
    );
  }
};

export const getHeaderCategories =
  async (): Promise<HeaderCategoryResponse> => {
    try {
      const response = await $api.get<HeaderCategoryResponse>(
        `${API_CONFIG.ENDPOINTS.CATEGORY.GET_HEADER_CAT}`,
      );
      console.log('Ответ от API:', response);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ResponseError>;
      console.error('Ошибка запроса:', axiosError);
      throw new Error(
        axiosError.response?.data?.message || 'Ошибка при получении категорий',
      );
    }
  };
