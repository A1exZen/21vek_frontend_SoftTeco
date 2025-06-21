import { useMutation, useQueryClient } from '@tanstack/react-query';
import { RequestPlaceOrder } from '@models/checkout/api.ts';
import { placeOrder } from '@/api/checkout.ts';
import { toast } from 'react-hot-toast';
import { QueryKeys } from '@/constants';

export const usePlaceOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (orderData: RequestPlaceOrder) => placeOrder(orderData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.BASKET] });
    },
    onError: () => toast.error('Не удалось обновить данные'),
  });
};
