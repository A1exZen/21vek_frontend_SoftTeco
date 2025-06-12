import Banner from '@/assets/images/discount_banner.jpg';
import { useFilterProducts } from '@/hooks/useProducts';
import { ShoppingCart } from 'lucide-react';
import styles from './styles.module.scss';

export const DiscountProductsSlider = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFilterProducts({ popular: false, size: 6, page: 0 });

  if (error) {
    console.log('error', error);
  }

  if (isLoading) {
    console.log('loading');
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
          {products ? (
            products.data.map((product) => (
              <div className={styles['product-card']}>
                <div className={styles['product-card__image-container']}>
                  <img
                    src={product.img}
                    alt={product.nameProduct}
                    className={styles['product-card__image']}
                  />
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

                  <button className={styles['product-card__buy-btn']}>
                    <ShoppingCart size={16} color={'#fff'} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Нет продуктов</p>
          )}
        </div>
      </div>
    </section>
  );
};
