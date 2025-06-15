import styles from './styles.module.scss';
import { Heart, Star } from 'lucide-react';
import { useState } from 'react';
import { Product } from '@models/product/api.ts';

interface ProductGalleryProps {
  product: Product;
}

export const ProductPurchase = ({ product }: ProductGalleryProps) => {
  const [inCart, setInCart] = useState(product.inCart);

  const hasDiscount = product.discount != null && product.discount > 0;
  const oldPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : null;

  const handleAddToCart = () => {
    setInCart(true);
    // api call
    console.log(`Добавлен в корзину: ${product.idProduct}`);
  };

  return (
    <div className={styles['product-purchase']}>
      <div className={styles['product-purchase__rating']}>
        <Star color="#f3c623" />
        <span>{product.rating.toFixed(1)}</span>
        <span className={styles['product-purchase__reviews']}>
          ({product.numberOfReviews})
        </span>
      </div>

      <div className={styles['product-purchase__price-section']}>
        <div className={styles['product-purchase__price-section-2']}>
          <span className={styles['product-purchase__price']}>
            {product.price} p.
          </span>
          {hasDiscount && (
            <span className={styles['product-purchase__discount']}>
              -{product.discount}%
            </span>
          )}
        </div>
        {oldPrice && (
          <span className={styles['product-purchase__price-old']}>
            {oldPrice} р.
          </span>
        )}
      </div>

      <div className={styles['product-purchase__buttons-section']}>
        <button
          className={styles['product-purchase__cart-btn']}
          onClick={handleAddToCart}
          disabled={inCart}
        >
          {inCart ? 'В корзине' : 'Добавить в корзину'}
        </button>
        <button className={styles['product-purchase__favorite-btn']}>
          <Heart />
        </button>
      </div>
    </div>
  );
};
