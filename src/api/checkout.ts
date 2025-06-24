import { $api } from '@app/config/axios/api';
import { API_CONFIG } from '@/constants';
import { BaseError, ensureError } from '@utils/ErrorHandler';
import { RequestPlaceOrder, ResponsePlaceOrder } from '@models/checkout/api';

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
