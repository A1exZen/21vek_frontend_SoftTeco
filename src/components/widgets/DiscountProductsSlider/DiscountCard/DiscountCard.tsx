import { Product } from '@models/product/api.ts';
import styles from '../styles.module.scss';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useAddBasketItem, useDeleteBasketItem } from '@hooks/useBasket.ts';
import { useState } from 'react';

export const DiscountCard = ({ product }: { product: Product }) => {
  const [isInCart, setIsInCart] = useState(product.inCart);

  const { mutate: addToBasket } = useAddBasketItem();
  const { mutate: deleteItem } = useDeleteBasketItem(product.idProduct);

  const toggleCart = () => {
    if (isInCart) {
      deleteItem();
      setIsInCart(false);
    } else {
      addToBasket(product.idProduct);
      setIsInCart(true);
    }
  };

  return (
    <div key={product.idProduct} className={styles['product-card']}>
      <div className={styles['product-card__image-container']}>
        <Link to={`/product/${product.idProduct}`}>
          <img
            src={product.img}
            alt={product.nameProduct}
            className={styles['product-card__image']}
          />
        </Link>
        {product.discount != null && product.discount > 0 && (
          <span className={styles['product-card__discount']}>
            -{product.discount}%
          </span>
        )}
      </div>

      <div className={styles['product-card__content']}>
        <h3 className={styles['product-card__title']}>{product.nameProduct}</h3>

        <div className={styles['product-card__price']}>
          <span className={styles['product-card__price-current']}>
            {product.price} р.
          </span>
          {product.discount && product.discount > 0 ? (
            <span className={styles['product-card__price-old']}>
              {Math.round(product.price / (1 - product.discount / 100))} p.
            </span>
          ) : null}
        </div>
        <button
          className={isInCart ? styles['product-card__buy-btn-inCart'] : styles['product-card__buy-btn']}
          onClick={() => toggleCart()}
        >
          <ShoppingCart
            size={16}
            color={isInCart ? 'var(--primary)' : '#fff'}
          />
        </button>
      </div>
    </div>
  );
};
