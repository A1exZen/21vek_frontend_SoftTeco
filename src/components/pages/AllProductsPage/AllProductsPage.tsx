import styles from './styles.module.scss';
import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Funnel } from 'lucide-react';
import { FilterCard } from '@pages/AllProductsPage/FilterCard';

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



export const AllProductsPage = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);


  //! Remove it
  const products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Xiaomi Redmi A3 4GB/128GB (черный)',
      price: 299,
      oldPrice: 349,
      rating: 4.8,
      reviewsCount: 222,
      image:
        'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      discount: 14,
      brand: 'Xiaomi',
    },
    {
      id: 2,
      name: 'Смартфон Honor X5b 4GB/64GB (Midnight Black)',
      price: 249,
      oldPrice: 349,
      rating: 4.9,
      reviewsCount: 129,
      image:
        'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      discount: 28,
      brand: 'Honor',
    },
    {
      id: 3,
      name: 'Смартфон Xiaomi Redmi 13 8GB/256GB (черный, с NFC)',
      price: 599,
      oldPrice: 699,
      rating: 4.8,
      reviewsCount: 139,
      image:
        'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      discount: 14,
      brand: 'Xiaomi',
    },
    {
      id: 4,
      name: 'Смартфон Honor X5b 4GB/64GB (Ocean Blue)',
      price: 249,
      oldPrice: 349,
      rating: 4.9,
      reviewsCount: 129,
      image:
        'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      discount: 28,
      brand: 'Honor',
    },
    {
      id: 5,
      name: 'Смартфон Xiaomi Redmi A3 4GB/128GB (зеленый)',
      price: 299,
      oldPrice: 349,
      rating: 4.8,
      reviewsCount: 222,
      image:
        'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      discount: 14,
      brand: 'Xiaomi',
    },
    {
      id: 6,
      name: 'Смартфон Honor X9c 8GB/256GB (фиолетовый)',
      price: 459,
      oldPrice: 549,
      rating: 5.0,
      reviewsCount: 194,
      image:
        'https://cdn21vek.by/imgproxy/preview_b/plain/img/galleries/7116/374/iphone13128gbmlpg3_apple_637f118109394.jpeg',
      discount: 17,
      brand: 'Honor',
    },
  ];


  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  const closeFilters = () => {
    setIsFiltersOpen(false);
  };

  return (
    <div className={styles['products']}>
      <button
        className={styles['products__filter-toggle']}
        onClick={toggleFilters}
        aria-label="Открыть фильтры"
      >
        <Funnel />
        Фильтры
      </button>

      <div className={styles['products__main-container']}>
        <main className={styles['products__list']}>
          <div className={styles['products__grid']}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>

        {isFiltersOpen && (
          <div
            className={styles['products__filters-overlay']}
            onClick={closeFilters}
          />
        )}
        <FilterCard isOpen={isFiltersOpen} onClose={closeFilters} />
      </div>
    </div>
  );
};
