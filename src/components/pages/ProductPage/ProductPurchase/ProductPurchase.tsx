import styles from './styles.module.scss';
import { Heart, Star } from 'lucide-react';
import { Product } from '@models/product/api.ts';

import { useAddToFavorites } from '@/hooks/useFavorites/useAddToFavorites';
import { useRemoveFavorites } from '@/hooks/useFavorites/useRemoveFavorites';
import { useAddBasketItem, useDeleteBasketItem  } from '@hooks/useBasket.ts';
import { useState } from 'react';

interface ProductGalleryProps {
  product: Product;
}

export const ProductPurchase = ({ product }: ProductGalleryProps) => {
  console.log("ekfefkfek",product);
  const [isInCart, setIsInCart] = useState(product.inCart);
  const [isInFav, setIsInFav] = useState(product.inFav);
  const { mutate: addToBasket } = useAddBasketItem();
  const { mutate: deleteItem } = useDeleteBasketItem(product.idProduct);

  const hasDiscount = product.discount != null && product.discount > 0;
  const oldPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : null;

  const { mutate: addToFavorites } = useAddToFavorites();
  const { mutate: removeFromFavorite } = useRemoveFavorites(product.idProduct);

  const handleToggleFavorite = () => {
    if (isInFav) {
      removeFromFavorite()
      setIsInFav(false)
    } else {
      addToFavorites(product.idProduct)
      setIsInFav(true)
    }
  };


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
          className={isInCart ? 'in-cart-btn' : 'cart-btn'}
          onClick={toggleCart}
        >
          {isInCart ? 'В корзине' : 'Добавить в корзину'}
        </button>
        <button 
          className={styles['product-purchase__favorite-btn']}
          onClick={handleToggleFavorite}
        >
          <Heart 
            color={isInFav ? '#ff4d4f' : '#000'}
            fill={isInFav ? '#ff4d4f' : 'none'}
          />
        </button>
      </div>
    </div>
  );
};
