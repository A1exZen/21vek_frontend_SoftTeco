import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import styles from './styles.module.scss';

type Product = {
  id: number;
  img: string;
  price: string;
  monthlyPayment: string;
  rating: string;
  title: string;
  color?: string;
  delivery: string[];
  discount: string;
  oldPrice: string;
};

interface RecommendedProductsProps {
  productBrand: string;
}

export const RecommendedProducts = ({productBrand}: RecommendedProductsProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  console.log(productBrand);
  const products: Product[] = [
    {
      id: 1,
      img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      price: '1 899,00',
      monthlyPayment: '57.69 р./месяц',
      rating: "4.3",
      title: 'Смартфон восстановленный Apple iPhone 13 ZS6GB Flip Грейд B (Miknight)',
      delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
      discount: '14.5',
      oldPrice: '1200,21',
    },
    {
      id: 2,
      img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      price: '1 899,00',
      monthlyPayment: '57.69 р./месяц',
      rating: "4.3",
      title: 'Смартфон восстановленный Apple iPhone 13 ZS6GB Flip Грейд B (синий)',
      delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
      discount: '14.5',
      oldPrice: '1200,21',
    },
    {
      id: 3,
      img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      price: '2 699,00',
      monthlyPayment: '61.99 р./месяц',
      rating: "4.3",
      title: 'Смартфон Apple iPhone 15 ZS6GB (черный)',
      delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
      discount: '14.5',
      oldPrice: '1200,21',
    },
    {
      id: 4,
      img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      price: '2 299,00',
      monthlyPayment: '60.84 р./месяц',
      rating: "4.3",
      title: 'Смартфон восстановленный Apple iPhone 14 ZS6GB Flip Грейд B (фиолетовый)',
      delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
      discount: '14.5',
      oldPrice: '1200,21',
    },
    {
      id: 5,
      img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      price: '2 299,00',
      monthlyPayment: '60.84 р./месяц',
      rating: "4.3",
      title: 'Смартфон восстановленный Apple iPhone 14 ZS6GB Flip Грейд B (розовый)',
      delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
      discount: '14.5',
      oldPrice: '1200,21',
    },
    {
      id: 6,
      img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      price: '2 299,00',
      monthlyPayment: '60.84 р./месяц',
      rating: "4.3",
      title: 'Смартфон восстановленный Apple iPhone 14 ZS6GB Flip Грейд B (белый)',
      delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
      discount: '14.5',
      oldPrice: '1200,21',
    },
    {
      id: 7,
      img: 'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      price: '2 299,00',
      monthlyPayment: '60.84 р./месяц',
      rating: "4.3",
      title: 'Смартфон восстановленный Apple iPhone 14 ZS6GB Flip Грейд B (золотой)',
      delivery: ['Кульсром – Завтра', 'Самоканал – Завтра'],
      discount: '14.5',
      oldPrice: '1200,21',
    },
  ];

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
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <article className={styles['product']}>
                <div className={styles['product__content']}>
                  <Link to="/" className={styles['product__img-link']}>
                    <img
                      alt={`Изображение товара: ${product.title}`}
                      src={product.img}
                      className={styles['product__img']}
                      loading="lazy"
                    />
                  </Link>

                  <div className={styles['product__price-section']}>
                    <div className={styles['product__price-wrapper']}>
                      <span className={styles['product__price']}>
                        {product.price} p.
                      </span>
                      <span className={styles['product__discount']}>
                        {product.discount}%
                      </span>
                    </div>
                    <div className={styles['product__old-price']}>
                      {product.oldPrice} p.
                    </div>
                  </div>

                  <div className={styles['product__title']}>{product.title}</div>

                  <div className={styles['product__rating']}>
                    <Star color="#f3c623" fill="#f3c623" size={16} />
                    <span>4.8</span>
                  </div>
                </div>

                <button className={styles['product__button']}>В корзину</button>

                <button
                  className={styles['product__badge']}
                >
                  <Heart size={20} color={'#cbcbcb'} />
                </button>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles['swiper-pagination']}></div>
      </div>
    </section>
  );
};