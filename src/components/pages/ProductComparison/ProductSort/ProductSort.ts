import { ComplexValue, Product, ProductCharacteristicValue } from '../types';

type NumericValueInfo = {
  value: number;
  displayValue: ProductCharacteristicValue;
  path: string;
};

const isSimCardsObject = (value: unknown): value is { count: number; format: string } => {
  return typeof value === 'object' && value !== null && 'count' in value && 'format' in value;
};

const findAllNumericValues = (
  obj: ComplexValue,
  currentPath = ''
): NumericValueInfo[] => {
  const result: NumericValueInfo[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const path = currentPath ? `${currentPath}.${key}` : key;

    if (typeof value === 'number') {
      result.push({
        value,
        displayValue: value,
        path
      });
    } else if (isSimCardsObject(value)) {
      result.push({
        value: value.count,
        displayValue: value,
        path: `${path}.count`
      });
    } else if (typeof value === 'object' && value !== null) {
      result.push(...findAllNumericValues(value, path));
    } else if (typeof value === 'string') {
      const numericValue = tryParseNumericString(value);
      if (numericValue !== null) {
        result.push({
          value: numericValue,
          displayValue: value,
          path
        });
      }
    }
  }

  return result;
};

const tryParseNumericString = (str: string): number | null => {
  const simpleNumber = parseFloat(str);
  if (!isNaN(simpleNumber)) return simpleNumber;

  if (str.includes('×')) {
    const [w, h] = str.split('×').map(Number);
    if (!isNaN(w) && !isNaN(h)) return w * h;
  }

  const match = str.match(/\d+/);
  if (match) return parseFloat(match[0]);

  return null;
};


export const getComparisonData = (products: Product[]) => {
  if (products.length === 0) {
    return {
      bestValues: new Set<ProductCharacteristicValue>(),
      differentPaths: new Set<string>()
    };
  }

  const bestValues = new Set<ProductCharacteristicValue>();
  const differentPaths = new Set<string>();
  const numericValuesByPath: Record<string, NumericValueInfo[]> = {};

  // Сначала собираем все числовые значения по путям
  products.forEach(product => {
    const numericValues = findAllNumericValues(product.characteristics);
    
    numericValues.forEach(({ path, value, displayValue }) => {
      if (!numericValuesByPath[path]) {
        numericValuesByPath[path] = [];
      }
      numericValuesByPath[path].push({ value, displayValue, path });
    });
  });

  // Затем для каждого пути определяем лучшие значения и различия
  Object.entries(numericValuesByPath).forEach(([path, values]) => {
    if (values.length === 0) return;

    // Проверяем, все ли значения одинаковые
    const firstValue = values[0].displayValue;
    const allSame = values.every(v => JSON.stringify(v.displayValue) === JSON.stringify(firstValue));
    
    if (!allSame) {
      differentPaths.add(path);
      
      // Находим лучшее значение только если есть различия
      let best = values[0];
      for (let i = 1; i < values.length; i++) {
        if (values[i].value > best.value) {
          best = values[i];
        }
      }
      bestValues.add(best.displayValue);
    }
  });

  // Теперь проверим нечисловые характеристики
  const allPaths = getAllCharacteristicsPaths(products);
  allPaths.forEach(path => {
    if (!numericValuesByPath[path]) { // Если путь не был обработан как числовой
      const firstValue = getCharacteristicValue(products[0], path);
      const hasDifferences = products.some(
        product => JSON.stringify(getCharacteristicValue(product, path)) !== JSON.stringify(firstValue)
      );
      
      if (hasDifferences) {
        differentPaths.add(path);
      }
    }
  });

  return { bestValues, differentPaths };
};

// Вспомогательная функция для получения всех путей характеристик
const getAllCharacteristicsPaths = (products: Product[]): Set<string> => {
  const paths = new Set<string>();
  
  products.forEach(product => {
    if (!product.characteristics) return;

    const stack: { obj: ComplexValue; path: string }[] = [
      { obj: product.characteristics, path: '' }
    ];

    while (stack.length > 0) {
      const { obj, path } = stack.pop()!;

      for (const key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

        const currentPath = path ? `${path}.${key}` : key;
        const value = obj[key];

        if (typeof value !== 'object' || value === null || ('count' in value && 'format' in value)) {
          paths.add(currentPath);
        }

        if (typeof value === 'object' && value !== null) {
          stack.push({ obj: value, path: currentPath });
        }
      }
    }
  });

  return paths;
};

// Вспомогательная функция для получения значения характеристики
const getCharacteristicValue = (product: Product, path: string): unknown => {
  if (!product.characteristics) return undefined;
  
  return path.split('.').reduce((acc: unknown, key) => {
    if (acc !== null && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, product.characteristics);
};