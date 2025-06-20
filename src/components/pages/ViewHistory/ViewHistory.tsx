import styles from './styles.module.scss';
import { Divider } from 'antd';
import Sad from '@icons/sad.svg';
import { useGetViewHistory } from '@hooks/useViewHistory.ts';
import { ProductCard } from '@pages/ViewHistory/ProductCard';

export const ViewHistory = () => {
  const { data: viewedProducts, isLoading, error } = useGetViewHistory();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const products = Array.isArray(viewedProducts) ? viewedProducts : [];

  return (
    <div className={styles['history-container']}>
      <h2 className={styles['history-title']}>Просмотренные товары</h2>
      <Divider type="horizontal" />
      {products && products?.length > 0 ? (
        <ul className={styles['products-grid']}>
          {products?.map((product) => (
            <ProductCard key={product.idProduct} product={product} />
          ))}
        </ul>
      ) : (
        <div className={styles['no-data']}>
          Нет данных!
          <Sad />
        </div>
      )}
    </div>
  );
};
