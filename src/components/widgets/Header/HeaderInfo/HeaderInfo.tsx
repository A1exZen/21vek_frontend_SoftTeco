import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import DropdownMenu from '@/components/dummies/DropdownMenu';
import { Divider } from 'antd';
import { useState, useEffect } from 'react';
import Location from '@/assets/icons/location.svg';
import Toolbox from '@/assets/icons/toolbox.svg';
import Partpay from '@/assets/icons/part-pay.svg';
import Telegram from '@/assets/icons/telegram.svg';
import Telegram1 from '@/assets/icons/telegram1.svg';
import A1 from '@/assets/icons/A1.svg';
import Life from '@/assets/icons/life.svg';
import Phone from '@/assets/icons/phone.svg';
import Mail from '@/assets/icons/mail.svg';
import PhoneCall from '@/assets/icons/phone-call.svg';
import Message from '@/assets/icons/message.svg';

const HeaderInfo = () => {
  const [city, setCity] = useState<string>('Минск');

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.city) {
          setCity(data.city);
        }
      } catch (error) {
        console.error("Не удалось определить город:", error);
      }
    };

    fetchCity();
  }, []);

  const customerItems = [
    { title: 'Доставка и оплата', path: '/delivery' },
    { title: 'Возврат товара', path: '/returns' },
    { title: 'Помощь покупателю', path: '/help' },
    { title: 'Контакты', path: '/contacts' }
  ];

  const phoneItems = [
    { title: '+375 25 502 10 21', href: 'tel:+375255021021', icon: <Life/>},
    { title: '+375 17 302 10 21', href: 'tel:+375173021021',  icon: <Phone/> },
    { title: 'Telegram', href: 'https://t.me/your_telegram', icon: <Telegram1/> },
    { title: 'Почта', href: 'mailto:info@example.com', icon: <Mail/> },
    { title: 'Заказать звонок', onClick: () => console.log('Заказать звонок'), icon: <PhoneCall/> },
    { title: 'Написать нам', href: '/contacts', icon: <Message/> }
  ];

  return (
    <div className={styles["header-info-container"]}>
      <div className={styles["locality-block"]}>
        <Location/>
          <div className={styles["locality-text"]}>
          {city}
          </div>
      </div>

      <div className={styles["header-nav-container"]}>
        <nav className={styles["nav"]}>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-item"]}>
              <Toolbox/>
              <Link to="/installment" className={styles["nav-link"]}>
                Для бизнеса
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Partpay/>
              <Link to="/installment" className={styles["nav-link"]}>
                Оплата частями
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <DropdownMenu 
                title="Покупателям" 
                items={customerItems}
              />
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles["contacts-block"]}>
        <div className={styles["contacts-content"]}>
          <div className={styles["link-container"]}>
          <Telegram/>
          <span className={styles["telegram-link"]}>
            <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </span>
          </div>
          <div className={styles["link-container"]}>
          <A1/>
          <span className={styles["main-phone"]}>
            <a href="tel:+375293021021">+375 29 302 10 21</a>
          </span>
          </div>
          <div className={styles["link-container"]}>
          <div className={styles["more-contacts"]}>
            <DropdownMenu 
              title="Еще" 
              items={phoneItems}
            />
          </div>
          </div>
        </div>
      </div>

      <div className={styles["working-time-block"]}>
      <Divider type='vertical'/>
          <div className={styles["working-time-text"]}>
            контакт-центр <br/> с 8.00 до 22.00
          </div>
      </div>
    </div>
  );
};

export default HeaderInfo;