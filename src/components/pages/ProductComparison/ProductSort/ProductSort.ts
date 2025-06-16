import { IProduct, ICharacteristicGroup, TNumericValueInfo } from '../types';

/**
 * Находит все числовые значения в характеристиках продукта
 * @param characteristics - массив групп характеристик
 * @param currentPath - текущий путь (используется для рекурсии)
 * @returns Массив объектов с числовыми значениями и их метаданными
 */
const findAllNumericValues = (
  characteristics: ICharacteristicGroup[],
  currentPath = ''
): TNumericValueInfo[] => {
  const result: TNumericValueInfo[] = [];

  characteristics.forEach(group => {
    const groupPath = currentPath ? `${currentPath}.${group.name}` : group.name;
    
    group.characteristics.forEach(item => {
      const fullPath = `${groupPath}.${item.name}`;
      const numericValue = tryParseNumericString(item.description);
      
      if (numericValue !== null) {
        result.push({
          value: numericValue,
          displayValue: item.description,
          path: fullPath
        });
      }
    });
  });

  return result;
};


{/*Convert string to number*/}
const tryParseNumericString = (str: string): number | null => {
  {/*For numbers*/}
  if (/^-?\d+$/.test(str)) return parseInt(str, 10);
  
  {/*For numbers with parseFloat*/}
  if (/^-?\d+\.\d+$/.test(str)) return parseFloat(str);
  
  {/*For lines containing dimensions ("1600×720")*/}
  if (str.includes('×')) {
    const [w, h] = str.split('×').map(Number);
    if (!isNaN(w) && !isNaN(h)) return w * h;
  }
  
  {/*For strings containing units of measurement ("4 Gb")*/}
  const match = str.match(/\d+/);
  if (match) return parseFloat(match[0]);

  return null;
};

{/*Product comparison feature*/}
export const getComparisonData = (products: IProduct[]) => {
  if (products.length === 0) {
    return {
      bestValues: new Set<string>(),
      differentPaths: new Set<string>()
    };
  }

  const bestValues = new Set<string>();
  const differentPaths = new Set<string>();
  const numericValuesByPath: Record<string, TNumericValueInfo[]> = {};

  products.forEach(product => {
    const numericValues = findAllNumericValues(product.characteristics);
    
    numericValues.forEach(({ path, value, displayValue }) => {
      if (!numericValuesByPath[path]) {
        numericValuesByPath[path] = [];
      }
      numericValuesByPath[path].push({ value, displayValue, path });
    });
  });

  {/*For numerical*/}
  Object.entries(numericValuesByPath).forEach(([path, values]) => {
    if (values.length === 0) return;

    const firstValue = values[0].displayValue;
    const allSame = values.every(v => v.displayValue === firstValue);
    
    if (!allSame) {
      differentPaths.add(path);

      let best = values[0];
      for (const v of values) {
      if (v.value > best.value) {
        best = v;
      }
    }

      bestValues.add(best.displayValue);
    }
  });

  {/*For literal*/}
  const allPaths = getAllCharacteristicsPaths(products);
  allPaths.forEach(path => {
    if (!numericValuesByPath[path]) {
      const firstValue = getCharacteristicValue(products[0], path);
      const hasDifferences = products.some(
        product => getCharacteristicValue(product, path) !== firstValue
      );
      
      if (hasDifferences) {
        differentPaths.add(path);
      }
    }
  });

  return { bestValues, differentPaths };
};

/**
* Gets all possible feature paths for all products
* @param products - array of products
* @returns Set of all feature paths
*/
const getAllCharacteristicsPaths = (products: IProduct[]): Set<string> => {
  const paths = new Set<string>();
  
  products.forEach(product => {
    product.characteristics.forEach(group => {
      const groupPath = group.name;
      
      group.characteristics.forEach(item => {
        const fullPath = `${groupPath}.${item.name}`;
        paths.add(fullPath);
      });
    });
  });

  return paths;
};


{/*Gets the value of a characteristic by path*/}
const getCharacteristicValue = (product: IProduct, path: string): string | undefined => {
  const [groupName, itemName] = path.split('.');
  
  const group = product.characteristics.find(g => g.name === groupName);
  if (!group) return undefined;
  
  const item = group.characteristics.find(i => i.name === itemName);
  return item?.description;
};