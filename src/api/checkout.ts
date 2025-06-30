import { $api } from '@app/config/axios/api';
import { API_CONFIG } from '@/constants';
import { BaseError, ensureError } from '@utils/ErrorHandler';
import {
  OrderHistoryResponse,
  RequestPlaceOrder,
  ResponsePlaceOrder,
} from '@models/checkout/api';

export const placeOrder = async (
  orderData: RequestPlaceOrder,
): Promise<ResponsePlaceOrder> => {
  try {
    return await $api.post<
      ResponsePlaceOrder,
      ResponsePlaceOrder,
      RequestPlaceOrder
    >(API_CONFIG.ENDPOINTS.CHECKOUT.PLACE_ORDER, orderData);
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('placing order failed', { cause: err });
  }
};


export const getOrderHistory = async (): Promise<OrderHistoryResponse> => {
  try {
    return await $api.get<OrderHistoryResponse, OrderHistoryResponse>(
      API_CONFIG.ENDPOINTS.CHECKOUT.GET_ORDERS
    );
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('getting order history failed', { cause: err });
  }
};