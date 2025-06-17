import { useFilterProducts } from '@/hooks/useProducts';
import { Spin } from 'antd';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss';
import {
  ProductCardPopular
} from './ProductCardPopular';

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
          {products &&
            products.data.map((product) => (
              <SwiperSlide key={product.idProduct}>
                <ProductCardPopular product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className={styles['swiper-pagination']}></div>
      </div>
    </section>
  );
};
