import { useState } from 'react';
import { IProduct } from "./types";
import smartphones from './constants';
import styles from './styles.module.scss';
import { ProductComparisonTable } from './ProductComparisonTable/ProductComparisonTable';
import { ConfirmationModal } from './ConfirmationModal';
import Button from '@/components/ui/Button';

export const ProductComparison = () => {
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>(smartphones);
  const [productsInCart, setProductsInCart] = useState<number[]>([]);
  const [productToDelete, setProductToDelete] = useState<IProduct | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = (id: number) => {
    setProductsInCart(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleRemoveRequest = (product: IProduct) => {
    setProductToDelete(product);
    setShowModal(true);
  };

  const handleClearAll = () => {
    setProductToDelete(null);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      setSelectedProducts(prev =>
        prev.filter(p => p.id_product !== productToDelete.id_product)
      );
      setProductsInCart(prev =>
        prev.filter(id => id !== productToDelete.id_product)
      )
    } else {
      setSelectedProducts([]);
      setProductsInCart([]);
      }
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className={styles["product-comparison"]}>
      <div className={styles["header-row"]}>
        <h1 className={styles["product-title"]}>Сравнение товаров</h1>
        {selectedProducts.length > 0 && (
          <Button 
            variant="link"
            className={styles["clear-all__button"]}
            onClick={handleClearAll}
          >
            Очистить список
          </Button>
        )}
      </div>

      {selectedProducts.length > 0 ? (
        <div className={styles["comparison-section"]}>
          <h2 className={styles["product-text"]}>сравниваемые товары ({selectedProducts.length})</h2>
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
        title={productToDelete ? "Удалить товар из сравнения" : "Вы хотите очистить список сравнения?"}
        message={
        productToDelete 
          ? `Удалить товар ${productToDelete.name_product} из списка сравнения?`
          : "Все товары из этого списка будут удалены"
        }
      />
    </div>
  );
};
