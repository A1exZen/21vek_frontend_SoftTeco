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

  const phoneItems = [
    { title: '+375 25 502 10 21', href: 'tel:+375255021021' },
    { title: '+375 17 302 10 21', href: 'tel:+375173021021' },
    { title: 'Telegram', href: 'https://t.me/your_telegram' },
    { title: 'Почта', href: 'mailto:info@example.com' },
    { title: 'Заказать звонок', onClick: () => console.log('Заказать звонок') },
    { title: 'Написать нам', href: '/contacts' }
  ];

  return (
    <div className={styles["header-info-container"]}>
      <div className={styles["locality-block"]}>
          <div className={styles["locality-text"]}>
            Минск
          </div>
      </div>

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

      <div className={styles["contacts-block"]}>
        <div className={styles["contacts-content"]}>
          <span className={styles["telegram-link"]}>
            <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </span>
          <span className={styles["main-phone"]}>
            <a href="tel:+375293021021">+375 29 302 10 21</a>
          </span>
          <div className={styles["more-contacts"]}>
            <DropdownMenu 
              title="Еще" 
              items={phoneItems}
              icon={<span className={styles["more-icon"]}>▼</span>}
            />
          </div>
        </div>
      </div>

      <div className={styles["working-time-block"]}>
          <div className={styles["working-time-text"]}>
            контакт-центр <br/> с 8.00 до 22.00
          </div>
      </div>
    </div>
  );
};

export default HeaderInfo;