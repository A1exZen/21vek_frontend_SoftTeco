import styles from './styles.module.scss';
import { Eye, Heart, List, LogOut, ShoppingCart, User } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import { PATHS } from '@/constants';
import { useAppSelector } from '@hooks/reduxHooks.ts';
import { useAuth } from '@hooks/useAuth.ts';

export const AccountLayout = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { logoutMutation } = useAuth();

  return (
    <div className={'container'}>
      <div className={styles['account-dropdown']}>
        <div className={styles['account-dropdown__content']}>
          {!user ? (
            <></>
          ) : (
            <>
              <div
                className={styles['account-dropdown__item']}
                onClick={() => logoutMutation}
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

          <Link to={PATHS.BASKET} className={styles['account-dropdown__link']}>
            <div className={styles['account-dropdown__item']}>
              <ShoppingCart size={20} />
              <span className={styles['account-dropdown__text']}>Корзина</span>
            </div>
          </Link>

          <Link to={PATHS.COMPARE} className={styles['account-dropdown__link']}>
            <div className={styles['account-dropdown__item']}>
              <List size={20} />
              <span className={styles['account-dropdown__text']}>
                Список сравнения
              </span>
            </div>
          </Link>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};
