import UserControlsButton from "@/components/ui/UserControlsButton";
import styles from "./styles.module.scss";
import Logo from "/src/assets/icons/main-logo.png";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const UserControls = () => {
  return (
    <div className={styles['header-info-container']}>

      <div className={styles['logo-container']}>
        <img src={Logo} alt="Логотип" className={styles["main-logo"]} />
      </div>

      <UserControlsButton 
        icon={"nm"} 
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
        icon={"nm"} 
        text="Избранное" 
        to="/favorites" 
      />
      <UserControlsButton 
        icon={"nm"} 
        text="Аккаунт" 
        to="/favorites" 
      />
      <UserControlsButton 
        icon={"nm"} 
        text="Корзина" 
        to="/favorites" 
      />
    </div>
  );
};

export default UserControls;