export interface Product {
  idProduct: number;
  nameProduct: string;
  brand: string;
  price: number;
  discount?: number;
  quantityInStock: number;
  rating: number;
  numberOfReviews?: number;
  status: string;
  img: string;
  inCart?: boolean;
  characteristics?: CharacteristicGroup[];
  category?: Category;
}

export interface CharacteristicItem {
  name: string;
  count: string;
}

export interface CharacteristicGroup {
  name: string;
  characteristics: CharacteristicItem[];
}

export interface Category {
  idCategories: number;
  nameCategories: string;
  url: string;
}

export interface Pagination {
  page?: number;
  size: number;
  total: number;
}

export interface PaginatedResponse {
  data: Product[];
  pagination: Pagination;
}

export interface FilterParams {
  page?: number;
  size: number;
  brand?: string;
  price_filtr?: 'asc' | 'desc';
  popular?: boolean;
  min_price?: number;
  max_price?: number;
}

export interface ViewedProduct {
  idProduct: number;
  nameProduct: string;
  actionId: number;
  categoriesId: number;
  brand: string;
  price: number;
  status: string;
  img: string;
  rating: number;
  inCart?: boolean;
}

export interface SearchResponse {
  products: [
    {
      idProduct: number;
      nameProduct: string;
    },
  ];
  categories: [{
    nameProduct: string;
    url: string;
  }];
}
