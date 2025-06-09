import { useState } from 'react';
import { Product } from "./types";
import smartphones from './constants';
import styles from './styles.module.scss';
import { ProductComparisonTable } from './ProductComparisonTable';
import { ConfirmationModal } from './ConfirmationModal'; // Новый компонент

export const ProductComparison = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>(smartphones);
  const [productsInCart, setProductsInCart] = useState<number[]>([]);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (id: number) => {
    setProductsInCart(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleRemoveRequest = (product: Product) => {
    setProductToDelete(product);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      setSelectedProducts(prev =>
        prev.filter(p => p.id !== productToDelete.id)
      );
      setProductsInCart(prev =>
        prev.filter(id => id !== productToDelete.id)
      );
    }
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className={styles["product-comparison"]}>
      <h1>Сравнение смартфонов</h1>

      {selectedProducts.length > 0 ? (
        <div className={styles["comparison-section"]}>
          <h2>Сравниваемые товары ({selectedProducts.length})</h2>
          <ProductComparisonTable
            products={selectedProducts}
            onRemoveRequest={handleRemoveRequest}
            productsInCart={productsInCart}
            onAddToCart={handleAddToCart}
          />
        </div>
      ) : (
        <div className={styles["empty-message"]}>
          Нет товаров для сравнения
        </div>
      )}

      <ConfirmationModal
        isOpen={showModal}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        title="Удаление товара"
        message={`Вы уверены, что хотите убрать ${productToDelete?.name} из сравнения?`}
      />
    </div>
  );
};
