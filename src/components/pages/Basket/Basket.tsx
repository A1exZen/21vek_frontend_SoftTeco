import styles from './styles.module.scss';
import { BasketItem } from '@components/widgets/BasketItem';
import { BasketItemType } from '@/types/BasketItemType.ts';
import iphone from '@images/iphone.jpg';

const basketItems: BasketItemType[] = [
  {
    id: crypto.randomUUID(),
    image: iphone,
    name: 'Смартфон Apple iPhone 15 Pro 256GB',
    quantity: 1,
    price: 4399.0,
  },
  {
    id: crypto.randomUUID(),
    image: iphone,
    name: 'Смартфон Apple iPhone 15 Pro 256GB',
    quantity: 1,
    price: 4399.0,
  },
  {
    id: crypto.randomUUID(),
    image: iphone,
    name: 'Смартфон Apple iPhone 15 Pro 256GB',
    quantity: 1,
    price: 4399.0,
  },
];

const totalPrice = basketItems.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);

export const Basket = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.headline}>
          <h1>Оформление заказа</h1>
          <h2>Список товаров</h2>
        </div>
        <div className={styles.column__headers}>
          <span>Товар</span>
          <span>Количество</span>
          <span>Доставка</span>
          <span>Стоимость</span>
        </div>
        {basketItems.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
        <div className={styles.basket__total}>
          <span className={styles.total__price}>Итого</span>
          <span className={styles.total__price}>
            {totalPrice.toFixed(2).replace('.', ',')} р.
          </span>
        </div>
      </div>
    </div>
  );
};
