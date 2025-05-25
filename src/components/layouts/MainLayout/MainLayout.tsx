import { Outlet } from 'react-router-dom';
import Header from '@/components/widgets/Header';
import { useAuthCheck } from '@/hooks/useAuthCheck';

import styles from './styles.module.scss';

const MainLayout = () => {
  useAuthCheck();
  return (
    <>
      <Header />
      <main className={styles['main-layout']}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
