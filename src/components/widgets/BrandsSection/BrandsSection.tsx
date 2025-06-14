import styles from './styles.module.scss';

import { useGetBrands } from '@hooks/useProducts.ts';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';

export const BrandsSection = () => {
  const { data: brands } = useGetBrands();
  const displayedBrands = useMemo(() => brands?.slice(0, 6) || [], [brands]);

  return (
    <section className={styles['brands-container']}>
      <Link to={`/products`} className={styles['brands__card-large']}>
        <div>Все товары</div>
      </Link>
      {displayedBrands.map((brand) => (
        <Link key={brand} to={`/products?brand=${encodeURIComponent(brand)}`} className={styles['brands__card']}>
          <div>{brand}</div>
        </Link>
      ))}

    </section>
  );
};
