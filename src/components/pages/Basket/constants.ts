import { BasketItemType } from '@/types/BasketItemType.ts';
import iphone from '@images/iphone.jpg';

export const basketItems: BasketItemType[] = [
  {
    id: crypto.randomUUID(),
    image: iphone,
    name: 'Смартфон Apple iPhone 15 Pro 256GB',
    quantity: 1,
    price: 4399.0,
  },
  {
    id: crypto.randomUUID(),
    image: iphone,
    name: 'Смартфон Apple iPhone 15 Pro 256GB',
    quantity: 1,
    price: 4399.0,
  },
  {
    id: crypto.randomUUID(),
    image: iphone,
    name: 'Смартфон Apple iPhone 15 Pro 256GB',
    quantity: 1,
    price: 4399.0,
  },
];
