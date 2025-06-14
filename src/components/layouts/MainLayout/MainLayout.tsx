import { Outlet } from 'react-router-dom';
import Header from '@/components/widgets/Header';
import Footer from '@/components/widgets/Footer';
// import { useAuthCheck } from '@/hooks/useAuthCheck';

import styles from './styles.module.scss';

const MainLayout = () => {
  // useAuthCheck();

  return (
    <div className={styles['main-layout']}>
      <Header />
      <main className={styles['main-layout__main']}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
