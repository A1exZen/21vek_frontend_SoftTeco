import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';
import { ResponseGetAllBasketItems } from '@models/basket/api';
import {
  addBasketItem,
  deleteBasketItem,
  editQuantity,
  getAllBasketItems,
} from '@/api/basket';
import { toast } from 'react-hot-toast';

export const useGetAllBasketItems = () =>
  useQuery<ResponseGetAllBasketItems, Error>({
    queryKey: [QueryKeys.BASKET],
    queryFn: () => getAllBasketItems(),
  });

export const useAddBasketItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (idProduct: number) => addBasketItem(idProduct),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.BASKET] });
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.PRODUCT] });
    },
    onError: () => toast.error('Не удалось обновить данные'),
  });
};

export const useDeleteBasketItem = (idProduct: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteBasketItem(idProduct),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.BASKET] });
    },
    onError: () => toast.error('Не удалось обновить данные'),
  });
};

export const useEditQuantity = (idProduct: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (count: number) => editQuantity(idProduct, count),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.BASKET] });
    },
    onError: () => toast.error('Не удалось обновить данные'),
  });
};
