import UserControlsButton from "@/components/ui/UserControlsButton";
import styles from "./styles.module.scss";
import Logo from "/src/assets/icons/main-logo.png";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Catalog from "@/assets/icons/catalog.svg";
import Favorite from "@/assets/icons/heart.svg";
import Account from "@/assets/icons/user.svg";
import Basket from "@/assets/icons/basket.svg";
import { PATHS } from "@/constants/path.config";

const UserControls = () => {
  return (
    <div className={styles['header-info-container']}>

      <div className={styles['logo-container']}>
        <img src={Logo} alt="Логотип" className={styles["main-logo"]} />
      </div>

      <UserControlsButton 
        icon={<Catalog/>} 
        text="Каталог товаров" 
        to={PATHS.PRODUCTS} 
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
        icon={<Favorite/>} 
        text="Избранное" 
        to={PATHS.FAVORITES}
      />
      <UserControlsButton 
        icon={<Account/>} 
        text="Аккаунт" 
        to={PATHS.ACCOUNT} 
      />
      <UserControlsButton 
        icon={<Basket/>} 
        text="Корзина" 
        to={PATHS.BASKET} 
      />
    </div>
  );
};

export default UserControls;