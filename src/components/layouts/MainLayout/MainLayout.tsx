import { Outlet } from "react-router-dom";
import Header from "@/components/widgets/Header";

import styles from './styles.module.scss';

const MainLayout = () => {
  return (
    <>
      <Header/>
      <main className={styles["main-layout"]}>
        <Outlet />
      </main>
    </>
  )
};

export default MainLayout;
