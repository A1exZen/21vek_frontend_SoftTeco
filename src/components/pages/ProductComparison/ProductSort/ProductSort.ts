import { ComplexValue, Product, ProductCharacteristicValue } from '../types';

type NumericValueInfo = {
  value: number;
  displayValue: ProductCharacteristicValue;
  path: string;
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
        value: value,
        displayValue: value,
        path
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
  // Пытаемся извлечь число из строки разными способами
  const simpleNumber = parseFloat(str);
  if (!isNaN(simpleNumber)) return simpleNumber;

  // Для разрешения экрана "1920×1080"
  if (str.includes('×')) {
    const [w, h] = str.split('×').map(Number);
    if (!isNaN(w) && !isNaN(h)) return w * h;
  }

  // Для строк типа "500 ppi"
  const match = str.match(/\d+/);
  if (match) return parseFloat(match[0]);

  return null;
};

export const getBestValues = (products: Product[]): Set<ProductCharacteristicValue> => {
  if (products.length === 0) return new Set();

  const bestValues = new Set<ProductCharacteristicValue>();
  const numericValuesByPath: Record<string, NumericValueInfo[]> = {};

  // Собираем все числовые значения из всех продуктов
  products.forEach(product => {
    const numericValues = findAllNumericValues(product.characteristics);
    
    numericValues.forEach(({ path, value, displayValue }) => {
      if (!numericValuesByPath[path]) {
        numericValuesByPath[path] = [];
      }
      numericValuesByPath[path].push({ value, displayValue, path });
    });
  });

  // Для каждого пути находим максимальное значение
  Object.values(numericValuesByPath).forEach(values => {
    if (values.length === 0) return;

    let best = values[0];
    for (let i = 1; i < values.length; i++) {
      if (values[i].value > best.value) {
        best = values[i];
      }
    }

    bestValues.add(best.displayValue);
  });

  return bestValues;
};