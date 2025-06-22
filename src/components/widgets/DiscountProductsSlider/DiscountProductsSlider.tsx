import Banner from '@/assets/images/discount_banner.jpg';
import { useFilterProducts } from '@/hooks/useProducts';
import { ShoppingCart } from 'lucide-react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { Spin } from 'antd';
import { useAddBasketItem } from '@hooks/useBasket.ts';

export const DiscountProductsSlider = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFilterProducts({ popular: false, size: 6, page: 0 });

  const { mutate: addToBasket } = useAddBasketItem();

  const handleAddToCart = (idProduct: number) => {
    addToBasket(idProduct);
  };

  if (error) {
    console.log('error', error);
  }

  if (isLoading) {
    return <Spin />;
  }

  return (
    <section className={styles['discount']}>
      <div className={styles['discount__banner']}>
        <img src={Banner} alt="banner" />
      </div>
      <div className={styles['discount__container']}>
        <div className={styles['discount__header']}>
          <h2 className={styles['discount__title']}>Акции</h2>
        </div>
        <div className={styles['products-grid']}>
          {products?.data?.map((product) => (
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
                  <h3 className={styles['product-card__title']}>
                    {product.nameProduct}
                  </h3>

                  <div className={styles['product-card__price']}>
                    <span className={styles['product-card__price-current']}>
                      {product.price} р.
                    </span>
                    {product.discount && product.discount > 0 ? (
                      <span className={styles['product-card__price-old']}>
                        {Math.round(
                          product.price / (1 - product.discount / 100),
                        )}{' '}
                        p.
                      </span>
                    ) : null}
                  </div>

                  <button
                    className={styles['product-card__buy-btn']}
                    onClick={() => handleAddToCart(product.idProduct)}
                  >
                    <ShoppingCart size={16} color={'#fff'} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
