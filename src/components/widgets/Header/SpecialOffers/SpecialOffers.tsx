import { Link } from 'react-router-dom';
import { useSpecialOffers } from './useSpecialOffers';
import styles from './styles.module.scss';
import { Divider, Spin, Alert } from 'antd';
import Label from '@/assets/icons/label.svg';
import { PATHS } from '@/constants/path.config';

const SpecialOffers = () => {
  const { offers, isLoading, error } = useSpecialOffers();

  const MainLink = () => (
    <div className={styles["main-link"]}>
      <Label/>
      <Link to={PATHS.PRODUCTS}>Все акции</Link>
      <Divider type='vertical'/>
    </div>
  );

  const OfferItem = ({ title, path }: { title: string; path: string }) => (
    <li className={styles["offer-item"]}>
      <Link to={path}>{title}</Link>
    </li>
  );

  if (isLoading) {
    return (
      <div className={styles["background"]}>
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles["background"]}>
        <Alert 
          message="Ошибка загрузки акций" 
          type="error" 
          showIcon 
        />
      </div>
    );
  }

  return (
    <div className={styles["background"]}>
      <div className={styles.container}>
        <MainLink />
        
        <ul className={styles["offers-list"]}>
          {offers.map(offer => (
            <OfferItem 
              key={offer.id} 
              title={offer.title} 
              path={offer.path} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpecialOffers;