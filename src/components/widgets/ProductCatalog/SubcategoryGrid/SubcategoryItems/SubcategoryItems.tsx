import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '@components/widgets/ProductCatalog/styles.module.scss';

interface SubcategoryItemsProps {
  items: {id: string, name: string; icon?: React.ReactNode }[];
  subcategoryName: string;
}
export const SubcategoryItems = ({ items }: SubcategoryItemsProps) => {
  const [showAllItems, setShowAllItems] = useState(false);
  const ITEMS_LIMIT = 5;

  const visibleItems = showAllItems ? items : items.slice(0, ITEMS_LIMIT);

  return (
    <div>
      {visibleItems.map((item) => (
        <Link
          key={item.name}
          to={`category/${item.id}/`}
          className={styles['product-catalog__subcategory-item']}
        >
          {item.icon && (
            <span className={styles['product-catalog__subcategory-item-icon']}>
              {item.icon}
            </span>
          )}
          {item.name}
        </Link>
      ))}
      {!showAllItems && items.length > ITEMS_LIMIT && (
        <button
          onClick={() => setShowAllItems(true)}
          className={styles['product-catalog__show-more']}
        >
          Показать ещё
        </button>
      )}
      {showAllItems && items.length > ITEMS_LIMIT && (
        <button
          onClick={() => setShowAllItems(false)}
          className={styles['product-catalog__show-more']}
        >
          Свернуть
        </button>
      )}
    </div>
  );
};
