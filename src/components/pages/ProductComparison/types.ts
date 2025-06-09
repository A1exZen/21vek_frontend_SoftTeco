export type PrimitiveValue = string | number | boolean;
export type ComplexValue = { [key: string]: PrimitiveValue | ComplexValue };
export type ProductCharacteristicValue = PrimitiveValue | ComplexValue;

export interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  inCart: boolean;
  characteristics: ComplexValue;
}