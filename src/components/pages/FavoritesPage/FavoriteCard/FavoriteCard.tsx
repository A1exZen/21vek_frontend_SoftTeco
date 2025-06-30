import { IFavoriteItem } from '@/models/favorite/api';
import styles from '../styles.module.scss';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import Button from '@components/ui/Button';
import {useState } from 'react';
import { useRemoveFavorites } from '@hooks/useFavorites/useRemoveFavorites.ts';
import { useAddBasketItem, useDeleteBasketItem } from '@/hooks/useBasket';

export const FavoriteCard = ({ item }: { item: IFavoriteItem }) => {
  const [isInCart, setIsInCart] = useState(item.inCart);

  const { mutate: removeFavorite } = useRemoveFavorites(item.idProduct);
  const { mutate: addToBasket } = useAddBasketItem();
  const { mutate: deleteItem } = useDeleteBasketItem(item.idProduct);

  const handleRemove = () => {
    removeFavorite();
  };

  const toggleCart = () => {
    if (isInCart) {
      deleteItem();
      setIsInCart(false);
    } else {
      addToBasket(item.idProduct);
      setIsInCart(true);
    }
  };

  return (
    <div key={item.idProduct} className={styles.card}>
      <div className={styles.card__content}>
        <Link
          to={`/product/${item.idProduct}`}
          className={styles.image__container}
        >
          <img
            src={item.img}
            alt={item.nameProduct}
            className={styles.product__image}
          />
        </Link>
        <div className={styles.info__container}>
          <Link
            to={`/product/${item.idProduct}`}
            className={styles.product__link}
          >
            {item.nameProduct}
          </Link>

          <div className={styles.product__meta}>
            <span>Бренд: {item.brand}</span>
            <span>Категория: {item.categoriesId}</span>
            <span>Статус: {item.status}</span>
          </div>

          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(item.rating) ? '#FFD700' : 'none'}
                color="#FFD700"
              />
            ))}
            <span className={styles['rating-value']}>
              ({item.rating.toFixed(1)})
            </span>
          </div>

          <div className={styles.price}>{item.price.toLocaleString()} р.</div>

          <div className={styles.actions}>
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

            <Button
              variant="link"
              className={styles.remove__button}
              onClick={handleRemove}
            >
              Удалить из списка
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
