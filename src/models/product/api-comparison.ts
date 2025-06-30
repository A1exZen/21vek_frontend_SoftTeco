export interface CatComparison {
  category: string;
  url: string;
  count: number;
}

export interface ProductComparison {
  id_product: 1;
  name_product: string;
  brand: string;
  price: 1249;
  discount: string;
  quantity_in_stock: 20;
  rating: 1;
  date_create: '2025-06-12T12:00:00';
  date_update: '2025-06-13T12:00:00';
  status: string;
  img: string;
  in_cart: false;
  in_fav: false;
}

export interface AddProductComparisonResponse {
  status: string;
  message: string;
  product_id: number;
}
