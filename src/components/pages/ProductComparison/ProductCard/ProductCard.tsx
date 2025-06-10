import Button from "@/components/ui/Button";
import { Product } from "../types";
import styles from './styles.module.scss';
import { ShoppingCart, Check, Star } from 'lucide-react';
import { cc } from "@/utils/combineClasses";

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: number) => void;
}

function getReviewsWord(count: number): string {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return 'отзывов';
  if (lastDigit === 1) return 'отзыв';
  if (lastDigit >= 2 && lastDigit <= 4) return 'отзыва';
  return 'отзывов';
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
        <div className={styles.card__price}>{product.price.toLocaleString()} р.</div>
        <h3 className={styles.card__title}>{product.name}</h3>
        <div className={styles.card__rating}>
  {[...Array(5)].map((_, i) => (
    <Star 
      key={i}
      size={16}
      fill={i < Math.floor(product.rating) ? '#FFD700' : 'none'}
      color="#FFD700"
    />
  ))}
  <span className={styles.card__ratingValue}>
    ({product.rating.toFixed(1)})
  </span>
</div>
<div>
  {product.reviewsCount > 0 && (
    <span className={styles['card__reviews-count']}>
      ({product.reviewsCount} {getReviewsWord(product.reviewsCount)})
    </span>
  )}
</div>
        <Button 
          variant="solid"
          color="first"
          className={cc(
          product.inCart ? styles['in-cart__button'] : styles.cart__button
        )}
          onClick={() => onAddToCart(product.id)}
        >       
          {product.inCart ? <Check size={16} /> : <ShoppingCart size={16} color='white' />}
          <span className={styles.card__text}>
            {product.inCart ? "В корзине" : "В корзину"}
          </span>
        </Button>
      </div>
    </div>
  );
};