import { useFilterProducts } from '@/hooks/useProducts';
import { Spin, Tooltip } from 'antd';
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Scale,
  ShoppingCart,
  Star,
} from 'lucide-react';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';

export const PopularProductsSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const {
    data: products,
    isLoading: isLoading,
    error,
  } = useFilterProducts({ popular: true, size: 7, page: 0 });

  if (error) {
    console.log('error', error);
  }

  return (
    <section className={styles['popular']}>
      <div className={styles['popular__header']}>
        <h2 className={styles['popular__title']}>Популярные</h2>
        <div className={styles['popular__controls']}>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={styles['popular__arrow']}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={styles['popular__arrow']}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      {isLoading && <Spin />}
      <div className={styles['popular__carousel']}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: `.${styles['swiper-pagination']}`,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={styles['products-swiper']}
        >
          {products ? (
            products.data.map((product) => (
              <SwiperSlide key={product.idProduct}>
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
                      <ShoppingCart size={16} />В корзину
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div>Нет продуктов...(</div>
          )}
        </Swiper>
        <div className={styles['swiper-pagination']}></div>
      </div>
    </section>
  );
};
