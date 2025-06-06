import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import DropdownMenu from '@/components/dummies/DropdownMenu';
import { Divider } from 'antd';

import Location from '@/assets/icons/location.svg';
import Toolbox from '@/assets/icons/toolbox.svg';
import Partpay from '@/assets/icons/part-pay.svg';
import Telegram from '@/assets/icons/social-media/telegram.svg';
import A1 from '@/assets/icons/social-media/A1.svg';
import Life from '@/assets/icons/social-media/life.svg';
import Phone from '@/assets/icons/phone.svg';
import Mail from '@/assets/icons/mail.svg';
import PhoneCall from '@/assets/icons/phone-call.svg';
import Message from '@/assets/icons/message.svg';
import { useUserLocation } from '@components/widgets/Header/HeaderInfo/useUserLocation.ts';
import { HEADER_NAV } from '@components/widgets/Header/HeaderInfo/constants.ts';

const HeaderInfo = () => {
  const { data: cityData, isLoading, isError } = useUserLocation();
  const { customerItems, phoneItems } = HEADER_NAV;

  const phoneItemsWithIcons = [
    { ...phoneItems[0], icon: <Life /> },
    { ...phoneItems[1], icon: <Phone /> },
    { ...phoneItems[2], icon: <Telegram /> },
    { ...phoneItems[3], icon: <Mail /> },
    { ...phoneItems[4], icon: <PhoneCall /> },
    { ...phoneItems[5], icon: <Message /> },
  ];

  if (isLoading)
    return <div className={styles.loading}>Определяем город...</div>;
  if (isError)
    return <div className={styles.error}>Не удалось определить город</div>;

  return (
    <div
      className={cc(
        styles['header-info__container'],
        styles['header-info__text'],
      )}
    >
      <div className={styles['locality-block']}>
        <Location />
        <div className={styles['header-info__text']}>
          {isLoading ? (
            <span className={cc(styles.loading, styles['header-info__text'])}>
              Определяем...
            </span>
          ) : isError ? (
            <span className={cc(styles.error, styles['header-info__text'])}>
              Город не определён
            </span>
          ) : (
            cityData?.city || 'Unknown City'
          )}
        </div>
      </div>

      <div className={styles['header-nav__container']}>
        <nav className={styles['nav']}>
          <ul className={styles['nav-list']}>
            <li className={styles['nav-item']}>
              <Toolbox />
              <Link to="/installment" className={styles['nav-link']}>
                Для бизнеса
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <Partpay />
              <Link to="/installment" className={styles['nav-link']}>
                Оплата частями
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <DropdownMenu title="Покупателям" items={customerItems} />
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles['contacts-block']}>
        <div className={styles['contacts-content']}>
          <div className={styles['link-container']}>
            <Telegram />
            <span className={styles['telegram-link']}>
              <a
                href="https://t.me/lesha_zenchik"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </span>
          </div>
          <div className={styles['link-container']}>
            <A1 />
            <span className={styles['main-phone']}>
              <a href="tel:+375296330631">+375 29 633 0631</a>
            </span>
          </div>
          <div className={styles['link-container']}>
            <div className={styles['more-contacts']}>
              <DropdownMenu title="Еще" items={phoneItemsWithIcons} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles['working-time__block']}>
        <Divider type="vertical" />
        <div className={styles['working-time__text']}>
          контакт-центр <br /> с 8.00 до 22.00
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
