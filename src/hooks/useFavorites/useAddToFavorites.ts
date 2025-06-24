import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToFavorites } from '@/api/favorites';
import toast from 'react-hot-toast';
import { QueryKeys } from '@/constants';

export const useAddToFavorites = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (idProduct: number) => addToFavorites(idProduct),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: [QueryKeys.FAVORITE] });
      await queryClient.refetchQueries({ queryKey: [QueryKeys.PRODUCT] });
      await queryClient.refetchQueries({ queryKey: [QueryKeys.FILTERED_PRODUCTS] });
      toast.success('Товар добавлен в избранное');
    },
    onError: (error: Error) => {
      toast.error('Ошибка при добавлении в избранное');
      console.error(error.message);
    },
  });
};
