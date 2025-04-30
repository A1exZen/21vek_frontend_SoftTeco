import { Link } from 'react-router-dom';
import { useSpecialOffers } from './useSpecialOffers';
import styles from './styles.module.scss';
import { Divider } from 'antd';
import Label from '@/assets/icons/label.svg';

const SpecialOffers = () => {
  const { offers } = useSpecialOffers();

  const MainLink = () => (
    <div className={styles["main-link"]}>
      <Label/>
      <Link to="/promo">Все акции</Link>
      <Divider type='vertical'/>
    </div>
  );

  const OfferItem = ({ title, path }: { title: string; path: string }) => (
    <li className={styles["offer-item"]}>
      <Link to={path}>{title}</Link>
    </li>
  );

  return (
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
  );
};

export default SpecialOffers;