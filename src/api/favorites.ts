import { $api } from '@app/config/axios/api';
import { API_CONFIG } from '@/constants';
import { AxiosError } from 'axios';
import { BaseError, ensureError, ResponseError } from '@utils/ErrorHandler';
import { IFavoriteItem } from '@/models/favorite/favorite';


export const addToFavorites = async (productId: number): Promise<void> => {
  try {
    return await $api.post(
      `${API_CONFIG.ENDPOINTS.USER_ACTIONS.ACTIONS}/favorite/${productId}`
    );
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка добавления в избранное:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при добавлении в избранное'
    );
  }
};

export const getFavorites = async (): Promise<IFavoriteItem[]> => {
  try {
    return await $api.get(`${API_CONFIG.ENDPOINTS.USER_ACTIONS.ACTIONS}/favorite`);
  } catch (error) {
    const axiosError = error as AxiosError<ResponseError>;
    console.error('Ошибка получения избранных:', axiosError);
    throw new Error(
      axiosError.response?.data?.message || 'Ошибка при получении избранных',
    );
  }
};

export const removeFavorites = async (idProduct: number): Promise<void> => {
  try {
    await $api.delete(
      `${API_CONFIG.ENDPOINTS.USER_ACTIONS.ACTIONS}/favorite/${idProduct}`,
    );
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('failed to delete favorite item', { cause: err });
  }
};
