import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';
import {
  getAllCategories,
  getCategoryByUrl,
  getHeaderCategories
} from '@/api/category.ts';
import {
  Category,
  HeaderCategoryResponse,
  ResponseGetAllCategories
} from '@models/category/api.ts';

export const useGetAllCategories = (sort: number = 0) => {
  return useQuery<ResponseGetAllCategories, Error>({
    queryKey: [QueryKeys.CATEGORIES, sort],
    queryFn: () => getAllCategories(sort),
    staleTime: 5 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export const useGetHeaderCategories = () => {
  return useQuery<HeaderCategoryResponse, Error>({
    queryKey: [QueryKeys.HEADER_CATEGORIES],
    queryFn: () => getHeaderCategories(),
  });
};

export const useGetCategoryByUrl = (url: string) => {
  return useQuery<Category, Error>({
    queryKey: [QueryKeys.CATEGORY, url],
    queryFn: () => getCategoryByUrl(url),
  });
};
