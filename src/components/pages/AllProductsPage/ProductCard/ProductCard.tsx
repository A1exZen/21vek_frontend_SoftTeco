import React from 'react';
import styles from './styles.module.scss';
import { Heart, Scale, ShoppingCart, Star } from 'lucide-react';
import { Tooltip } from 'antd';
import { Product } from '@models/product/api.ts';
import { Link } from 'react-router-dom';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const hasDiscount = product.discount != null && product.discount > 0;
  const oldPrice = product.discount
    ? Math.round(product.price / (1 - product.discount / 100))
    : null;

  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__image-container']}>
        <Link to={`/product/${product.idProduct}`} >
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

        <button className={styles['product-card__buy-btn']}>
          <ShoppingCart size={16} />В корзину
        </button>
      </div>
    </div>
  );
};
