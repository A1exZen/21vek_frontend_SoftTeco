import { ComplexValue, Product, ProductCharacteristicValue } from "./types";
import { getBestValues } from "./ProductSort/ProductSort";

const formatValue = (value: unknown): string => {
  if (value === null || value === undefined) return '-';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

const getNestedValue = (obj: object, path: string): unknown => {
  return path.split('.').reduce((acc: unknown, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

interface ProductComparisonProps {
  products?: Product[]; // Make products optional
}

const ProductShow = ({ products = [] }: ProductComparisonProps) => {
  // Safely handle undefined/null or empty array
  if (!products || products.length === 0) {
    return <div>Нет товаров для сравнения</div>;
  }

  const bestValues = getBestValues(products);
  const allPaths = new Set<string>();

  // Собираем все возможные пути характеристик
  products.forEach(product => {
    // Add check for product.characteristics existence
    if (!product.characteristics) return;
    
    const stack: { obj: ComplexValue; path: string }[] = [
      { obj: product.characteristics, path: '' }
    ];

    while (stack.length > 0) {
      const { obj, path } = stack.pop()!;

      for (const key in obj) {
        const currentPath = path ? `${path}.${key}` : key;
        const value = obj[key];

        allPaths.add(currentPath);

        if (typeof value === 'object' && value !== null) {
          stack.push({ obj: value, path: currentPath });
        }
      }
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Характеристика</th>
          {products.map(p => <th key={p.id}>{p.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {Array.from(allPaths).map(path => (
          <tr key={path}>
            <td>{path}</td>
            {products.map(product => {
              // Add check for product.characteristics existence
              const value = product.characteristics 
                ? getNestedValue(product.characteristics, path) 
                : undefined;
              const displayValue = formatValue(value);
              const isBest = bestValues.has(value as ProductCharacteristicValue);

              return (
                <td key={`${product.id}-${path}`} style={isBest ? { color: 'green' } : {}}>
                  {displayValue}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductShow;