import { BasketItemType } from '@/types/BasketItemType.ts';
import iphone from '@images/iphone.jpg';

export const basketItems: BasketItemType[] = [
  {
    id: Math.random().toString(36).slice(2, 10),
    image: iphone,
    name: 'Смартфон Apple iPhone 15 Pro 256GB',
    quantity: 1,
    price: 4399.0,
  },
  {
    id: Math.random().toString(36).slice(2, 10),
    image: iphone,
    name: 'Смартфон Apple iPhone 15 Pro 256GB',
    quantity: 1,
    price: 4399.0,
  },
  {
    id: Math.random().toString(36).slice(2, 10),
    image: iphone,
    name: 'Смартфон Apple iPhone 15 Pro 256GB',
    quantity: 1,
    price: 4399.0,
  },
];
