{/*This is where the table is created*/}
import { useState, useMemo } from "react";
import { IProduct } from "../types";
import { TProductCharacteristicValue, IProductComparisonProps } from "./types";
import styles from './styles.module.scss';
import { getComparisonData } from "../ProductSort/ProductSort";
import { ProductCard } from "../ProductCard/ProductCard";
import Button from "@/components/ui/Button";
import { Checkbox } from "antd";

const formatValue = (value: TProductCharacteristicValue | undefined): string =>
  value === undefined ? "-" : String(value);

{/*Function to extract the value of a specific characteristic from a product*/}
const extractCharacteristicValue = (
  product: IProduct,
  groupName: string,
  charName: string
): TProductCharacteristicValue | undefined => {
  const group = product.characteristics.find(group => group.name === groupName);
  {/*Find a group of characteristics by name*/}
  const item = group?.characteristics.find(char => char.name === charName);
  {/*In the found group, we look for a specific characteristic by name*/}
  return item?.description;
};

export const ProductComparisonTable = ({
  products = [],
  onRemoveRequest,
  productsInCart,
  onAddToCart,
}: IProductComparisonProps) => {
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);

  const { allGroups, allItems } = useMemo(() => {
    const groups = new Set<string>();
    const items: Record<string, Set<string>> = {};

    {/*Create new Set or add group.characteristics*/}
    products.forEach(product => {
      product.characteristics.forEach(group => {
        groups.add(group.name);
        if (!items[group.name]) {
          items[group.name] = new Set();
        }
        group.characteristics.forEach(item => {
          items[group.name].add(item.name);
        });
      });
    });

    return { allGroups: groups, allItems: items };
  }, [products]);

  const { bestValues, differentPaths } = useMemo(
    () => getComparisonData(products),
    [products]
  );

  const shouldShowPath = (group: string, item: string): boolean => {
    const path = `${group}.${item}`;
    return !showOnlyDifferences || differentPaths.has(path);
  };

  if (products.length === 0) {
    return <div className={styles["empty"]}>Нет товаров для сравнения</div>;
  }

  const renderCharacteristics = () => {
    return Array.from(allGroups).map(group => [
      <tr key={`group-${group}`} className={styles["group__header"]}>
        <td colSpan={products.length + 1}>
          <span className={styles["table__strong-title"]}>{group}</span>
        </td>
      </tr>,

      //The list group.characteristics
      ...Array.from(allItems[group] || []).map(item => {
        if (!shouldShowPath(group, item)) return null;
        
        return (
          <tr key={`${group}-${item}`}>
            <td>{item}</td>
            {products.map(product => {
              const value = extractCharacteristicValue(product, group, item);
              const displayValue = formatValue(value);
              const isBest = bestValues.has(String(value));

              return (
                <td
                  key={`${product.idProduct}-${group}-${item}`}
                  className={isBest ? styles["best-value"] : ""}
                >
                  {displayValue}
                </td>
              );
            })}
          </tr>
        );
      }).filter(Boolean) //filter Null
    ]);
  };

  return (
    <div className={styles["product-comparison__table"]}>
      <table className={styles["product-comparison"]}>
        <thead>
          <tr>
            <th className={styles["product-comparison__title"]}>
              <Checkbox
                checked={showOnlyDifferences}
                onChange={(e) => setShowOnlyDifferences(e.target.checked)}
                disabled={products.length <= 1} 
                className={products.length <= 1 ? styles.disabledCheckbox : ''}
              >
                Показать только<br />отличия
              </Checkbox>
            </th>
            {products.map(product => (
              <th key={product.idProduct} className={styles["product__header"]}>
                <div className={styles["product__wrapper"]}>
                  <ProductCard
                    product={{
                      ...product,
                      inCart: productsInCart.includes(product.idProduct),
                    }}
                    onAddToCart={onAddToCart}
                  />
                  <Button
                    variant="link"
                    className={styles["remove__button"]}
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
          {renderCharacteristics()}
        </tbody>
      </table>
    </div>
  );
};