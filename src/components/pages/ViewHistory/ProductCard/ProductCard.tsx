import styles from './styles.module.scss';
import { ShoppingCart, Star } from 'lucide-react';
import { ViewedProduct } from '@models/product/api.ts';
import { Link } from 'react-router-dom';
import { useAddBasketItem, useDeleteBasketItem } from '@hooks/useBasket.ts';
import { useState } from 'react';

export const ProductCard = ({ product }: { product: ViewedProduct }) => {
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
    <div className={styles['product-card']}>
      <div className={styles['product-card__image-container']}>
        <Link to={`/product/${product.idProduct}`}>
          <img
            src={product.img}
            alt={product.nameProduct}
            className={styles['product-card__image']}
            loading="lazy"
          />
        </Link>
      </div>

      <div className={styles['product-card__content']}>
        <div className={styles['product-card__rating']}>
          <Star size={14} color={'#ffa726'} fill={'#ffa726'} />
          <span className={styles['product-card__rating-value']}>
            {product.rating}
          </span>
        </div>

        <h3 className={styles['product-card__title']}>{product.nameProduct}</h3>

        <div className={styles['product-card__price']}>
          <span className={styles['product-card__price-current']}>
            {product.price} р.
          </span>
        </div>

        <button
          className={isInCart ? 'in-cart-btn' : 'cart-btn'}
          onClick={() => toggleCart()}
        >
          <ShoppingCart
            size={16}
            color={isInCart ? 'var(--primary)' : '#fff'}
          />
          {isInCart ? 'В корзине' : 'В корзину'}
        </button>
      </div>
    </div>
  );
};
