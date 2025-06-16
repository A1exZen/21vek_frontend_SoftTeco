{/*The list of product categories */}

import { useState } from 'react';
import { IProduct, IProductComparisonListProps } from "../types";
import styles from './styles.module.scss';
import { CategoryItem } from './CategoryItem';
import { useProductCategories } from './useProductCategories';
import { useProductTextUtils } from './useProductTextUtils';
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal';
import { useConfirmationModal } from '../ConfirmationModal/useConfirmationModal';
import { ListX } from 'lucide-react';

export const ProductComparisonList = ({ products: initialProducts }: IProductComparisonListProps) => { 
  const [products, setProducts] = useState<IProduct[] | undefined>(initialProducts);
  const { productsByCategory } = useProductCategories(products || []);
  const { getProductCountText, capitalizeFirstLetter } = useProductTextUtils();
  
  const { 
    isModalOpen: showModal, 
    itemToDelete: categoryToDelete, 
    openModal, 
    closeModal 
  } = useConfirmationModal<number>();

  const handleDeleteClick = (categoryId: number) => {
    openModal(categoryId);
  };

  const confirmDelete = () => {
    if (categoryToDelete && products) {
      setProducts(prevProducts => 
        prevProducts?.filter(product => 
          product.category.idCategories !== categoryToDelete
        )
      );
    }
    closeModal();
  };

  if (!products || products.length === 0) {
    return (
      <div className={styles["product__comparison"]}>
        <h1 className={styles["product__title"]}>Списки сравнения</h1>
        <div className={styles["empty__state"]}>
            <ListX size={28} color="#ccc" className={styles["empty__icon"]} />
            <p className={styles["empty__text"]}>Нет товаров для сравнения</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["product__comparison"]}>
      <h1 className={styles["product__title"]}>Списки сравнения</h1>
      
      <div className={styles["categories__list"]}>
        {Object.values(productsByCategory).map(({ category, products }) => (
          <CategoryItem
            key={category.idCategories}
            category={category}
            products={products}
            onDelete={handleDeleteClick}
            getProductCountText={getProductCountText}
            capitalizeFirstLetter={capitalizeFirstLetter}
          />
        ))}
      </div>

      <ConfirmationModal
        isOpen={showModal}
        onConfirm={confirmDelete}
        onCancel={closeModal}
        title="Вы хотите очистить список сравнения?"
        message="Все товары из этого списка будут удалены"
      />
    </div>
  );
};