import { useState } from 'react';
import { IProduct, IProductComparisonListProps, IGroupedProducts } from "./types";
import { Link } from "react-router-dom";
import { products } from './constants';
import styles from './styles.module.scss';
import { Trash } from 'lucide-react';
import { ConfirmationModal } from "./ConfirmationModal/ConfirmationModal";
import { useConfirmationModal } from './ConfirmationModal/useConfirmationModal';


const getProductCountText = (count: number): string => {
  if (count % 10 === 1 && count % 100 !== 11) return 'товар';
  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) return 'товара';
  return 'товаров';
};

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const ProductComparisonList = ({ products: initialProducts = [] }: IProductComparisonListProps) => { 
  const [products, setProducts] = useState<IProduct[]>(initialProducts);
  const { 
    isModalOpen: showModal, 
    itemToDelete: categoryToDelete, 
    openModal, 
    closeModal 
  } = useConfirmationModal<number>();


  const groupProductsByCategory = (products: IProduct[]): IGroupedProducts => {
    const grouped: IGroupedProducts = {};
    
    products.forEach(product => {
      const categoryId = product.category.idCategories;
      
      if (!grouped[categoryId]) {
        grouped[categoryId] = {
          category: product.category,
          products: []
        };
      }
      
      grouped[categoryId].products.push(product);
    });
    
    return grouped;
  };

  const productsByCategory = groupProductsByCategory(products);

  const handleDeleteClick = (categoryId: number) => {
    openModal(categoryId);
  };

  const confirmDelete = () => {
    if (categoryToDelete) {
      setProducts(prevProducts => 
        prevProducts.filter(product => 
          product.category.idCategories !== categoryToDelete
        )
      );
    }
    closeModal();
  };

  const renderCategoryItem = (
    category: { idCategories: number; nameCategories: string; url: string },
    categoryProducts: IProduct[]
  ) => (
    <div key={category.idCategories} className={styles["category__item"]}>
      <div className={styles["category__content"]}>
        <div className={styles["category"]}>
          <Link 
            to={`/compare/${category.url}`} 
            className={styles["category__link"]}
          >
            <h2 className={styles["category__name"]}>
              {capitalizeFirstLetter(category.nameCategories)}
            </h2>
            <div className={styles["category-__footer"]}>
              <span className={styles["product__count"]}>
                {categoryProducts.length} {getProductCountText(categoryProducts.length)}
              </span>
            </div>
          </Link>
        </div>
        <Trash 
          size={16} 
          color='gray'
          onClick={() => handleDeleteClick(category.idCategories)}
          className={styles["delete__icon"]}
        />
      </div>
    </div>
  );

  return (
    <div className={styles["product__comparison"]}>
      <h1 className={styles["product__title"]}>Списки сравнения</h1>
      
      <div className={styles["categories__list"]}>
        {Object.values(productsByCategory).map(({ category, products }) => 
          renderCategoryItem(category, products)
        )}
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

export const ProductComparison = () => {
  return <ProductComparisonList products={products} />;
}