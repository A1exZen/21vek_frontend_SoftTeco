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
