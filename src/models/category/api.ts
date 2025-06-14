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
  products: Product[] | [];
}

export type CategoryWithoutProducts = Omit<Category, 'products'>;
export type ResponseGetAllCategories = CategoryWithoutProducts[];

export interface Product {
  idProduct: number;
  nameProduct: string;
  brand: string;
  price: number;
  discount?: number;
  quantityInStock: number;
  rating: number;
  numberOfReviews?: number;
  inCart?: boolean;
  category?: Category;
  dateCreate: string;
  dateUpdate: string;
  status: string;
  img: string;
}
