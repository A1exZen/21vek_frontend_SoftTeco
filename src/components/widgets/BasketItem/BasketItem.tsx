import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { QuantityButton } from '@components/ui/QuantityButton';
import { BasketItemType } from '@models/basket/api';
import { useDeleteBasketItem, useEditQuantity } from '@hooks/useBasket';
import { useCallback, useState } from 'react';
import UndoNotification from '@components/ui/UndoNotification/UndoNotification';

interface BasketItemProps {
  item: BasketItemType;
}

export const BasketItem = ({ item }: BasketItemProps) => {
  const { mutate: deleteItem } = useDeleteBasketItem(item.id);
  const { mutate: editQuantity } = useEditQuantity(item.id);

  const [isRemoving, setIsRemoving] = useState(false);
  const handleRemove = () => {
    setIsRemoving(true);
  };
  const handleUndo = () => {
    setIsRemoving(false);
  };
  const handleRemoveConfirm = useCallback(() => {
    if (isRemoving) {
      deleteItem();
      setIsRemoving(false);
    }
  }, [isRemoving, deleteItem]);

  const handleQuantityChange = (newQuantity: number) => {
    editQuantity(newQuantity);
  };

  return (
    <>
      <div className={styles.basket__item}>
        <div className={styles.product}>
          <div className={styles['product__image-container']}>
            <img
              src={item.img}
              alt={item.name}
              className={styles.product__image}
            />
            <button
              onClick={handleRemove}
              className={styles['product__remove-button']}
            >
              удалить
            </button>
          </div>
          <div className={styles.product__info}>
            <Link to={`/product/${item.id}`} className={styles.product__link}>
              {item.name}
            </Link>
            <span className={styles.product__code}>код {item.id}</span>
          </div>
        </div>
        <div className={styles.quantity}>
          <QuantityButton
            quantity={item.quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <div className={styles.delivery}>
          <span>Курьером: сегодня</span>
          <span>Самовывоз: сегодня</span>
        </div>
        <div className={styles.price}>
          <span>{item.price.toFixed(2).replace('.', ',')} р.</span>
        </div>
      </div>
      {isRemoving && (
        <UndoNotification
          message={`Товар "${item.name}" удален`}
          onUndo={handleUndo}
          onComplete={handleRemoveConfirm}
        />
      )}
    </>
  );
};
