import Banner from '@/assets/images/discount_banner.jpg';
import { useFilterProducts } from '@/hooks/useProducts';
import styles from './styles.module.scss';
import { Spin } from 'antd';
import {
  DiscountCard
} from './DiscountCard';

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
            <DiscountCard product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
