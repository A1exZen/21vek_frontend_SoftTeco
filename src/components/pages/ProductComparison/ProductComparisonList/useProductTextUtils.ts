/**
 * Хук с утилитами для работы с текстовыми представлениями товаров
 * 
 * @returns Объект с текстовыми утилитами
 */

export const useProductTextUtils = () => {
  /**
   * @returns ("товар", "товара", "товаров")
  */
  const getProductCountText = (count: number): string => {
    if (count % 10 === 1 && count % 100 !== 11) return 'товар';
    if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) return 'товара';
    return 'товаров';
  };

  {/*Capitalizes the first letter of the line*/}
  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return { getProductCountText, capitalizeFirstLetter };
};