import { useMemo } from 'react';
import { IProduct, IGroupedProducts } from '../types';

/**
 * Хук для группировки товаров по категориям
 * 
 * @param products - Массив товаров для группировки
 * @returns Объект с методами для работы с категориями товаров
 */
export const useProductCategories = (products: IProduct[]) => {
  const groupProductsByCategory = (products: IProduct[]): IGroupedProducts => {
    const grouped: IGroupedProducts = {};
    
    products.forEach(product => {
      const categoryId = product.category.idCategories;
      
      if (!grouped[categoryId]) {
        grouped[categoryId] = {
          category: product.category,
          products: []
        };
      }
      
      grouped[categoryId].products.push(product);
    });
    
    return grouped;
  };

  const productsByCategory = useMemo(() => 
    groupProductsByCategory(products), 
    [products]
  );

  return { productsByCategory };
};