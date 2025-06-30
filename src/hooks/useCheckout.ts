import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RequestPlaceOrder } from '@models/checkout/api';
import { getOrderHistory, placeOrder } from '@/api/checkout';
import { toast } from 'react-hot-toast';
import { QueryKeys } from '@/constants';

export const useCheckout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (orderData: RequestPlaceOrder) => placeOrder(orderData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.BASKET] });
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.ORDER_HISTORY] });
      toast.success('Заказ оформлен');
    },
    onError: () => toast.error('Не удалось обновить данные'),
  });
};

export const useOrderHistory = () => {
  return useQuery({
    queryKey: [QueryKeys.ORDER_HISTORY],
    queryFn: getOrderHistory,
    staleTime: 5 * 60 * 1000
  });
};