import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { QuantityButton } from '@components/ui/QuantityButton';
import { BasketItemType } from '@/types/BasketItemType.ts';

interface BasketItemProps {
  item: BasketItemType;
  onQuantityChange: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}

export const BasketItem = ({
  item,
  onQuantityChange,
  onRemove,
}: BasketItemProps) => {
  const handleQuantityChange = (newQuantity: number) => {
    onQuantityChange(item.id, newQuantity);
  };

  const handleRemoveClick = () => {
    onRemove(item.id);
  };

  const totalPrice = item.price * item.quantity;

  return (
    <div className={styles.basket__item}>
      <div className={styles.product}>
        <div className={styles['product__image-container']}>
          <div>
            <img
              src={item.image}
              alt={item.name}
              className={styles.product__image}
            />
          </div>
          <button
            onClick={handleRemoveClick}
            className={styles['product__remove-button']}
          >
            удалить
          </button>
        </div>
        <div className={styles.product__info}>
          <Link to="#" className={styles.product__link}>
            {item.name}
          </Link>
          <span className={styles.product__code}>код {item.id}</span>
        </div>
      </div>
      <div>
        <QuantityButton
          initialQuantity={item.quantity}
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
