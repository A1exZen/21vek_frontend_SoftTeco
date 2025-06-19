import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';
import { removeFavorites } from '../../api/favorites';
import toast from 'react-hot-toast';

export const useRemoveFavorites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (idProduct: number) => removeFavorites(idProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.FAVORITE] });
    },
    onError: () => {
      toast.error('Ошибка при удалении избранного товара');
    }
  });
};