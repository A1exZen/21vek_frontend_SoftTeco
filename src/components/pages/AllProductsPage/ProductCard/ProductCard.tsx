import styles from './styles.module.scss';
import { Heart, Scale, ShoppingCart, Star } from 'lucide-react';
import { Tooltip } from 'antd';
import { Product } from '@models/product/api.ts';
import { Link } from 'react-router-dom';
import { useAddToFavorites } from '@/hooks/useFavorites/useAddToFavorites';
import { useRemoveFavorites } from '@/hooks/useFavorites/useRemoveFavorites';
import { useGetFavorites } from '@/hooks/useFavorites/useGetFavorites';
import { useAddBasketItem } from '@hooks/useBasket.ts';

export const ProductCard = ({ product }: { product: Product }) => {
  const hasDiscount = product.discount != null && product.discount > 0;
  const oldPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : null;

  const { data: favorites = [] } = useGetFavorites();
  const isFavorite = favorites.some(fav => fav.idProduct === product.idProduct);
  const { mutate: addToFavorites } = useAddToFavorites();
  const { mutate: removeFromFavorite } = useRemoveFavorites();

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorite(product.idProduct);
    } else {
      addToFavorites(product.idProduct);
    }

  console.log(product);
  const { mutate: addToBasket } = useAddBasketItem();

  const handleAddToCart = (idProduct: number) => {
    addToBasket(idProduct);
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
        {hasDiscount && (
          <span className={styles['product-card__discount']}>
            -{product.discount}%
          </span>
        )}
        <Tooltip title="Добавить в сравнение">
          <button className={styles['product-card__scale']}>
            <Scale size={20} />
          </button>
        </Tooltip>
        <Tooltip title={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}>
          <button
            className={styles['product-card__favorite']}
            onClick={handleToggleFavorite}
          
          >
            <Heart 
              size={20} 
              color={isFavorite ? '#ff4d4f' : '#000'} 
              fill={isFavorite ? '#ff4d4f' : 'none'}
            />
          </button>
        </Tooltip>
      </div>

      <div className={styles['product-card__content']}>
        <div className={styles['product-card__rating']}>
          <Star size={14} color={'#ffa726'} fill={'#ffa726'} />
          <span className={styles['product-card__rating-value']}>
            {product.rating}
          </span>

          <span className={styles['product-card__rating-count']}>
            ({product.numberOfReviews})
          </span>
        </div>

        <h3 className={styles['product-card__title']}>{product.nameProduct}</h3>

        <div className={styles['product-card__price']}>
          <span className={styles['product-card__price-current']}>
            {product.price} р.
          </span>
          {oldPrice && (
            <span className={styles['product-card__price-old']}>
              {oldPrice} р.
            </span>
          )}
        </div>

        <button
          className={product.inCart ? 'in-cart-btn' : 'cart-btn'}
          onClick={() => handleAddToCart(product.idProduct)}
        >
          <ShoppingCart size={16} /> {product.inCart ? 'В корзине' : 'В'}
        </button>
      </div>
    </div>
  );
};
