import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '@components/widgets/ProductCatalog/styles.module.scss';
import { productCategories } from '@components/widgets/ProductCatalog/constants.ts';

interface SubcategoryItemsProps {
  parentCategoryId: string;
  subcategoryName: string;
}

const ITEMS_LIMIT = 5;

export const SubcategoryItems = ({
  parentCategoryId,
}: SubcategoryItemsProps) => {
  const [showAllItems, setShowAllItems] = useState(false);

  const items = useMemo(
    () =>
      productCategories.filter(
        (category) => category.idParent === parentCategoryId,
      ),
    [parentCategoryId],
  );

  const visibleItems = useMemo(
    () => (showAllItems ? items : items.slice(0, ITEMS_LIMIT)),
    [items, showAllItems],
  );

  const handleShowMore = useCallback(() => {
    setShowAllItems(true);
  }, []);

  const handleShowLess = useCallback(() => {
    setShowAllItems(false);
  }, []);

  const hasMoreItems = useMemo(
    () => items.length > ITEMS_LIMIT,
    [items.length],
  );

  if (items.length === 0) {
    return (
      <div className={styles['product-catalog__subcategory-items']}>
        <p className={styles['product-catalog__no-items']}>
          Товаров не найдено
        </p>
      </div>
    );
  }

  return (
    <div>
      {visibleItems.map((item) => (
        <Link
          key={item.id}
          to={`${item.url}`}
          className={styles['product-catalog__subcategory-item']}
        >
          {item.name}
        </Link>
    ))}
      {hasMoreItems && (
        <div className={styles['product-catalog__toggle-container']}>
          {!showAllItems ? (
            <button
              type="button"
              onClick={handleShowMore}
              className={styles['product-catalog__show-more']}
            >
              Показать ещё
            </button>
          ) : (
            <button
              type="button"
              onClick={handleShowLess}
              className={styles['product-catalog__show-more']}
            >
              Свернуть
            </button>
          )}
        </div>
      )}
    </div>
  );
};
