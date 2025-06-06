import React from 'react';
import styles from './styles.module.scss';
import { Heart, Scale, ShoppingCart, Star } from 'lucide-react';
import { Tooltip } from 'antd';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  discount?: number;
  brand: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__image-container']}>
        <img
          src={product.image}
          alt={product.name}
          className={styles['product-card__image']}
        />
        {product.discount && (
          <span className={styles['product-card__discount']}>
            -{product.discount}%
          </span>
        )}
        <Tooltip title="Добавить в сравнение">
          <button className={styles['product-card__scale']}>
            <Scale size={20} />
          </button>
        </Tooltip>
        <Tooltip title="Добавить в избранное">
        <button className={styles['product-card__favorite']}>
          <Heart size={20} />
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
            ({product.reviewsCount})
          </span>
        </div>

        <h3 className={styles['product-card__title']}>{product.name}</h3>

        <div className={styles['product-card__price']}>
          <span className={styles['product-card__price-current']}>
            {product.price}.00 р.
          </span>
          {product.oldPrice && (
            <span className={styles['product-card__price-old']}>
              {product.oldPrice}.00 р.
            </span>
          )}
        </div>

        <button className={styles['product-card__buy-btn']}>
          <ShoppingCart size={16} />В корзину
        </button>
      </div>
    </div>
  );
};
