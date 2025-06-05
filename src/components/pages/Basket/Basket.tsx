import { useCallback } from 'react';
import styles from './styles.module.scss';
import { BasketItem } from '@components/widgets/BasketItem';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks.ts';
import { setBasketItems } from '@store/slices/basket.slice.ts';

const Basket = () => {
  const basketItems = useAppSelector((state) => state.basket.basketItems);
  const dispatch = useAppDispatch();

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
    [],
  );

  const totalPrice = basketItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className={styles.basket__wrapper}>
      <div className={styles.basket__content}>
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
          />
        ))}
        <div className={styles.basket__total}>
          <span className={styles['basket__total-price']}>Итого</span>
          <span className={styles['basket__total-price']}>
            {totalPrice.toFixed(2).replace('.', ',')} р.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Basket;
