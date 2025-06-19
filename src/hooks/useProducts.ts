import {
  filterProducts,
  getAllProducts,
  getBrands,
  getProductById, searchProducts
} from '@/api/product.ts';
import { QueryKeys } from '@/constants';
import {
  PaginatedResponse,
  Product,
  SearchResponse
} from '@/models/product/api';
import { useQuery } from '@tanstack/react-query';

export const useGetAllProducts = (
  sort: number = 0,
  page: number | undefined,
  size: number = 8,
) => {
  return useQuery<PaginatedResponse, Error>({
    queryKey: [QueryKeys.PRODUCTS, sort, page, size],
    queryFn: () => getAllProducts({ sort, page, size }),
  });
};

export const useFilterProducts = (params: {
  page?: number;
  size: number;
  brand?: string;
  price_filtr?: 'asc' | 'desc';
  popular?: boolean;
  min_price?: number;
  max_price?: number;
}) => {
  return useQuery<PaginatedResponse, Error>({
    queryKey: [QueryKeys.FILTERED_PRODUCTS, params],
    queryFn: () => filterProducts(params),
    staleTime: 5 * 60 * 1000,
  });
};

export const useProducts = (
  filterParams: {
    page?: number;
    size: number;
    brand?: string;
    price_filtr?: 'asc' | 'desc';
    popular?: boolean;
    min_price?: number;
    max_price?: number;
  },
  sort: number = 0,
) => {
  const hasActiveFilters = Boolean(
    filterParams.brand ||
      filterParams.price_filtr ||
      filterParams.popular ||
      filterParams.min_price ||
      filterParams.max_price,
  );

  const allProductsQuery = useGetAllProducts(
    sort,
    filterParams.page || 0,
    filterParams.size || 8,
  );

  const filteredProductsQuery = useFilterProducts(filterParams);

  const data = hasActiveFilters
    ? filteredProductsQuery.data
    : allProductsQuery.data;

  const isLoading = hasActiveFilters
    ? filteredProductsQuery.isLoading
    : allProductsQuery.isLoading;

  const error = hasActiveFilters
    ? filteredProductsQuery.error
    : allProductsQuery.error;

  const isFetching = hasActiveFilters
    ? filteredProductsQuery.isFetching
    : allProductsQuery.isFetching;

  const hasMore = data ? data.pagination.page !== data.pagination.total : false;

  return {
    data: data?.data || [],
    isLoading,
    error,
    isFetching,
    hasActiveFilters,
    hasMore,
    refetch: hasActiveFilters
      ? filteredProductsQuery.refetch
      : allProductsQuery.refetch,
    total: data?.pagination.total || 0,
    currentCount: data?.data.length || 0,
  };
};

export const useGetProduct = (id: number) => {
  return useQuery<Product, Error>({
    queryKey: [QueryKeys.PRODUCT, id],
    queryFn: () => getProductById(id),
  });
};

export const useGetBrands = () => {
  return useQuery<string[], Error>({
    queryKey: [QueryKeys.BRANDS],
    queryFn: getBrands,
  });
};

export const useSearchProducts = (letters: string) => {
  return useQuery<SearchResponse, Error>({
    queryKey: [QueryKeys.SEARCH_PRODUCTS, letters],
    queryFn: () => searchProducts(letters),
    enabled: !!letters,
    staleTime: 5 * 60 * 1000,
  });
};


