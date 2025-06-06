export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  discount?: number;
  brand: string;
  categoryId?: number;
  createdAt?: string;
}

export interface ProductsResponse {
  products: Product[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export enum SortOption {
  POPULAR = 'popular',
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  RATING_DESC = 'rating_desc',
  NEWEST = 'newest'
}

export interface ProductFilters {
  page?: number;
  limit?: number;

  minPrice?: number;
  maxPrice?: number;

  sort?: SortOption;

  brands?: string[];

  minRating?: number;

  categoryId?: number;

  search?: string;

  hasDiscount?: boolean;
}