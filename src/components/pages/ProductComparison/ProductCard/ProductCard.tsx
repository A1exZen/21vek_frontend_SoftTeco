import { Product } from "../types";
import styles from './styles.module.scss';
import { cc } from '@/utils/combineClasses';

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: number) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img 
          src={product.image} 
          alt={product.name} 
          className={styles.card__imageImg}
        />
      </div>
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{product.name}</h3>
        <div className={styles.card__rating}>
          <span className={styles.card__ratingStars}>★ {product.rating}</span>
          <span className={styles.card__ratingReviews}>({product.reviewsCount} отзывов)</span>
        </div>
        <div className={styles.card__price}>{product.price.toLocaleString()} ₽</div>
        <button 
          onClick={() => onAddToCart(product.id)}
          className={cc(
            styles.card__button,
            product.inCart && styles['card__button--in-cart']
          )}
        >
          {product.inCart ? "В корзине" : "В корзину"}
        </button>
      </div>
    </div>
  );
};