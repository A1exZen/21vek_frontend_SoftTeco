import styles from './styles.module.scss';
import { Check, Heart, Scale, ShoppingCart, Star } from 'lucide-react';
import { Tooltip } from 'antd';
import { ViewedProduct } from '@models/product/api.ts';
import { Link } from 'react-router-dom';
import Button from '@components/ui/Button';

export const ProductCard = ({ product }: { product: ViewedProduct }) => {
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
        </div>

        <h3 className={styles['product-card__title']}>{product.nameProduct}</h3>

        <div className={styles['product-card__price']}>
          <span className={styles['product-card__price-current']}>
            {product.price} р.
          </span>
        </div>

        {product.inCart ? (
          <Button
            variant="solid"
            color="first"
            className={styles['product-card__buy-btn-inCart']}
            onClick={() => {}}
          >
            <Check size={16} className={styles.icon} />В корзине
          </Button>
        ) : (
          <Button
            variant="solid"
            color="first"
            className={styles['product-card__buy-btn']}
            onClick={() => {}}
          >
            <ShoppingCart size={16} className={styles.icon} />В
            корзину
          </Button>
        )}
      </div>
    </div>
  );
};
