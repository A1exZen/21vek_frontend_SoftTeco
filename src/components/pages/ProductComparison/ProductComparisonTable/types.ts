import { IProduct } from "../types";

export type TProductCharacteristicValue = string | number;

export interface IProductComparisonProps {
  products?: IProduct[];
  onRemoveRequest: (product: IProduct) => void;
  productsInCart: number[];
  onAddToCart: (id: number) => void;
}