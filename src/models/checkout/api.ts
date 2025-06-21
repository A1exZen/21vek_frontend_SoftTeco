export interface RequestPlaceOrder {
  basket_items: {
    id_us_storage: number;
  }[];
  comment: string;
  adress: string;
  shipping_cost: number;
  organization: string;
}

export interface ResponsePlaceOrder {
  basket_items: {
    id_us_storage: number;
  }[];
  comment: string;
  adress: string;
  shipping_cost: number;
  organization: string;
}
