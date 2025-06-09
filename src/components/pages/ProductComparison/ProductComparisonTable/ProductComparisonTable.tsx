import { ComplexValue, Product, ProductCharacteristicValue } from "../types";
import { getBestValues } from "../ProductSort/ProductSort";
import { ProductCard } from "../ProductCard/ProductCard";
import styles from './styles.module.scss';
import React from "react";
import Button from "@/components/ui/Button";

const formatValue = (value: unknown): string => {
  if (value === null || value === undefined) return '-';

  if (typeof value === 'object' && value !== null) {
    if ('count' in value && 'format' in value) {
      return `${value.count} ${value.format}`;
    }
    return '';
  }

  return String(value);
};

const getNestedValue = (obj: object, path: string): unknown => {
  return path.split('.').reduce((acc: unknown, key) => {
    if (acc !== null && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

interface ProductComparisonProps {
  products?: Product[];
  onRemoveRequest: (product: Product) => void;
  productsInCart: number[];
  onAddToCart: (id: number) => void;
}

export const ProductComparisonTable = ({
  products = [],
  onRemoveRequest,
  productsInCart,
  onAddToCart,
}: ProductComparisonProps) => {
  const bestValues = getBestValues(products);
  const allPaths = new Set<string>();

  if (!products || products.length === 0) {
    return <div>Нет товаров для сравнения</div>;
  }

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
          allPaths.add(currentPath);
        }

        if (typeof value === 'object' && value !== null) {
          stack.push({ obj: value, path: currentPath });
        }
      }
    }
  });

  const groupedPaths: Record<string, string[]> = {};
  Array.from(allPaths).forEach(path => {
    const parts = path.split('.');
    const parent = parts.length > 1 ? parts.slice(0, -1).join('.') : '';

    if (!groupedPaths[parent]) {
      groupedPaths[parent] = [];
    }

    groupedPaths[parent].push(path);
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Характеристика</th>
          {products.map(product => (
            <th key={product.id} className={styles["product-header"]}>
              <div className={styles["product__wrapper"]}>
                <ProductCard
                  product={{
                    ...product,
                    inCart: productsInCart.includes(product.id),
                  }}
                  onAddToCart={onAddToCart}
                />
                <Button 
                  variant="link"
                  className={styles.remove__button}
                  onClick={() => onRemoveRequest(product)}
                >
                  Удалить из сравнений
                </Button>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(groupedPaths).map(([parent, paths]) => (
          <React.Fragment key={parent}>
            {parent && (
              <tr className="group-header">
                <td colSpan={products.length + 1}>
                  <strong>{parent.split('.').pop()}</strong>
                </td>
              </tr>
            )}
            {paths.map(path => {
              const displayName = path.split('.').pop() || path;

              return (
                <tr key={path}>
                  <td>{displayName}</td>
                  {products.map(product => {
                    const value = product.characteristics
                      ? getNestedValue(product.characteristics, path)
                      : undefined;
                    const displayValue = formatValue(value);
                    const isBest = bestValues.has(value as ProductCharacteristicValue);

                    return (
                      <td
                        key={`${product.id}-${path}`}
                        style={isBest ? { color: 'green', fontWeight: 'bold' } : {}}
                      >
                        {displayValue}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
