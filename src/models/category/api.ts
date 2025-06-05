
export interface Category {
  idCategories: number;
  nameCategories: string;
  idParent: number | null;
  products: Product[];
}

export interface HeaderCategory{
  idCategories: number;
  nameCategories: string;
  idParent: number | null;
}
export interface HeaderCategoryResponse {
  categories: HeaderCategory[];
  actions: string[];
}


export interface Product {
  idProduct: number;
  nameProduct: string;
  price: number;
}