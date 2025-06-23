export interface RequestPlaceOrder {
  comment: string;
  adress: string;
  shipping_cost: number;
  organization: string;
}

export interface ResponsePlaceOrder {
  status: string;
  message: string;
  order_processor_id: number;
}
