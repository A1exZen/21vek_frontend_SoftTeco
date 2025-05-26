import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { productCategories, Category } from './constants.ts';
import { SubcategoryGrid } from './SubcategoryGrid';

interface ProductCatalogProps {
  isOpen: boolean;
  onToggle: (value: boolean) => void;
  toggleButtonRef?: React.RefObject<HTMLButtonElement | null>;
}

const ProductCatalog = ({ isOpen, onToggle, toggleButtonRef }: ProductCatalogProps) => {
  const catalogRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category | null>(productCategories[0]);

  const handleCategoryHover = useCallback((category: Category) => {
    setActiveCategory(category);
  }, []);

  const handleClose = useCallback(() => {
    onToggle(false);
    setActiveCategory(null);
  }, [onToggle]);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        isOpen &&
        catalogRef.current &&
        !catalogRef.current.contains(target) &&
        (!toggleButtonRef?.current || !toggleButtonRef.current.contains(target))
      ) {
        handleClose();
      }
    },
    [isOpen, handleClose, toggleButtonRef],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, handleClickOutside]);

  return (
    <div className={styles['product-catalog']}>
      {isOpen && (
        <>
          <div className={styles['product-catalog__overlay']} />
          <div className={styles['product-catalog__panel']} ref={catalogRef}>
            <div className={styles['product-catalog__content']}>
              <nav className={styles['product-catalog__main-categories']}>
                <ul className={styles['product-catalog__category-list']}>
                  {productCategories.map((category) => (
                    <li
                      key={category.name}
                      className={`${styles['product-catalog__main-category']} ${
                        activeCategory?.name === category.name
                          ? styles['product-catalog__main-category--active']
                          : ''
                      }`}
                      onMouseEnter={() => handleCategoryHover(category)}
                      role="menuitem"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleCategoryHover(category);
                        }
                      }}
                    >
                      <Link
                        to={`category/${category.id}/`}
                        className={styles['product-catalog__category-link']}
                      >
                        <span
                          className={styles['product-catalog__category-icon']}
                        >
                          {category.icon}
                        </span>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className={styles['product-catalog__subcategories-wrapper']}>
                {activeCategory && (
                  <h2
                    className={
                      styles['product-catalog__subcategory-title-header']
                    }
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
        </>
      )}
    </div>
  );
};

export default ProductCatalog;