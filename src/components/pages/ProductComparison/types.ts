export type TProductCharacteristicValue = string;
export type TComplexValue = string | number | null | ICharacteristicGroup | ICharacteristicItem | TProductCharacteristicValue;

export type TNumericValueInfo = {
  value: number;
  displayValue: string;
  path: string;
};

export interface IProductCardProps {
  product: IProduct;
  onAddToCart: (id: number) => void;
}

export interface IConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  message: string;
}

export interface ICharacteristicItem {
  name: string;
  description: string;
}

export interface ICharacteristicGroup {
  name: string;
  characteristics: ICharacteristicItem[];
}

export interface ICategory {
  id_categories: number;
  name_categories: string;
  url: string;
}

export interface IProduct {
  id_product: number;
  name_product: string;
  brand?: string;
  price: number;
  quantity_in_stock: number;
  rating: number;
  number_of_reviews: number;
  status?: string;
  img: string;
  in_cart: boolean;
  category: ICategory;
  characteristics: ICharacteristicGroup[];
}