import {
  Category,
  productCategories
} from '@components/widgets/ProductCatalog/constants.ts';
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
  const subcategories = productCategories.filter(
    (category) => category.idParent === activeCategory.id
  );
  return (
    <div className={styles['product-catalog__subcategories-grid']}>
      {subcategories.map((subcategory) => (
        <div
          key={subcategory.id}
          className={styles['product-catalog__subcategory']}
        >
          <div className={styles['product-catalog__subcategory-title']}>
            <Link
              to={`/category/${subcategory.url}`}
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
