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

export const getBestValues = (products: Product[]): Set<ProductCharacteristicValue> => {
  if (products.length === 0) return new Set();

  const bestValues = new Set<ProductCharacteristicValue>();
  const numericValuesByPath: Record<string, NumericValueInfo[]> = {};

  products.forEach(product => {
    const numericValues = findAllNumericValues(product.characteristics);
    
    numericValues.forEach(({ path, value, displayValue }) => {
      if (!numericValuesByPath[path]) {
        numericValuesByPath[path] = [];
      }
      numericValuesByPath[path].push({ value, displayValue, path });
    });
  });

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