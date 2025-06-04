import styles from './styles.module.scss';
import Logo from '/src/assets/icons/main-logo.png';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Catalog from '@/assets/icons/catalog.svg';
import Scales from '@/assets/icons/scales.svg';
import Favorite from '@/assets/icons/heart.svg';
import Account from '@/assets/icons/user.svg';
import Basket from '@/assets/icons/basket.svg';
import { PATHS } from '@/constants/path.config';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const UserControls = () => {
  return (
    <div className={styles['header-info-container']}>
      <div className={styles['logo-container']}>
        <img src={Logo} alt="Логотип" className={styles['main-logo']} />
      </div>

      <Button icon={<Catalog />} variant="bordered" color="third">
        Каталог товаров
      </Button>

      <div className={styles['search-container']}>
        <Input
          size="large"
          placeholder="Поиск товаров..."
          prefix={<SearchOutlined />}
          className={styles.searchInput}
        />
      </div>

      <Link to={PATHS.FAVORITES}>
        <Button icon={<Favorite />} variant="bordered" color="third">
          Избранное
        </Button>
      </Link>

      <Button icon={<Account />} variant="bordered" color="third">
        Аккаунт
      </Button>

      <Link to={PATHS.PRODUCT_COMPARISON}>
        <Button icon={<Scales />} variant="bordered" color="third" />
      </Link>

      <Link to={PATHS.BASKET}>
        <Button icon={<Basket />} variant="bordered" color="third">
          Корзина
        </Button>
      </Link>
    </div>
  );
};

export default UserControls;
