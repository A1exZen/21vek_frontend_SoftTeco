import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '@components/widgets/ProductCatalog/styles.module.scss';
import {
  productCategories
} from '@components/widgets/ProductCatalog/constants.ts';

interface SubcategoryItemsProps {
  parentCategoryId: string;
  subcategoryName: string;
}
export const SubcategoryItems = ({ parentCategoryId }: SubcategoryItemsProps) => {
  const [showAllItems, setShowAllItems] = useState(false);
  const ITEMS_LIMIT = 5;

  const items = productCategories.filter(
    (category) => category.idParent === parentCategoryId
  );

  const visibleItems = showAllItems ? items : items.slice(0, ITEMS_LIMIT);


  return (
    <div>
      {visibleItems.map((item) => (
        <Link
          key={item.id}
          to={`/category/${item.url}`}
          className={styles['product-catalog__subcategory-item']}
        >
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
