import { $api } from '@/app/config/axios/api';
import {
  Category,
  HeaderCategoryResponse,
  ResponseGetAllCategories
} from '@models/category/api.ts';
// import { API_CONFIG } from '@/constants';
import { AxiosError } from 'axios';
import { ResponseError } from '@utils/ErrorHandler';
import { API_CONFIG } from '@/constants';

export const getAllCategories = async (
  sort: number = 0,
): Promise<ResponseGetAllCategories> => {
  try {
    return await $api.get<ResponseGetAllCategories, ResponseGetAllCategories>(
      `${API_CONFIG.ENDPOINTS.CATEGORY.GET_ALL}/${sort}`,
    );
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка запроса:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при получении категорий',
    );
  }
};

export const getCategoryByUrl = async (
  url: string,
): Promise<Category> => {
  try {
    return await $api.get<Category, Category>(
      `${API_CONFIG.ENDPOINTS.CATEGORY.GET_BY_URL}?url=${url}`,
    );
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
      return await $api.get<HeaderCategoryResponse, HeaderCategoryResponse>(
        `${API_CONFIG.ENDPOINTS.CATEGORY.GET_HEADER_CAT}`,
      );
    } catch (error) {
      const axiosError = error as AxiosError<ResponseError>;
      console.error('Ошибка запроса:', axiosError);
      throw new Error(
        axiosError.response?.data?.message || 'Ошибка при получении категорий',
      );
    }
  };
