import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './styles.module.scss';
import { BasketItem } from '@components/widgets/BasketItem';
import Button from '@components/ui/Button';
import { CheckoutPage } from '@pages/CheckoutPage';
import { useGetAllBasketItems } from '@hooks/useBasket';
import { basketItemsMock } from '@pages/Basket/constants.ts';

const Basket = () => {
  const { data: basketItems = basketItemsMock } = useGetAllBasketItems();

  const [searchParams] = useSearchParams();
  const action = searchParams.get('action');

  useEffect(() => {
    if (action === 'checkout') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [action]);

  const totalPrice = basketItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const isBasketEmpty = basketItems.length === 0;

  return (
    <div className={styles.basket__wrapper}>
      <div className={styles.basket__content}>
        {isBasketEmpty ? (
          <div className={styles.basket__empty}>
            <span>Корзина пуста</span>
            <span>
              Вы можете выбрать товары в каталоге или воспользоваться поиском.
            </span>
          </div>
        ) : (
          <>
            <div className={styles.basket__headline}>
              <h2>Оформление заказа</h2>
              <h3>Список товаров</h3>
            </div>
            <div className={styles['basket__column-headers']}>
              <span>Товар</span>
              <span className={styles['quantity-full']}>Количество</span>
              <span className={styles['quantity-short']}>Кол-во</span>
              <span>Доставка</span>
              <span>Стоимость</span>
            </div>

            {basketItems.map((item) => (
              <BasketItem key={item.id} item={item} />
            ))}

            <div className={styles['basket__summary-container']}>
              <div className={styles.basket__summary}>
                <div className={styles['basket__summary-total']}>
                  <span className={styles['basket__summary-amount']}>
                    Итого
                  </span>
                  <div className={styles['basket__summary-amount']}>
                    {totalPrice.toFixed(2).replace('.', ',')} р.
                  </div>
                </div>
                <Link to={'?action=checkout'}>
                  <Button>Оформить заказ</Button>
                </Link>
              </div>
            </div>
          </>
        )}

        {action === 'checkout' && <CheckoutPage />}
      </div>
    </div>
  );
};

export default Basket;
