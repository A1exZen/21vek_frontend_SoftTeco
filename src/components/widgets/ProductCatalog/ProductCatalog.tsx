import React, {
  useCallback,
  useState,
  useEffect,
  useRef,
  useMemo,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import { productCategories, Category } from './constants.ts';
import { SubcategoryGrid } from './SubcategoryGrid';

interface ProductCatalogProps {
  isOpen: boolean;
  onToggle: (value: boolean) => void;
  toggleButtonRef?: React.RefObject<HTMLButtonElement | null>;
}

const ProductCatalog = ({
  isOpen,
  onToggle,
  toggleButtonRef,
}: ProductCatalogProps) => {
  const catalogRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const topLevelCategories = useMemo(
    () => productCategories.filter((category) => category.idParent === null),
    [],
  );
  const [activeCategory, setActiveCategory] = useState<Category | null>(
    () => topLevelCategories[0] || null,
  );

  const handleCategoryHover = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  const handleClose = useCallback(() => {
    onToggle(false);
    setActiveCategory(null);
  }, [onToggle]);

  const handleCategoryKeyDown = useCallback(
    (event: React.KeyboardEvent, category: Category) => {
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
    if (isOpen) {
      handleClose();
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
                  key={category.name}
                  className={`${styles['product-catalog__main-category']} ${
                    activeCategory?.name === category.name
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
                    {category.name}
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
                {activeCategory.name}
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
