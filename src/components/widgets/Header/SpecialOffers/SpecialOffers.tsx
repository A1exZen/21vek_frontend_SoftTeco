import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { Divider, Spin, Alert, Empty } from 'antd';
import Label from '@/assets/icons/label.svg';
import { PATHS } from '@/constants/path.config';
import { useGetHeaderCategories } from '@hooks/useCategories.ts';
import { HeaderCategory } from '@models/category/api.ts';

interface OfferItemProps {
  category: HeaderCategory;
}

export const SpecialOffers = () => {
  const { data, isLoading, isError } = useGetHeaderCategories();
  const MainLink = () => (
    <div className={styles['main-link']}>
      <Label />
      <Link to={PATHS.PRODUCTS}>Все товары</Link>
      <Divider type="vertical" />
    </div>
  );

  const OfferItem = ({ category }: OfferItemProps) => (
    <li className={styles['offer-item']}>
      <Link to={`/${category.url}`}>
        {category.nameCategories}
      </Link>
    </li>
  );

  if (isLoading) {
    return (
      <div className={styles['background']}>
        <Spin size="large" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles['background']}>
        <Alert message="Ошибка загрузки акций" type="error" showIcon />
      </div>
    );
  }

  const categories = data?.categories.slice(0,5) || [];
  if (categories.length === 0) {
    return (
      <div className={styles['background']}>
        <div className={styles.container}>
          <MainLink />
          <Empty
            description="Нет доступных акций"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles['background']}>
      <div className={styles.container}>
        <MainLink />

        <ul className={styles['offers-list']}>
          {categories.map((category) => (
            <OfferItem
              key={category.idCategories}
              category={category}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
