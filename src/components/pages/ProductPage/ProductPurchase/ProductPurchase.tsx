import styles from './styles.module.scss';
import { Heart, Star } from 'lucide-react';

export const ProductPurchase = () => {
  return (
    <div className={styles['product-purchase']}>
      <div className={styles['product-purchase__rating']}>
        <Star color="#f3c623" />
        <span>4.8</span>
        <span className={styles['product-purchase__reviews']}>(50)</span>
      </div>

      <div className={styles['product-purchase__price-section']}>
        <div className={styles['product-purchase__price']}>2 399,00 р.</div>
        <div className={styles['product-purchase__old-price']}>2 799,00 р.</div>
        <div className={styles['product-purchase__discount']}>-14,29%</div>
      </div>
      <div className={styles['product-purchase__buttons-section']}>
        <button className={styles['product-purchase__cart-btn']}>Добавить в корзину</button>
        <button className={styles['product-purchase__favorite-btn']}><Heart/></button>
      </div>
    </div>
  );
};