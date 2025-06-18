import styles from './styles.module.scss';
import Logo from '/src/assets/icons/main-logo.png';
import { Avatar } from 'antd';
import Catalog from '@/assets/icons/catalog.svg';
import Favorite from '@/assets/icons/heart.svg';
import Basket from '@/assets/icons/basket.svg';
import { PATHS } from '@/constants/path.config';
import { Link, useLocation } from 'react-router-dom';
import Button from '@/components/ui/Button';
import { useEffect, useRef, useState } from 'react';
import ProductCatalog from '@components/widgets/ProductCatalog';
import { Heart, LogOut, ShoppingCart, User, List, Eye } from 'lucide-react';
import useClickOutside from '@hooks/useClickOutside';
import AuthModal from '@components/widgets/AuthModal';
import { useAuthModal } from '@components/widgets/AuthModal/useAuthModal.ts';
import { useAppSelector } from '@/hooks/reduxHooks';
import { useAuth } from '@hooks/useAuth.ts';
import { Search } from '@components/widgets/Header/UserControls/Search';

export const UserControls = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const location = useLocation();

  const catalogButtonRef = useRef<HTMLButtonElement>(null);
  const accountButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const authModal = useAuthModal();
  const { user } = useAppSelector((state) => state.auth);
  const { logoutMutation } = useAuth();

  const handleCatalogToggle = () => {
    setIsCatalogOpen((prev) => !prev);
  };

  const handleAccountToggle = () => {
    setIsAccountOpen((prev) => !prev);
  };

  const closeAccountDropdown = () => {
    setIsAccountOpen(false);
  };

  const handleLogout = () => {
    logoutMutation.mutate();
    closeAccountDropdown();
  };

  useClickOutside(isAccountOpen, dropdownRef, closeAccountDropdown, [
    accountButtonRef,
  ]);

  useEffect(() => {
    setIsAccountOpen(false);
    setIsCatalogOpen(false);
  }, [location]);

  return (
    <>
      <div className={styles['header-info__container']}>
        <Link to={'/'} className={styles['logo-container']}>
          <img src={Logo} alt="Логотип" className={styles['main-logo']} />
        </Link>

        <button
          ref={catalogButtonRef}
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
          <Search />
        </div>
        <Link to={PATHS.FAVORITES}>
          <Button icon={<Favorite />} variant="bordered" color="third">
            Избранное
          </Button>
        </Link>

        <div
          className={styles['account-container']}
          style={{ position: 'relative' }}
        >
          <button
            ref={accountButtonRef}
            type="button"
            className={`${styles.button_variant_bordered} ${
              isAccountOpen
                ? styles.button_color_gray
                : styles.button_color_third
            }`}
            onClick={handleAccountToggle}
          >
            <span className={styles.icon}>
              <User />
            </span>
            Аккаунт
          </button>

          {isAccountOpen && (
            <div ref={dropdownRef} className={styles['account-dropdown']}>
              <div className={styles['account-dropdown__header']}>
                <Avatar
                  size={'large'}
                  icon={<User size={30} color={'#000000'} />}
                />
              </div>
              <div className={styles['account-dropdown__content']}>
                {!user ? (
                  <div className={styles['account-dropdown__login-container']}>
                    <button
                      className={styles['login-container__button']}
                      onClick={authModal.openLogin}
                    >
                      Войти
                    </button>
                  </div>
                ) : (
                  <>
                    <div
                      className={styles['account-dropdown__item']}
                      onClick={handleLogout}
                    >
                      <LogOut color={'#ff1f11'} size={20} />
                      <span
                        className={styles['account-dropdown__text']}
                        style={{ color: '#ff1f11' }}
                      >
                        Выйти
                      </span>
                    </div>
                    <Link
                      to={PATHS.PROFILE}
                      className={styles['account-dropdown__link']}
                    >
                      <div className={styles['account-dropdown__item']}>
                        <User size={20} />
                        <span className={styles['account-dropdown__text']}>
                          Личный кабинет
                        </span>
                      </div>
                    </Link>
                    <Link
                      to={PATHS.VIEW_HISTORY}
                      className={styles['account-dropdown__link']}
                    >
                      <div className={styles['account-dropdown__item']}>
                        <Eye size={20} />
                        <span className={styles['account-dropdown__text']}>
                      Просмотренные
                    </span>
                      </div>
                    </Link>
                  </>
                )}
                <Link
                  to={PATHS.FAVORITES}
                  className={styles['account-dropdown__link']}
                >
                  <div className={styles['account-dropdown__item']}>
                    <Heart size={20} />
                    <span className={styles['account-dropdown__text']}>
                      Избранное
                    </span>
                  </div>
                </Link>

                <Link
                  to={PATHS.BASKET}
                  className={styles['account-dropdown__link']}
                >
                  <div className={styles['account-dropdown__item']}>
                    <ShoppingCart size={20} />
                    <span className={styles['account-dropdown__text']}>
                      Корзина
                    </span>
                  </div>
                </Link>
                <Link
                  to={PATHS.COMPARE}
                  className={styles['account-dropdown__link']}
                >
                  <div className={styles['account-dropdown__item']}>
                    <List size={20} />
                    <span className={styles['account-dropdown__text']}>
                      Список сравнения
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link to={PATHS.BASKET}>
          <Button icon={<Basket />} variant="bordered" color="third">
            Корзина
          </Button>
        </Link>
      </div>
      <ProductCatalog
        isOpen={isCatalogOpen}
        onToggle={handleCatalogToggle}
        toggleButtonRef={catalogButtonRef}
      />
      <AuthModal
        isVisible={authModal.isVisible}
        isLogin={authModal.isLogin}
        onClose={authModal.closeAuth}
        onToggleMode={authModal.toggleMode}
      />
    </>
  );
};
