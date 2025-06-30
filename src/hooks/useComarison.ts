import { useMutation, useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';
import {
  addProductComparison,
  getCategoryComparison
} from '@/api/comparison.ts';
import {
  AddProductComparisonResponse,
  CatComparison
} from '@models/product/api-comparison.ts';
import toast from 'react-hot-toast';
import queryClient from '@app/constants/queryClient.ts';

export const useGetCategoryComparison = () => {
  return useQuery<CatComparison, Error>({
    queryKey: [QueryKeys.CATEGORY_COMPARISON],
    queryFn: async () => await getCategoryComparison()
  });
};

// export const useGetUserCatProdsComparison = (url: string) => {
//   return useQuery<ProductComparison[], Error>({
//     queryKey: [QueryKeys.USER_CAT_PRODS_COMPARISON, url],
//     queryFn: () => getUserCatProdsComparison(url),
//     enabled: !!url,
//   });
// };
//
export const useAddProdComparison = () => {
  return useMutation<AddProductComparisonResponse, Error, number>({
    mutationFn: (productId) => addProductComparison(productId),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: [QueryKeys.PRODUCT] });
      await queryClient.invalidateQueries({ queryKey: [QueryKeys.FILTERED_PRODUCTS] });
      toast.success('Товар добавлен в сравнение');
    },
    onError: (error: Error) => {
      toast.error('Ошибка при добавлении в сравнение');
      console.error(error.message);
    },
  });
};
//
// export const useDeleteProdComparison = () => {
//   return useMutation<string, Error, number>({
//     mutationFn: (productId) => deleteProdComparison(productId),
//   });
// };
//
// export const useDeleteCatComparison = () => {
//   return useMutation<string, Error, string>({
//     mutationFn: (url) => deleteCatComparison(url),
//   });
// };