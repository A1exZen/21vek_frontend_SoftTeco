import { Category } from '@components/widgets/ProductCatalog/constants.ts';
import styles from '@components/widgets/ProductCatalog/styles.module.scss';
import { Link } from 'react-router-dom';
import {
  SubcategoryItems
} from './SubcategoryItems';

export const SubcategoryGrid = ({
  activeCategory,
}: {
  activeCategory: Category;
}) => {
  return (
    <div className={styles['product-catalog__subcategories-grid']}>
      {(activeCategory.subcategories || []).map((subcategory) => (
        <div
          key={subcategory.name}
          className={styles['product-catalog__subcategory']}
        >
          <div className={styles['product-catalog__subcategory-title']}>
            {subcategory.icon && (
              <span className={styles['product-catalog__subcategory-icon']}>
                {subcategory.icon}
              </span>
            )}
            <Link
              to={`category/${subcategory.id}/`}
              className={styles['product-catalog__subcategory-link']}
            >
              {subcategory.name}
            </Link>
          </div>
          {subcategory.subcategories && (
            <SubcategoryItems
              items={subcategory.subcategories}
              subcategoryName={subcategory.name}
            />
          )}
        </div>
      ))}
    </div>
  );
};
