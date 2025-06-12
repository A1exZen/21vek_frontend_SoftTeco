
export interface HeaderCategory {
  idCategories: number;
  nameCategories: string;
  idParent: number | null;
  url: string;
}

export interface HeaderCategoryResponse {
  categories: HeaderCategory[];
  actions: string[];
}

export interface Category {
  idCategories: number;
  nameCategories: string;
  idParent: number | null;
  url: string;
  products: Product[];
}

export interface Product {
  idProduct: number;
  nameProduct: string;
  price: number;
}