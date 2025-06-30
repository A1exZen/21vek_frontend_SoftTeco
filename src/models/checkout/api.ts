export interface RequestPlaceOrder {
  comment: string;
  adress: string;
  shippingCost: number;
}

export interface ResponsePlaceOrder {
  status: string;
  message: string;
  orderProcessorId: number;
}


export interface OrderItem {
  orderId: number;
  productId: number;
  productName: string;
  price: number;
  count: number;
}

export interface OrderProcessor {
  status: string;
  totalPrice: number;
  shippingCost: number;
  comment: string;
  adress: string;
}

export interface OrderGroup {
  groupId: number;
  dateCreated: string;
  orders: OrderItem[];
  processor: OrderProcessor;
}

export interface OrderHistoryResponse {
  orders: OrderGroup[];
}

export interface OrderHistoryApiResponse {
  orders: OrderGroup[];
}