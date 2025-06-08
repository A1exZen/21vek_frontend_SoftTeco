import UndoNotification from '@/components/ui/UndoNotification/UndoNotification'; // обязательно подключи
import { useState } from 'react';
import { useCallback } from 'react';
import styles from './styles.module.scss';
import { BasketItem } from '@components/widgets/BasketItem';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks.ts';
import { setBasketItems } from '@store/slices/basket.slice.ts';
import { BasketItemType } from '@/types/BasketItemType.ts';

const Basket = () => {
  const basketItems = useAppSelector((state) => state.basket.basketItems);
  const dispatch = useAppDispatch();

  const [undoState, setUndoState] = useState<{
    item: BasketItemType | null;
    key: number;
  }>({ item: null, key: 0 });

  const handleQuantityChange = useCallback(
    (id: string, newQuantity: number) => {
      dispatch(
        setBasketItems(
          basketItems.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item,
          ),
        ),
      );
    },
    [basketItems, dispatch],
  );

  const handleRemove = (id: string) => {
    const itemToRemove = basketItems.find((item) => item.id === id);
    if (!itemToRemove) return;

    setUndoState({ item: itemToRemove, key: Date.now() });
  };

  const handleUndo = () => {
    setUndoState({ item: null, key: 0 });
  };

  const handleRemoveConfirm = useCallback(() => {
    if (undoState.item) {
      dispatch(
        setBasketItems(
          basketItems.filter((item) => item.id !== undoState.item?.id),
        ),
      );
    }
    setUndoState({ item: null, key: 0 });
  }, [undoState.item, basketItems, dispatch]);

  const totalPrice = basketItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const isBasketEmpty = basketItems.length === 0;

  return (
    <div className={styles.basket__wrapper}>
      <div className={styles.basket__content}>
        {isBasketEmpty ? (
          <div className={styles.basket__empty}>Ваша корзина пуста</div>
        ) : (
          <>
            <div className={styles.basket__headline}>
              <h2>Оформление заказа</h2>
              <h3>Список товаров</h3>
            </div>
            <div className={styles['basket__column-headers']}>
              <span>Товар</span>
              <span>Количество</span>
              <span>Доставка</span>
              <span>Стоимость</span>
            </div>

            {basketItems.map((item) => (
              <BasketItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}

            <div className={styles.basket__total}>
              <span className={styles['basket__total-price']}>Итого</span>
              <span className={styles['basket__total-price']}>
                {totalPrice.toFixed(2).replace('.', ',')} р.
              </span>
            </div>
          </>
        )}

        {undoState.item && (
          <UndoNotification
            key={undoState.key}
            message={`Товар "${undoState.item.name}" удален`}
            onUndo={handleUndo}
            onComplete={handleRemoveConfirm}
          />
        )}
      </div>
    </div>
  );
};

export default Basket;
