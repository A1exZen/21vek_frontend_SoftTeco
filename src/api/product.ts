import { $api } from '@/app/config/axios/api';
import { API_CONFIG } from '@/constants';
import {
  FilterParams,
  PaginatedResponse,
  Product,
  SearchResponse,
} from '@models/product/api.ts';
import { BaseError, ResponseError } from '@utils/ErrorHandler';
import { AxiosError } from 'axios';

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
    console.error('Ошибка запроса:', error);
    throw new BaseError('Ошибка при фильтрации продуктов');
  }
};

export const getProductById = async (id: number): Promise<Product> => {
  try {
    return await $api.get<Product, Product>(
      `${API_CONFIG.ENDPOINTS.PRODUCTS.GET_BY_ID}/${id}`,
    );
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

export const searchProducts = async (
  litters: string,
): Promise<SearchResponse> => {
  try {
    const queryParams = new URLSearchParams();
    queryParams.append('litters', litters);

    return await $api.get(
      `${API_CONFIG.ENDPOINTS.PRODUCTS.SEARCH}?${queryParams.toString()}`,
    );
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка получения брендов:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при получении брендов',
    );
  }
};
