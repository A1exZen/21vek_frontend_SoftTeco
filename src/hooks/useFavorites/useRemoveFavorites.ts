import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';
import { removeFavorites } from '@/api/favorites';
import toast from 'react-hot-toast';

export const useRemoveFavorites = (idProduct: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => removeFavorites(idProduct),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: [QueryKeys.FAVORITE] });
      await queryClient.refetchQueries({ queryKey: [QueryKeys.PRODUCT] });
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.FILTERED_PRODUCTS] });

      toast.success('Удалено из избранных');
    },
    onError: () => {
      toast.error('Ошибка при удалении избранного товара');
    }
  });
};