import { Link, useParams } from 'react-router-dom';

import styles from './styles.module.scss';
import {
  useGetAllCategories,
  useGetCategoryByUrl,
} from '@hooks/useCategories.ts';
import { Spin } from 'antd';
import { ProductCard } from '@pages/AllProductsPage/ProductCard';
import Sad from '@assets/icons/sad.svg';

export const CategoryPage = () => {
  const { categoryUrl } = useParams<{ categoryUrl: string }>();
  const {
    data: categoryProducts,
    error: productsError,
    isLoading: isProductsLoading,
  } = useGetCategoryByUrl(categoryUrl!);
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useGetAllCategories();

  const category = categories?.find((cat) => cat.url === categoryUrl);
  const subCategories = categories?.filter(
    (cat) => cat.idParent === category?.idCategories,
  );

  const isLoading = isCategoriesLoading || isProductsLoading;
  const error = categoriesError || productsError;
  const hasSubCategories = subCategories && subCategories.length > 0;
  const hasProducts =
    categoryProducts?.products && categoryProducts.products.length > 0;
  const isEmpty = !isLoading && !error && !hasSubCategories && !hasProducts;

  if (isEmpty) {
    return (
      <section className={styles['category__container']}>
        <h1 className={styles['category__title']}>
          {category?.nameCategories || 'Категория'}
        </h1>
        <div className={styles['no-subcategories']}>
          Ничего не найдено!
          <Sad />
        </div>
      </section>
    );
  }
  return (
    <section className={styles['category__container']}>
      <h1 className={styles['category__title']}>
        {category?.nameCategories || 'Категория'}
      </h1>
      {isLoading ? (
        <div className={styles['loading__container']}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          {hasSubCategories && (
            <div className={styles['category__subcategory-container']}>
              <ul className={styles['category__subcategory-list']}>
                {subCategories.map((subCat) => (
                  <li
                    key={subCat.idCategories}
                    className={styles['category__subcategory-item']}
                  >
                    <Link
                      to={`/${subCat.url}`}
                      className={styles['category__subcategory-link']}
                    >
                      {subCat.nameCategories}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <main className={styles['products__grid']}>
            {hasProducts &&
              categoryProducts.products.map((product) => (
                <ProductCard key={product.idProduct} product={product} />
              ))}
          </main>
        </>
      )}
    </section>
  );
};
