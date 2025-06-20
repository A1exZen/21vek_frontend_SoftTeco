import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Heart, Star, ChevronLeft, ChevronRight, Scale } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './styles.module.scss';
import { useFilterProducts } from '@hooks/useProducts.ts';
import { Spin, Tooltip } from 'antd';
import { Product } from '@models/product/api.ts';
import Sad from '@assets/icons/sad.svg';
import { useAddToFavorites } from '@/hooks/useFavorites/useAddToFavorites';
import { useRemoveFavorites } from '@/hooks/useFavorites/useRemoveFavorites';
import { useGetFavorites } from '@/hooks/useFavorites/useGetFavorites';

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
                <ProductSlide product={product} />
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

const ProductSlide = ({ product }: { product: Product }) => {
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
  };

  const hasDiscount = product.discount !== undefined && product.discount > 0;
  const oldPrice = hasDiscount && product.discount !== undefined
    ? Math.round(product.price / (1 - product.discount / 100))
    : null;

  return (
    <div className={styles['product']}>
      <div className={styles['product__image-container']}>
        <Link to={`/product/${product.idProduct}`}>
          <img
            src={product.img}
            alt={product.nameProduct}
            className={styles['product__image']}
          />
        </Link>
        {hasDiscount && product.discount !== undefined && (
          <span className={styles['product__discount']}>
            -{product.discount}%
          </span>
        )}
        <Tooltip title="Добавить в сравнение">
          <button className={styles['product__scale']}>
            <Scale size={20} />
          </button>
        </Tooltip>
        <Tooltip title={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}>
          <button
            className={styles['product__favorite']}
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

      <div className={styles['product__content']}>
        <div className={styles['product__rating']}>
          <Star size={14} color={'#ffa726'} fill={'#ffa726'} />
          <span className={styles['product__rating-value']}>
            {product.rating}
          </span>
          <span className={styles['product__rating-count']}>
            ({product.numberOfReviews})
          </span>
        </div>

        <h3 className={styles['product__title']}>
          {product.nameProduct}
        </h3>

        <div className={styles['product__price']}>
          <span className={styles['product__price-current']}>
            {product.price} р.
          </span>
          {oldPrice && (
            <span className={styles['product__price-old']}>
              {oldPrice} р.
            </span>
          )}
        </div>

        <button className={styles['product__buy-btn']}>
          В корзину
        </button>
      </div>
    </div>
  );
};