import React, { useState, useMemo } from "react";
import { IProduct } from "../types";
import { TProductCharacteristicValue, IProductComparisonProps } from "./types";
import styles from './styles.module.scss';
import { getComparisonData } from "../ProductSort/ProductSort";
import { ProductCard } from "../ProductCard/ProductCard";
import Button from "@/components/ui/Button";
import { Checkbox } from "antd";

const formatValue = (value: TProductCharacteristicValue | undefined): string =>
  value === undefined ? "-" : String(value);

const extractCharacteristicValue = (
  product: IProduct,
  groupName: string,
  charName: string
): TProductCharacteristicValue | undefined => {
  const group = product.characteristics.find(group => group.name === groupName);
  const item = group?.characteristics.find(char => char.name === charName);
  return item?.description;
};


export const ProductComparisonTable = ({
  products = [],
  onRemoveRequest,
  productsInCart,
  onAddToCart,
}: IProductComparisonProps) => {
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);

  const allGroups = new Set<string>();
  const allItems: Record<string, Set<string>> = {};

  products.forEach(product => {
    product.characteristics.forEach(group => {
      allGroups.add(group.name);
      if (!allItems[group.name]) {
        allItems[group.name] = new Set();
      }
      group.characteristics.forEach(item => {
        allItems[group.name].add(item.name);
      });
    });
  });

  const { bestValues, differentPaths } = useMemo(
    () => getComparisonData(products),
    [products]
  );

  const shouldShowPath = (group: string, item: string): boolean => {
    const path = `${group}.${item}`;
    return !showOnlyDifferences || differentPaths.has(path);
  };

  if (products.length === 0) {
    return <div>Нет товаров для сравнения</div>;
  }

  return (
    <div className={styles["product-comparison-table"]}>
      <table className={styles["product-comparison"]}>
        <thead>
          <tr>
            <th className={styles["product-comparison-title"]}>
              <Checkbox
                checked={showOnlyDifferences}
                onChange={(e) => setShowOnlyDifferences(e.target.checked)}
              >
                Показать только<br />отличия
              </Checkbox>
            </th>
            {products.map(product => (
              <th key={product.id_product} className={styles["product-header"]}>
                <div className={styles["product__wrapper"]}>
                  <ProductCard
                    product={{
                      ...product,
                      in_cart: productsInCart.includes(product.id_product),
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
          {[...allGroups].map(group => (
            <React.Fragment key={group}>
              <tr className={styles["group-header"]}>
                <td colSpan={products.length + 1}>
                  <span className={styles["table-strong__title"]}>
                    {group}
                  </span>
                </td>
              </tr>
              {[...(allItems[group] || [])].map(item => {
                if (!shouldShowPath(group, item)) return null;

                return (
                  <tr key={`${group}.${item}`}>
                    <td>{item}</td>
                    {products.map(product => {
                      const value = extractCharacteristicValue(product, group, item);
                      const displayValue = formatValue(value);
                      const isBest = bestValues.has(String(value));

                      return (
                        <td
                          key={`${product.id_product}-${group}-${item}`}
                          className={isBest ? styles["best-value"] : ""}
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
    </div>
  );
};
