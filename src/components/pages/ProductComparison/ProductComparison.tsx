// components/ProductComparisonList.tsx
import { useState } from 'react';
import { IProduct, IProductComparisonListProps } from "./types";
import { Link } from "react-router-dom";
import { products } from './constants';
import styles from './styles.module.scss';
import { Trash } from 'lucide-react';
import { ConfirmationModal } from "./ConfirmationModal/ConfirmationModal";

function getProductCountText(count: number): string {
  if (count % 10 === 1 && count % 100 !== 11) return 'товар';
  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) return 'товара';
  return 'товаров';
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const ProductComparisonComponent = ({ products: initialProducts = [] }: IProductComparisonListProps) => { 
  const [products, setProducts] = useState<IProduct[]>(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<number | null>(null);

  const handleDeleteClick = (categoryId: number) => {
    setCategoryToDelete(categoryId);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (categoryToDelete) {
      setProducts(prevProducts => 
        prevProducts.filter(product => 
          product.category.id_categories !== categoryToDelete
        )
      );
    }
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  // Группируем товары по категориям
  const productsByCategory = products.reduce<Record<number, { 
    category: { id_categories: number; name_categories: string; url: string }; 
    products: IProduct[] 
  }>>((acc, product) => {
    if (!acc[product.category.id_categories]) {
      acc[product.category.id_categories] = {
        category: product.category,
        products: []
      };
    }
    acc[product.category.id_categories].products.push(product);
    return acc;
  }, {});

  return (
    <div className={styles["product-comparison"]}>
      <h1 className={styles["product-title"]}>Списки сравнения</h1>
      
      <div className={styles["categories-list"]}>
        {Object.values(productsByCategory).map(({ category, products: categoryProducts }) => (
          <div key={category.id_categories} className={styles["category-item"]}>
            <div className={styles["category-content"]}>
              <div className={styles["category"]}>
                <Link 
                  to={`/compare/${category.url}`} 
                  className={styles["category-link"]}
                >
                  <h2 className={styles["category-name"]}>{capitalizeFirstLetter(category.name_categories)}</h2>
                  <div className={styles["category-footer"]}>
                    <span className={styles["product-count"]}>
                      {categoryProducts.length} {getProductCountText(categoryProducts.length)}
                    </span>
                  </div>
                </Link>
              </div>
              <Trash 
                size={16} 
                color='gray'
                onClick={() => handleDeleteClick(category.id_categories)}
                className={styles["delete-icon"]}
              />
            </div>
          </div>
        ))}
      </div>

      <ConfirmationModal
        isOpen={showModal}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        title="Вы хотите очистить список сравнения?"
        message="Все товары из этого списка будут удалены"
      />
    </div>
  );
};

// Обёртка с данными
export const ProductComparison = () => {
  return <ProductComparisonComponent products={products} />;
};

export { ProductComparisonComponent };