import { Link, useParams } from 'react-router-dom';

import styles from './styles.module.scss'
import {
  productCategories
} from '@components/widgets/ProductCatalog/constants.ts';

export const CategoryPage = () => {
  const { categoryUrl } = useParams<{ categoryUrl: string }>();
  const category = productCategories.find(cat => cat.url === categoryUrl);
  const subCategories = productCategories.filter(cat => cat.idParent === category?.id);
  // const {
  //   data: category,
  //   isLoading,
  //   isError,
  // } = useGetCategory(categoryUrl || '');
  // const categoryItem = Array.isArray(category) ? category[0] : category;
  if (!category) {
    return <div className={styles['category__container']}>Категория не найдена</div>;
  }
  return (
    <section className={styles['category__container']}>
      <h1 className={styles['category__title']}>{category.name}</h1>
      {subCategories.length > 0 && (
        <div className={styles['category__subcategory-container']}>
          <ul className={styles['category__subcategory-list']}>
            {subCategories.map(subCat => (
              <li key={subCat.id} className={styles['category__subcategory-item']}>
                <Link to={`/${subCat.url}`} className={styles['category__subcategory-link']}>
                  {subCat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
