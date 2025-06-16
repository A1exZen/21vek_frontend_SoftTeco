import { IProduct } from "../types";

export interface ICategoryItemProps {
  category: {
    idCategories: number;
    nameCategories: string;
    url: string;
  };
  products: IProduct[];
  onDelete: (id: number) => void;
  getProductCountText: (count: number) => string;
  capitalizeFirstLetter: (str: string) => string;
}