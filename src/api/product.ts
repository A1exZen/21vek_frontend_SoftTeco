import { $api } from '@/app/config/axios/api';
import { API_CONFIG } from '@/constants';
import { Product } from '@models/product/api.ts';
import { ResponseError } from '@utils/ErrorHandler';
import { AxiosError } from 'axios';

export interface Pagination {
  page?: number;
  size: number;
  total: number;
}

export interface PaginatedResponse {
  data: Product[];
  pagination: Pagination;
}

export interface FilterParams {
  page?: number;
  size: number;
  brand?: string;
  price_filtr?: 'asc' | 'desc';
  popular?: boolean;
  min_price?: number;
  max_price?: number;
}

export const getAllProducts = async (
  params: { sort?: number; page?: number; size?: number } = {},
): Promise<PaginatedResponse> => {
  try {
    const queryParams = new URLSearchParams();
    if (params.sort) queryParams.append('sort', params.sort.toString());
    if (params.page !== undefined)
      queryParams.append('page', params.page.toString());
    if (params.size) queryParams.append('size', params.size.toString());

    return await $api.get<PaginatedResponse, PaginatedResponse>(
      `${API_CONFIG.ENDPOINTS.PRODUCTS.FILTER}?${queryParams.toString()}`,
    );
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка запроса getAllProducts:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при получении продуктов',
    );
  }
};

export const filterProducts = async (
  params: FilterParams,
): Promise<PaginatedResponse> => {
  try {
    const queryParams = new URLSearchParams();
    if (params.page !== undefined)
      queryParams.append('page', params.page.toString());
    if (params.size) queryParams.append('size', params.size.toString());
    if (params.brand) queryParams.append('brand', params.brand);
    if (params.price_filtr)
      queryParams.append('price_filtr', params.price_filtr);
    if (params.popular) queryParams.append('popular', 'true');
    if (params.min_price)
      queryParams.append('min_price', params.min_price.toString());
    if (params.max_price)
      queryParams.append('max_price', params.max_price.toString());

    console.log('QueryParams', queryParams);
    return await $api.get<PaginatedResponse, PaginatedResponse>(
      `${API_CONFIG.ENDPOINTS.PRODUCTS.FILTER}?${queryParams.toString()}`,
    );
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка запроса:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при фильтрации продуктов',
    );
  }
};

export const getProductById = async (id: number): Promise<Product> => {
  try {
    const response = await $api.get<Product>(
      `${API_CONFIG.ENDPOINTS.PRODUCTS.GET_BY_ID}/${id}`,
    );
    console.log('Продукт получен:', response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка получения продукта:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при получении продукта',
    );
  }
};

export const getBrands = async (): Promise<string[]> => {
  try {
    return await $api.get<string[], string[]>(
      `${API_CONFIG.ENDPOINTS.PRODUCTS.GET_BRANDS}`,
    );
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка получения брендов:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при получении брендов',
    );
  }
};

export const getPriceRange = async (
  categoryId?: number,
): Promise<{
  min: number;
  max: number;
}> => {
  try {
    const params = categoryId ? `?categoryId=${categoryId}` : '';
    const response = await $api.get<{ min: number; max: number }>(
      `${API_CONFIG.ENDPOINTS.PRODUCTS.GET_PRICE_RANGE}${params}`,
    );
    console.log('Диапазон цен получен:', response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка получения диапазона цен:', axiosError);
    throw new Error(
      axiosError.response?.data?.message ||
        'Ошибка при получении диапазона цен',
    );
  }
};
