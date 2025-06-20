import {
  useMutation,
  UseMutationResult,
  useQuery
} from '@tanstack/react-query';
import { ViewedProduct } from '@models/product/api.ts';
import { QueryKeys } from '@/constants';
import { addToViewHistory, getViewHistory } from '@/api/viewHistory.ts';

export const useGetViewHistory = () => {
  return useQuery<ViewedProduct[], Error>({
    queryKey: [QueryKeys.VIEW_HISTORY],
    queryFn: getViewHistory,
    staleTime: 0,
    initialData: []
  });
};

export const useAddToViewHistory = (): UseMutationResult<void, Error, number> => {
  return useMutation({
    mutationFn: (productId: number) => addToViewHistory(productId),
  });
};
