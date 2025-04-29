import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import DropdownMenu from '@/components/dummies/DropdownMenu';


const HeaderInfo = () => {
  const customerItems = [
    { title: 'Доставка и оплата', path: '/delivery' },
    { title: 'Возврат товара', path: '/returns' },
    { title: 'Помощь покупателю', path: '/help' },
    { title: 'Контакты', path: '/contacts' }
  ];

  return (
    <div className={styles["header-info-container"]}>

      <div className={styles["header-nav-container"]}>
        <nav className={styles["nav"]}>
          <ul className={styles["nav-list"]}>
            <li className={styles["navItem"]}>
              <DropdownMenu 
                title="Покупателям" 
                items={customerItems}
              />
            </li>
            <li className={styles["navItem"]}>
              <Link to="/installment" className={styles["nav-link"]}>
                Для бизнеса
              </Link>
            </li>
            <li className={styles["navItem"]}>
              <Link to="/installment" className={styles["nav-link"]}>
                Оплата частями
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default HeaderInfo;