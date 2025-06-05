import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';
import { getAllCategories, getHeaderCategories } from '@/api/category.ts';
import {
  Category,
  HeaderCategoryResponse
} from '@models/category/api.ts';

export const useGetCategories = (sort: number = 0) => {
  return useQuery<Category[], Error>({
    queryKey: [QueryKeys.CATEGORIES, sort],
    queryFn: () => getAllCategories(sort)
  });
};

export const useGetHeaderCategories = () => {
  return useQuery<HeaderCategoryResponse, Error>({
    queryKey: [QueryKeys.HEADER_CATEGORIES],
    queryFn: () => getHeaderCategories()
  });
};
