import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import { SubcategoryGrid } from './SubcategoryGrid';
import { useGetAllCategories } from '@hooks/useCategories.ts';
import { CategoryWithoutProducts } from '@models/category/api.ts';

interface ProductCatalogProps {
  isOpen: boolean;
  onToggle?: (value?: boolean) => void;
  toggleButtonRef?: React.RefObject<HTMLButtonElement | null>;
}

const ProductCatalog = ({
  isOpen,
  onToggle,
  toggleButtonRef,
}: ProductCatalogProps) => {
  const catalogRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const prevLocationRef = useRef(location.pathname);

  const { data: productCategories } = useGetAllCategories();


  const topLevelCategories = useMemo(() => {
    const categories =
      productCategories?.filter((category) => category.idParent === null) ?? [];

    const categoriesWithSubcategoriesInfo = categories.map((category) => ({
      category,
      hasSubcategories:
        productCategories?.some(
          (subcategory) => subcategory.idParent === category.idCategories,
        ) ?? false,
    }));

    return categoriesWithSubcategoriesInfo
      .sort((a, b) => {
        if (a.hasSubcategories && !b.hasSubcategories) return -1;
        if (!a.hasSubcategories && b.hasSubcategories) return 1;
        return 0;
      })
      .map((item) => item.category);
  }, [productCategories]);

  const [activeCategory, setActiveCategory] =
    useState<CategoryWithoutProducts | null>(
      () => topLevelCategories[0] || null,
    );

  const handleCategoryHover = useCallback(
    (category: CategoryWithoutProducts) => {
      setActiveCategory(category);
    },
    [],
  );

  const handleClose = useCallback(() => {
    if (onToggle) {
      onToggle(false);
    }
    setActiveCategory(null);
  }, [onToggle]);

  const handleCategoryKeyDown = useCallback(
    (event: React.KeyboardEvent, category: CategoryWithoutProducts) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleCategoryHover(category);
      } else if (event.key === 'Escape') {
        handleClose();
      }
    },
    [handleCategoryHover, handleClose],
  );

  useEffect(() => {
    if (prevLocationRef.current !== location.pathname) {
      handleClose();
      prevLocationRef.current = location.pathname;
    }
  }, [location.pathname, handleClose]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        catalogRef.current &&
        !catalogRef.current.contains(target) &&
        (!toggleButtonRef?.current || !toggleButtonRef.current.contains(target))
      ) {
        handleClose();
      }
    },
    [handleClose, toggleButtonRef],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, handleClickOutside]);

  useEffect(() => {
    if (isOpen && topLevelCategories.length > 0) {
      setActiveCategory(topLevelCategories[0]);
    }
  }, [isOpen, topLevelCategories]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles['product-catalog']}>
      <div className={styles['product-catalog__overlay']} />
      <div className={styles['product-catalog__panel']} ref={catalogRef}>
        <div className={styles['product-catalog__content']}>
          <nav className={styles['product-catalog__main-categories']}>
            <ul className={styles['product-catalog__category-list']}>
              {topLevelCategories.map((category) => (
                <li
                  key={category.nameCategories}
                  className={`${styles['product-catalog__main-category']} ${
                    activeCategory?.nameCategories === category.nameCategories
                      ? styles['product-catalog__main-category--active']
                      : ''
                  }`}
                  onMouseEnter={() => handleCategoryHover(category)}
                >
                  <Link
                    to={`/${category.url}/`}
                    className={styles['product-catalog__category-link']}
                    onKeyDown={(e) => handleCategoryKeyDown(e, category)}
                    onFocus={() => handleCategoryHover(category)}
                  >
                    {category.nameCategories}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles['product-catalog__subcategories-wrapper']}>
            {activeCategory && (
              <h2
                className={styles['product-catalog__subcategory-title-header']}
              >
                {activeCategory.nameCategories}
              </h2>
            )}
            <div className={styles['product-catalog__subcategories']}>
              {activeCategory && (
                <SubcategoryGrid activeCategory={activeCategory} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
