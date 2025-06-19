export interface BasketItemType {
  id: number;
  img: string;
  name: string;
  quantity: number;
  price: number;
}

export type ResponseGetAllBasketItems = BasketItemType[];

export type RequestAddBasketItem = {
  id_prod: number;
};
export type ResponseAddBasketItem = {
  status: string;
  message: string;
  productId: number;
};

export type RequestDeleteBasketItem = {
  id_product: number;
};
export type ResponseDeleteBasketItem = {
  status: string;
  message: string;
  productId: number;
};

export type RequestEditQuantity = {
  id_prod: number;
  count: number;
};
export type ResponseEditQuantity = {
  status: string;
  message: string;
  productId: number;
};
