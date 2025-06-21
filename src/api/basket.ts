import { $api } from '@app/config/axios/api';
import { API_CONFIG } from '@/constants';
import { BaseError, ensureError } from '@utils/ErrorHandler';
import {
  RequestAddBasketItem,
  ResponseGetAllBasketItems,
  ResponseAddBasketItem,
  RequestDeleteBasketItem,
  ResponseDeleteBasketItem,
  RequestEditQuantity,
  ResponseEditQuantity,
} from '@models/basket/api';

export const getAllBasketItems =
  async (): Promise<ResponseGetAllBasketItems> => {
    try {
      return await $api.get<
        ResponseGetAllBasketItems,
        ResponseGetAllBasketItems
      >(`${API_CONFIG.ENDPOINTS.BASKET.GET_ALL}`);
    } catch (error) {
      const err = ensureError(error);
      throw new BaseError('getting basket items failed', { cause: err });
    }
  };

export const addBasketItem = async (
  id: number,
): Promise<ResponseAddBasketItem> => {
  try {
    return await $api.post<
      ResponseAddBasketItem,
      ResponseAddBasketItem,
      RequestAddBasketItem
    >(`${API_CONFIG.ENDPOINTS.BASKET.ADD_ITEM}?id_prod=${id}`);
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('adding basket item failed', { cause: err });
  }
};

export const deleteBasketItem = async (
  id_prod: number,
): Promise<ResponseDeleteBasketItem> => {
  try {
    return await $api.delete<
      ResponseDeleteBasketItem,
      ResponseDeleteBasketItem,
      RequestDeleteBasketItem
    >(
      `${API_CONFIG.ENDPOINTS.BASKET.DELETE_ITEM}/{id_product}?id_prod=${id_prod}`,
    );
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('failed to delete item from basket', { cause: err });
  }
};

export const editQuantity = async (
  id_prod: number,
  count: number,
): Promise<ResponseEditQuantity> => {
  try {
    return await $api.put<
      ResponseEditQuantity,
      ResponseEditQuantity,
      RequestEditQuantity
    >(
      `${API_CONFIG.ENDPOINTS.BASKET.EDIT_QUANTITY}?id_prod=${id_prod}&count=${count}`,
    );
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('adding basket item failed', { cause: err });
  }
};
