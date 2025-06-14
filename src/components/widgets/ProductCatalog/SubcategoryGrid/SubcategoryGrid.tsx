import {
  productCategories,
} from '@components/widgets/ProductCatalog/constants.ts';
import styles from '@components/widgets/ProductCatalog/styles.module.scss';
import { Link } from 'react-router-dom';
import { SubcategoryItems } from './SubcategoryItems';
import { useMemo } from 'react';
import { CategoryWithoutProducts } from '@models/category/api.ts';
import Sad from '@assets/icons/sad.svg';

export const SubcategoryGrid = ({
  activeCategory,
}: {
  activeCategory: CategoryWithoutProducts;
}) => {
  const subcategories = useMemo(
    () =>
      productCategories.filter(
        (category) => Number(category.idParent) === Number(activeCategory.idCategories),
      ),
    [activeCategory.idCategories],
  );
  if (subcategories.length === 0) {
    return (
      <div className={styles['product-catalog__subcategories-grid']}>
        <p className={styles['product-catalog__no-subcategories']}>
          Категорий не найдено! <Sad/>
        </p>
      </div>
    );
  }
  return (
    <div className={styles['product-catalog__subcategories-grid']}>
      {subcategories.map((subcategory) => (
        <div
          key={subcategory.id}
          className={styles['product-catalog__subcategory']}
        >
          <div className={styles['product-catalog__subcategory-title']}>
            <Link
              to={subcategory.url}
              className={styles['product-catalog__subcategory-link']}
            >
              {subcategory.name}
            </Link>
          </div>
          <SubcategoryItems
            parentCategoryId={subcategory.id}
            subcategoryName={subcategory.name}
          />
        </div>
      ))}
    </div>
  );
};
