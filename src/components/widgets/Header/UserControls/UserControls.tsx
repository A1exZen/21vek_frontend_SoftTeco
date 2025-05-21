import UserControlsButton from '@/components/ui/UserControlsButton';
import styles from './styles.module.scss';
import Logo from '/src/assets/icons/main-logo.png';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Catalog from '@/assets/icons/catalog.svg';
import Favorite from '@/assets/icons/heart.svg';
import Account from '@/assets/icons/user.svg';
import Basket from '@/assets/icons/basket.svg';

const UserControls = () => {
  return (
    <div className={styles['header-info-container']}>
      <div className={styles['logo-container']}>
        <img src={Logo} alt="Логотип" className={styles['main-logo']} />
      </div>

      <UserControlsButton
        icon={<Catalog />}
        text="Каталог товаров"
        to="/favorites"
      />

      <div className={styles['search-container']}>
        <Input
          size="large"
          placeholder="Поиск товаров..."
          prefix={<SearchOutlined />}
          className={styles.searchInput}
        />
      </div>

      <UserControlsButton
        icon={<Favorite />}
        text="Избранное"
        to="/favorites"
      />
      <UserControlsButton icon={<Account />} text="Аккаунт" to="/favorites" />
      <UserControlsButton icon={<Basket />} text="Корзина" to="/basket" />
    </div>
  );
};

export default UserControls;
