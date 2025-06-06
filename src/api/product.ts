import { $api } from '@/app/config/axios/api';
import {
  Product,
  ProductFilters
} from '@models/product/api.ts';
import { API_CONFIG } from '@/constants';
import { AxiosError } from 'axios';
import { ResponseError } from '@utils/ErrorHandler';

const createFilterParams = (filters: ProductFilters): URLSearchParams => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (Array.isArray(value)) {
        value.forEach(item => params.append(key, item.toString()));
      } else {
        params.append(key, value.toString());
      }
    }
  });

  return params;
};

export const getProducts = async (filters: ProductFilters = {}): Promise<Product[]> => {
  try {
    const params = createFilterParams(filters);
    const queryString = params.toString();

    const response = await $api.get<Product[]>(
      `${API_CONFIG.ENDPOINTS.PRODUCTS.GET_ALL}${queryString ? `?${queryString}` : ''}`
    );

    console.log("Продукты получены:", response);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error("Ошибка получения продуктов:", axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при получении продуктов'
    );
  }
};

export const getProductById = async (id: number): Promise<Product> => {
  try {
    const response = await $api.get<Product>(
      `${API_CONFIG.ENDPOINTS.PRODUCTS.GET_BY_ID}/${id}`
    );
    console.log("Продукт получен:", response);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error("Ошибка получения продукта:", axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при получении продукта'
    );
  }
};

export const getPriceRange = async (categoryId?: number): Promise<{ min: number; max: number }> => {
  try {
    const params = categoryId ? `?categoryId=${categoryId}` : '';
    const response = await $api.get<{ min: number; max: number }>(
      `${API_CONFIG.ENDPOINTS.PRODUCTS.GET_PRICE_RANGE}${params}`
    );

    console.log("Диапазон цен получен:", response);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error("Ошибка получения диапазона цен:", axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при получении диапазона цен'
    );
  }
};
