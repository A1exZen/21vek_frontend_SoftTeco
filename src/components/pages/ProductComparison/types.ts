export type PrimitiveValue = string | number | boolean;
export type ComplexValue = { [key: string]: PrimitiveValue | ComplexValue };
export type ProductCharacteristicValue = PrimitiveValue | ComplexValue;

export interface Product {
  id: number;
  category: string;
  name: string;
  characteristics: ComplexValue;
}