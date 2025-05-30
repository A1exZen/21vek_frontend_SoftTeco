import styles from './styles.module.scss';
import Logo from '/src/assets/icons/main-logo.png';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Catalog from '@/assets/icons/catalog.svg';
import Favorite from '@/assets/icons/heart.svg';
import Account from '@/assets/icons/user.svg';
import Basket from '@/assets/icons/basket.svg';
import { PATHS } from '@/constants/path.config';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { useRef, useState } from 'react';
import ProductCatalog from '@components/widgets/ProductCatalog';

const UserControls = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCatalogToggle = () => {
    setIsCatalogOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles['header-info-container']}>
        <div className={styles['logo-container']}>
          <img src={Logo} alt="Логотип" className={styles['main-logo']} />
        </div>

        <button
          ref={buttonRef}
          type="button"
          className={`${styles.button_variant_bordered} ${
            isCatalogOpen ? styles.button_color_gray : styles.button_color_third
          }`}
          onClick={handleCatalogToggle}
        >
          <span className={styles.icon}>
            <Catalog />
          </span>
          Каталог товаров
        </button>

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

        <Link to={PATHS.BASKET}>
          <Button icon={<Basket />} variant="bordered" color="third">
            Корзина
          </Button>
        </Link>
      </div>
      <ProductCatalog
        isOpen={isCatalogOpen}
        onToggle={setIsCatalogOpen}
        toggleButtonRef={buttonRef}
      />
    </>
  );
};

export default UserControls;
