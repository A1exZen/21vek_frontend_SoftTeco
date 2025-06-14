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
  idCategories: number;
  nameCategories: string;
  url: string;
}

export interface IProduct {
  idProduct: number;
  nameProduct: string;
  brand: string;
  price: number;
  quantityInStock: number;
  rating: number;
  numberOfReviews: number;
  discount: number;
  status: string;
  img: string;
  inCart?: boolean;
  category: ICategory;
  characteristics?: ICharacteristicGroup[];
}