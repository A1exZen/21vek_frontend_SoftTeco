import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import styles from './styles.module.scss';
import { Category, Product } from '@models/product/api.ts';

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  product?: Product;
  category?: Category;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ product, category }) => {

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Главная', path: '/' }
    ];

    if (product && product.category) {
      breadcrumbs.push({
        label: product.category.nameCategories,
        path: `/${product.category.url}`
      });

      breadcrumbs.push({
        label: product.brand,
        path: `/products?brand=${encodeURIComponent(product.brand)}`,
        isActive: true
      });
    }
    else if (category) {
      breadcrumbs.push({
        label: category.nameCategories,
        path: `/${category.url}`,
        isActive: true
      });
    }
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className={styles.breadcrumbs}>
      <ol className={styles.breadcrumbs__list}>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={index} className={styles.breadcrumbs__item}>
              {isLast ? (
                <span
                  className={`${styles.breadcrumbs__link} ${styles['breadcrumbs__link--active']}`}

                >
                  {breadcrumb.label}
                </span>
              ) : (
                <>
                  <Link
                    to={breadcrumb.path}
                    className={styles.breadcrumbs__link}
                  >
                    {breadcrumb.label}
                  </Link>
                  <ChevronRight
                    className={styles.breadcrumbs__separator}
                    size={16}
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};