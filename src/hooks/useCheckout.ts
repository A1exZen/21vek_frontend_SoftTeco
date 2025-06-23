import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RequestPlaceOrder } from '@models/checkout/api';
import { placeOrder } from '@/api/checkout';
import { toast } from 'react-hot-toast';
import { QueryKeys } from '@/constants';

export const useCheckout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (orderData: RequestPlaceOrder) => placeOrder(orderData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.BASKET] });
      toast.success('Заказ оформлен');
    },
    onError: () => toast.error('Не удалось обновить данные'),
  });
};
