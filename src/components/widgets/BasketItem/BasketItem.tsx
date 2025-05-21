import { useState } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { QuantityButton } from '@components/ui/QuantityButton';
import { BasketItemType } from '@/types/BasketItemType.ts';

interface BasketItemProps {
  item: BasketItemType;
}

export const BasketItem = ({ item }: BasketItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const totalPrice = item.price * quantity;

  return (
    <div className={styles.basketItem}>
      <div className={styles.product}>
        <div className={styles.productImageContainer}>
          <img
            src={item.image}
            alt={item.name}
            className={styles.productImageWrapper}
          />
          <button>удалить</button>
        </div>
        <div className={styles.productInfo}>
          <Link to="#" className={styles.productLink}>
            {item.name}
          </Link>
          <span className={styles.productCode}>код {item.id}</span>
        </div>
      </div>
      <div>
        <QuantityButton
          initialQuantity={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className={styles.delivery}>
        <span>Курьером: сегодня</span>
        <span>Самовывоз: сегодня</span>
      </div>
      <div className={styles.price}>
        <span>{totalPrice.toFixed(2).replace('.', ',')} р.</span>
      </div>
    </div>
  );
};
