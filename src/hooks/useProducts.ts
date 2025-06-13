import {
  Product,
  ProductFilters,
} from '@/models/product/api';
import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';
import { getPriceRange, getProductById, getProducts } from '@/api/product.ts';

export const useGetProducts = (filters: ProductFilters = {}) => {
  return useQuery<Product[], Error>({
    queryKey: [QueryKeys.PRODUCTS, filters],
    queryFn: () => getProducts(filters),
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetProduct = (id: number, enabled: boolean = true) => {
  return useQuery<Product, Error>({
    queryKey: [QueryKeys.PRODUCT, id],
    queryFn: () => getProductById(id),
    enabled: enabled && !!id,
    staleTime: 10 * 60 * 1000,
  });
};

export const useGetPriceRange = (categoryId?: number) => {
  return useQuery<{ min: number; max: number }, Error>({
    queryKey: [QueryKeys.PRICE_RANGE, categoryId],
    queryFn: () => getPriceRange(categoryId),
    staleTime: 15 * 60 * 1000
  });
};