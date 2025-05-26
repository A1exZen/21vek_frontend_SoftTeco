import UserControlsButton from '@/components/ui/UserControlsButton';
import styles from './styles.module.scss';
import Logo from '/src/assets/icons/main-logo.png';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// import Catalog from '@/assets/icons/catalog.svg';
import Favorite from '@/assets/icons/heart.svg';
import Account from '@/assets/icons/user.svg';
import Basket from '@/assets/icons/basket.svg';
import { useEffect, useRef, useState } from 'react';
import ProductCatalog from '@components/widgets/ProductCatalog';
import {CircleX, LayoutGrid } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const UserControls = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/category/')) {
      setIsCatalogOpen(false);
    }
  }, [location]);
  return (
    <>
      <div className={styles['header-info-container']}>
        <div className={styles['logo-container']}>
          <img src={Logo} alt="Логотип" className={styles['main-logo']} />
        </div>

        <button
          ref={buttonRef}
          className={`${styles['user-controls-button']} ${isCatalogOpen ? styles['catalog-btn-open'] : ''}`}
          onClick={() => setIsCatalogOpen(!isCatalogOpen)}
        >
          <span className={styles['user-controls-button__icon']}>
            {isCatalogOpen ? (
              <CircleX size={20} fill={'#c5c5c5'} color={'#737373'} />
            ) : (
              <LayoutGrid size={20} color={'#e52e6b'} />
            )}
          </span>
          <span className={styles['user-controls-button__text']}>Каталог товаров</span>
        </button>

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
        <UserControlsButton icon={<Basket />} text="Корзина" to="/favorites" />
      </div>
      <ProductCatalog isOpen={isCatalogOpen} onToggle={setIsCatalogOpen} toggleButtonRef={buttonRef} />
    </>
  );
};

export default UserControls;