{/*here the assembly of the header, 
  table, modal window for products that 
  are already selected by category takes place*/}
import { useState } from 'react';
import { ListX } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { IProduct } from "../types";
import { products } from '../constants';
import styles from './styles.module.scss';
import { ProductComparisonTable } from '../ProductComparisonTable/ProductComparisonTable';
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal';
import Button from '@/components/ui/Button';
import { useConfirmationModal } from '../ConfirmationModal/useConfirmationModal';

export const ProductComparisonData = () => {
  {/*Get the parameter by url*/}
  const { category } = useParams<{ category: string }>();

  const categoryData = products.find(
    (product) => product.category.url === category
  )?.category;

  const categoryId = categoryData?.idCategories;
  const categoryName = categoryData?.nameCategories ?? '';

  {/*Filter products by category*/}
  const filteredProducts = products.filter(
    (product) => product.category.idCategories === categoryId
  );

  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>(filteredProducts);
  const [productsInCart, setProductsInCart] = useState<number[]>([]);

  const { 
    isModalOpen: showModal, 
    itemToDelete: productToDelete, 
    openModal, 
    closeModal 
  } = useConfirmationModal<IProduct | null>();

  {/*Add/remove items from the basket*/}
  const handleAddToCart = (id: number) => {
    setProductsInCart(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleRemoveRequest = (product: IProduct) => {
    openModal(product);
  };

  const handleClearAll = () => {
    openModal(null);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      {/*Delete a specific product */}
      setSelectedProducts(prev => 
        prev.filter(p => p.idProduct !== productToDelete.idProduct)
      );
      setProductsInCart(prev => 
        prev.filter(id => id !== productToDelete.idProduct)
      );
    } else {
    {/*Clear the list*/}
      setSelectedProducts([]);
      setProductsInCart([]);
    }
    closeModal();
  };

  const cancelDelete = () => {
    closeModal();
  };

  return (
    <div className={styles["product-comparison"]}>
      <div className={styles["header__row"]}>
        <h1 className={styles["product__title"]}>
          Сравнение товаров {categoryName && `- ${categoryName}`}
        </h1>
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
        <div className={styles["comparison__section"]}>
          <h2 className={styles["product__text"]}>
            сравниваемые товары ({selectedProducts.length})
          </h2>
          <ProductComparisonTable
            products={selectedProducts}
            onRemoveRequest={handleRemoveRequest}
            productsInCart={productsInCart}
            onAddToCart={handleAddToCart}
          />
        </div>
      ) : (
        <div className={styles["empty__state"]}>
            <ListX size={28} color="#ccc" className={styles["empty__icon"]} />
            <p className={styles["empty__text"]}>У вас нет товаров в этом списке сравнения</p>
            <Link to="/compare">
              <Button
              variant="link"
              className={styles["back__button"]}
            >
              Вернуться к спискам сравнения
            </Button>
            </Link>
        </div>
      )}

      <ConfirmationModal
        isOpen={showModal}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        title={productToDelete
          ? "Удалить товар из сравнения"
          : "Вы хотите очистить список сравнения?"}
        message={productToDelete
          ? `Удалить товар ${productToDelete.nameProduct} из списка сравнения?`
          : "Все товары из этого списка будут удалены"}
      />
    </div>
  );
};
