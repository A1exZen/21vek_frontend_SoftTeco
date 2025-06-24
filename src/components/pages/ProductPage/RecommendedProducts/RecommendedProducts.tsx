import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import {ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './styles.module.scss';
import { useFilterProducts } from '@hooks/useProducts.ts';
import { Spin } from 'antd';
import { Product } from '@models/product/api.ts';
import Sad from '@assets/icons/sad.svg';
import { ProductCard } from '@pages/AllProductsPage/ProductCard';

interface RecommendedProductsProps {
  productBrand: string;
}

export const RecommendedProducts = ({
  productBrand,
}: RecommendedProductsProps) => {
  const { idProduct } = useParams<{ idProduct: string }>();
  const swiperRef = useRef<SwiperType | null>(null);
  const { data: prod, isLoading } = useFilterProducts({
    brand: productBrand,
    size: 7,
    page: 0,
  });

  const products = prod?.data.filter(
    (product: Product) => product.idProduct !== Number(idProduct),
  );

  if (isLoading) {
    return <Spin />;
  }

  return (
    <section className={styles['recommended']}>
      <div className={styles['recommended__header']}>
        <h2 className={styles['recommended__title']}>Рекомендуем</h2>
        <div className={styles['recommended__controls']}>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={styles['recommended__arrow']}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className={styles['recommended__arrow']}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className={styles['recommended__carousel']}>
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
              slidesPerView: 5,
              spaceBetween: 16,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className={styles['products-swiper']}
        >
          {products && products.length > 0 ? (
            products.map((product) => (
              <SwiperSlide key={product.idProduct}>
                {/*<ProductSlide product={product} />*/}
                <ProductCard product={product} />

              </SwiperSlide>
            ))
          ) : (
            <div className={styles['no-recommendations']}>
              Рекомендаций нет! <Sad />
            </div>
          )}
        </Swiper>
        <div className={styles['swiper-pagination']}></div>
      </div>
    </section>
  );
};

