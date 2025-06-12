export interface Product {
  idProduct: number;
  nameProduct: string;
  brand: string;
  price: number;
  discount?: number;
  quantityInStock: number;
  rating: number;
  numberOfReviews: number;
  status: string;
  img: string;
  category: Category;
}
export interface Category {
  idCategories: number;
  nameCategories: string;
  url: string;
}
