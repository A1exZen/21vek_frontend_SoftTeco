import { $api } from '@/app/config/axios/api';
import { AxiosError } from 'axios';
import { BaseError, ensureError, ResponseError } from '@utils/ErrorHandler';
import { API_CONFIG } from '@/constants';
import {
  AddProductComparisonResponse,
  CatComparison,
} from '@models/product/api-comparison.ts';

export const getCategoryComparison = async (): Promise<CatComparison> => {
  try {
    return await $api.get<CatComparison, CatComparison>(
      `${API_CONFIG.ENDPOINTS.COMPARISON.USER_CAT_COMPARISON}`,
    );
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('Error', { cause: err });
  }
};

// export const getCatProdsComparison = async (url: string): Promise<ProductComparison[]> => {
//   try {
//     return await $api.get<ProductComparison[], ProductComparison[]>(
//       `${API_CONFIG.ENDPOINTS.COMPARISON.USER_CAT_PRODS_COMPARISON}/${url}`,
//     );
//   } catch (error) {
//     const axiosError = error as AxiosError<ResponseError>;
//     console.error('Ошибка запроса:', axiosError);
//     throw new Error(
//       axiosError.response?.data?.message || 'Ошибка при получении сравнения продуктов',
//     );
//   }
// };

export const addProductComparison = async (
  productId: number,
): Promise<AddProductComparisonResponse> => {
  try {
    return await $api.post<
      AddProductComparisonResponse,
      AddProductComparisonResponse
    >(`${API_CONFIG.ENDPOINTS.COMPARISON.CAT_COMPARISON}`, {
      product_id: productId,
    });
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка запроса:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при добавлении сравнения',
    );
  }
};


// export const deleteCatComparison = async (url: string): Promise<string> => {
//   try {
//     return await $api.delete<string, string>(
//       `${API_CONFIG.ENDPOINTS.COMPARISON.DEL_CAT_COMPARISON}/${url}`,
//     );
//   } catch (error) {
//     const axiosError = error as AxiosError<ResponseError>;
//     console.error('Ошибка запроса:', axiosError);
//     throw new Error(
//       axiosError.response?.data?.message || 'Ошибка при удалении категории из сравнения',
//     );
//   }
// };

